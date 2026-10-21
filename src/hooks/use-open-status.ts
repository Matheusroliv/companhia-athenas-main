import { useEffect, useState } from "react";
import { fmtTime, openingHours, weekdays } from "@/data/site";

/** Hora atual em Brasília, independente do fuso do visitante. */
const nowInBrasilia = () => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
};

const rangeFor = (day: number) => openingHours.find((h) => h.days.includes(day));

export function getOpenStatus() {
  if (typeof window === "undefined") return { open: false, day: -1, label: "Seg a sex 05:00–22:00 · sáb 07:00–14:00" };
  const { day, minutes } = nowInBrasilia();
  const today = rangeFor(day);
  if (today?.open !== undefined && today.close !== undefined && minutes >= today.open && minutes < today.close) {
    return { open: true, day, label: `Aberto agora · fecha às ${fmtTime(today.close)}` };
  }
  for (let i = 0; i < 7; i++) {
    const d = (day + i) % 7;
    const r = rangeFor(d);
    if (r?.open === undefined) continue;
    if (i === 0 && minutes >= r.open) continue;
    const when = i === 0 ? "hoje" : i === 1 ? "amanhã" : weekdays[d].toLowerCase();
    return { open: false, day, label: `Fechado · abre ${when} às ${fmtTime(r.open)}` };
  }
  return { open: false, day, label: "Fechado" };
}

export function useOpenStatus() {
  const [status, setStatus] = useState(getOpenStatus);
  useEffect(() => {
    const id = window.setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);
  return status;
}

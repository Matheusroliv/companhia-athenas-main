import { Link, useLocation } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo";

const NotFound = () => {
  const { pathname } = useLocation();
  useSeo({ title: "Página não encontrada | Companhia Athenas", path: pathname, noindex: true });

  return (
    <main className="grid min-h-[100svh] place-items-center px-4 text-center">
      <div>
        <p className="font-display text-[10rem] leading-none text-primary">404</p>
        <h1 className="font-display text-4xl tracking-wide">Essa página saiu para treinar</h1>
        <Link to="/" className="btn-primary mt-8">
          Voltar ao início
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

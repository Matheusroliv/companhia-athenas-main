import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./styles/scroll-reveal.css";

// O HTML pré-renderizado serve para buscadores e primeira pintura; o React assume a página aqui.
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

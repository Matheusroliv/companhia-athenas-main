import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

/** Rotas sem o Router, para o mesmo componente servir ao navegador (BrowserRouter) e ao prerender (StaticRouter). */
const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/galeria" element={<Gallery />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;

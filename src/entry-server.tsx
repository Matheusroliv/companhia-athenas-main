import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export const routes = ["/", "/galeria"];

export const render = (url: string) =>
  renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );

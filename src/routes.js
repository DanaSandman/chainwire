import { EUR_USD } from "./pages/EUR_USD.jsx";
import { USD_GBP } from "./pages/USD_GBP.jsx";

export const routes = [
  {
    path: "/eur_usd",
    component: EUR_USD,
  },
  {
    path: "/usd_gbp",
    component: USD_GBP,
  }
];

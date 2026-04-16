import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ShopsPage } from "./pages/ShopsPage";
import { ShopDetailPage } from "./pages/ShopDetailPage";
import { CategoryPage } from "./pages/CategoryPage";
import { AboutPage } from "./pages/AboutPage";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "shops", Component: ShopsPage },
      { path: "shops/:id", Component: ShopDetailPage },
      { path: "category/:category", Component: CategoryPage },
      { path: "about", Component: AboutPage },
    ],
  },
]);

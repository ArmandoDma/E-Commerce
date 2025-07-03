import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./views/layout.tsx", [
        route("/","./views/home.tsx"),
        route("product/:id","./views/productdetail.tsx"),
        route("cart", "./views/CartPage.tsx"),
    ])
] satisfies RouteConfig;

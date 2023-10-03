import Login from "../components/Login";
import Home from "../components/Home";
import Category from "../components/Category";

export const routes = [
  {
    path: "/home",
    component: <Home />,
    title: "Trang chủ",
    isPrivate: true,
  },
  {
    path: "/login",
    component: <Login />,
    title: "Đăng nhập",
    isPrivate: false,
  },
  {
    path: "/category",
    component: <Category />,
    title: "Danh mục",
    isPrivate: true,
  },
];

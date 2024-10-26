import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Detail from "../components/detail/Detail";

const menu = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/:id",  // Уникальный путь для компонента Detail
    name: "Detail",
    component: Detail,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {menu.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;

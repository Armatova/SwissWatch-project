import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Components/Details/Details";
import EditProduct from "./Components/EditProduct/EditProduct";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ProductsList from "./Components/ProductsList/ProductsList";
import AdminPages from "./Pages/AdminPages";
import Error404 from "./Pages/Error404";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductsList />,
      id: 2,
    },
    {
      link: "/products/:id",
      element: <Details />,
      id: 3,
    },
  ];

  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPages />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
        {ADMIN_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;

import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Routing from "./Routing";
import ProductsContextProvider from "./Contexts/productsContext";

import "./App.css";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routing />
    </ProductsContextProvider>
  );
};

export default App;

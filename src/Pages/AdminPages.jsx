import { Col } from "antd";
import React from "react";
import AddProduct from "../Components/AddProduct/AddProduct";
import AdminProducts from "../Components/AdminProducts/AdminProducts";

const AdminPages = () => {
  return (
    <div>
      <Col span={12}>
        <AddProduct />
        <AdminProducts />
      </Col>
    </div>
  );
};

export default AdminPages;

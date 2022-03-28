import React, { useContext, useEffect } from "react";
import { Button, Form, Select, Input, InputNumber } from "antd";
import { brands } from "../../Helpers/brands";
import { useParams } from "react-router-dom";
import { productsContext } from "../../Contexts/productsContext";

const EditProduct = () => {
  const params = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  console.log(oneProduct);
  return (
    <div className="container">
      <h2>EditProduct</h2>
      <Form
        layout="vertical"
        name="basic"
        //   onFinish={(values) => save(values)}
      >
        <Form.Item
          label="Brand"
          name="brand"
          rules={[
            {
              required: true,
              message: "Plaese input brand!",
            },
          ]}
        >
          <Select>
            {brands.map((item) => (
              <Select.Option key={item.id} value={item.brand}>
                {item.brand}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Model"
          name="model"
          rules={[
            {
              required: true,
              message: "Plaese input model!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Plaese input description!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Plaese input price!",
            },
          ]}
        >
          <InputNumber min={1} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Image1"
          name="image1"
          rules={[
            {
              required: true,
              message: "Plaese input URL of image1!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Image2"
          name="image2"
          rules={[
            {
              required: true,
              message: "Plaese input URL of image2!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Video"
          name="video"
          rules={[
            {
              required: true,
              message: "Plaese input URL of video!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProduct;

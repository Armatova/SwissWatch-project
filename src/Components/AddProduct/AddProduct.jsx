import React, { useContext, useState } from "react";
import { Modal, Button, Form, Select, Input, InputNumber } from "antd";
import { brands } from "../../Helpers/brands";
import { productsContext } from "../../Contexts/productsContext";

const AddProduct = () => {
  const { createProduct } = useContext(productsContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function save(newProduct) {
    createProduct(newProduct);
    setIsModalVisible(false);
  }
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // brand, model, price, description, image1, image2, video

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add product
      </Button>
      <Modal
        footer={null}
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          name="basic"
          onFinish={(values) => save(values)}
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
      </Modal>
    </>
  );
};

export default AddProduct;

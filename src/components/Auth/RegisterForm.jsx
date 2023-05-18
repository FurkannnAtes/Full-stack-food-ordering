import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Select, Upload } from "antd";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsEnvelopeAt } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const RegisterForm = ({ setShowLoginForm }) => {
  const [validEmail, setValidEmail] = useState("");

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Form
      name="register"
      className="register-form"
      initialValues={{
        remember: true,
      }}
      onFinish={() => console.log()}
    >
      <Form.Item
        className="flex items-center justify-center"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <BiImageAdd />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </div>
        </Upload>
      </Form.Item>
      <div className="flex items-start gap-5 justify-between">
        <div className="w-1/2">
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your first Name!",
              },
            ]}
          >
            <Input
              type="text"
              prefix={<FiUser className="site-form-item-icon" />}
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your Last Name!",
              },
            ]}
          >
            <Input
              type="text"
              prefix={<FiUser className="site-form-item-icon" />}
              placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item
            name={"gender"}
            rules={[
              {
                required: true,
                message: "Please selecet a gender!",
              },
            ]}
          >
            <Select placeholder="Gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <div className="w-1/2">
          <Form.Item
            name="email"
            validateStatus={
              validEmail === ""
                ? ""
                : validEmail === "success"
                ? "success"
                : validEmail === "validating"
                ? "validating"
                : "error"
            }
            onChange={(e) => {
              setValidEmail("validating");

              setTimeout(() => {
                setValidEmail("success");
              }, 2000);
            }}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              type="email"
              prefix={<BsEnvelopeAt className="site-form-item-icon" />}
              placeholder="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            prefix={<RiLockPasswordLine className="site-form-item-icon" />}
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<RiLockPasswordLine className="site-form-item-icon" />}
              placeholder="password"
              iconRender={(visible) =>
                visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
              }
            />
          </Form.Item>
          <Form.Item
            name="repaitPassword"
            prefix={<RiLockPasswordLine className="site-form-item-icon" />}
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<RiLockPasswordLine className="site-form-item-icon" />}
              placeholder="password"
              iconRender={(visible) =>
                visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
              }
            />
          </Form.Item>
        </div>
      </div>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        <span className="mx-2"> Or </span>
        <a onClick={() => setShowLoginForm(true)}>I have an account</a>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;

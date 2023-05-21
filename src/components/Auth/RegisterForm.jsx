import React, { useRef, useState } from "react";
import axios from "axios";
import { Button, Checkbox, Form, Input, Select, Upload, message } from "antd";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsEnvelopeAt } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { signIn } from "next-auth/react";

const RegisterForm = ({ setShowLoginForm, setAuthModal }) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [validEmail, setValidEmail] = useState("");
  const [isImage, setIsImage] = useState("default");

  const uploadInputRef = useRef(null);

  const [form] = Form.useForm();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
  };

  const allowedFileTypes = ["image/png", "image/jpeg", "video/webm"];
  const beforeUpload = (file) => {
    const fileType = file.type;
    const isAllowed = allowedFileTypes.includes(fileType);

    if (!isAllowed) {
      message.error("Wrong file type. Please add a png, jpg, or webm file");
      setIsImage("false");
      return false;
    }
    setIsImage("true");
    return isAllowed;
  };

  const submitRegisterForm = async (values) => {
    try {
      setIsSubmiting(true);

      if (isImage !== "true") {
        const res = await signIn("credentials", {
          email: values.email,
          password: values.password,
          gender: values.gender,
          firstName: values.firstName,
          lastName: values.lastName,
          redirect: false,
          callbackUrl: "/",
        });
        if (res?.error) {
          setIsSubmiting(false);
          message.error("Invalid credentials");
        } else {
          setIsSubmiting(false);
          form.resetFields();
          setAuthModal(false);
        }
      } else {
        let fd = new FormData();
        fd.append("file", uploadInputRef?.current?.fileList[0].originFileObj);
        fd.append("upload_preset", "defaultPreset");
        fd.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME);
        const profileImage = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
          fd
        );

        const res = await signIn("credentials", {
          email: values.email,
          password: values.password,
          gender: values.gender,
          firstName: values.firstName,
          lastName: values.lastName,
          image: profileImage.data.secure_url,
          redirect: false,
          callbackUrl: "/",
        });
        if (res?.error) {
          setIsSubmiting(false);
          message.error("Invalid credentials");
        } else {
          setIsSubmiting(false);
          form.resetFields();
          setAuthModal(false);
        }
      }
    } catch (error) {
      setIsSubmiting(false);
      message.error(error.message);
    }
  };

  return (
    <Form
      form={form}
      name="register"
      className="register-form"
      initialValues={{
        remember: true,
      }}
      onFinish={submitRegisterForm}
    >
      <Form.Item
        className="flex items-center justify-center"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          beforeUpload={beforeUpload}
          listType="picture-circle"
          maxCount={1}
          ref={uploadInputRef}
          onRemove={() => setIsImage("false")}
        >
          <div>
            <BiImageAdd />

            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>
      <div className="flex items-start gap-5 justify-between">
        <div className="w-1/2">
          <Form.Item
            name="firstName"
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
              axios
                .post(`http://localhost:3000/api/auth/validEmail`, {
                  email: e.target.value,
                })
                .then((res) => {
                  setValidEmail(res?.data?.valid);
                })
                .catch((error) => {
                  console.error(error);
                  setValidEmail("error");
                });
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
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your Password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<RiLockPasswordLine className="site-form-item-icon" />}
              placeholder="Confirm Password"
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
        <Button
          type="primary"
          htmlType="submit"
          loading={isSubmiting}
          className="login-form-button"
          disabled={validEmail === "error"}
        >
          Register
        </Button>
        <span className="mx-2"> Or </span>
        <a onClick={() => setShowLoginForm(true)}>I have an account</a>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;

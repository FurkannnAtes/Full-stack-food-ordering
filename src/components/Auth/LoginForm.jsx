import { Button, Checkbox, Divider, Form, Input, message } from "antd";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useSession, signIn, signOut } from "next-auth/react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const LoginForm = ({ setShowLoginForm, setAuthModal }) => {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const { data: session } = useSession();

  const [form] = Form.useForm();

  const submitLoginForm = async (values) => {
    try {
      setIsSubmiting(true);
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
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
    } catch (error) {
      setIsSubmiting(false);
      message.error(error.message);
    }
  };

  return (
    <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={submitLoginForm}
    >
      <div className="flex flex-col gap-2 mb-5">
        <Button
          className="bg-white text-black shadow-lg rounded-none flex items-center gap-2 justify-center text-xl border 
          border-[#1677ff]"
          type="button"
          size="large"
          onClick={() => signIn("google")}
          icon={<FcGoogle />}
        >
          Continnue with Google
        </Button>
        <Divider>Or</Divider>
      </div>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input
          type="email"
          prefix={<FiUser className="site-form-item-icon" />}
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
        <Input
          prefix={<RiLockPasswordLine className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
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
        >
          Log in
        </Button>
        <span className="mx-2"> Or </span>
        <a onClick={() => setShowLoginForm(false)}>register now!</a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

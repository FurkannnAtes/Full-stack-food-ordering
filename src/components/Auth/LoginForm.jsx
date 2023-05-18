import { Button, Checkbox, Divider, Form, Input } from "antd";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useSession, signIn, signOut } from "next-auth/react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const LoginForm = ({ setShowLoginForm }) => {
  const { data: session } = useSession();

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={() => console.log()}
    >
      <div className="flex flex-col gap-2 mb-5">
        <Button
          className="bg-[#22272b] text-white shadow-lg rounded-none flex items-center gap-2 justify-center text-xl "
          type="button"
          size="large"
          onClick={() => signIn("github")}
          icon={<BsGithub />}
        >
          Continnue with github
        </Button>
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <span className="mx-2"> Or </span>
        <a onClick={() => setShowLoginForm(false)}>register now!</a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

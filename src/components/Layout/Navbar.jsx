import {
  Badge,
  Button,
  Checkbox,
  Drawer,
  Form,
  Input,
  Layout,
  Menu,
  Modal,
  Select,
  Upload,
} from "antd";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
const { Header } = Layout;
import { FaUser } from "react-icons/fa";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiImageAdd } from "react-icons/bi";
import { BsEnvelopeAt } from "react-icons/bs";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [shadowNavbar, setShadowNavbar] = useState("");
  const [authModal, setAuthModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [session, setSession] = useState(false);
  const router = useRouter();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const controlNavbar = () => {
    if (window.scrollY > 5) {
      setShadowNavbar(
        "md:backdrop-blur-sm backdrop-blur-md shadow-lg !bg-[#000000]/10"
      );
    } else {
      setShadowNavbar("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const item = [
    {
      key: "1",
      label: "Home",
      path: "/",
      onClick: () => {
        router.push("/");
      },
      className:
        "hover:text-brown duration-300 text-2xl font-semibold px-0 hover:bg-transparent mx-0",
    },
    {
      key: "2",
      label: "Menu",
      path: "/menu",
      onClick: () => {
        router.push("/menu");
      },
      className:
        "hover:text-brown duration-300 text-2xl font-semibold px-0 hover:bg-transparent md:mr-2",
    },
    {
      key: "3",
      label: "About",
      path: "/about",
      onClick: () => {
        router.push("/about");
      },
      className:
        "hover:text-brown duration-300 text-2xl font-semibold px-0 hover:bg-transparent",
    },
  ];

  return (
    <Layout
      className={`${shadowNavbar}  bg-transparent backdrop-blur-sm   z-40 fixed top-0 left-0 w-full h-[80px] flex `}
    >
      <Header
        className={`bg-transparent container   w-full h-full px-3  z-40 flex items-center justify-between`}
      >
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <div className="relative w-[50px] h-[50px]">
              <Image
                className="object-cover rounded-md"
                fill
                src={"/assets/logo.png"}
                alt=""
              />
            </div>
            <div className="text-white font-semibold text-2xl">Ofenos</div>
          </div>
        </Link>
        <Menu
          className="hidden w-[300px]  bg-transparent border-none text-white main-navbar md:flex items-center justify-cemter gap-3 "
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={item}
        />
        <div className="hidden items-center gap-2 md:flex">
          {session ? (
            <>
              <Button
                className="bg-brown text-white  items-center justify-center flex"
                type="button"
                icon={<FaUser />}
              />
              <Badge className="z-30 " count={9}>
                <Button
                  className="bg-brown text-white  items-center justify-center flex"
                  type="button"
                  icon={<FiShoppingCart />}
                />
              </Badge>
            </>
          ) : (
            <>
              <Button
                onClick={() => setAuthModal(true)}
                type="button"
                className="bg-brown text-white items-center justify-center flex"
              >
                Sign up / Sign in
              </Button>
            </>
          )}

          <Button
            className="bg-brown text-white items-center justify-center flex"
            type="button"
            icon={<GoSearch />}
          />
        </div>
        <button
          className="bg-transparent border-none cursor-pointer  text-brown  items-center justify-center flex md:hidden text-3xl"
          type="button"
          onClick={() => setShowMobileNav(showMobileNav ? false : true)}
        >
          <GiHamburgerMenu />
        </button>
      </Header>
      <Drawer
        onClose={() => setShowMobileNav(false)}
        placement="right"
        open={showMobileNav}
        className="bg-yellow "
      >
        <div className="flex items-center gap-2 ">
          <Button
            className="bg-brown text-white  items-center justify-center flex"
            type="button"
            icon={<FaUser />}
          />
          <Badge className="z-30 " count={9}>
            <Button
              className="bg-brown text-white  items-center justify-center flex"
              type="button"
              icon={<FiShoppingCart />}
            />
          </Badge>
          <Button
            className="bg-brown text-white items-center justify-center flex"
            type="button"
            icon={<GoSearch />}
          />
        </div>
        <Menu
          className=" min-w-[300px] text-white  bg-transparent border-none  main-navbar flex flex-col items-center justify-center gap-1"
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["1"]}
          items={item}
        />
      </Drawer>
      <Modal footer={null} centered open={authModal}>
        <div className="flex items-center my-10 gap-5 ">
          {" "}
          <Button
            size="large"
            type={`${showLoginForm ? "primary" : "button border border-black"}`}
            className={`rounded-none w-full `}
            onClick={() => setShowLoginForm(true)}
          >
            Login
          </Button>
          <span>/</span>
          <Button
            size="large"
            type={`${showLoginForm ? "button border border-black" : "primary"}`}
            className={`rounded-none w-full `}
            onClick={() => setShowLoginForm(false)}
          >
            Register
          </Button>
        </div>

        {showLoginForm ? (
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={() => console.log()}
          >
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
                className="login-form-button"
              >
                Log in
              </Button>
              <span className="mx-2"> Or </span>
              <a onClick={() => setShowLoginForm(false)}>register now!</a>
            </Form.Item>
          </Form>
        ) : (
          <Form
            name="normal_login"
            className="login-form"
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
                  prefix={
                    <RiLockPasswordLine className="site-form-item-icon" />
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={
                      <RiLockPasswordLine className="site-form-item-icon" />
                    }
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item
                  name="repaitPassword"
                  prefix={
                    <RiLockPasswordLine className="site-form-item-icon" />
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={
                      <RiLockPasswordLine className="site-form-item-icon" />
                    }
                    type="password"
                    placeholder="Repait your password"
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
                className="login-form-button"
              >
                Register
              </Button>
              <span className="mx-2"> Or </span>
              <a onClick={() => setShowLoginForm(true)}>I have an account</a>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </Layout>
  );
};

export default Navbar;

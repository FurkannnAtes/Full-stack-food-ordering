import { Badge, Button, Drawer, Dropdown, Layout, Menu, Modal } from "antd";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
const { Header } = Layout;
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import { GoSearch } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";

import { useEffect, useState } from "react";
import RegisterForm from "../Auth/RegisterForm";
import LoginForm from "../Auth/LoginForm";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [shadowNavbar, setShadowNavbar] = useState("");
  const [authModal, setAuthModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const { data: session } = useSession();
  const router = useRouter();

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

  const items = [
    {
      key: "1",
      label: <a>1st menu item</a>,
    },
    {
      key: "2",
      label: <a>2nd menu item</a>,
    },
    {
      key: "3",
      label: (
        <a
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </a>
      ),
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
              <Badge className="z-30 " count={9}>
                <Button
                  onClick={() => router.push("/basket")}
                  className="bg-brown text-white  items-center justify-center flex"
                  type="button"
                  icon={<FiShoppingCart />}
                />
              </Badge>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                arrow={{
                  pointAtCenter: true,
                }}
              >
                <Button
                  className="bg-brown text-white  items-center justify-center flex"
                  type="button"
                  icon={<FaUser />}
                ></Button>
              </Dropdown>
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
          {session ? (
            <>
              <Badge className="z-30 " count={9}>
                <Button
                  onClick={() => router.push("/basket")}
                  className="bg-brown text-white  items-center justify-center flex"
                  type="button"
                  icon={<FiShoppingCart />}
                />
              </Badge>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                arrow={{
                  pointAtCenter: true,
                }}
              >
                <Button
                  className="bg-brown text-white  items-center justify-center flex"
                  type="button"
                  icon={<FaUser />}
                ></Button>
              </Dropdown>
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
        <Menu
          className=" min-w-[300px] text-white  bg-transparent border-none  main-navbar flex flex-col items-center justify-center gap-1"
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["1"]}
          items={item}
        />
      </Drawer>
      <Modal
        onCancel={() => setAuthModal(false)}
        footer={null}
        centered
        open={authModal}
      >
        <div className="flex items-center my-10 gap-5 ">
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
          <LoginForm
            setAuthModal={setAuthModal}
            setShowLoginForm={setShowLoginForm}
          />
        ) : (
          <RegisterForm
            setAuthModal={setAuthModal}
            setShowLoginForm={setShowLoginForm}
          />
        )}
      </Modal>
    </Layout>
  );
};

export default Navbar;

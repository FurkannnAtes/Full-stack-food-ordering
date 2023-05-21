import MainLayout from "@/layout/MainLayout";
import "@/styles/globals.css";
import Router, { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

//Page loading animation
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  const is_user = router.pathname.startsWith("/user");
  const is_admin = router.pathname.startsWith("/admin");

  let Layout;

  if (is_admin) {
    Layout = "user";
  } else if (is_user) {
    Layout = "admin";
  } else {
    Layout = MainLayout;
  }

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

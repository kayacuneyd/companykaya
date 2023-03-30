import { useRouter } from "next/router";
import Preloader from "../Preloader/Preloader";
import ScrollUp from "../ScrollUp/ScrollUp";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/index-three" ? <NavbarTwo /> : <Navbar />}
      <main>{children}</main>
      {router.pathname === "/index-two" ? <FooterTwo /> : <Footer />}

      <ScrollUp />
      <Preloader />
    </>
  );
}

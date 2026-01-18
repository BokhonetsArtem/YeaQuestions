import { Header } from "@/3_widgets/Header";
import "../styles/index.css";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default BaseLayout;

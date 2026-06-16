import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

function Layout() {
  return (
    <div className="layout">
      <Menu />

      <main className="conteudo">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
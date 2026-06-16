import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* MENU LATERAL */}
      <aside style={{ width: "220px", background: "#f5f5f5" }}>
        <Menu />
      </aside>

      {/* CONTEÚDO */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;
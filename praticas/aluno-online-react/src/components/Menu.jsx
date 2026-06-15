import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Menu() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/faltas">Faltas</NavLink>
        </li>

        <li>
          <NavLink to="/notas">Notas</NavLink>
        </li>

        <li>
          <NavLink to="/boletos">Boletos</NavLink>
        </li>

        <li>
          <NavLink to="/requerimentos">Requerimentos</NavLink>
        </li>

        <li>
          <button onClick={handleLogout}>Sair</button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { listarRequerimentos } from "../../services/requerimentoService";
import "./Requerimentos.css";

function Requerimentos() {
  const navigate = useNavigate();
  const location = useLocation();
  const [requerimentos, setRequerimentos] = useState([]);

  useEffect(() => {
    listarRequerimentos().then((dados) => setRequerimentos(dados));
  }, [location]);

  return (
    <div className="requerimentos-page">
      <h1>Meus Requerimentos</h1>

      <button className="btn-novo" onClick={() => navigate("/requerimentos/novo")}>
        ➕ Novo Requerimento
      </button>

      <ul>
        {requerimentos.map((req) => (
          <li key={req.id}>
            <strong>{req.tipo}</strong> — {req.descricao} — {req.data}
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default Requerimentos;
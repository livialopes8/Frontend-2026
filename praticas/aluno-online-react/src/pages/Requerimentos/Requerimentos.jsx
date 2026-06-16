import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Listagem from "../../components/Listagem/Listagem";
import "./Requerimentos.css";

function Requerimentos() {
  const navigate = useNavigate();

  const itens = [
    { nome: "Declaração de matrícula", valor: "Solicitar" },
    { nome: "Histórico escolar", valor: "Solicitar" },
    { nome: "Segunda via de boleto", valor: "Solicitar" },
  ];

  return (
    <div className="requerimentos-page">
      <h1>Meus Requerimentos</h1>

      <button className="btn-novo" onClick={() => navigate("/requerimentos/novo")}>
        ➕ Novo Requerimento
      </button>

      <Listagem titulo="Listagem de Requerimentos" classe="requerimentos" itens={itens} />

      <Outlet />
    </div>
  );
}

export default Requerimentos;
import './Dashboard.css';

function Dashboard() {
  return (
    <section className="dashboard">
      <h2>Dashboard</h2>
      <p className="dashboard-subtitulo">Bem-vindo ao portal do aluno.</p>

      <ul className="dashboard-cards">
        <li>
          <span>Faltas registradas</span>
          <strong>3</strong>
        </li>

        <li>
          <span>Média geral</span>
          <strong>8.3</strong>
        </li>

        <li>
          <span>Boletos pendentes</span>
          <strong>1</strong>
        </li>

        <li>
          <span>Requerimentos disponíveis</span>
          <strong>3</strong>
        </li>
      </ul>
    </section>
  );
}

export default Dashboard;
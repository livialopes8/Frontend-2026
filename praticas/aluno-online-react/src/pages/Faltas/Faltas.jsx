import './Faltas.css';

function Faltas() {
  return (
    <section className="faltas">
      <h2>Listagem de Faltas</h2>

      <ul className="faltas-lista">
        <li>
          <span>Construção de Frontend</span>
          <strong>2 faltas</strong>
        </li>

        <li>
          <span>Manutenção de Software e DevOps</span>
          <strong>1 falta</strong>
        </li>

        <li>
          <span>Governança de TI</span>
          <strong>0 faltas</strong>
        </li>
      </ul>
    </section>
  );
}

export default Faltas;
import './Notas.css';

function Notas() {
  return (
    <section className="notas">
      <h2>Listagem de Notas</h2>

      <ul className="notas-lista">
        <li>
          <span>Construção de Frontend</span>
          <strong>8.5</strong>
        </li>

        <li>
          <span>Manutenção de Software e DevOps</span>
          <strong>9.0</strong>
        </li>

        <li>
          <span>Governança de TI</span>
          <strong>7.5</strong>
        </li>
      </ul>
    </section>
  );
}

export default Notas;
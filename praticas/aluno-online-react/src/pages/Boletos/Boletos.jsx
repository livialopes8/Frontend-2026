import './Boletos.css';

function Boletos() {
  return (
    <section className="boletos">
      <h2>Listagem de Boletos</h2>

      <ul className="boletos-lista">
        <li>
          <span>Janeiro</span>
          <strong>Pago</strong>
        </li>

        <li>
          <span>Fevereiro</span>
          <strong>Pendente</strong>
        </li>

        <li>
          <span>Março</span>
          <strong>Pago</strong>
        </li>
      </ul>
    </section>
  );
}

export default Boletos;
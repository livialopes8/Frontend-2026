import './Requerimentos.css';

function Requerimentos() {
  return (
    <section className="requerimentos">
      <h2>Listagem de Requerimentos</h2>

      <ul className="requerimentos-lista">
        <li>
          <span>Declaração de matrícula</span>
          <strong>Solicitar</strong>
        </li>

        <li>
          <span>Histórico escolar</span>
          <strong>Solicitar</strong>
        </li>

        <li>
          <span>Segunda via de boleto</span>
          <strong>Solicitar</strong>
        </li>
      </ul>
    </section>
  );
}

export default Requerimentos;
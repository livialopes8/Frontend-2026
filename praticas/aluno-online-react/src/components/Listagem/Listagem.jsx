import './Listagem.css';

function Listagem(props) {
  return (
    <section className={props.classe}>
      <h2>{props.titulo}</h2>

      <ul className={`${props.classe}-lista`}>
        {props.itens.map((item, index) => (
          <li key={index}>
            <span>{item.nome}</span>
            <strong>{item.valor}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Listagem;
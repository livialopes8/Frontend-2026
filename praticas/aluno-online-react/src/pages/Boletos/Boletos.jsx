import Listagem from '../../components/Listagem/Listagem';

function Boletos() {
  const itens = [
    { nome: 'Janeiro', valor: 'Pago' },
    { nome: 'Fevereiro', valor: 'Pendente' },
    { nome: 'Março', valor: 'Pago' }
  ];

  return <Listagem titulo="Listagem de Boletos" classe="boletos" itens={itens} />;
}

export default Boletos;
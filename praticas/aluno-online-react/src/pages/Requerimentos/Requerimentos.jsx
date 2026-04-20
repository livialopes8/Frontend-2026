import Listagem from '../../components/Listagem/Listagem';

function Requerimentos() {
  const itens = [
    { nome: 'Declaração de matrícula', valor: 'Solicitar' },
    { nome: 'Histórico escolar', valor: 'Solicitar' },
    { nome: 'Segunda via de boleto', valor: 'Solicitar' }
  ];

  return <Listagem titulo="Listagem de Requerimentos" classe="requerimentos" itens={itens} />;
}

export default Requerimentos;
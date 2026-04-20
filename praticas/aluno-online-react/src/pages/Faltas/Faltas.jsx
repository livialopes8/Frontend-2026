import Listagem from '../../components/Listagem/Listagem';

function Faltas() {
  const itens = [
    { nome: 'Construção de Frontend', valor: '2 faltas' },
    { nome: 'Manutenção de Software e DevOps', valor: '1 falta' },
    { nome: 'Governança de TI', valor: '0 faltas' }
  ];

  return <Listagem titulo="Listagem de Faltas" classe="faltas" itens={itens} />;
}

export default Faltas;
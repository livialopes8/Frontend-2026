import Listagem from '../../components/Listagem/Listagem';

function Notas() {
  const itens = [
    { nome: 'Construção de Frontend', valor: '8.5' },
    { nome: 'Manutenção de Software e DevOps', valor: '9.0' },
    { nome: 'Governança de TI', valor: '7.5' }
  ];

  return <Listagem titulo="Listagem de Notas" classe="notas" itens={itens} />;
}

export default Notas;
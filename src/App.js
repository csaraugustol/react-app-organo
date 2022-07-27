import { useState } from 'react';
import Time from './componentes/Time';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const times = [
    {
      nome: 'Chelsea',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Cruzeiro',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Juventus',
      corPrimaria: '#A6D157 ',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Barcelona',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Real Madrid',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
      {times.map(time => <Time
       key={time.nome}
       nome={time.nome}
       corPrimaria={time.corPrimaria}
       corSecundaria={time.corSecundaria}
       colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
       />)}
    </div>
  );
}

export default App;

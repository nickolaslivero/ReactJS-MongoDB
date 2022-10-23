import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const sabores = [
    {
      nome: 'Baianinha',
      corPrimaria: 'black',
      corSecundaria: ''
    },
    {
      nome: 'Portuguesa',
      corPrimaria: 'black',
      corSecundaria: ''
    },
    {
      nome: 'Presuntaço',
      corPrimaria: 'black',
      corSecundaria: ''
    },
    {
      nome: 'Mussalera',
      corPrimaria: 'black',
      corSecundaria: ''
    },
    {
      nome: 'Calabresa',
      corPrimaria: 'black',
      corSecundaria: ''
    },
    {
      nome: 'Marguerita',
      corPrimaria: 'black',
      corSecundaria: ''
    },
    {
      nome: 'Frango c/ requeijasso',
      corPrimaria: 'black',
      corSecundaria: ''
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={sabores.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {sabores.map(sabor => <Time 
        key={sabor.nome} 
        nome={sabor.nome} 
        corPrimaria={sabor.corPrimaria} 
        corSecundaria={sabor.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.sabor === sabor.nome)}
      />)}   

    </div>
  );
}

export default App;

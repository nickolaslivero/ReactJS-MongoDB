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
      nome: 'Presunto',
      corPrimaria: 'black',
      corSecundaria: ''
    },
    {
      nome: 'Mussarela',
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
      nome: 'Frango com Catupiry',
      corPrimaria: 'black',
      corSecundaria: ''
    }
  ]

  const [pedidos, setPedidos] = useState([])

  const aoNovoPedidoAdicionado = (pedido) => {
    setPedidos([...pedidos, pedido])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={sabores.map(time => time.nome)} aoPedidoCadastrado={pedido => aoNovoPedidoAdicionado(pedido)}/>

      {sabores.map(sabor => <Time 
        key={sabor.nome}
        nome={sabor.nome}
        corPrimaria={sabor.corPrimaria}
        corSecundaria={sabor.corSecundaria}
        pedidos={pedidos.filter(pedido => pedido.sabor === sabor.nome)}
      />
      )}

    </div>
  );
}

export default App;
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Card from './componentes/Card';

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
      <Formulario cards={sabores.map(card => card.nome)} aoPedidoCadastrado={pedido => aoNovoPedidoAdicionado(pedido)}/>

      {sabores.map(sabor => <Card 
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
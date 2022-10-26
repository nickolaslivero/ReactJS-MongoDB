import Pedido from '../Pedido'
import './Card.css'

const Card = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    function onClickDelete(col_index) {
        let col = []
    
        props.pedidos.map((pedido, index) => {
            if (index !== col_index) {
                col.unshift(pedido)
            }
        })
    
        console.log(col)
    }

    return (
        (props.pedidos.length > 0) ? <section className='card' style={css}>
            <div className='pedidos'>
                {props.pedidos.map( (pedido, index) => <Pedido corDeFundo={props.corPrimaria} 
                key={index}
                nome={pedido.nome}
                endereco={pedido.endereco}
                sabor={pedido.sabor}
                quantidade={pedido.quantidade}
                observacao = {pedido.observacao}
                onClickDelete = {() => onClickDelete(index)}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Card
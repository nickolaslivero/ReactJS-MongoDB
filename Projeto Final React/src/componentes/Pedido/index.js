import './Pedido.css'

const Pedido = ({ nome, endereco, corDeFundo, observacao, sabor, quantidade, onClickDelete}) => {
    return (<div className='pedido'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.cybercook.com.br%2Fimagens%2Freceitas%2F619%2Fmassa-de-pizza-para-microondas-2.jpeg&f=1&nofb=1&ipt=ec0fedd0b50ef373d35829afda65e7b804f8522f25c38be37881d91e00c485ca&ipo=images"} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>Cliente: {nome}</h4>
            <h5>Endereço: {endereco}</h5>
            <h6>Sabor: {sabor}</h6>
            <h6>Quantidade: {quantidade} Pizzas</h6>
            <h6>Observação: {observacao}</h6>
            <button type='button' onClick={onClickDelete} className='botao'>Deletar</button>
        </div>
    </div>)
}

export default Pedido
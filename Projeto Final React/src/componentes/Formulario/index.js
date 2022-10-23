import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cargo, setCargo] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [imagem, setImagem] = useState('')
    const [observacao, setObservacao] = useState('')
    const [sabor, setSabor] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            endereco,
            cargo,
            imagem,
            quantidade,
            observacao,
            sabor
        })
        setNome('')
        setEndereco('')
        setCargo('')
        setImagem('')
        setQuantidade('')
        setObservacao('')
        setSabor('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Central de cadastramento de pedidos</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome do Cliente"
                    placeholder="Digite o nome do cliente" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Endereço do cliente"
                    placeholder="Digite o endereço(cargo/endereco)" 
                    valor={endereco}
                    aoAlterado={valor => setEndereco(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Quantidade de pizzas"
                    placeholder="Digite a quantidade de pizzas(imagem)" 
                    valor={quantidade}
                    aoAlterado={valor => setQuantidade(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Observação"
                    placeholder="Digite alguma observação" 
                    valor={observacao}
                    aoAlterado={valor => setObservacao(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Sabor da pizza" 
                    itens={props.times}
                    valor={sabor}
                    aoAlterado={valor => setSabor(valor)}
                />
                <Botao>
                    Cadastrar pedido
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
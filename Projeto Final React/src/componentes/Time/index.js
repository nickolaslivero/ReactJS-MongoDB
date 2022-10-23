import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} 
                key={colaborador.nome} 
                nome={colaborador.nome} 
                endereco={colaborador.endereco} 
                //imagem={colaborador.imagem} 
                sabor={colaborador.sabor}
                quantidade={colaborador.quantidade}
                observacao = {colaborador.observacao}
                /> )}
            </div>
        </section> 
        : ''
    )
}

export default Time
import './Colaborador.css'

const Colaborador = ({nome, cidade, imagem, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}><img src={imagem} alt={imagem} /></div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cidade}</h5>
            </div>
        </div>
    )
}

export default Colaborador
import './Formulario.css'
import Botao from '../Botao'
import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cidade, setCidade] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cidade,
            imagem,
            time
        })

        setNome('')
        setCidade('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h1>Preencha os dados para criar o card do torcedor </h1>
                <CampoTexto valor={nome} aoAlterar={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto valor={cidade} aoAlterar={valor => setCidade(valor)} obrigatorio={true} label="Cidade" placeholder="Digite sua cidade" />
                <CampoTexto valor={imagem} aoAlterar={valor => setImagem(valor)} label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa valor={time} aoAlterar={valor => setTime(valor)} obrigatorio={true} label="Times" itens={props.times}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario
import React, { useState } from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"
import "../../styles/styles.css"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [emailConf, setEmailConf] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const { signup } = useAuth()

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos!")
            return
        } else if (email !== emailConf) {
            setError("Os e-mails nao sao iguais!")
            return
        }

        const res = signup(email, senha)

        if (res) {
            setError(res)
            return
        }

        alert("Usuario cadastrado com sucesso!")
        navigate("/")
    }

    return(
        <div className="container-signup">
            <label className="label-signup">Cadastre a Sua Conta</label>
            <div className="content-signup">
                <Input type="email" placeholder="Digite o seu E-mail..." value={email} onChange={(e) => [setEmail(e.target.value), setError("")]} />
                <Input type="email" placeholder="Confirme o seu E-mail" value={emailConf} onChange={(e) => [setEmailConf(e.target.value), setError("")]} />
                <Input type="password" placeholder="Digite a sua senha" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} />
                <label className="login-error">{error}</label>
                <Button Text="Inscrever-se" onClick={handleSignup} />
                <label className="login-signup">
                    Ja tem uma conta?
                    <label className="login-strong">
                        <Link to="/">&nbsp;Entre</Link>
                    </label>
                </label>
            </div>
        </div>
    )
}

export default Signup
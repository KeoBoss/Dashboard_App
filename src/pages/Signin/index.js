import React, { useState } from "react"
import "../../styles/styles.css"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Signin = () => {
    const { signin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos!")
            return
        }

        const res = signin(email, senha)

        if (res) {
            setError(res)
            return
        }

        navigate("/home")
    }

    return(
        <div className="container-login">
            <label className="container-label">Sistema de Login</label>
            <div className="container-content">
                <Input type="email" placeholder="Digite o seu e-mail..." value={email} onChange={(e) => [setEmail(e.target.value), setError("")]} />
                <Input type="password" placeholder="Digite a sua senha..." value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} />
                <label className="login-error">{error}</label>
                <Button Text="Entrar" onClick={handleLogin} />
                <label className="login-signup">
                    Ainda nao tem a sua conta?
                    <label className="login-strong">
                        <Link to="/signup">&nbsp;Registre-se</Link>
                    </label>
                </label>
            </div>
        </div>
    )
}

export default Signin
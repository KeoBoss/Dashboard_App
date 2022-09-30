import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import useAuth from "../../hooks/useAuth"
import * as C from "./styles"
import './styles.css'

const Home = () => {
    const { signout } = useAuth()
    const navigate = useNavigate()

    const activeMenu = true

    return(
        <C.Container>
            {activeMenu ? (
                <div className="sidebarmenu">Sidebar Menu</div>
            ) : (
                <div className="sidebarmenu activeMenu">Sidebar Menu</div>
            )}
            <C.Content>
                <C.Title>Dashboard Home Page</C.Title>
                <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>Sair</Button>
            </C.Content>
        </C.Container>
    )
}

export default Home
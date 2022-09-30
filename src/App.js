import React from "react"
import './styles/styles.css'
import RoutesApp from "./routes"
import { AuthProvider } from "./contexts/auth"

const App = () => {
    return(
        <AuthProvider>
            <RoutesApp/>   
        </AuthProvider>
    )
}

export default App
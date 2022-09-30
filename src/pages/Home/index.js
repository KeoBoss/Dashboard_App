/* eslint-disable no-unused-vars */
import React from "react"
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from "react-router-dom"


import Sidebar from "../../components/Sidebar"
import useAuth from "../../hooks/useAuth"
import "../../styles/styles.css"
import HomeApp from "../Home/HomeApp"
import Orders from "../../pages/Orders"
import Employees from "../../pages/Employees"
import Customers from "../../pages/Customers"
import Kanban from "../Kanban"
import Calendar from "../Calendar"
import Financial from "../../pages/Home/Financial"
import Line from "../Home/Line"
import Area from "../Home/Area"
import Bar from "../Home/Bar"
import Pie from "../Home/Pie"

const Home = () => {
    const { signout } = useAuth()
    const navigate = useNavigate()

    return(
        <div className="home-container">
            <Sidebar />
            <div className="home-content">
                <Routes>
                    {/* Dashboard */}
                    <Route path="/" element={<HomeApp />} />

                    {/* Pages */}
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />

                    {/* Apps */}
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/financial" element={<Financial />} />

                    {/* Charts */}
                    <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                </Routes>
                
            </div>
        </div>
    )
}

export default Home
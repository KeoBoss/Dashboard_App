import React, { useState } from "react"
import { FaBars } from 'react-icons/fa'

const Sidebar = () => {
    const [isExpended, setExpendState] = useState(false)

    const dashboardItems = [
        {
            text: "Dashboard Home",
            icon: <FaBars />
        }
    ]

    const pageItems = [
        {
            text: "Orders",
            icon: <FaBars />
        },
        {
            text: "Employees",
            icon: <FaBars />
        },
        {
            text: "Customers",
            icon: <FaBars />
        }
    ]

    const appItems = [
        {
            text: "Kanban",
            icon: <FaBars />
        },
        {
            text: "Calendar",
            icon: <FaBars />
        },
        {
            text: "Financial",
            icon: <FaBars />
        }
    ]

    const chartItems = [
        {
            text: "Area",
            icon: <FaBars />
        },
        {
            text: "Bar",
            icon: <FaBars />
        },
        {
            text: "Line",
            icon: <FaBars />
        },
        {
            text: "Pie",
            icon: <FaBars />
        }
    ]

    return(
        <div className={isExpended ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
            <div className="nav-upper">
                <div className="nav-heading">
                    <div className="nav-content">
                        <h2 className="nav-title">DashBoard App</h2>
                        <div className="dashboard-menu">
                            {dashboardItems.map(({text, icon}) => (
                                <a href='/' className="link-item">
                                    {icon}
                                    <p>{text}</p>
                                </a>
                            ))}
                        </div>
                        <div className="menu-divider"></div>

                        <label className="nav-label">Pages</label>
                        <div className="dashboard-menu">
                            {pageItems.map(({text, icon}) => (
                                <a href='/home' className="link-item">
                                    {icon}
                                    <p>{text}</p>
                                </a>
                            ))}
                        </div>
                        <div className="menu-divider"></div>

                        <label className="nav-label">Apps</label>
                        <div className="dashboard-menu">
                            {appItems.map(({text, icon}) => (
                                <a href='/' className="link-item">
                                    {icon}
                                    <p>{text}</p>
                                </a>
                            ))}
                        </div>
                        <div className="menu-divider"></div>

                        <label className="nav-label">Graficos</label>
                        <div className="dashboard-menu">
                            {chartItems.map(({text, icon}) => (
                                <a href='/' className="link-item">
                                    {icon}
                                    <p>{text}</p>
                                </a>
                            ))}
                        </div>
                        <div className="menu-divider"></div>

                        <a href='/' className="link-logout">
                            <label className="nav-logout">Sair</label>    
                        </a>
                    </div>
                    <button className={isExpended ? 'hamburger hamburger-in' : 'hamburger hamburger-out'} onClick={() => setExpendState(!isExpended)}>
                        <FaBars className="hamburger-icon" />
                    </button>
                </div>
                <div className="nav-menu"></div>
            </div>
        </div>
    )
}

export default Sidebar
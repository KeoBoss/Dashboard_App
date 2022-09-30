import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 100vh;
    gap: 20px;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    gap: 20px;
`

// ---[ Sidebar Menu Style ]---

export const SidebarMenu = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    height: 100vh;
    width: 14rem;
    gap: 20px;
    left: 0;
    background-color: #1a1a1d;
`

export const Title = styled.h2`
    color: #e1e1e6;
`
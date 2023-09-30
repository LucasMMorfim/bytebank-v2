import { useNavigate } from "react-router-dom"
import { useParticipantList } from "../state/hooks/useParticipantList"
import { useDrawer } from "../state/hooks/useDrawer"

import './Footer.css'

export const Footer = () => {

    const participants = useParticipantList()

    const navigateTo = useNavigate()

    const draw = useDrawer()
    
    const start = () => {
        draw()
        navigateTo('/raffle')
    }

    return (<footer className="rodape-configuracoes">
        <button className="botao" disabled={participants.length < 3} onClick={start}>Start Game</button>
        <img src="/images/sacolas.png" alt="Sacolas de compras" />
    </footer>
    )
}
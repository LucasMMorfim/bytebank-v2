import { useState } from "react"
import Card from "../components/Card"
import { useParticipantList } from "../state/hooks/useParticipantList"
import { useRaffleResult } from "../state/hooks/useRaffleResult"

import './Raffle.css'

export const Raffle = () => {

    const participants = useParticipantList()

    const [participantOfTheTime, setparticipantOfTheTime] = useState('')
    const [secretFriend, setSecretFriend] = useState('')

    const result = useRaffleResult()

    const draw = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (result.has(participantOfTheTime)) {
            setSecretFriend(result.get(participantOfTheTime)!)
        }
    }

    return (<Card>
        <section className="sorteio">
            <h2>Who will take the paper?</h2>
            <form onSubmit={draw}>
                <select
                    required
                    name="participantOfTheTime"
                    id="participantOfTheTime"
                    placeholder="Select your name"
                    value={participantOfTheTime}
                    onChange={evento => setparticipantOfTheTime(evento.target.value)}
                >
                    <option>Select your name</option>
                    {participants.map(participant => <option key={participant}>{participant}</option>)}
                </select>
                <p>Click on draw to see who your secret friend is!</p>
                <button className="botao-draw">draw</button>
            </form>
            {secretFriend && <p className="result" role="alert">{secretFriend}</p>}
            <footer className="sorteio">
                <img src="/images/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
            </footer>
        </section>
    </Card>)
}
import { realizeRuffle } from "./realizeRuffle"

describe('Given a secret friend draw', () => {
    it('Each participant does not draw their own name', () => {

        const participants = [
            'Ana',
            'Catarina',
            'Vinicios',
            'Juliana',
            'João',
            'Nathália'
        ]

        const raffle = realizeRuffle(participants)
        participants.forEach(participante => {
            const SecretFriend = raffle.get(participante)
            expect(SecretFriend).not.toEqual(participante)
        })

    })
})
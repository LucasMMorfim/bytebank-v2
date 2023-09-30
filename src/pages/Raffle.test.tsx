import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useParticipantList } from "../state/hooks/useParticipantList";
import { useRaffleResult } from "../state/hooks/useRaffleResult";
import { Raffle } from "./Raffle";

jest.mock('../state/hooks/useParticipantList', () => {
    return {
        useParticipantList: jest.fn()
    }
})
jest.mock('../state/hooks/useRaffleResult', () => {
    return {
        useRaffleResult: jest.fn()
    }
})

describe('On the draw page', () => {
    const participants = [
        'Ana',
        'Catarina',
        'Jorel'
    ]
    const result = new Map([
        ['Ana', 'Jorel'],
        ['Jorel', 'Catarina'],
        ['Catarina', 'Ana']
    ])

    beforeEach(() => {
        (useParticipantList as jest.Mock).mockReturnValue(participants);
        (useRaffleResult as jest.Mock).mockReturnValue(result);
    })
    it('All participants can show off their secret friend', () => {
        render(<RecoilRoot><Raffle /></RecoilRoot>)

        const opcoes = screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(participants.length + 1)
    })
    it('Secret friend is displayed when requested', () => {
        render(<RecoilRoot>
            <Raffle />
        </RecoilRoot>)

        const select = screen.getByPlaceholderText('Select your name')
        
        fireEvent.change(select, {
            target: {
                value: participants[0]
            }
        })

        const button = screen.getByRole('button')

        fireEvent.click(button)

        const secretFriend = screen.getByRole('alert')

        expect(secretFriend).toBeInTheDocument()

    })
})
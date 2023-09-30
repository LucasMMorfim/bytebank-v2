import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useParticipantList } from "../state/hooks/useParticipantList";
import { Footer } from "./Footer";

jest.mock('../state/hooks/useParticipantList', () => {
    return {
        useParticipantList: jest.fn()
    }
})

const mockNavigation = jest.fn()
const mockRaffle = jest.fn()

jest.mock('../state/hooks/useDrawer', () => {
    return {
        useDrawer: () => mockRaffle
    }
})

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
})

describe('When there are not enough participants', () => {
    beforeEach(() => {
        (useParticipantList as jest.Mock).mockReturnValue([])
    })
    it('The game cannot be started', () => {
        render(<RecoilRoot><Footer /></RecoilRoot>)
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })
})

describe('When there are enough participants', () => {
    beforeEach(() => {
        (useParticipantList as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Josefina'])
    })
    it('The game can start', () => {
        render(<RecoilRoot><Footer /></RecoilRoot>)
        const button = screen.getByRole('button')
        expect(button).not.toBeDisabled()
    })
    it('The game started', () => {
        render(<RecoilRoot><Footer /></RecoilRoot>)
        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(mockNavigation).toHaveBeenCalledTimes(1)
        expect(mockNavigation).toHaveBeenCalledWith('/raffle')
        expect(mockRaffle).toHaveBeenCalledTimes(1)
    })
})
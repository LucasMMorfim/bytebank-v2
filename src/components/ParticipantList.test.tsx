import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { useParticipantList } from '../state/hooks/useParticipantList'
import { ParticipantList } from './ParticipantList'

jest.mock('../state/hooks/useParticipantList', () => {
    return {
        useParticipantList: jest.fn()
    }
})

describe('An empty list of participants', () => {
    beforeEach(() => {
        (useParticipantList as jest.Mock).mockReturnValue([])
    })
    it('Should be rendered without elements', () => {
        render(<RecoilRoot><ParticipantList /></RecoilRoot>)
    
        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(0)
    })
})

describe('A completed list of participants', () => {
    const participants = ['Ana', 'Catarina']
    beforeEach(() => {
        (useParticipantList as jest.Mock).mockReturnValue(participants)
    })
    it('Should be rendered without elements', () => {
        render(<RecoilRoot><ParticipantList /></RecoilRoot>)
    
        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(participants.length)
    })
})
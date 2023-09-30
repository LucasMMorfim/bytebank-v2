import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Form } from "./Form";


describe('The behavior of Formulario.tsx', () => {
    it('When the input is empty, new participants cannot be added', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Enter the names of the participants')
        const button = screen.getByRole('button')
        expect(input).toBeInTheDocument()
        expect(button).toBeDisabled()
    })
    
    it('Add a participant if a name is filled in', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Enter the names of the participants')
        const button = screen.getByRole('button')
    
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
    
        fireEvent.click(button)
    
        expect(input).toHaveFocus()
        expect(input).toHaveValue("")
    })
    
    it('Duplicate names cannot be added to the list', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Enter the names of the participants')
        const button = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(button)
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(button)
    
        const errorMessage = screen.getByRole('alert')
    
        expect(errorMessage.textContent).toBe('Duplicate names are not allowed!')
    })
    
    it('The error message should disappear after the timers', () => {
        jest.useFakeTimers()
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Enter the names of the participants')
        const button = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(button)
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(button)
        let errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeInTheDocument()
    
        act(() => {
            jest.runAllTimers()
        });
    
        errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeNull()
    })
})



import { useRef, useState } from "react"
import { useAddParticipant } from "../state/hooks/useAddParticipant"
import { useErrorMessage } from "../state/hooks/useErrorMessage"

import './Form.css'

export const Form = () => {

    const [name, setName] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const addToList = useAddParticipant()

    const errorMessage = useErrorMessage()

    const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addToList(name)
        setName('')
        inputRef.current?.focus()
    }

    return (<form onSubmit={addParticipant}>
        <div className="grupo-input-btn">
            <input
                ref={inputRef}
                value={name}
                onChange={event => setName(event.target.value)}
                type="text"
                placeholder="Enter the names of the participants"
            />
            <button disabled={!name}>Add</button>
        </div>
        {errorMessage && <p className="error alert" role="alert">{errorMessage}</p>}
    </form>)
}
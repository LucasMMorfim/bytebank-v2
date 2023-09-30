import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, participantsListState } from "../atom"

export const useAddParticipant = () => {
    const setList = useSetRecoilState(participantsListState)
    const list = useRecoilValue(participantsListState)
    const setErro = useSetRecoilState(errorState)
    return (participantName: string) => {
        if (list.includes(participantName)) {
            setErro('Duplicate names are not allowed!')
            setTimeout(() => {
                setErro("")
            }, 5000)
            return
        }
        return setList(currentList => [...currentList, participantName])
    }
}
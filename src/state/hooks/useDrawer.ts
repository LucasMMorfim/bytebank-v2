import { useSetRecoilState } from "recoil"
import { resultSecretFriend } from "../atom"
import { realizeRuffle } from "../helpers/realizeRuffle"
import { useParticipantList } from "./useParticipantList"

export const useDrawer = () => {
    const participants = useParticipantList()
    const setResult = useSetRecoilState(resultSecretFriend)
    return () => {
       const result = realizeRuffle(participants)
        setResult(result)       
    }
}
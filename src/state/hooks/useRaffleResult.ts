import { useRecoilValue } from "recoil"
import { resultSecretFriend } from "../atom"

export const useRaffleResult = () => {
    return useRecoilValue(resultSecretFriend)
}
import shuffle from "just-shuffle";

export function realizeRuffle (participants: string[]) {
    const  participantsTotal = participants.length
    const scrambled = shuffle(participants)
    const result = new Map<string, string>()
    for (let index = 0; index < participantsTotal; index++) {    
        const friendIndex = index === (participantsTotal - 1) ? 0 : index + 1;
        result.set(scrambled[index], scrambled[friendIndex])
    }
    return result
}
import { BACKGROUND_CHANGED } from "./actionsTypes"

export const backgroundChanged = (backgroundState) => ({
    type: BACKGROUND_CHANGED,
    backgroundState: backgroundState
})
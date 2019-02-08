import { NAVIGATE } from "./actionTypes"

export const navigate = (toScreen) => ({
    type: NAVIGATE,
    toScreen: toScreen
})
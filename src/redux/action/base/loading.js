import { IS_LOADING } from "../../type"

export const setLoading = (key) => {
    return {
        type: IS_LOADING,
        payload: key
    }
}
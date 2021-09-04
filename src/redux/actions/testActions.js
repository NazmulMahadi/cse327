export const increase = (payload) => {

    return {
        type: "increase",
        payload,
    }

}

export const decrease = (payload) => {
    return {
        type: "decrease",
        payload,
    }

}
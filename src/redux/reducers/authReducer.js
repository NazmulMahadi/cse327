const initial_state = {
    email: ''
}

const testReducers = (state = initial_state, action) => {
    switch (action.type) {
        case "set": {
            const newState = {
                ...state,
                email: action.payload
            }
            return newState;
        }

        default: {
            return state;
        }
    }
}

export default testReducers;
const initial_state = {
    value: 1
}

const testReducers = (state = initial_state, action) => {
    switch (action.type) {
        case "increase": {
            const newState = {
                ...state,
                value: state.value + action.payload
            }
            return newState;
        }
        case 'decrease': {
            const newState = {
                ...state,
                value: state.value - action.payload
            }
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default testReducers;
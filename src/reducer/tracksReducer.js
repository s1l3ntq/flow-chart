const initialState = {
    tracks: []
}

const tracksReducer = (state={initialState}, action) => {
    switch(action.type) {
        case "SET_TRACKS":
            // console.log(action.tracks)
            return{
                ...state,
                tracks: action.tracks
            }
        default:
            return state;
    }
}

export default tracksReducer
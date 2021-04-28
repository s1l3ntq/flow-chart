const initialState = {
    tracks: [],
    favoriteTracks: []
}

const tracksReducer = (state={initialState}, action) => {
    switch(action.type) {
        case "SET_TRACKS":
            // console.log(action.tracks)
            return{
                ...state,
                tracks: action.tracks
            }

        case "ADD_TRACK":
            // console.log(action.favoriteTrack)
            return{
                ...state,
                favoriteTracks: [...state.favoriteTracks, action.favoriteTrack]
            }
            
        default:
            return state;
    }
}

export default tracksReducer
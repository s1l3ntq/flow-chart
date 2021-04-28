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

        case "SET_FAVORITE_TRACKS":
            return{
                ...state,
                favoriteTracks: action.favoriteTracks
            }

        case "ADD_TRACK":
            // console.log(action.favoriteTrack)
            return{
                ...state,
                favoriteTracks: [...state.favoriteTracks, action.favoriteTrack]
            }

        case "DELETE_TRACK":
                // findIndex(obj => obj.id == 3)
            let i = state.favoriteTracks.findIndex(fav => fav.id === action.trackId)
            return {
              ...state,
              favoriteTracks: [
              ...state.favoriteTracks.slice(0,i),
              ...state.favoriteTracks.slice(i+1)
                    ]
                }
            
        default:
            return state;
    }
}

export default tracksReducer
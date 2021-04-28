export const fetchFavoriteTracks = () => {
    return (dispatch) => {
        fetch(`http://localhost:3001/favorite_tracks`)
        .then(r => r.json())
        .then(favoriteTracks =>
         dispatch({type: 'SET_FAVORITE_TRACKS', favoriteTracks}))
            
    }
}
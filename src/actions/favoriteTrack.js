export const favoriteTrack = (favorite_track) => {
    return (dispatch) => {
        fetch('http://localhost:3001/favorite_tracks', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ favorite_track })
        })
            .then(resp => resp.json())
            .then(favoriteTrack => {
                 dispatch({ type: "ADD_TRACK", favoriteTrack })
            })
    }
}
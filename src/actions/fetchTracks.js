export const fetchTracks = (search= '') => {
    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/tracks/'search?q=${search}`)
        .then(r => r.json())
        .then(tracks =>
         dispatch({type: 'SET_TRACKS', tracks}))
            
    }
}
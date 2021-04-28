export const deleteTrack = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/favorites/${id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        })
            .then(resp => resp.json())
            .then(trackId => {
                dispatch({ type: "DELETE_TRACK", trackId })
                // console.log(idObject)
            })
            .catch(error => {
                console.log(error)
            })
    }
}
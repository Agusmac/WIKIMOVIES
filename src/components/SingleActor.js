import React from "react"
import { useParams,useHistory } from "react-router-dom";

export default function SingleActor() {

    let id = useParams().id
    let [actor, setActor] = React.useState("")

    React.useEffect(async () => {
        const res = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        const data = await res.json()
        setActor(data)
    }, [])
    
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
   
    return (
        
        <div className="actorPage">
        <h3 className="backer" onClick={goToPreviousPath}>Go Back</h3>
            <div className="actorDiver">
                <img src={`http://image.tmdb.org/t/p/w780/${actor.profile_path}`} />
                <div>
                    <h1>{actor.name}</h1>
                    <br />
                    <p>{actor.biography}</p>
                    <br />
                    <p>Birthday: {actor.birthday}</p>
                    <br/>
                    <p>Born in: {actor.place_of_birth}</p>
                </div>
            </div>
        </div>

    )
}
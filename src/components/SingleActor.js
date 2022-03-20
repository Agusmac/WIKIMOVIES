import React,{useState,useEffect} from "react"
import { useParams,useHistory } from "react-router-dom";

export default function SingleActor() {
    try { document.getElementById(`navnavnav`).scrollIntoView({ behavior: "smooth", block: "start" })} catch (error) {}
 
    let id = useParams().id
    let [actor, setActor] = useState("")

    useEffect(async () => {
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
                    {actor.biography?<p>{actor.biography}</p>:<p>We don't have more info about {actor.name}....</p>}
                    <br />
                    {actor.birthday &&<p>Birthday: {actor.birthday}</p>}
                    <br/>
                    {actor.place_of_birth &&<p>Born in: {actor.place_of_birth}</p>}
                </div>
            </div>
        </div>

    )
}
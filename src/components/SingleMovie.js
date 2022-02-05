import React from "react"
import { useParams } from "react-router-dom";
import DataBar from "./DataBar";
import SingleHero from "./SingleHero";
import Cast from "./Cast";

export default function SingleMovie() {
    let id = useParams().id
    let [movieData, setMovieData] = React.useState("")
    let [movieCredits, setMovieCredits] = React.useState("")
    let [directors,setDirectors]=React.useState("")

    React.useEffect(async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
        const data = await res.json()
        setMovieData(data)
    }, [])
    React.useEffect(async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
        const data = await res.json()
        setMovieCredits(data)
        setDirectors(data.crew.filter(member=>member.job=="Director"))
    }, [])
    console.log(directors,movieData)
  
    return (<>
        <SingleHero movieData={movieData} directors={directors}/>
        <DataBar movieData={movieData}/>
        <Cast {...movieCredits}/>
        </>
    )
}
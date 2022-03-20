import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import DataBar from "./DataBar";
import SingleHero from "./SingleHero";
import Cast from "./Cast";

export default function SingleMovie() {
    try { document.getElementById(`navnavnav`).scrollIntoView({ behavior: "smooth", block: "start" })} catch (error) {}
 
    
    let id = useParams().id
    const [movieData, setMovieData] = useState("")
    const [movieCredits, setMovieCredits] = useState("")
    const [directors, setDirectors] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(async () => {
        setLoading(true)
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
        const data = await res.json()
        setMovieData(data)
        setLoading(false)
    }, [])
    useEffect(async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
        const data = await res.json()
        setMovieCredits(data)
        setDirectors(data.crew.filter(member => member.job == "Director"))
    }, [])

   
    return (<>
        <SingleHero movieData={movieData} directors={directors} loading={loading} />
        <DataBar movieData={movieData} />
        <Cast {...movieCredits} />
    </>
    )
}
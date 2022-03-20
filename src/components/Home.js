import React,{useState,useEffect} from "react"

import Hero from "./Hero"
import SearchBar from "./SearchBar"
import Grid from "./Grid"

export default function Home() {
    const [moviesData, setMoviesData] = useState([])
    const [page, setPage] = useState(2)
    const [searchTerm, setSearchTerm] = useState("")
    const [fetchUrl, setfetchUrl] = useState("")
    const [loading,setLoading]=useState(true)

    function changer(e) {
        setSearchTerm(e.target.value)
    }

    async function loader() {
        const res = await fetch(`${fetchUrl}${page}`)
        const data = await res.json()
        setMoviesData(prev=>[...moviesData,...data.results])
        setPage(page+1)
    }

    useEffect(() => {
        
        const delayDebounceFn = setTimeout(async () => {
            setLoading(true)
            if (searchTerm != "") {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchTerm}&page=1`)
                setfetchUrl(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchTerm}&page=`)
                const data = await res.json()
                setMoviesData(data.results)
            } else {
                const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
                setfetchUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=`)
                const data = await res.json()
                setMoviesData(data.results)
            }
            setLoading(false)
        }, 500)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])


    return (
        <>
            {moviesData && <Hero {...moviesData[0]} loading={loading} />}
            <SearchBar searchTerm={searchTerm} changer={changer} />
            <Grid searchTerm={searchTerm} moviesData={moviesData} loader={loader} loading={loading} />
        </>
    )
}
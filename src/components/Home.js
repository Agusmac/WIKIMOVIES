import React from "react"

import Hero from "./Hero"
import SearchBar from "./SearchBar"
import Grid from "./Grid"

export default function Home() {
    const [moviesData, setMoviesData] = React.useState([])
    const [page, setPage] = React.useState(2)
    const [searchTerm, setSearchTerm] = React.useState("")
    const [fetchUrl, setfetchUrl] = React.useState("")

    function changer(e) {
        setSearchTerm(e.target.value)
    }

    async function loader() {
        const res = await fetch(`${fetchUrl}${page}`)
        const data = await res.json()
        console.log(data)
        console.log(fetchUrl+page)
        setMoviesData(prev=>[...moviesData,...data.results])
        setPage(page+1)
    }


    React.useEffect(async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        const data = await res.json()
        setfetchUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=`)
        setMoviesData(data.results)
    }, [])

    React.useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (searchTerm != "") {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchTerm}&page=1`)
                setfetchUrl(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchTerm}&page=`)
                const data = await res.json()
                setMoviesData(data.results)
                
            } else {
                const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
                setfetchUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=`)
                const data = await res.json()
                // setHeroData(data.results[0])
                setMoviesData(data.results)
            }
        }, 500)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])



    return (
        <>
            {moviesData && <Hero {...moviesData[0]} />}
            <SearchBar searchTerm={searchTerm} changer={changer} />
            <Grid searchTerm={searchTerm} moviesData={moviesData} loader={loader} />
        </>
    )
}
import React from "react"
import { Link } from 'react-router-dom'
// import noImg from '../images/noImg.webp';

export default function Grid({ searchTerm, moviesData, loader, loading }) {

    return (
        <div className="DAGRID">
            <h2>{searchTerm == "" ? "Popular/trending" : "Search Results"}</h2>
            {loading ? <div className="loaderloader"></div> : (
            <div className="movieGrid">
                    { moviesData && moviesData.map((movier, key) =>
                        <Link to={`/SingleMovie/${movier.id}`} key={key}>
                            <div className="indMovie" >
                                <img alt={movier.original_title} src={movier.poster_path ? `http://image.tmdb.org/t/p/w1280/${movier.poster_path}` : "https://t3.ftcdn.net/jpg/02/68/55/60/240_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg"} />
                                <div className="hider">
                                    <h2>{movier.original_title}</h2>
                                    <p>{movier.overview.substring(0, 150)}...</p>
                                </div>
                            </div>
                        </Link>
                    )}
                    
            </div>
            )}
            <div className="loaderer" onClick={loader}>Load More</div>
        </div>

    )
}


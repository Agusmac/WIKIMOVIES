import React from "react"

export default function SingleHero({movieData,directors}) {

    let styles2 = {
        backgroundImage: `url(http://image.tmdb.org/t/p/w1280/${movieData.backdrop_path}), 
linear-gradient(rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%)`,
        display: "grid"
    }

    return (
        <div className="hero-div kirk" style={styles2}>
        <div className='single-hero'>
            <img src={`http://image.tmdb.org/t/p/w1280/${movieData.poster_path}`} />
            <div className='single-hero-right' >
                <h2>{movieData.original_title}</h2>
                <br />
                <h3>Overview</h3>
                <br />
                <p>{movieData.overview}</p>
                <br />
                <h3>Genres</h3>
                <br />
                <div className='genreDiv'>
                {movieData&&movieData.genres.map((genre,key)=><div key={key} className="genre">{genre.name}</div>)}
                </div>
                <br />
                <div className='insideFlex'>
                    <div>
                    <h3>Rating</h3>
                    <br />
                    <div className="rate">{movieData.vote_average}</div>
                    </div>
                    <div className="fix2">
                    <h3>Director/s</h3>
                    <br/>
                        {directors&&directors.map((dir,key)=><p key={key}>{dir.name}</p>)}
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}
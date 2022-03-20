import React from "react"

export default function Hero({ backdrop_path, original_title, overview, loading }) {

    let styles2 = {
        backgroundImage: ` url(http://image.tmdb.org/t/p/w1280/${backdrop_path}), 
linear-gradient(rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%)`,
    }

    if (loading) return <div className="loaderloader"></div>
    
    return (
        <>
            <div className="hero-div" style={styles2}>
                <div className="hero-titler">
                    <div className="hero-text">
                        <h1>{original_title}</h1>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </>
    )

}
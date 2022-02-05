import React from "react"

export default function DataBar({movieData}) {
    
    return (
        <div className="searchDIV databar">
            <div className="smdata">Length: {movieData.runtime} minutes</div>
            <div className="smdata">Budget: ${movieData.budget}</div>
            <div className="smdata">Revenue: ${movieData.revenue}</div>
        </div>
    )
}
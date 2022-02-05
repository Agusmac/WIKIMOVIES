import React from "react"
import { Link } from 'react-router-dom'

export default function Cast({cast}) {
    return (
        <div className="caster">
        <h2>Cast</h2>
        <br/>
            <div className="castGrid">
                {cast && cast.map((member,key)=>
                    <Link to={`/SingleActor/${member.id}`}key={key}>
                <div className="castDiv" >
                    <img  src={member.profile_path?`http://image.tmdb.org/t/p/w780/${member.profile_path}`:"https://t3.ftcdn.net/jpg/02/68/55/60/240_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg"}/>
                    <div className="hider2">
                        <h3>{member.name}</h3>
                        <p>{member.character}</p>
                    </div>
                </div>
                </Link>
                )}
            </div>
        </div>
    )
}
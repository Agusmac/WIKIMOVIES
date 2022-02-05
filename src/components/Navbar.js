import React from "react"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                <h1>
                    WIKIMOVIES
                </h1>
            </Link>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
        </nav>
    )
}
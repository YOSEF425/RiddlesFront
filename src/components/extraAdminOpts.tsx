import { useState } from "react"
import { Link } from "react-router";
import '../style/extraFeatureNav.css'

export default function AdminNav(){
   

    return(
        <>
        <nav className='AdminNavbar'>
        <Link to="/admin/create">Create Riddle</Link>
        <Link to="/admin/display">Display Riddles</Link>
        <Link to="/admin/update">Update Riddle</Link>
        <Link to="/admin/delete">Delete Riddle</Link>
        <Link to="/admin/leaderboard">Show Leaderboard</Link>

        </nav>

        </>
    )
}
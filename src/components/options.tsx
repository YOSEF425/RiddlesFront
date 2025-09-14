import { Link } from "react-router";
import '../style/options.css'

export default function OptionPage(){
 

    return(
        <>
        <div className="optionsPage">
            <Link to="/" className='navBtn'>Home</Link>

            
     
        <div className="navPage">
        <nav className='firstRow'>
        <Link to="/admin/create" className="btn">Create Riddle</Link>
        <Link to="/admin/display" className="btn">Display Riddles</Link>
        </nav>
        <nav className="secondRow">
        <Link to="/admin/delete" className="btn">Delete Riddle</Link>
        <Link to="/admin/leaderboard" className="btn">Show Leaderboard</Link>

        </nav>
        </div>
        </div>
        
        
        
        </>
    )
}
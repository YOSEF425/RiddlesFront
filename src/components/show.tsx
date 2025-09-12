import { Link } from "react-router";
import '../style/show.css';

export default function Show() {
    return (
        <>
            
            <nav className="showFlex">
                <Link to="/admin/create">Create Riddle</Link>
                <Link to="/admin/display">Display Riddles</Link>
            </nav>

            <h3 className="adminsOnly">For Admins Only</h3>
            <nav className="adminNav">
                <Link to="/admin/update">Update Riddle</Link>
                <Link to="/admin/delete">Delete Riddle</Link>
                <Link to="/admin/leaderboard">Show Leaderboard</Link>
            </nav>
        </>
    );
}

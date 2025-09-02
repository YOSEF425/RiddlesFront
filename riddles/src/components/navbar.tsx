import { Link } from 'react-router';
import '../style/navbar.css'

export default function Navbar(){
    return(
        <>
        <nav className='Navbar'>
        <Link to="/">Home Page</Link>
        <Link to="/play">Play</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </nav>
        </>
    )
}
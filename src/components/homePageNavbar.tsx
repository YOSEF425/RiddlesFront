import { Link } from 'react-router';
import '../style/homenav.css'


export default function HomeNav(){
    return(
        <>
        <nav className='homenav'>
        <Link to="/play" className='navBtn'>Play</Link>
        <Link to="/register" className='navBtn'>Register</Link>
        </nav>
        </>
    )
}
import '../style/home.css'
import HomeNav from './homePageNavbar'
import AdminNav from './extraAdminOpts'
import { Link } from 'react-router'

export default function Home(){
    return(
        <>
        <div className='home'>
        <h1>Welcome to Riddle Game!</h1>
        <h4 className='quote'>What you seek is hidden in what you know</h4>
        <HomeNav/>
                <Link to="/admin">Extra features for admin and users only</Link>

        </div>
       
        
        

        </>
    )
}
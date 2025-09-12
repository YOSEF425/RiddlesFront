import '../style/home.css'
import AdminNav from './extraAdminOpts'
import { Link } from 'react-router'
import Riddle from './riddle'


export default function Home(){
    return(
        <>
        <div className='home'>
        <h1>Welcome to the Riddle Game!</h1>
        <h4 className='quote'>What you seek is hidden in what you know</h4>
        <img src="https://copilot.microsoft.com/th/id/BCO.753a31a8-aa22-42b4-943e-342ded47a7d2.png" alt="Riddles Game Logo" width="300" height="auto"/>

        <nav className='homenav'>

        <Link to="/play" className='navBtn playBtn' onClick={(e) => console.log(e)}>Play</Link>
        <Link to="/register" className='navBtn'>Register</Link>
        <Link to="/login" className='navBtn'>Login</Link>
        </nav>
                

        </div>
       
        
        

        </>
    )
}
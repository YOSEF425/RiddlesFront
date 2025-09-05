import { useState } from "react"
import { data, Link } from "react-router";
import '../style/extraFeatureNav.css'

export default function AdminNav(){
    const[name,setName] = useState('')
    const[password,setPassword] = useState('')
    const[identifyByToken,setIdentifyByToken] = useState('yes')
    const[isReg,setIsReg] = useState(false)
   
  const token = localStorage.getItem('authToken');

     const verify = async(e:any) => {
        e.preventDefault();
       const result = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          },
        });
       setIsReg(result.ok)
       if (result.ok) {
       alert('Login successful!');
       }else{
        alert('login failed')
       }
    }
    

    return(
        <>
        <form onSubmit={verify}>
            
     {/* isReg ?  */}
        <nav className='AdminNavbar'>
        <Link to="/admin/create">Create Riddle</Link>
        <Link to="/admin/display">Display Riddles</Link>
        <Link to="/admin/update">Update Riddle</Link>
        <Link to="/admin/delete">Delete Riddle</Link>
        <Link to="/admin/leaderboard">Show Leaderboard</Link>

        </nav>: 
        {/* <h1>You are'nt registered</h1> */}
        
        
        </form>
        </>
    )
}
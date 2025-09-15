import { useState } from "react"
import '../style/login.css'
import OptionPage from "./options"
import { useNavigate } from 'react-router-dom';


export default function Login(){
  const[name,setName] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate();

const handleSubmit = (e:any) => {
  e.preventDefault(); 
  verify();
  
};


  const handleName = (e:any) => {
    setName(e.target.value)
  }

   const handlePassword = (e:any) => {
    setPassword(e.target.value)
  }


const verify = async () => {
  console.log("hey there!")
  
  try {
    const response = await fetch('http://localhost:5000/api/riddles/checkUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, password })
    });

    const data = await response.json();
    if(data.token){
      localStorage.setItem('token',data.token)
       navigate('/options');
    }else{
      alert('User not found. Please sign up.');

    }
    
  }catch(error){
    console.log(error)
  }
}
  
  return(
    <>
    <div className="loginPage">
    <h1 className="title2">Log in here!</h1>

    <form onSubmit={handleSubmit} className="loginFlex">
      <input type="text" placeholder="Your Name" onChange={handleName} className="input"/>
      <input type="text" placeholder="Password" onChange={handlePassword}className="input"/>
      <br></br>
      <button type="submit" className="loginBtn">Login</button>
   </form>
   

   </div>

    </>
  )
}
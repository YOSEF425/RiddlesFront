import { useState } from "react"

export default function Login(){
  const[name,setName] = useState('')
  const[password,setPassword] = useState('')
  
  const handleName = (e:any) => {
    setName(e.target.value)
  }

   const handlePassword = (e:any) => {
    setPassword(e.target.value)
  }


  const verify = () => {

  }
  
  return(
    <>
    <form onSubmit={verify}>
      <input type="text" placeholder="Your Name" onChange={handleName}/>
      <input type="text" placeholder="Password" onChange={handlePassword}/>
      <button type="submit">Login</button>

    </form>

    </>
  )
}
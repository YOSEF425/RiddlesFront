// import { useState } from "react"
import { Link } from 'react-router';
import '../../style/riddleForm.css';

import { useEffect, useState } from "react"




export default function CreateRiddle(){
  const[catagory,setCatagory] = useState('')
  const[level,setLevel] = useState('')
  const[question,setQuestion] =useState('')
  const[answer,setAnswer] = useState('')

  const handleCat = (e:any) => {
    setCatagory(e.target.value)
  }

  const handleLev = (e:any) => {
    setLevel(e.target.value)
  }
  const handleQes = (e:any) => {
    setQuestion(e.target.value)
  }
  const handleAns = (e:any) => {
    setAnswer(e.target.value)
  }


  
  const upload = (e:any) => {
    e.preventDefault()
  

      fetch('http://localhost:5000/api/riddles/add',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({catagory,level,question,answer})
      })
    
    .then(res => {
      if(!res.ok){
         throw new Error('Error uploading riddle');
      }
      else{
        return res.text()
      }
    })
    .then(data => {
      alert('Your riddle has been uploaded successfully!')
    })
    .catch(err => {
        
        alert('Failed to upload riddle.');
      });
      
    
  }
  return(
    <>
    <Link to="/" className='navBtn'>Home</Link>

    <div className="background">
      <h1 className='title'>Add your riddle here!</h1>
    <form onSubmit={upload} className='form'>
      <input type="text" value={catagory} placeholder="Catagory" className='inp' onChange={handleCat}/>
      <input type="text" value={level} placeholder="Riddle Level (easy,medium,hard)" className='inp' onChange={handleLev}/>
      <input type="text" value={question} placeholder="Question" className='inp' onChange={handleQes}/>
      <input type="text" value={answer} placeholder="Answer" className='inp' onChange={handleAns}/>


     <button type="submit" className='upload'>Upload</button>
    </form>
    </div>

    </>
  )
}
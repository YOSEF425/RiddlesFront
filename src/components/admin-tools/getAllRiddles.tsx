import { useState } from "react"
import '../../style/getAllRiddles.css'

export default function GetAllRiddles(){
    const[riddles,setRiddles] = useState([])
    
    const getAll = async() => {
        try{
           const result = await fetch("http://localhost:5000/api/riddles/displayAll")
           const data = await result.json()
           console.log(data)
           if(data.message === "Invalid token"){
            alert('This is for admins only!')
           }
        }catch(error){
            console.log(`Error getting riddles ${error}`)
        }
        
    }

    return(
        <>
        <button onClick={getAll} className="button">Show all riddles</button>
            {riddles}
        </>
    )
}
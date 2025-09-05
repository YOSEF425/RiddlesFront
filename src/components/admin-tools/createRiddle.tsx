import { useState } from "react"
import '../../style/riddleForm.css';


export default function createRiddle(){
    const [riddleName,setRiddleName] = useState('')
    const [level,setLevel] = useState('')
    const [question,setQuestion] = useState('')
    const [answer,setAnswer] = useState('')

    const fetchCR = async(e: any) => {
      e.preventDefault()
        const result = await fetch('http://localhost:5000/api/riddles/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({riddleName,level,question,answer})
       });
       const worked = result.ok
       const data = await result.text()
       alert('Riddle added successfully!');
       
    }


    return(
      <>
      <h2 className="title">Add A Riddle</h2>
      <form className="riddleForm" onSubmit={fetchCR}>
        <input className="btn"
        type="text"
        placeholder="Riddle Name"
        value={riddleName}
        onChange={(element) => setRiddleName(element.target.value)}
        />
       
        <input className="btn"
        type="text"
        placeholder="Riddle Question"
        value={question}
        onChange={(element) => setQuestion(element.target.value)}
        />
        <input className="btn"
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(element) => setAnswer(element.target.value)}
        
        />
        <select value={level} onChange={(e) => setLevel(e.target.value)} className="choseLevel">
  <option value="">--Riddle Level--</option>
  <option value="Easy">Easy</option>
  <option value="Medium">Medium</option>
  <option value="Hard">Hard</option>
  
</select>

        <button type="submit" className="submit">Submit</button>
        <div>
          
        </div>
      </form>
      </>
    )
}
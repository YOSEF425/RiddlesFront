import { useState, useEffect } from 'react';
import Riddle from './riddle';
import '../style/play.css'

type RiddleType = {
  catagory: string;
  level: string;
  question: string;
  answer: string;
};

export default function Play() {
  const [riddles, setRiddles] = useState<RiddleType[]>([]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/riddles/play')
      .then(res => res.json())
      .then(data => 
        setRiddles(data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = () => {
  const current = riddles[index];
  if (input.trim().toLowerCase() === current.answer.trim().toLowerCase()) {
    setMessage('Good job!');
    setInput('');
    setIndex(prev => prev + 1); 
  } else {
    setMessage('Try again');
    setInput(''); 
  }
};

  if (index >= riddles.length) {
    return <p>All riddles completed!</p>;
  }

  const current = riddles[index];

  return (
    <div>
      <div className='playPage'>
        <div className='actualRiddle'>
      <Riddle
        catagory={current.catagory}
        level={current.level}
        question={current.question}
        input={input}
        setInput={setInput}
      />
      </div>
      
      <button onClick={handleSubmit} className='submitBtn'>Submit</button>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
}

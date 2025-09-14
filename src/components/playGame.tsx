// import { useState, useEffect } from "react";

import { useState } from "react"
import Riddle from "./riddle"

type Riddle = {
  catagory: string;
  level:string;
  question: string;
  answer: string;
};

// export default function PlayGame() {
//   const [riddles, setRiddles] = useState<Riddle[]>([]);
//   const [index, setIndex] = useState(0);
//   const [userAnswer, setUserAnswer] = useState('');
//   const [feedback, setFeedback] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/api/riddles/play')
//       .then(res => res.json())
//       .then(data => {
//         setRiddles(data);
//       });
//   }, []);

//   const current = riddles[index];

//   const checkAnswer = () => {
//     if (userAnswer.trim().toLowerCase() === current.answer.trim().toLowerCase()) {
//       setFeedback('Correct Answer!');
//     } else {
//       setFeedback('Wrong!');
//     }
//   };

//   const next = () => {
//     setUserAnswer('');
//     setFeedback('');
//     setIndex(prev => prev + 1);
//   };

//   if (!current) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{current.name}</h2>
//       <p>{current.question}</p>
//       <input
//         value={userAnswer}
//         onChange={e => setUserAnswer(e.target.value)}
//         placeholder="Your answer"
//       />
//       <button onClick={checkAnswer}>Submit</button>
//       <button onClick={next}>Next</button>
//       <p>{feedback}</p>
//     </div>
//   );
// }



export default function Play() {
  const [riddles, setRiddles] = useState<Riddle[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [input, setInput] = useState<string>('');

  const fetchRiddles = () => {
    fetch('http://localhost:5000/api/riddles/play')
      .then(res => res.json())
      .then((data: Riddle[]) => setRiddles(data))
      .catch(err => console.error(err));
  };

  const handleSubmit = () => {
    setInput('');
    setIndex(prev => prev + 1);
  };

  if (riddles.length === 0) {
    return (
      <div>
        <button onClick={fetchRiddles}>Start</button>
      </div>
    );
  }

  if (index >= riddles.length) {
    return <p>All riddles completed!</p>;
  }

  const current = riddles[index];

  return (
    <div>
      <h3>Category: {current.catagory}</h3>
      <p>Level: {current.level}</p>
      <p>{current.question}</p>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Your answer"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

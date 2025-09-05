import { useState, useEffect } from "react";

type Riddle = {
  name: string;
  question: string;
  answer: string;
};

export default function PlayGame() {
  const [riddles, setRiddles] = useState<Riddle[]>([]);
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/riddles/play')
      .then(res => res.json())
      .then(data => {
        setRiddles(data);
      });
  }, []);

  const current = riddles[index];

  const checkAnswer = () => {
    if (userAnswer.trim().toLowerCase() === current.answer.trim().toLowerCase()) {
      setFeedback('Correct Answer!');
    } else {
      setFeedback('Wrong!');
    }
  };

  const next = () => {
    setUserAnswer('');
    setFeedback('');
    setIndex(prev => prev + 1);
  };

  if (!current) return <p>Loading...</p>;

  return (
    <div>
      <h2>{current.name}</h2>
      <p>{current.question}</p>
      <input
        value={userAnswer}
        onChange={e => setUserAnswer(e.target.value)}
        placeholder="Your answer"
      />
      <button onClick={checkAnswer}>Submit</button>
      <button onClick={next}>Next</button>
      <p>{feedback}</p>
    </div>
  );
}

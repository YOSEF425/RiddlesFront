import { useState } from 'react';
import styles from '../style/play.module.css';

type Riddle = {
  category: string;
  level: string;
  question: string;
  answer: string;
};

export default function PlayGame() {
  const [riddles, setRiddles] = useState<Riddle[]>([]);
  const [guess, setGuess] = useState('');
  const [index, setIndex] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const current = riddles[index] ?? null;

  const getRiddles = async () => {
    const result = await fetch('http://localhost:5000/api/riddles/play');
    const data = await result.json();
    setRiddles(data);
  };

const checkAnswer = (guess: string) => {
  if (current && guess.toLowerCase() === current.answer.toLowerCase()) {
    setFeedbackMessage('Good job!');
    setGuess('');
    setTimeout(() => {
      setFeedbackMessage('');
      setIndex(index + 1);
    }, 1500); 
  } else {
    setFeedbackMessage('Try again!');
    setTimeout(() => {
      setFeedbackMessage('');
    }, 1000); 
  }
};


  return (
    <div className={styles.container}>
      {current && (
        <>
          <p className={styles.label}>Category: {current.category}</p>
          <p className={styles.label}>Level: {current.level}</p>
          <p className={styles.question}>{current.question}</p>
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Your Answer"
            className={styles.input}
          />
          <button className={styles.button} onClick={() => checkAnswer(guess)}>
            Enter
          </button>
          {feedbackMessage && (
            <p className={styles.feedback}>{feedbackMessage}</p>
          )}
        </>
      )}
      <button className={styles.loadButton} onClick={getRiddles}>
        Load Riddles
      </button>
    </div>
  );
}


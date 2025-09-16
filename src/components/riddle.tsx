import '../style/riddle.css'

type Riddle = {
  catagory: string;
  level: string;
  question: string;
  input: string;
  setInput: (value: string) => void;
};

export default function Riddle({ catagory, level, question, input, setInput }: Riddle) {
  return (
    <div>
      <div className="riddle">
      <div className='catagory'>Catagory: {catagory} </div>
      <div>Level: {level}</div>
      <div className='question'>Question: {question}</div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Your answer" className='input'
      />
      </div>
    </div>
  );
}

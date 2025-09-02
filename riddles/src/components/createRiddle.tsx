export default function CreateRiddle() {
  return (
    <form>
      
      <input name="riddlename" placeholder="Riddle Name" required />
      <input name="difficulty" placeholder="Difficulty" required />
      <input name="question" placeholder="Question" required />
      <input name="answer" placeholder="Answer" required />
      <button type="submit">Create Riddle</button>
    </form>
  );
}

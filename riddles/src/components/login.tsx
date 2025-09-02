export default function Login() {
  return (
    <form>
  
    
      <input name="name" placeholder="Name" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

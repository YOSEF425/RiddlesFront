import { useState } from "react";
import { useNavigate } from "react-router";
import '../style/register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const fetchFunc = async (e: React.FormEvent) => {
    e.preventDefault(); 

    try {
      const result = await fetch('http://localhost:5000/api/riddles/addPlayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
      });

      if (result.ok) {
      window.alert('User registered successfully!');
      navigate('/options'); 
    } else {
      window.alert(`Registration failed`);
    }
      
   
    }catch(error){
      console.log(error)
    }
  };

  return (
    <div>
      <div className="registerPage">
        <h2 className="title">Register Here!</h2>
        <form onSubmit={fetchFunc} className="regForm">
          <input 
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"

          />
          <button type="submit" className="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

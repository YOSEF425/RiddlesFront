import { useState } from "react";
import { useNavigate } from "react-router";
import '../style/register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const fetchFunc = async (e: React.FormEvent) => {
    e.preventDefault(); 

    try {
      const result = await fetch('http://localhost:5000/api/addUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
      });

      const data = await result.json();
      console.log(data)
      if (data.token) {
        setToken(data.token);
        localStorage.setItem('authToken', data.token);
        console.log('Token saved:', data.token);
        navigate('/show'); 
      } else {
        console.log('No token received');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <div className="reg">
        <h2 className="title">Register to System</h2>
        <form onSubmit={fetchFunc} className="regForm">
          <input 
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

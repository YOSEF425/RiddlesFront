import { useState } from "react";
import { data } from "react-router";
import '../style/register.css'


export default function Register() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [token,setToken] = useState('');


     const fetchFunc = async() => {
       
       const result = await fetch('http://localhost:5000/api/addUser', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, password })
       });
      const data = await result.json();
        if (data.token) {
          setToken(data.token)
           localStorage.setItem('authToken', data.token);
           console.log('Token saved:', data.token);
        } else {
            console.log('No token received');
        }
    }

    return (
    <div>
      <div className="reg">
      <h2 className="title">Register to System</h2>
      <form onSubmit={fetchFunc} className="regForm">
        <input 
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(element) => setName(element.target.value)}
        />
        <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(element) => setPassword(element.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      </div>
      
      
    </div>
  );

}


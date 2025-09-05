import { useState } from "react";
import { data, Link } from "react-router";

export default function Login() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const token = localStorage.getItem('authToken');

     const verify = async(e:any) => {
        e.preventDefault();
       const result = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          },
          
          body: JSON.stringify({ name, password })
          
       });
       if (result.ok) {
       alert('Login successful!');
       }else{
        alert('login failed')
       }
    }
    

    return (
    <div>
      <form onSubmit={verify}>
        <Link to="/admin">Extra features for admin and users only</Link>
      </form>
      
      
    </div>
  );

}

import { useRef, useState } from 'react';

export default function Register() {
  const [name, setName] = useRef('');
  const [password, setPassword] = useRef('');

 
  

  return (
    <div>
      <h2>Register</h2>
      <form>
      <input type="text" placeholder="Name" ref={nameRef} />
      <input type="password" placeholder="Password" ref={passwordRef} />
      <button type="submit">Register</button>
      </form>
    </div>
  );
}

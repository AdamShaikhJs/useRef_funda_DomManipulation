import React, { useRef, useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const preCount = useRef(0);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    name.current.style.border = '4px solid red';
    password.current.style.transform = 'scale(0.9)';
    email.current.focus();

    const user = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    console.log(user);
    name.current.value = '';
    email.current.value = '';
    password.current.value = '';
    console.log(user);
  };

  useEffect(() => {
    preCount.current = count;
    console.log(count); //optional useEffect only use for reRender
  }, [count]);

  return (
    <div>
      <h4> useRef useful for the get preious value!</h4>
      <h4>
        {' '}
        after- {count} Before- {preCount.current}{' '}
      </h4>
      <button onClick={() => setCount((pre) => pre + 1)}> Count+</button>

      <hr />
      <h4>useRef Form!</h4>
      <div className="boxinput">
        <label htmlFor="name">name</label>
        <input id={'name'} name="name" ref={name} />
      </div>
      <div className="boxinput">
        <label htmlFor="email">email</label>
        <input id="email" name="email" ref={email} />
      </div>
      <div className="boxinput">
        <label htmlFor="password">password</label>
        <input id="password" name="password" ref={password} />
      </div>
      <button onClick={handleSubmit}> Submit </button>
    </div>
  );
}

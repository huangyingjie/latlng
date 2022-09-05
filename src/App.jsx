import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import CustomHooks from './CustomHooks';
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  //const test = useState(10)
  //console.log(test); // number、function

  // Similar to componentDidMount and componentDidUpdate:
  // 每次render之后都执行
  // 1. Use the name state variable
  /*
  const [name, setName] = useState('Mary');

  // 2. Use an effect for persisting the form
  if (name !== '') {
    useEffect(function persistForm() {
      //localStorage.setItem('formData', name);
    });
  }

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    console.log(name + ' ' + surname);
  });
  */
  /*
  if (Math.random() > 0.5) {
    useState(1);
  }
  useState(2);
  */
  console.log(1111);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <CustomHooks />
    </div>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getLaunches } from './services/space-x';

function App() {
  const [capsules, setCapsules] = useState([]);   
  useEffect(()=>{
      const fetchData = async() =>{
          const lescapsules = await getLaunches();
          setCapsules(lescapsules);
      };
      fetchData();
  },[]);
  console.log(capsules);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

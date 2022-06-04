import logo from './logo.svg';
import './App.css';
import Messenger from './components/Messenger';
import {useEffect} from "react";

function App() {
  useEffect(() => {
    fetch('/user')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
      });
  }, []);

  return (
    <div className="App">
      <Messenger />
    </div>
  );
}

export default App;

import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState();
  const [key, setKey] = useState();

  const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setText(e.target.value);
  }

  const handleKeyChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setKey(e.target.value);
  }
  
  function encrypt(): any {

  }

  function decrypt(): any {

  }

  function bruteForce(): any {

  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="content">
        <form>
          <input type="text" className="form-contents form-input-text" size={100} name="inputText" placeholder="Input-Tekst"
          onChange={handleTextChange}/>
          <input type="text" className="form-contents form-key" size={5} maxLength={2} name="key" placeholder="Nøgle"
          onChange={handleKeyChange}/>
        </form>
        <button className="btn btn-default button-padding" value="Encrypt" onClick={encrypt}>Kryptér!</button>
        <button className="btn btn-default button-padding" value="Decrypt" onClick={decrypt}>Dekryptér!</button>
        <button className="btn btn-default button-padding hidden-button" onClick={bruteForce}>Giv mig mulighederne!</button>
        <output id="output-field" className="form-output"/>
        <output id="debug-field" className="form-output"/>
      </div>
    </div>
  );
}

export default App;

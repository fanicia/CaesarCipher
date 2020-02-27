import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  const text =  useFormInput();
  const key = useFormInput();
    
  const encrypt = (): any => {

  }

  const decrypt = (): any => {

  }

  const bruteForce = (): any => {

  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="content">
        <form>
          <input type="text" className="form-contents form-input-text" size={100} name="inputText" placeholder="Input-Tekst"
          onChange={text.onChange}/>
          <input type="text" className="form-contents form-key" size={5} maxLength={2} name="key" placeholder="Nøgle"
          onChange={key.onChange}/>
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


const useFormInput = (): any => {
  const [value, setValue] = useState();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  }
}
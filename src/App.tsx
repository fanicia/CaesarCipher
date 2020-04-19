import React from 'react';
import { useState } from 'react';
import logo from './lock.png';
import './App.scss';
import { CaesarEngine } from './CaesarEngine';

export default function App() {
  const text =  useFormInput();
  const key = useFormInput();
  const caesarEngine = new CaesarEngine();

  const encrypt = (): void => {
    const cipherText = caesarEngine.encrypt(text.value, key.value);
    setOutput(cipherText);
  }

  const decrypt = (): void => {
    const message = caesarEngine.decrypt(text.value, key.value);
    setOutput(message);
  }

  const bruteForce = (): void => {
    var resultHtmlString = "<ol class='list-group'>";
    const bruteForceStrings: string[] = caesarEngine.bruteForce(text.value);
    for (var i = 1; i < bruteForceStrings.length; i++) {
      resultHtmlString = resultHtmlString + "<li class='list-group-item'>" + bruteForceStrings[i] + "<span class='badge badge-primary badge-pill'>" + i + "</span> </li>";
    }
    resultHtmlString = resultHtmlString + "</ol>";

    setOutput(resultHtmlString);
  }

  const setOutput = (output: string): void => {
    const outputElement : HTMLElement | null = document.getElementById("output-field")
    if (outputElement) {
      outputElement.innerHTML = output;
    }
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
  const [value, setValue] = useState<string>();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  }
}
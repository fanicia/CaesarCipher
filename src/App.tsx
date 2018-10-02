import * as React from 'react';
import './App.css';
import logo from './logo.svg';

class App extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {
      input: '',
      bruteForce: false,
      key:'1'
    }
  }

  function encrypt(params:type) {
    
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!!!!</h1>
        </header>
        <div>
          <form>
            <input type="text" className="form-contents form-input-text" size={100} name="firstname" placeholder="Text to encrypt/decrypt"/>
            <input type="text" className="form-contents form-key" size={3} maxLength={2} name="lastname" placeholder="Key"/>
          </form>
          <button className="btn btn-default button-padding" value="Encrypt">Encrypt</button>
          <button className="btn btn-default button-padding" value="Decrypt">Decrypt</button>
          <output id="output-field" className="form-output">Output</output>
        </div>
      </div>
    );
  }
}

export default App;

import * as React from 'react';
import './App.css';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!!!!</h1>
        </header>
        <div>
            <form>
              <p>Text to encrypt/decrypt:</p>
              <input type="text" name="firstname"/>
              <p>Key:</p>
              <input type="text" name="lastname"/>
            </form>
            <button className="btn btn-default" value="Encrypt">Encrypt</button>
            <button className="btn btn-default" value="Decrypt">Decrypt</button>
        </div>
      </div>
    );
  }
}

export default App;

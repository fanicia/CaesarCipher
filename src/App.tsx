import * as React from 'react';
import './App.css';
import logo from './logo.svg';

interface IProperties {};

type State = {
  bruteForce?: boolean,
  inputText?: string,
  key?: string
}
class App extends React.Component<IProperties, State> {
  constructor(props:any) {
    super(props);
    this.state = {
      bruteForce: false,      
      inputText: '',
      key:'0'
    }
    this.handleChange = this.handleChange.bind(this);
    this.encrypt = this.encrypt.bind(this);
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
            <input type="text" className="form-contents form-input-text" size={100} name="inputText" placeholder="Text to encrypt/decrypt"
            onChange={this.handleChange}/>
            <input type="text" className="form-contents form-key" size={3} maxLength={2} name="key" placeholder="Key"/>
          </form>
          <button className="btn btn-default button-padding" value="Encrypt" onClick={this.encrypt} >Encrypt</button>
          <button className="btn btn-default button-padding" value="Decrypt">Decrypt</button>
          <output id="output-field" className="form-output">Output</output>
        </div>
      </div>
    );
  }
  
  private handleChange(event:any) {
    this.setState({[event.target.name]: event.target.value});
  }

  private encrypt() {
    alert("State is now set to: inputText: " + this.state.inputText + "key: " + this.state.key)
  }
}

export default App;

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
      key:''
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
            <input type="text" className="form-contents form-key" size={3} maxLength={2} name="key" placeholder="Key"
            onChange={this.handleChange}/>
          </form>
          <button className="btn btn-default button-padding" value="Encrypt" onClick={this.encrypt} >Encrypt</button>
          <button className="btn btn-default button-padding" value="Decrypt">Decrypt</button>
          <output id="output-field" className="form-output">Output</output>
          <output id="debug-field" className="form-output">Debug line</output>
        </div>
      </div>
    );
  }
  
  private handleChange(event: any) { //This use of any is ugly and should be fixed
    this.setState({[event.target.name]: event.target.value});
    document.getElementById("debug-field").innerHTML = "state:  " + [event.target.name] + " value: " + event.target.value;
  }

  private encrypt() {
    //alert("State is now set to: inputText: " + this.state.inputText + "key: " + this.state.key)
    document.getElementById("output-field").innerHTML = "State is now set to: " + this.state.inputText + "  key: " + this.state.key;
  }
}

export default App;

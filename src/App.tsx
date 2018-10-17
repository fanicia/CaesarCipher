import CaesarEngine from './CaesarEngine';
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

  private caesarEngine: CaesarEngine;

  constructor(props:any) {
    super(props);
    this.state = {
      bruteForce: false,      
      inputText: '',
      key:''
    }
    this.caesarEngine = new CaesarEngine();
    this.handleChange = this.handleChange.bind(this);
    this.encrypt = this.encrypt.bind(this);
    this.decrypt = this.decrypt.bind(this);
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
          <button className="btn btn-default button-padding" value="Encrypt" onClick={this.encrypt}>Encrypt</button>
          <button className="btn btn-default button-padding" value="Decrypt" onClick={this.decrypt}>Decrypt</button>
          <output id="output-field" className="form-output">Output</output>
          <output id="debug-field" className="form-output"/>
        </div>
      </div>
    );
  }
  
  private handleChange(event: any) { //This use of any is ugly and should be fixed
    this.setState({[event.target.name]: event.target.value});
    //document.getElementById("debug-field").innerHTML = "state:  " + [event.target.name] + " value: " + event.target.value;
  }

  private encrypt() {
    let keyInt = parseInt(this.state.key);
    this.setOutput(this.caesarEngine.encrypt(this.state.inputText, keyInt));
  }

  private decrypt() {
    let keyInt = parseInt(this.state.key);
    this.setOutput(this.caesarEngine.decrypt(this.state.inputText, keyInt));
  }

  private setOutput(output:string) {
    document.getElementById("output-field").innerHTML = output;
  }
}

export default App;

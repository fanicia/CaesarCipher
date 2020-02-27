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
    this.bruteForce = this.bruteForce.bind(this);
  }
  
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Velkommen til Cæsarsubstitution Version 1.0</h1>
        </header>
        <div>
          <form>
            <input type="text" className="form-contents form-input-text" size={100} name="inputText" placeholder="Input-Tekst"
            onChange={this.handleChange}/>
            <input type="text" className="form-contents form-key" size={5} maxLength={2} name="key" placeholder="Nøgle"
            onChange={this.handleChange}/>
          </form>
          <button className="btn btn-default button-padding" value="Encrypt" onClick={this.encrypt}>Kryptér!</button>
          <button className="btn btn-default button-padding" value="Decrypt" onClick={this.decrypt}>Dekryptér!</button>
          <button className="btn btn-default button-padding hidden-button" onClick={this.bruteForce}>Giv mig mulighederne!</button>
          <output id="output-field" className="form-output"/>
          <output id="debug-field" className="form-output"/>
        </div>
      </div>
    );
  }
  
  private handleChange(event: any) { //This use of any is ugly and should be fixed
    this.setState({[event.target.name]: event.target.value});
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

  private bruteForce() {
    let resultArray = new Array(27);
    let resultHtml = "<ol class='list-group'>";
    for (var i = 1; i <= 28; i++) {
      resultArray[i] = this.caesarEngine.decrypt(this.state.inputText, i);
      resultHtml = resultHtml + "<li class='list-group-item'>" + this.caesarEngine.decrypt(this.state.inputText, i) + "<span class='badge badge-primary badge-pill'>" + i + "</span>" +  "</li>";
    }
    resultHtml = resultHtml + "</ol>";
    this.setOutput(resultHtml);
  }
}

export default App;

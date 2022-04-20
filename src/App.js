import React, {Component} from 'react';
import Title from "./Components/Title";
import Content from "./Components/Content.js";
import './App.css';
import { render } from 'react-dom';

class App extends Component {
  render(){
  return (
    <div className="App">
      
        <Title></Title>        
      
        <Content></Content>

        <Content></Content>
      

    </div>
  );
  }
}

export default App;

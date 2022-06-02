import React, {Component} from 'react';
import Title from "./Components/Title";
import Content from "./Components/Content.js";
import ApiCall from "./Components/ApiCall.js";
import TestFunction from "./Components/TestFunction.js";
import './App.css';
import { render } from 'react-dom';

const App = () => {
  return (
    <div className="App">
      
        <Title></Title>        
      
        <Content></Content>

        <Content></Content>


        <TestFunction></TestFunction>

    </div>
  );
}
export default App;

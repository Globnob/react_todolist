import './App.css';
import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import Todo from './Todo';

function App() {
  return (
    <div>
    <Header/>
    <Intro nextNode={<Todo/>}/>
    </div>
  );
}

export default App;

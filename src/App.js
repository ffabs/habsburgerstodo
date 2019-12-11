import React, { Component } from 'react';
import './App.css'; 
import List from './components/List';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>What should I do today?</h1>
        <List />
      </div>
    );
  }
}
 
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
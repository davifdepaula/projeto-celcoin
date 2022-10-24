import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lista de Compras</h1>
        <ul>
          <li>Pão</li>
          <li>Banana</li>
          <li>Milk Shake de Doce de Leite</li>
          <li>Nutella</li>
          <li>Sorvete</li>
        </ul>
      </div>
    );
  }
}

export default App;

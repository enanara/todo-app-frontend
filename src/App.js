import React from 'react';

import Header from "./Header";
import ToDo from "./todo/ToDo";

import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <ToDo />
      </div>
    );
  }
}



export default App;

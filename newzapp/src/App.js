import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import Newz from './components/Newz';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Newz pageSize={10} country="us" category="science"/>
      </>
    )
  }
}


import React, { Component } from 'react';
import './App.css';
import {Header} from './Header';
import {Menu} from './Menu';
import {Main} from './Main';
import Background from './DSC05330.JPG'



const AppStyle={
  height:'1080px',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position:'relative'
}
class App extends Component {
  render() {
    return (
      <div className="App" style={AppStyle}>
        <Header name='Trolog' />
        <div style={{position:'relative', display:'inline-block'}}>
           <Main name='' />
           <Menu name='Menu' />
        </div>
      </div>
    );
  }
}

export default App;

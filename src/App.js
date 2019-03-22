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
  state={
    calendarA:{},
    calendarB:[],
    calendarC:[],
    calendarD:[],
    calendarE:[],
    calendarF:[],
    calendarG:[],
    contacts:[],
    contactsB:[],
    contactsC:[],
    contactsD:[],
    contactsE:[],
    contactsF:[],
    contactsG:[],
    

  }
  date=()=>{
    
    let a=Math.floor((Math.random()*30)+1);
    a=a.toString();
    return a
    
    }
  componentDidMount(){
    fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2019/3/"+this.date())
    .then(res=>res.json())
    .then(info=>this.setState({calendarA:info, contacts:info.celebrations[0].title}))

    fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2019/3/"+(()=>Math.floor((Math.random()*30)+1))())
    .then(res=>res.json())
    .then(infoA=>this.setState({calendarB:infoA, contactsB:infoA.celebrations[0].title}))

    fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2019/3/"+(()=>Math.floor((Math.random()*30)+1))())
    .then(res=>res.json())
    .then(infoA=>this.setState({calendarC:infoA, contactsC:infoA.celebrations[0].title}))

    fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2019/3/"+(()=>Math.floor((Math.random()*30)+1))())
    .then(res=>res.json())
    .then(infoA=>this.setState({calendarD:infoA, contactsD:infoA.celebrations[0].title}))

    fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2019/3/"+(()=>Math.floor((Math.random()*30)+1))())
    .then(res=>res.json())
    .then(infoA=>this.setState({calendarE:infoA, contactsE:infoA.celebrations[0].title}))

    fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2019/3/"+(()=>Math.floor((Math.random()*30)+1))())
    .then(res=>res.json())
    .then(infoA=>this.setState({calendarF:infoA, contactsF:infoA.celebrations[0].title}))

    fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2019/3/"+(()=>Math.floor((Math.random()*30)+1))())
    .then(res=>res.json())
    .then(infoA=>this.setState({calendarG:infoA, contactsG:infoA.celebrations[0].title}))

    fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2019/3/"+(()=>Math.floor((Math.random()*30)+1))())
    .then(res=>res.json())
    .then(infoA=>console.log(infoA.celebrations))

    
  }
  render() {
    return (
      <div className="App" style={AppStyle}>
        <Header name='Trolog Calendar' />
        <div style={{position:'relative', display:'inline-block'}}>
           <Main name='' date={this.state.calendarA.date} 
           dateB={this.state.calendarB.date}
           dateC={this.state.calendarC.date} 
           dateD={this.state.calendarD.date}
           dateE={this.state.calendarE.date}
           dateF={this.state.calendarF.date}
           dateG={this.state.calendarG.date}

           weekday={this.state.calendarA.weekday}
           weekdayB={this.state.calendarB.weekday}
           weekdayC={this.state.calendarC.weekday}
           weekdayD={this.state.calendarD.weekday}
           weekdayE={this.state.calendarE.weekday}
           weekdayF={this.state.calendarF.weekday}
           weekdayG={this.state.calendarG.weekday}
           
           celebrations= {this.state.contacts}
           celebrationsB= {this.state.contactsB}
           celebrationsC= {this.state.contactsC}
           celebrationsD= {this.state.contactsD}
           celebrationsE= {this.state.contactsE}
           celebrationsF= {this.state.contactsF}
           celebrationsG= {this.state.contactsG}
           
           />
           <Menu name='Menu' />
        </div>
      </div>
    );
  }
}

export default App;

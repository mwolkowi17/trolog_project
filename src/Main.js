import React from 'react'
import {Status} from './Status'
import {Card} from './Card'

const MainStyle={
    position: 'relative',
    float: 'left',
    width: '1180px',
    border: '',
    marginRight: '20px',
}

export class Main extends React.Component{
    render(){
        return(
            <div style={MainStyle}>
               <div>{this.props.name}</div>
               <Status name='Status' />
               <div style={{position:'relative', display:'inline-block'}}>
                  <Card name='Card' date={this.props.date} weekday={this.props.weekday} celebrations={this.props.celebrations} source='https://source.unsplash.com/collection/190727'/>
                  <Card name='Card' date={this.props.dateB} weekday={this.props.weekdayB} celebrations={this.props.celebrationsB} source='https://source.unsplash.com/collection/190728'/>
                  <Card name='Card' date={this.props.dateC} weekday={this.props.weekdayC} celebrations={this.props.celebrationsC} source='https://source.unsplash.com/collection/190723'/>
                  <Card name='Card' date={this.props.dateD} weekday={this.props.weekdayD} celebrations={this.props.celebrationsD} source='https://source.unsplash.com/collection/190728'/>
                  <Card name='Card' date={this.props.dateE} weekday={this.props.weekdayE} celebrations={this.props.celebrationsE} source='https://source.unsplash.com/collection/190'/>
                  <Card name='Card' date={this.props.dateF} weekday={this.props.weekdayF} celebrations={this.props.celebrationsF} source='https://source.unsplash.com/collection/145698'/>
                  <Card name='Card' date={this.props.dateG} weekday={this.props.weekdayG} celebrations={this.props.celebrationsG} source='https://source.unsplash.com/random'/>
                  
               </div>
            </div>
        )
    }
}
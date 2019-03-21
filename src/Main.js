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
                  <Card name='Card'/>
                  <Card name='Card'/>
                  <Card name='Card'/>
                  <Card name='Card'/>
                  <Card name='Card'/>
                  <Card name='Card'/>
                  <Card name='Card'/>
               </div>
            </div>
        )
    }
}
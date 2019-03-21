import React from 'react';
import {ContactList} from './ContactList'
import {MemberList} from './MemberList'

const MenuStyle={
    position:'realtive',
    float:'left',
    width:'300px',
    border:'solid 1px white',
    borderBottomLeftRadius: '3px',
    borderTopLeftRadius:'3px',
    backgroundColor: 'ghostwhite',
    color:'grey'
}



export class Menu extends React.Component{
    state={
        contacts:[]
    }
    componentDidMount(){
        fetch("https://randomuser.me/api/?format=json&results=5")
        .then(res=>res.json())
        .then(data=>this.setState({contacts:data.results}))
        fetch("https://randomuser.me/api/?format=json&results=5")
        .then(res=>res.json())
        .then(info=>console.log(info))

    }
    render(){
        return(
            <div style={MenuStyle}>{this.props.name}
                <div>
                    <input type='text' style={{position:'relative',height:'30px', width:'240px',
                marginTop:'12px', borderRadius:'4px', backgroundColor:'gainsboro'}}></input>
                    <p><b>Members</b></p>
                    <MemberList contacts={this.state.contacts} />
                    <input type='text' style={{position:'relative',height:'30px', width:'240px',
                borderRadius:'4px', backgroundColor:'gainsboro'}}></input>
                    <p><b>Activity</b></p>
                    <ContactList contacts={this.state.contacts} />
                </div>
            </div>
        )
    }
}
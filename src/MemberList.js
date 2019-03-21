import React from 'react';
import {MemberItem} from './MemberItem'

export class MemberList extends React.Component{

    memberToMemberItem = contact =>{
        const avatarUrl = contact.picture.thumbnail;
        const key = contact.key;
        return  <MemberItem  key={key} avatarUrl={avatarUrl} />
    }

    render(){
        return(
            
            <ul style={{position:'relative', display:'inline-block', marginRight:'35px'}}>
                {this.props.contacts.map(this.memberToMemberItem)}
            </ul>
            
        )
    }
}
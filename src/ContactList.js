import React from 'react'
import {ContactItem} from './ContactItem'

export class ContactList extends React.Component{
    contactToContactItem = contact => {
        const avatarUrl = contact.picture.thumbnail;
        const { title, first, last } = contact.name;
        const name = `${title} ${first} ${last}`.trim();
        const phone = contact.phone;
        const {street, city, state} = contact.location;
        const location = `${street}, ${city}, ${state}`.trim();
        const key = contact.key
        return <ContactItem key={key} avatarUrl={avatarUrl} name={name} phone={phone} location={location} />;
      };
    
    
    render(){
        return(
            <ul>
                {this.props.contacts.map(this.contactToContactItem)}
            </ul>
        )
    }
}
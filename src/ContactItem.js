import React from 'react';

const ListStyle={
    listStyleType:'none',
    borderBottom:'solid 1px silver',
    padding:'12px',
    position:'relative',
    display:'block'
}

export const ContactItem = ({ avatarUrl, name, location, key }) => {
    return (
      <li className="item" style={ListStyle} key={key} >
         <div  style={{position:'relative', display:'inline-block',float:'left' }} >
            <img src={avatarUrl} style={{position:'relative', float:'left'}} className="ui mini rounded image" alt="" />
            <h4 className="header" style={{position:'relative', float:'left', marginLeft:'12px', marginRight:''}}>{name}</h4>
         </div>
        <div className="content">
          <br/>
          <br/>
          <br/>
             <div style={{textAlign:'left'}} className="description"><b>Adress: </b>{location}</div>
          
        </div>
      </li>
    );
  };
  
import React from 'react';

const HeaderStyle={
    backgroundColor:'black',
    filter:'opacity(20%)',
    height:'50px',
    color:'white',
    paddingTop:'16px',
    position:'relative'
}

export const Header=(props)=>{
    return(
        <div style={HeaderStyle}>
            <div style={{position:'relative', float:'left'}}>
              <span style={{marginLeft:'50px', border:'solid 1px white', borderRadius: '6px', paddingBottom: '8px', paddingLeft: '6px', paddingTop: '5px'}}>Boards </span>
              <span>
                 <input type='text'style={{position:'relative', bottom:'', height:'30px', width:'300px', marginLeft:'20px'}}></input>
              </span>
              <span style={{marginLeft:'300px'}} > <b>{props.name}</b> </span>
              <span style={{marginLeft:'500px', border:'solid 1px white', borderRadius: '6px',
               paddingBottom: '8px', paddingLeft: '10px', paddingTop: '5px', paddingRight:'6px'}}>
               <b>+</b> </span>
               <span style={{marginLeft:'20px', border:'solid 1px white', borderRadius: '6px',
               paddingBottom: '8px', paddingLeft: '6px', paddingTop: '5px', paddingRight:'6px'}}>
               <b>New User</b> </span>
            </div>  
        </div>      
    )
}
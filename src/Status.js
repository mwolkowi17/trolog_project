import React from 'react';


const StatusStyle={
    height:'50px',
    paddingTop:'16px',
    position:'relative',
    color:'grey',
    paddingLeft:'18px'

}

export const Status = (props) =>{
    return(
        <div style={StatusStyle}>
           <div style={{position: 'relative', float:'left'}}>
              <span> <b> The Great Kitchen Redesign </b> </span>
              <span style={{marginLeft:'30px'}}> Taco's Organization </span>
              <span style={{marginLeft:'50px'}}> Public </span>
           </div>
        </div>
    )
}
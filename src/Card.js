import React from 'react';

const CardStyle={
    width:'262px',
    border: 'solid 1px lightgray',
    backgroundColor:'lightgray',
    borderRadius: '4px',
    position:'relative',
    float:'left',
    margin:'15px'
}
const InnerCardStyle={
    border:'solid 1px white',
    backgroundColor: 'white',
    borderRadius: '4px',
    position: 'relative',
    margin:'6px',
    padding:'4px',
    textAlign:'left'
}

export const Card =(props)=>{
    return(
        <div style={CardStyle}>
           <p><b>Ideas</b></p>
           <p style={InnerCardStyle}> {props.date}</p>
           <div style={InnerCardStyle}>
               <p style={{marginTop:'5px'}}>{props.weekday}</p>
               <img src={props.source} alt='random' width='140px' height='80px' style={{marginLeft:'48px'}}></img>
               <p>{props.celebrations}</p>
           </div>
           <p style={InnerCardStyle}> footer information</p>
           <p>Add card...</p>
        </div>
    )
}
import React from 'react';

export const MemberItem = ({avatarUrl,key})=>{
    return( 
        <li key={key} style={{position:'realtive', float:'left', listStyleType:'none'}}>
            <img src={avatarUrl} height='45px' width='45px' className="ui mini rounded image" alt="" />
        </li>

    )
}
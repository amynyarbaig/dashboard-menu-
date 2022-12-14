import React from 'react';
import '../App.css';
import {SidebarData} from './SidebarData'

function Sidebar() {
  return (
    <div className="Sidebar">
        <ul className="Sidebarlist">
        {SidebarData.map((val, key)=>{
            return (<li key={key} className="row" id={window.location.pathname === val.link ?"active": ""}onClick={() =>{ window.location.pathname =val.link;
            }}
            >
              
               <div id="icon"></div><div id="title">{val.icon}</div>{" "}
               <div>  
                   {val.title}
                   </div>
               </li>
            );
    })}
    </ul>
    </div>  
  )
}

export default Sidebar  ;
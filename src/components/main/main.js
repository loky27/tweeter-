import React from 'react';
import PrimaryCol from '../primaryCol/primary-col';
import SidebarCol from '../sidebarCol/sidebar-col';
import './mai.css'
const Main = (props) => {
    return (
        <div className="t-main">
            <PrimaryCol profileUrl={props.profileUrl} />
            <SidebarCol profileUrl={props.profileUrl}  />
        </div>
    )
}

export default Main;
import React from 'react';
import Trends from '../trends/trends';
const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            <div className="t-col-container">
                <Trends />
            </div>
        </div>
    )
}

export default SidebarCol;
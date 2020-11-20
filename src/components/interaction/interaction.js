import React from 'react';
import './interaction.css';
import {
    HeartSolid,
    LinkOutline,
    ChatOutline
} from "@graywolfai/react-heroicons";
const Interaction = (props) => {
    return (
    <div class="flex-container">
        < div >
            <div  >
                <ChatOutline/>
            </div>
            {props.interaction.comments}  
        </div >
        <div>
            <div className=""  onClick={()=>props.interactions.totweet(props.index)}>
                <LinkOutline/>
            </div>
            {props.interaction.retweets}
        </div>
        <div>
            <div className="" onClick={()=>props.interactions.tolikes(props.index)}>
            <HeartSolid/>
            </div>
            {props.interaction.likes}
        </div>
    </div>
        )
}
export default Interaction;
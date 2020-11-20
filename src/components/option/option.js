import React from 'react';
import {TrashOutline} from '@graywolfai/react-heroicons';
import "./option.css"
export default function Options(props) {
    return (
        <div className="contextual-dropdown count-svg">
            <div className="contextual-dropdown__row" onClick={() => props.remove.removeTweet(props.index)}>
                <TrashOutline />
                <span>Eliminar</span>
            </div>
        </div>
    )
}
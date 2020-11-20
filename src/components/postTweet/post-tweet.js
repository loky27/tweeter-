import React from 'react';
import './styles.css';

export default function PostTweet (props) {
    return (
        <div>
            <div className="t-row t-post-tweet">
                <div className="t-profile-img">
                    <img src={props.profileUrl.url} alt="profile"/>
                </div>
                
                    <input
                        id="btn-input"
                        type="text"
                        placeholder="¿Qué está pasando?"
                        value={props.newtweet.NewTweet }
                        onChange={props.newtweet.InImput}/>
                    <div className="t-post-options" >
                        
                        <button onClick={props.newtweet.setweet}>Twittear</button>
                    </div>
                

            </div>
        </div>
    )
}


import React from 'react';
import Interaction from "../interaction/interaction";
import './styles.css';
import {DotsVerticalOutline} from '@graywolfai/react-heroicons';
class Tweet extends React.Component{


    render(){
        return (
            <div className="tweet-container">
                <div className="nab">
                    
                        <div className="row">
                            <div className="c1">
                                <img src={this.props.profileUrl} alt="profile" />
                            </div>
                            <div className="c2">
                                    <h6>{this.props.profile}</h6>
                                    <h6>{this.props.username}</h6>           
                            </div>
                        </div>
                        <div className="c3">
                            <div className="count-svg">
                                <div>
                                    <DotsVerticalOutline/>                           
                                </div>
                            </div>
                        </div>
                    
                </div>
                <div className="row">
                    <p className="content">                
                        {this.props.content}
                    </p>
                </div>
                <div>
                    <Interaction interaction={this.props.interaction}interactions={this.props.interactions}index={this.props.index}/>
                </div>
            </div>
        )
    }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.
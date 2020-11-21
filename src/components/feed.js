import React from "react";
import Tweet from "./tweet/tweet";


class Feed extends React.Component {
    render() {
        return (
            <div>
               
                {
                    this.props.tweets.map( (tweet,index) => {
                        return (
                            
                            <Tweet
                                profile={tweet.profile}
                                username={tweet.username}
                                content={tweet.content}
                                interaction={tweet.interaction}
                                interactions = {this.props.interactions}
                                opciones={tweet.optionmenu}
                                index={index}
                                profileUrl={tweet.url}
                            />
                        )
                    })
                }
                
            </div>
        );
    }
    }

export default Feed;
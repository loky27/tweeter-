import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed
        }
    }

    render() {

        const {profile, profileName, username, content, display,interaction} = {
            profile: "",
            profileName: "",
            username: "",
            content: "",
            display: "",
            interaction:""
        };

        return (
            <div>
                {
                    this.state.tweets.map( tweet => {
                        return (
                            <Tweet
                                profile={tweet.profile}
                                profileUrl={profileName}
                                username={tweet.username}
                                content={tweet.content}
                                interaction={tweet.interaction}
                            />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;
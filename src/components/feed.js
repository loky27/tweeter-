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
    likes = (index) => {
        let ones=this.state.tweets[index].like
        let one=this.state.tweets[index]
        if (!ones) {
            let likeson=[...this.state.tweets];
            likeson[index].like=!likeson[index].like;
            likeson[index].interaction.likes ++;
            this.setState({tweet: likeson})
            alert(one.interaction.likes)
        }
        else{
            let likeson=[...this.state.tweets];
            likeson[index].like=!likeson[index].like;
            likeson[index].interaction.likes --;
            this.setState({tweet: likeson})
            alert(one.interaction.likes)
        }
      };
    render() {
        const interactions= {
            tolikes: this.likes,
            removeCountryFn: this.removeCountry,
        }
        const {profile, username, content, display,interaction} = {
            profile: "",
            username: "",
            content: "",
            display: "",
            interaction:""
        };

        return (
            <div>
                {
                    this.state.tweets.map( (tweet,index) => {
                        return (
                            <Tweet
                                profile={tweet.profile}
                                username={tweet.username}
                                content={tweet.content}
                                interaction={tweet.interaction}
                                interactions = {interactions}
                                index={index}
                            />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;
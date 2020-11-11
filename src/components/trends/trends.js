import React from "react";
import News from "../news/news";
import {notice} from '../../Notice';

class Trends extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: notice
        }
    }

    render() {

        const {Notice, title, username, contentnotice,Url,  category,interaction} = {
            Notice: "",
            title: "",
            username: "",
            contentnotice: "",
            category: "",
            interaction:""
        };

        return (
            <div>
                {
                    this.state.tweets.map( tweet => {
                        return (
                            <News
                            title={tweet.title}
                            profileUrl={tweet.Url}
                            category ={tweet.category}
                            username={tweet.username}
                            contentnotice={tweet.contentnotice}
                            interaction={tweet.interaction}
                            Notice={tweet.Notice}
                            />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Trends;
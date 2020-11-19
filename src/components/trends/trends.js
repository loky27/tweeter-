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
        return (
            <div>
                {
                    this.state.tweets.map( tweet => {
                        return (
                            <News
                            title={tweet.title}
                    
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
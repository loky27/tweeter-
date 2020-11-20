import React from 'react';
import PostTweet from '../postTweet/post-tweet';
import Feed from '../feed';
import './styles.css'
import {feed} from '../../source';
class PrimaryCol extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed,
            newTweet: ""
        }
    }
    likes = (index) => {
        let ones = this.state.tweets[index].like
        let one = this.state.tweets[index]
        if (!ones) {
            let likeson = [...this.state.tweets];
            likeson[index].like = !likeson[index].like;
            likeson[index].interaction.likes++;
            this.setState({tweet: likeson})
        } else {
            let likeson = [...this.state.tweets];
            likeson[index].like = !likeson[index].like;
            likeson[index].interaction.likes--;
            this.setState({tweet: likeson})
        }
    };
    removeTweet = (index) => {
        let tweetsClone = [...this.state.tweets];
        tweetsClone.splice(index, 1);
        this.setState({tweets: tweetsClone});
    }
    retweet = (index) => {
            let tweetson = [...this.state.tweets];
            tweetson[index].interaction.retweets++;
            this.setState({tweet: tweetson})
            let messagesClone2 = [...this.state.tweets];
            let cloneinfo = {like : false,
                optionmenu : false,
                url : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-pn" +
                    "g-image_1541962.jpg",
                profile : "user",
                username : "user",
                content : `${tweetson[index].content} `,
                interaction : {
                    comments: 0,
                    retweets: 0,
                    likes: 0
                },
                verified : false,
                blocked : false}
            messagesClone2.splice(0, 0, cloneinfo); 
            this.setState({tweets: messagesClone2, newTweet: ""});
    };
    optionMenu = (index) => {
        let tweetsClone = [...this.state.tweets];
        tweetsClone[index].optionmenu = !tweetsClone[index].optionmenu;
        this.setState({tweets: tweetsClone});
    }
    setweet = () => {
        let messagesClone2 = [...this.state.tweets];
        let cloneinfo = {like : false,
            optionmenu : false,
            url : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-pn" +
                "g-image_1541962.jpg",
            profile : "user",
            username : "user",
            content : `${this.state.newTweet} `,
            interaction : {
                comments: 0,
                retweets: 0,
                likes: 0
            },
            verified : false,
            blocked : false}
        messagesClone2.splice(0, 0, cloneinfo); 
        this.setState({tweets: messagesClone2, newTweet: ""});
    };

    inInput = (evento) => {
        const message = evento.target.value;
        this.setState({newTweet: message});
    };
    render() {
        const newtweet = {
            setweet: this.setweet,
            InImput: this.inInput,
            NewTweet: this.state.newTweet
        }
        const interactions = {
            tolikes: this.likes,
            totweet:this.retweet,
            removeTweet: this.removeTweet,
            optionMenu: this.optionMenu
        };
        return (
            <div className="t-col-contraine">
                <PostTweet profileUrl={this.props.profileUrl} newtweet={newtweet}/>
                <Feed
                    profileUrl={this.props.profileUrl}
                    tweets={this.state.tweets}
                    interactions={interactions}/>
            </div>
        )
    }
}

export default PrimaryCol;
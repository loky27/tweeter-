import React from 'react';
import {
    ChatOutline
} from "@graywolfai/react-heroicons";
import './news.css'
class News extends React.Component{
    render(){
        return (
            <div className="tweet-contain">
                <div className="News">
                    <div className="news1">
                        <img src={this.props.profileUr} alt="profile" />
                    </div>
                    <div className="c2">
                        <h6> Category:{/*this.props. category*/}</h6>
                        <h5>title:{this.props.title}</h5>
                    </div>
                </div>
                <div className="News">
                    <p className="content">                
                        {this.props.contentnotice}
                    </p>
                </div>
                <div className='tweet'>
                    <div>
                        <div>
                            <ChatOutline/>
                        </div>
                    {this.props.interaction.tweet}
                    </div>
                </div>
            </div>
        )
    }
}

export default News;
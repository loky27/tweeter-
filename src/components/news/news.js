import React from 'react';
import Interaction from '../interaction/interaction'
class News extends React.Component{
    render(){
        return (
            <div className="tweet-container">
                <div className="row">
                    <div className="c1">
                        <img src={this.props.profileUrl} alt="profile" />
                    </div>
                    <div className="c2">
                        <h6> Category:{this.props. category}</h6>
                        <h5>title:{this.props.title}</h5>
                    </div>
                </div>
                <div className="row">
                    <p className="content">                
                        {this.props.contentnotice}
                    </p>
                </div>
                <div>
                    <Interaction interaction={this.props.interaction}/>
                </div>
            </div>
        )
    }
}

export default News;
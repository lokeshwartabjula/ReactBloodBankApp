import React from 'react';


import './Blog.css';
import Feedback from '../Feedback/Feedback.react';

class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likeCount :1,
            unLikeCount :1
        }
    }

    // Very important to have arrow function while using setSTate method
    incrementLikes=() =>
    {
        this.setState({likeCount : this.state.likeCount+1});
        console.log("increment called");
    }

    // Very important to have arrow function while using setSTate method
    decrementLikes=() =>
    {
        this.setState({unLikeCount : this.state.unLikeCount+1});
        console.log("decrement called");
    }

    render() {
        console.log('render called');
        return (
            <div className='blog_wrapper'>
                <article>
                    <h1>Who can donate blood</h1>
                    <p>
                        Baba Black Sheep Baba Black Sheep Baba Black Sheep Baba Black Sheep Baba Black Sheep Baba Black Sheep Baba Black Sheep Baba Black Sheep Baba Black Sheep Baba Black Sheep 
                    </p>
                    <p>
                        <span>Likes : 
                        {this.state.clapCount}
                        </span>
                    </p>
                    <button className="fa fa-thumbs-up" onClick={this.increment}></button>
                </article>
                <p><span>Likes : </span>{this.state.likeCount}</p>
                <p><span>DisLikes : </span>{this.state.unLikeCount}</p>
                <Feedback likeAction={this.incrementLikes} disLikeAction={this.decrementLikes}></Feedback>

            </div>
        );
    }

    
}

export default Blog;
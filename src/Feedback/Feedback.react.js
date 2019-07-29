import React from 'react';

import './Feedback.css';

const Feedback = (props) => {

    return (
        <div className='feedback_wrapper'>
            <button className='fa fa-thumbs-up' onClick={props.likeAction}>Like</button>
            <button className='fa fa-thumbs-down' onClick={props.disLikeAction}>DisLike</button>


        </div>
    );

}

export default Feedback;
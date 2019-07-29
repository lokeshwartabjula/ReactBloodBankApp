import React from 'react';
import { tsPropertySignature } from '@babel/types';
import ShowProfile from '../ShowProfile/ShowProfile.react';



const ShowContent = (props) => {

    return (
        <div >
            <h2>{props.request.location}</h2>
            <img src = {props.request.imageRef} alt="abpos"></img>
            <ShowProfile></ShowProfile>

        </div>
    );

}

export default ShowContent;
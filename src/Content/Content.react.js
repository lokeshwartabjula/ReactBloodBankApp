import React from 'react';
import ShowDonor from '../ShowDonor/ShowDonor.react';
import Search from '../Search/Search.react';
import Blog from '../Blog/Blog.react';
import FetchDonors from '../FetchDonors/FetchDonors.react';
import AddDonor from '../AddDonor/AddDonor.react';
import LifeCycle from '../LifeCycle/LifeCycle.react';
import ShowContent from '../ShowContent/ShowContent.react';
import abpos from '../abpos.png';
import ShowProfile from '../ShowProfile/ShowProfile.react';


const request ={
    bloodGroup : 'opos',
    requiredUnit : 12,
    location : 'Chennai',
    imageRef : abpos
  };
//props is passed by App component
const Content = (props) => {

    return (
        <div >
            <h2>Current Request</h2>
            <ShowContent request={request}></ShowContent>
            {/* <h3>{props.request.location}</h3>
            <h4>{props.request.bloodGroup}</h4>
            <h5>{props.request.requiredUnit}</h5>
            <img src={props.request.imageRef} alt="abpos"></img> */}

            <ShowDonor title = {'Star Donors'}></ShowDonor>
            {/* <AddDonor></AddDonor>
            <FetchDonors></FetchDonors> */}
            
            <Search></Search>
            {/* <Blog></Blog> */}
            
            <LifeCycle></LifeCycle>
            <ShowProfile></ShowProfile>
            
        </div>
    );

}

export default Content;
import React from 'react';
import DataGrid from '../DataGrid/DataGrid.react';
import PropTypes from 'prop-types';




let donorName = "Ramesh";
let donorList = [
    {donorName : "ramesh", phoneNumber : 94949, bloodGroup:"opos", donationCount:45},
    {donorName : "suresh", phoneNumber : 12122, bloodGroup:"apos", donationCount:25},
    {donorName : "lokesh", phoneNumber : 34343, bloodGroup:"bpos", donationCount:15}
];



const ShowDonor = (props) => {

    return (
        <div >
            <h1 className='text-center'>{props.title}</h1>
            <DataGrid donorList={donorList}>
                {/* The whole thead is the children of Datagrid */}
            <thead>
                <tr>
                    <th>Donor Name</th>
                    <th>Phone Number</th>
                    <th>Blood Group</th>
                </tr>
            </thead>
                </DataGrid> 
            {/* the second donorName is the variable with value Ramesh, which is assigned to the donorName prop of Datagrid  */}

            

        </div>
    );

}


ShowDonor.propTypes =
{
    title : PropTypes.string.isRequired // here two conditions are added... 1 is that the passed property is of type string and 2 is that the passed property must be "title"
    //if we dont put isRequired the title property becomes optional

};

export default ShowDonor;
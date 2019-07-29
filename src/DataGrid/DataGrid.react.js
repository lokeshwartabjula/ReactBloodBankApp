import React from 'react';
import PropTypes from 'prop-types';

//ShowDonor is the parent of the Datagrid Component

const DataGrid = (props) => {

    return (
        <div >
            {/* <p>{props.donorName}</p> */}
            <table className = 'table table-striped'>

                {/* The children passed through the props from the ShowDonoris displayed here below */}
                {props.children}

            {/* <table> {
    props.donorList.map(
        (name, index) => 
    { 
    return <li key={index}>{name}</li> }
    )
} 
</table> */}
                <tbody>
                    {
                        // map is a function that takes another function as an argument hence we use arrow function here
                        // steps:  first create map body, create an arrow function, pass two arguments inside arrow function,
                        // they are eachDonor or the list item and the index
                        props.donorList.map(
                            (eachDonor,index) => 
                            {
                                return <tr key={index}>
                                    <td>{eachDonor.donorName}</td>
                                    <td>{eachDonor.bloodGroup}</td>
                                    <td>{eachDonor.phoneNumber}</td>
                                    <td>{eachDonor.donationCount}</td>
                                </tr>
                            }

                        )
                    }
                </tbody>
                {/* <tr>
                    <td>
                        {props.donorList[1].donorName}
                    </td>
                </tr> */}


            </table>

        </div>
    );

}

let Donor = PropTypes.shape(
    {
        donorName : PropTypes.string.isRequired,
        bloodGroup : PropTypes.oneOf(['apos','bpos','opos']),
        phoneNumber : PropTypes.number.isRequired

    }
);

//Datagrid is expecting a property which is expecting an object of shape mentioned below
//but we are actually passing an array so only we are adding square brackets in line 59 to say that we should receive an array
DataGrid.propTypes = {
// we are using the reserve word shape here because the passed the property is a collection of properties or an object kind
    donorList : PropTypes.arrayOf(Donor).isRequired
}
export default DataGrid;
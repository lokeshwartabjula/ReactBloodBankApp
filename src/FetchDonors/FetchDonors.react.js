import React from 'react';
import DataGrid from  '../DataGrid/DataGrid.react';

import './FetchDonors.css';

class FetchDonors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            donorList:[]
        } 
    }

    componentDidMount()
    {
        let url = "http://localhost:5500/bloodDonors";

        
        
        fetch(url).then(resp => resp.json()).then(donorList => this.setState({donorList})); //if promise is fulfilled then....
    }

    render() {
        return (
            <div className='fetchdonors_wrapper'>
                <DataGrid donorList = {this.state.donorList}></DataGrid>
            </div>
        );
    }
}

export default FetchDonors;
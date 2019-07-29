import React from 'react';



class AddDonor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newDonor : {
                id:0,
                donorName:'',
                bloodGroup:'',
                phoneNumber:0,
                lastDonated:''

            }
        }
    }

    handleSubmit = (event) =>
    {
        event.preventDefault();

        let url = "http://localhost:55c00/bloddDonors";

        fetch(url, {
            method : "POST",
            body : JSON.stringify(this.state.newDonor),
            headers : {
                "Content-Type" : "application/json"
            }

        }).then(resp => console.log('Resource Created'));

        console.log("submit function called");
    }

    handleChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);

        let name = event.target.name;
        let value = event.target.value;

        console.log(this.state.newDonor);
        this.setState(prevState =>({newDonor : {...prevState.newDonor}, [name] : value}));
    
    }

    render() {
        return (
            <div className='adddonor_wrapper'>

{/* form>(label+input)*5+input */}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">id</label>
                    <input type="text" name="id" onChange={this.handleChange}/>
                    <label htmlFor="">Name</label>
                    <input type="text" name="donorName" onChange={this.handleChange}/>
                    <label htmlFor="">phoneNumber</label>
                    <input type="text" name="phoneNumber" onChange={this.handleChange}/>
                    <label htmlFor="">bloodGroup</label>
                    <input type="text" name="bloodGroup" onChange={this.handleChange}/>
                    <label htmlFor="">lastDonated</label>
                    <input type="date" name="lastDonated" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
                

            </div>
        );
    }
}

export default AddDonor;
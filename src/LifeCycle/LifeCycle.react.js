import React from 'react';
import ReactDOM from 'react-dom';
import ShowCity from '../ShowCity/ShowCity.react';



class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name : 'Suresh',
            city : 'chennai'
        }

        //create a stateless component showCity which takes a prop city and dislplay the same 
        //when the state property city changes observe showCity render is also called

        console.log("Constructor Called *******");

    }

    componentDidMount(){
        console.log("Did Mount lifecycle method is called ==========");

        //const elementToAdd = '<h2> Added by did mount method</h2>';
        // const element = ReactDOM.findDOMNode(this);

        // const child = element.firstChild;
        // ReactDOM.render("Ramesh",child);

        //ReactDOM.render(elementToAdd,element);
        

        //console.log(element);
    }

    //To overwrite the shouldComponentUpdate and to stop rendering
    // shouldComponentUpdate(){
    //     return false;
    // }

    change = () => {
        console.log("Change fired");
        this.setState({name : this.state.name+'ji',city : "Mumbai"});
    }

    componentDidUpdate(){
        console.log("DID UPDATE CALLED @@@@@@@");
    }

    render() {

        console.log("Render Method Called...")
        return (
            <div >
                
                <ShowCity city={this.state.city}></ShowCity>
                <h2>{this.state.name}</h2>
                <button onClick={this.change}>Update</button>

            </div>
        );
    }
}

export default LifeCycle;
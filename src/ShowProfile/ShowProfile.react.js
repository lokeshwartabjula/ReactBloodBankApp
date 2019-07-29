import React from 'react';

import './ShowProfile.css';

class ShowProfile extends React.Component {

    url = "https://api.github.com/users/vatsank";
    constructor(props) {
        super(props);
        this.state = {
            profile:{},
            loaded : false
        }
    }

    componentDidMount()
    {
        fetch(this.url).then(data => data.json()).
        then(profile => {
            this.setState({profile:profile,loaded:true})
            // this.setState({loaded:true})
        });

    }
    render() {

        if(!this.state.loaded)
        {
            return(
                <div className='showprofile_wrapper'>
                <h1> Loading.... </h1>
                </div>
            );

        }
        else
        {
            return(
                <div className='showprofile_wrapper'>
                    <h1>Loaded!!</h1>
                    <p>{this.state.profile.name}</p>
                    <img src={this.state.profile.avatar_url} alt="Profile pic"></img>

                </div>
            );
        }
    }




        
}

export default ShowProfile;
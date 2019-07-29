import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Content from '../Content/Content.react';
import FetchDonors from '../FetchDonors/FetchDonors.react';
import AddDonor from '../AddDonor/AddDonor.react';
import Blog from '../Blog/Blog.react';

//Route and Switch are the ones used to create the linking part
//BrowserRouter is used in index.js
//Link is used in Header.react.js
//Route and Switch are used here

const Navigation = () => {

    return (
        <div >
            <main>
                <Switch>
                    {/* Here we are invoking the corresponding components when the mentioned path is being hit */}
                    {/* If we dont use exact keyword then all the components will be shown when / is in path... regular expressions */}
                    <Route exact path="/" component = {Content}></Route>
                    <Route path="/fetch" component = {FetchDonors}></Route>
                    <Route path="/add" component = {AddDonor}></Route>
                    <Route path="/blog" component = {Blog}></Route>
                </Switch>
            </main>

        </div>
    );

}

export default Navigation;
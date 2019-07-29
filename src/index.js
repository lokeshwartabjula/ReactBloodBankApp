import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'; //Refer note below
import * as serviceWorker from './serviceWorker';
import Header from './Header/Header.react';
import Navigation from './Navigation/Navigation.react';
import Footer from './Footer/Footer.react';


//the BrowserRouter is somewhat similar to router-oulet from angular
ReactDOM.render(<BrowserRouter>
{/* <Header></Header>
<Navigation></Navigation> */}
<App></App>
{/* <Footer></Footer> */}
</BrowserRouter>, document.getElementById('root')); //the whole app component that is returned from app.js is put into root element 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Note:
//We can export class or classes or function or functions from one js file to other js file
//If we are exporting a default class we dont need to use curly braces
//But if we are exporting non-default class then we must use curly braces while importing
//To find whether the class is default or non default, refer the imported library's code and check whether they used default keyword while exporting

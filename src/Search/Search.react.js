import React from 'react';

const clear = () =>{
    console.log('Clear Invoked');

    //The inner return function is a must when we need to pass arguments 
    return (msg) =>
    {
        console.log("Inner Function Called"+msg);
    }
}

const Search = () => {

    return (
        <div >

            {/* Example button  of Passing arrow function in onClick */}
            <button className="fa fa-search" onClick={(event)=>{console.log(event)}}>Search</button>

            {/* Example button of passing a named function with argument */}
            
            <button className="fa fa-crosshairs" onClick={clear}>Clear</button>

            {/* Example button of passing arguments into a named function  */}
            <button className="fa fa-crosshairs" onClick={clear("hello")}>Clear</button>

        </div>
    );

}

export default Search;
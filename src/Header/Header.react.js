import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {

    return (
        <div >
            <h1>Jeevan Blood Bank</h1>
            <nav>
                <ul>
                    <li>
                        {/* Here we are creating href kind of links */}
                        <Link to='/'>Home</Link>
                        <Link to='/fetch'>Show Donors</Link>
                        <Link to='/add'>Add Donor</Link>
                        <Link to='/blog'>Blogs</Link>
                    </li>
                </ul>

            </nav>
        </div>
    );

}

export default Header;
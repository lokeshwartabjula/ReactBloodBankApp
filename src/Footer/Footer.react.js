import React from 'react';

import './Footer.css';

const Footer = () => {

    return (
        <div className='footer_wrapper'>
            <div className="row">
                <div className="col-sm-6">
                <ul>
                <li>
                    <a href="">Apollo</a>
                </li>
                <li>
                    <a href="">GH</a>
                </li>
                <li>
                    <a href="">Global</a>
                </li>
            </ul>
                </div>
                <div className="col-sm-6">
                <ul>
                <li>
                    <a href="" className="fa fa-facebook-official"></a>
                </li>
                <li>
                    <a href="" className="fa fa-facebook-official"></a>
                </li>
                <li>
                    <a href="" className="fa fa-facebook-official"></a>
                </li>
            </ul>
                </div>

            </div>
            
        </div>
    );

}

export default Footer;
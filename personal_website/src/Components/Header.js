import React from 'react';
import Styles from '../Styles/home.css';

export default () => {
    return (
        <div className="header">
            <p className="name">Jack Capombassis</p>
            <ul>
                <li className="left-list">Portfolio</li>
                <li className="left-list">Resume</li>
                <li className="left-list">Contact</li>
            </ul>
        </div>
    );
}
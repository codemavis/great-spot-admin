import React from 'react';
import { FaHome, FaFile } from 'react-icons/fa';
import IosPulse from 'react-ionicons/lib/IosPulse'

import userAvatar from '../../assets/img/user.png';

function Sidebar() {
    return (
        <nav id="sidebar" className="sidebar">
            <a className="sidebar-brand" href="index.html">
                <IosPulse />
            Squirrel
        </a>
            <div className="sidebar-content">
                <div className="sidebar-user">
                    <img src={userAvatar} className="img-fluid rounded-circle mb-2" alt="Anandh Sujee" />
                    <div className="font-weight-bold">Anandh Sujee</div>
                    <small>Full-stack Developer</small>
                </div>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        Main
                </li>
                    <li className="sidebar-item">
                        <a href="home" className="sidebar-link collapsed">
                            <FaHome /><span className="align-middle">Dashboard</span>
                        </a>
                    </li>
                    <li className="sidebar-item active">
                        <a href="#pages" data-toggle="collapse" className="sidebar-link">
                            <FaFile /> <span className="align-middle">Pages</span>
                        </a>

                        <ul id="pages" className="sidebar-dropdown list-unstyled collapse show" data-parent="#sidebar">
                            <li className="sidebar-item active"><a className="sidebar-link" href="/users">Users</a></li>
                            <li className="sidebar-item"><a className="sidebar-link" href="/questions">Questions</a></li>
                            <li className="sidebar-item"><a className="sidebar-link" href="/places">Places</a></li>
                            <li className="sidebar-item"><a className="sidebar-link" href="/reviews">Reviews</a></li>
                            <li className="sidebar-item"><a className="sidebar-link" href="pages-blank.html">Blank</a></li>
                        </ul>

                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;
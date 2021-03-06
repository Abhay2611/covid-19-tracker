import React from 'react';
import './navbar.css';

const Navbar = () =>{
    return(
        <div className="nav-bar">
            <div className="row pure-menu pure-menu-horizontal">
                <div className="col-md-4 col-sm-12">
                <div className="wrapper">
                    <table>
                        <tbody>
                            <tr>
                                <td className="bar-1 logo-txt" colSpan="3"></td>
                                <td rowSpan="3" className="txt logo-txt">trackCovid<span className="nine">19</span>Stats</td>
                            </tr>
                            <tr>
                                <td className="left-bar-3 logo-txt"></td>
                                <td className="bar-1 logo-txt" colSpan="2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                </div>
                <div className="col-md-8 col-sm-12 right">
                    <ul className="pure-menu-list" id="dropdown-click">
                        <li className="pure-menu-item">
                            <a href="/" className="pure-menu-heading pure-menu-link"><i className="fas fa-home"></i></a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="/india" className="pure-menu-link">India</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="/faq" target="_blank" className="pure-menu-link"><i className="far fa-question-circle"></i></a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="https://github.com/Abhay2611/covid-19-tracker" target="_top" className="pure-menu-link"><i className="fab fa-github"></i></a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="mailto:abhayanankk23@gmail.com" className="pure-menu-link"><i className="fas fa-envelope-open"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
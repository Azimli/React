import React from 'react';
import '../../css/Header/Header.css';
import '../../css/Header/Header_responsive.css';
import logo from '../../img/logo.svg';
import icon from '../../icons/sign-out.svg';
import  circleimg2 from '../../img/user-superstar-2x.jpg';
class Header extends React.Component{
    render() {
        return (
            <div>
                <div className="header_bg">
                    <div className="center_2560">
                        <div className="logo_header">
                            <img src={logo} alt=""/> 
                        </div>

                        <div className="header_menu">
                           <ul className="header_menu_ul">
                               <li><a href="">About me</a></li>
                               <li><a href="">Relationships </a></li>
                               <li><a href="">Requirements</a></li>
                               <li><a href="">Users</a></li>
                               <li><a href="">Sign Up </a></li>
                           </ul>
                        </div>

                        <div className="header_icons">
                          <div className="text">
                                <p className="name">
                                    Superstar
                                </p>

                                <p className="email">
                                    Superstar@gmail.com
                                </p>
                            </div>


                            <div className="header_img">
                                <img src={circleimg2} className="circleimg2" alt=""/>
                                <img src={icon} alt="" className="icn"/>

                            </div>
                        </div>


                    </div>
                </div>

                <div className="bag_photo">
                    <div className="center_2560">
                        <div className="bg_photo_txt">
                            <h1 className="title">
                                Test assignment for <br/>
                                Frontend Developer <br/>
                                position
                            </h1>
                                <p className="bg_txt">
                                    We kindly remind you that your test assignment should <br/>
                                    be submitted as a link to github/bitbucket repository. <br/>
                                    Please be patient, we consider and respond to every application <br/>
                                    that meets minimum requirements. We look forward to your <br/>
                                    submission. Good luck!
                                </p>
                            <button className="btn_bg">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;

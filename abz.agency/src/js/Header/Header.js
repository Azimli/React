import React from 'react';
import '../../css/Header/Header.css';
import {Container,Row,Col} from 'reactstrap';
import logo from '../../img/logo.svg';
import icon from '../../icons/sign-out.svg';
import  circleimg2 from '../../img/user-superstar-2x.jpg';
class Header extends React.Component{
    render() {
        return (
            <div>
                <div className="header_bg">
                    <Container>
                        <Row>
                            <Col xs="2">
                                <img src={logo} width="135px" height="24px"/>
                            </Col>

                            <Col xs="6">
                                <ul className="menu_header">
                                    <li><b><a href="">About me</a></b>    </li>
                                    <li><a href="">Relationship</a></li>
                                    <li><a href="">Requirements</a></li>
                                    <li><a href="">Users</a></li>
                                    <li><a href="">Sign Up</a></li>
                                </ul>
                            </Col>

                            <Col xs="4">
                                <div className="icon_img">
                                    <div className="text">

                                    </div>
                                    <img src={circleimg2} className="circleimg2" width="40px" height="40px" alt=""/>
                                    <img src={icon} className="icon1" alt="" width="24px" height="20px" />

                                </div>

                            </Col>




                        </Row>
                    </Container>
                </div>
            </div>
        );
    }

}

export default Header;

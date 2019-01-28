import React from 'react';
import '../../css/Header/Header.css';
import {Container,Row,Col} from 'reactstrap';
import logo from '../../img/logo.svg';
class Header extends React.Component{
    render() {
        return (
            <div>
                <div className="header_bg">
                    <Container>
                        <Row>
                            <Col xs="3">
                                <img src={logo} width="220px" height="50px"/>
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

                            <Col xs="3">
                                <div className="text">
                                    <p className="name">
                                        Superstar
                                    </p>
                                    <p className="email">
                                        Superstar@gmail.com
                                    </p>
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

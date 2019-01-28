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
                            <Col xs="6">
                                <img src={logo} width="220px" height="50px"/>
                            </Col>

                            <Col xs="6">

                            </Col>


                        </Row>
                    </Container>
                </div>
            </div>
        );
    }

}

export default Header;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/Header/Header.css';
import { Collapse, Navbar,Toggle, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="bg" id="#bg_home">
                    <Container>
                       <Row>
                           <Col md="6" sm="6" >
                               <div className="logo">
                                    <i className="fas fa-paper-plane fa-2x plane"></i>
                                    <h6 className="logo_title">ESCAPE</h6>
                               </div>
                           </Col>

                           <Col md="6" sm="6">
                                <nav className="nav navbar-header">
                                    <ul className="menu">
                                        <li><a href="#pg_home">Home</a></li>
                                        <li><a href="#service">Services</a></li>
                                        <li><a href="#clients">Clients</a></li>
                                        <li><a href="#team">Team</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                    </ul>
                                </nav>
                           </Col>
                       </Row>
                        <div className="menu_text">
                            <h4 className="txt1">Can you build the website of my dreams?</h4>
                            <h1 className="txt2">Yup, we can do that.</h1>
                            <button className="btn">Learn More</button>
                        </div>
                    </Container>

                </div>






            </div>



        );


    }

}

export default Header;
import React from 'react';
import {Container,Row,Col,Nav} from 'reactstrap';
import "../../css/Footer/Footer.css";

class Footer extends React.Component{
    render(){
        return(
            <div>
              <div className="footerbg" id="contact">
                 <Container>
                    <Row>
                        <Col sm="6" md="6">
                            <div className="footer_text">
                                <h1>Say <b>Hello</b></h1>
                                <p>
                                    Don’t be shy, drop us an email and say hello! We are a really nice <br/>
                                    bunch of people :)
                                </p>

                                <ul className="contact_list">
                                    <li><i className="fas fa-mobile-alt fa-2x mob"></i>(416) 555-0000</li>
                                    <li><i className="fab fa-twitter fa-2x mob"></i>@escape</li>
                                    <li><i className="fab fa-google-plus fa-2x mob"></i>(416) 555-0000</li>
                                </ul>

                                <ul className="contact_list2">
                                    <li><i className="fas fa-envelope fa-2x mob"></i>(416) 555-0000</li>
                                    <li><i className="fab fa-facebook-f fa-2x mob"></i>(416) 555-0000</li>
                                    <li><i className="fab fa-pinterest-p fa-2x mob"></i>(416) 555-0000</li>
                                </ul>
                            </div>
                        </Col>

                        <Col md="6" sm="6">
                            <form action="#" method='post' className="formFooter">
                                <input type="text" placeholder="Your name"/>
                                <input type="text" placeholder="Your Email"/>
                                <textarea placeholder="Your Message">

                                </textarea>
                            </form>
                        </Col>
                    </Row>
                 </Container>
                  </div>

                <div className="footerson">
                  <Container>
                      <hr/>
                      <div className="footerson_txt">
                          <p>
                              © 2014 Escape by FreebiesXpress • Made In Toronto
                          </p>
                      </div>

                  </Container>
                </div>


            </div>
        );
    }

}

export default Footer;
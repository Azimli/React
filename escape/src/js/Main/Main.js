import React from 'react';
import {Container,Row,Col,Nav} from 'reactstrap';
import "../../css/Main/Main.css";

class Main extends React.Component{
    render(){
        return (
            <div>
                <Container>
                       <Row>
                           <Col md="9" sm="9">
                        <div className="Main_txt">
                            <h1 className="main_h1">Web <b>Development</b></h1>
                            <p className="main_txt">
                                Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum <br/>
                                suscipit aenean rhoncus posuere odio in tincidunt. Proin iaculis purus <br/>
                                consequat sem cure digni ssim. Donec porttitora entum suscipit aenean <br/>
                                rhoncus posuere odio in tincidunt. <br/><br/>


                                Iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit
                            </p>
                        </div>

                           </Col>

                           <Col md="3" sm="9" >
                               {/*<img src="../../img/Main/bg_1.png" width="231" height="222"/>*/}
                                    <div className="bg_1_sekil"></div>
                           </Col>
                       </Row>
                </Container>

                <div className="Main_person">
                    <Container>
                        <Row>
                            <Col md="4" sm="4">
                                <div className="person_image">
                                </div>
                            </Col>

                            <Col md="8" sm="8">
                                <div className="person_txt">
                                    <h4 className="h4_txt1">Identity <b>Branding</b></h4>
                                    <p className="p_txt1">
                                        Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum <br/>
                                        suscipit aenean rhoncus posuere odio in tincidunt. Proin iaculis purus <br/>
                                        consequat sem cure digni ssim. Donec porttitora entum suscipit. <br/> <br/>
                                        Iaculis purus consequat sem cure digni ssim. Donec porttitora entum <br/>
                                        suscipit aenean rhoncus posuere odio in tincidunt. Proin iaculis purus
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container>
                    <Row>
                        <Col md="6" sm="6">
                            <ul className="clients">
                                <li><i className="fas fa-male man fa-3x"></i></li>
                                <div className="h4_txt1">
                                    <h4>Branding & Identity</h4>
                                </div>
                                <div className="p_txt1">
                                    <p>
                                        Proin iaculis purus consequat sem cure <br/>
                                        digni ssim. Donec porttitora entum suscipit <br/>
                                        aenean rhoncus posuere odio in tincidunt. <br/>
                                    </p>
                                </div>
                            </ul>
                        </Col>

                        <Col md="6" sm="6">
                            <ul className="clients">
                                <li><i className="fab fa-chrome chrome fa-3x"></i></li>
                                <div className="h4_txt1">
                                    <h4>Web & Graphic Design</h4>
                                </div>
                                <div className="p_txt1">
                                    <p>
                                        Proin iaculis purus consequat sem cure <br/>
                                        digni ssim. Donec porttitora entum suscipit <br/>
                                        aenean rhoncus posuere odio in tincidunt. <br/>
                                    </p>
                                </div>
                            </ul>
                        </Col>
                    </Row>

                    <Row>

                        <Col md="6" sm="6">
                            <ul className="clients">
                                <li><i className="fas fa-tablet-alt chrome fa-3x"></i></li>
                                <div className="h4_txt1">
                                    <h4>Mobile App Development</h4>
                                </div>
                                <div className="p_txt1">
                                    <p>
                                        Proin iaculis purus consequat sem cure <br/>
                                        digni ssim. Donec porttitora entum suscipit <br/>
                                        aenean rhoncus posuere odio in tincidunt <br/>
                                    </p>
                                </div>
                            </ul>
                        </Col>

                        <Col md="6" sm="6">
                            <ul className="clients">

                                <li><i className="fas fa-video video fa-2x"></i></li>
                                <div className="h4_txt1">
                                    <h4>Animations</h4>
                                </div>
                                <div className="p_txt1">
                                    <p>
                                        Proin iaculis purus consequat sem cure <br/>
                                        digni ssim. Donec porttitora entum suscipit <br/>
                                        aenean rhoncus posuere odio in tincidunt. <br/>
                                    </p>
                                </div>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" sm="6">
                            <ul className="clients">
                                <li><i className="fas fa-star star fa-3x"></i></li>
                                <div className="h4_txt1">
                                    <h4>User Interface / User Experience</h4>
                                </div>
                                <div className="p_txt1">
                                    <p>
                                        Proin iaculis purus consequat sem cure <br/>
                                        digni ssim. Donec porttitora entum suscipit <br/>
                                        aenean rhoncus posuere odio in tincidunt.
                                    </p>
                                </div>
                            </ul>
                        </Col>


                        <Col md="6" sm="6">
                            <ul className="clients">
                                <li><i className="fas fa-camera star fa-3x"></i></li>
                                <div className="h4_txt1">
                                    <h4>Photography</h4>
                                </div>
                                <div className="p_txt1">
                                    <p>
                                        Proin iaculis purus consequat sem cure <br/>
                                        digni ssim. Donec porttitora entum suscipit <br/>
                                        aenean rhoncus posuere odio in tincidunt.
                                    </p>
                                </div>
                            </ul>
                        </Col>
                    </Row>
                </Container>

                <div className="main_2">
                    <Container>
                        <div className="text_main_h1">
                            <h1>Awesome <b>Clients</b></h1>
                            <p>See what nice things our clients said about us. </p>
                        </div>

                        <div className="daire_esas">
                            <Row>
                                <Col md="3" sm="3">
                                    <div className="daire_esas">
                                        <div className="daire1"></div>
                                    </div>
                                </Col>

                                <Col md="3" sm="3">
                                    <div className="daire_esas">
                                        <div className="daire_text1">
                                            <p>
                                                “ Proin iaculis purus consequat sem cure  digni ssim <br/>
                                                donec porttitora entum suscipit aenean rhoncus. ”
                                            </p>

                                            <p className="daire_text2">
                                                - Jamie Richardson, Founder of Cocoa Media
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="3" md="3">
                                    <div className="daire_texts2">
                                        <p>
                                            “ Proin iaculis purus consequat sem cure  digni ssim <br/>
                                            donec porttitora entum suscipit aenean rhoncus. ”
                                        </p>

                                        <p className="daire_texts3">
                                            - Bart Thompson, Founder of Rainel
                                        </p>
                                    </div>
                                </Col>

                                <Col sm="3" md="3">
                                    <div className="daire_esas2">
                                        <div className="daire2">
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

                <Container>
                    <div className="reklam">
                        <ul className="reklem_icon">
                            <li><div className="envato"></div></li>
                            <li><div className="wordpress"></div></li>
                            <li><div className="tuts"></div></li>
                            <li><div className="microlancer"></div></li>
                        </ul>
                    </div>
                </Container>
                <div className="teambg">
                    <Container>
                        <div className="team_text">
                            <h1>Amazing <b>Team</b></h1>
                            <p>These wonderful people make work enjoyable.</p>
                        </div>

                        <Row>
                            <Col md="4" sm="4">
                               <div className="team1">
                                   <div className="tamdaire1"></div>
                                   <div className="textteam">
                                      <h3>Kimberly Thompson <br/></h3>
                                       <p> Marketer</p>
                                       <ul className="teamsocila1">
                                           <li><i className="fa fa-facebook fbteam"></i></li>
                                           <li><i className="fa fa-twitter twteam"></i></li>
                                           <li><i className="fa fa-linkedin lnteam"></i></li>
                                       </ul>
                                   </div>
                               </div>
                            </Col>
                            <Col md="4">
                                <div className="team1">
                                    <div className="tamdaire1"></div>
                                    <div className="textteam">
                                        <h3>Rico Massimo <br/></h3>
                                        <p> Coder</p>
                                        <ul className="teamsocila1">
                                            <li><i className="fa fa-facebook fbteam"></i></li>
                                            <li><i className="fa fa-twitter twteam"></i></li>
                                            <li><i className="fa fa-linkedin lnteam"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="team1">
                                    <div className="tamdaire1"></div>
                                    <div className="textteam">
                                        <h3>Uku Mason <br/></h3>
                                        <p> Graphic Designer</p>
                                        <ul className="teamsocila1">
                                            <li><i className="fa fa-facebook fbteam"></i></li>
                                            <li><i className="fa fa-twitter twteam"></i></li>
                                            <li><i className="fa fa-linkedin lnteam"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <div className="sonp">
                                <p>
                                    Proin iaculis purus consequat sem cure  digni ssim donec porttitora entum suscipit <br/>
                                    aenean rhoncus posuere odio in tincidunt proin iaculis.
                                </p>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        );

    }

}

export default Main;
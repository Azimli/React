import React from 'react';
import '../../css/Container/Container.css';
import mob from '../../img/man-mobile.svg';
import html from '../../img/html.svg';
import css from '../../img/css.svg';
import js from  '../../img/javascript.svg';
import man from '../../img/man-laptop-v1.svg';
class Container extends React.Component{
    render() {
        return(
            <div>
              <div className="container">
                  <div className="center_2560">

                      <div className="con_img">
                          <img src={mob} alt=""/>
                      </div>

                      <div className="con_txt">
                          <h3 className="txt_container">Let's get ac quainted </h3>
                        <h6 className="con_txt_h6">
                            I am cool frontend developer
                        </h6>
                          <p>
                              When real users have a slow experience on mobile, they're much less likely to find what they are looking for or <br/>
                              purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more <br/>
                              than half of visits are abandoned if a mobile page takes over 3 seconds to load. <br/>
                              <br/>

                              Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience <br/>
                              on the web.
                          </p>

                      </div>
                      <button className="con_btn">Sign Up</button>

                      {/*  Container 2 ci hissesi  */ }

                      <h3 className="con_2_h3">
                          About my relationships with <br/>
                          web-development
                      </h3>

                      <ul className="lang_prog">
                          <li>
                              <img src={html} alt=""/>
                              <h6>I'm in love with HTML </h6>
                              <p>
                                  Hypertext Markup Language (HTML) is the standard <br/>
                                  markup language for creating web pages and web <br/>
                                  applications.
                              </p>
                          </li>

                          <li>
                              <img src={css} alt=""/>
                              <h6>CSS is my best friend</h6>
                              <p>
                                  Cascading Style Sheets (CSS) is a  style sheet <br/>
                                  language used for describing the presentation <br/>
                                  of a document written in a markup language <br/>
                                  like HTML.
                              </p>
                          </li>

                          <li>
                              <img src={js} alt=""/>
                              <h6> JavaScript is my passion </h6>
                              <p>
                                  JavaScript is a high-level, interpreted programming <br/>
                                  language. It is a language which is also characterized <br/>
                                  as dynamic, weakly typed, prototype-based and <br/>
                                  multi-paradigm.
                              </p>
                          </li>
                      </ul>
                  </div>

              </div>
                <div className="con_bg">
                    <div className="center_2560">
                        <div className="con_bg_txt">
                                <h1>General requirements for the test task</h1>
                            <p>
                                Users want to find answers to their questions quickly and data shows that people <br/>
                                really care about how quickly their pages load. The Search team announced speed <br/>
                                would be a ranking signal for desktop searches in 2010 and as of this month (July <br/>
                                2018), page speed will be a ranking factor for mobile searches too. <br/><br/>

                                If you're a developer working on a site, now is a good time to evaluate your <br/>
                                performance using our speed tools. Think about how performance affects the user <br/>
                                experience of your pages and consider measuring a variety of real-world <br/>
                                user-centric performance metrics. <br/> <br/>

                                Are you shipping too much JavaScript? Too many images? Images and JavaScript <br/>
                                are the most significant contributors to the page weight that affect page load time <br/>
                                based on data from HTTP Archive and the Chrome User Experience Report - our <br/>
                                public dataset for key UX metrics as experienced by Chrome users under real-world <br/>
                                conditions.


                            </p>
                        </div>
                        
                        <div className="con_bg_img">
                            <img src={man} alt=""/>
                        </div>
                    </div>

                </div>
            </div>


        );
    }

}

export default Container;
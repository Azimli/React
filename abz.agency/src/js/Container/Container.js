import React from 'react';
import '../../css/Container/Container.css';
import mob from '../../img/man-mobile.svg';
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
                          <button className="con_btn">Sign Up</button>
                      </div>

                      {/*  Container 2 ci hissesi  */ }

                      <h3 className="con_2_h3">
                          About my relationships with <br/>
                          web-development
                      </h3>

                     


                  </div>
              </div>
            </div>


        );
    }

}

export default Container;
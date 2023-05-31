
import { useState, useEffect } from "react";
import axios from "axios";

function Contactus() {
  const [user, setUser] = useState({ name: '', email: '', subject: '', message: '' })
  const [receive, setReceive] = useState([{ bookimg: '', author: '', title: '', Category: '', price1: '', price2: '', Paperback: '', Hardback: '', aboutbook: '' }])



  const handlechangle = (e:any) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value }
    })
  }
console.log(user)
  return (
    <>

      <div id="main" className="wrapper">
        <div className="page-header">
          <div className="container">
            <h1>Contact Us</h1>
          </div>
        </div>

        <div id="primary" className="site-content">
          <div id="content" role="main">
            <div className="pagewrapper" >
              <div className="container">
                <div id="post-60" className="post-60 page type-page status-publish hentry">
                  <div className="entry-content">
                    <div id="pl-60">
                    
                      
                      <div className="panel-grid"  style={{}}id="pg-60-0"><div className="panel-grid-cell" id="pgc-60-0-0">
                      <div className="so-panel widget widget_sow-editor panel-first-child panel-last-child" id="panel-60-0-0-0" data-index="0"><div className="so-widget-sow-editor so-widget-sow-editor-base"><h3 className="widget-title">Contact Form</h3>
                      <div className="siteorigin-widget-tinymce textwidget">
                        <div role="form" className="wpcf7" id="wpcf7-f4-p60-o1" lang="en-US" dir="ltr">
                          <div className="screen-reader-response"></div>
                          <form action="/contact-us/#wpcf7-f4-p60-o1" method="post" className="wpcf7-form" >
                            <div style={{ display: "none" }}>
                              <input type="hidden" name="_wpcf7" value="4" /><br></br>
                              <input type="hidden" name="_wpcf7_version" value="4.6" /><br></br>
                              <input type="hidden" name="_wpcf7_locale" value="en_US" /><br></br>
                              <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f4-p60-o1" /><br></br>
                              <input type="hidden" name="_wpnonce" value="d091458b6c" />
                            </div>
                            <div className="form-group">
                              <label> Your Name (required)</label><br></br>
                              <span className="wpcf7-form-control-wrap your-name"><input type="text" onChange={handlechangle} name="name" value={user.name} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" /></span>
                            </div>
                            <div className="form-group">
                              <label> Your Email (required)</label><br></br>
                              <span className="wpcf7-form-control-wrap your-email"><input type="text" onChange={handlechangle} name="email" value={user.email} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control" /></span>
                            </div>
                            <div className="form-group">
                              <label> Subject</label><br></br>
                              <span className="wpcf7-form-control-wrap your-subject"><input type="text" onChange={handlechangle} name="subject" value={user.subject} className="wpcf7-form-control wpcf7-text form-control" /></span>
                            </div>
                            <div className="form-group">
                              <label> Your Message</label><br></br>
                              <span className="wpcf7-form-control-wrap your-message"><textarea name="message" onChange={handlechangle} value={user.message} cols={40} className="wpcf7-form-control wpcf7-textarea form-control" /></span>
                            </div>
                            <p><input type="submit" value="Submit" className="wpcf7-form-control wpcf7-submit btn btn-primary" /><span className="ajax-loader"></span></p>
                            <div className="wpcf7-response-output wpcf7-display-none"></div>
                          </form>
                        </div>
                      </div>
                    </div>
                    
                   
                   
                      < div className="panel-grid-cell" id="pgc-60-0-1">
                        <div className="so-panel widget widget_sow-editor panel-first-child panel-last-child" id="panel-60-0-1-0" data-index="1"><div className="contact-info panel-widget-style"><div className="so-widget-sow-editor so-widget-sow-editor-base"><h3 className="widget-title">Contact Info</h3>
                          <div className="siteorigin-widget-tinymce textwidget">
                            <ul>
                              <li><i className="fa fa-phone"></i>+98 84 662221 (For Sales Query)</li>
                              <li><i className="fa fa-envelope"></i><br></br>
                                Sales: sales@lynaspublications.com<br></br>
                                Editorial: editorial@lynaspublications.com<br></br>
                                Publicity: publicity@lynaspublications.com<br></br>
                                Human Resources: hr@lynaspublications.com</li>
                              <li><i className="fa fa-map-marker"></i>161, B-4, Ground Floor,<br></br>
                                Gulmohar House,<br></br>
                                Yusuf Sarai Community Centre,<br></br>
                                New Delhi – 110049</li>
                            </ul>
                            <div className="Flexible-container"><iframe loading="lazy" style={{ border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.3722835791364!2d77.20594231467824!3d28.558581582447033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26dc56813f7%3A0x85d4527902f30339!2sRupa+Publications+India+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1481871148136" width="600" height="450" ></iframe></div>
                          </div>
                        </div>
                        </div></div>

                      </div>


                    </div></div>

                    </div></div>
                  </div></div></div>
            </div></div>

        </div></div>

    </>
  )
}

export default Contactus;
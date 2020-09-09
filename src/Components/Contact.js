import React, { Component } from 'react';
import * as emailjs from "emailjs-com";

class Contact extends Component {
   constructor() {
      super();
      this.state = {
        emailSent: false,
        emailError: false,
        emailRequired: false,
        loading: false,
      };
   }
   handleSubmit = (e) => {
      e.preventDefault();

      var state = this;
      this.setState({loading: true})

      var contactName = document.querySelector('#contactName').value;
      var contactEmail = document.querySelector('#contactEmail').value;
      var contactSubject = document.querySelector('#contactSubject').value;
      var contactMessage = document.querySelector('#contactMessage').value;

      var API_KEY = "user_2xQLUwuRRBgvw4fCV5lkX";
      var TEMPLATE_ID = "template_v1WXYd99";

      var template_params = {
         name: contactName,
         email: contactEmail,
         subject: contactSubject,
         message: contactMessage,
      };

      if ( contactName && contactEmail && contactMessage ){
         emailjs.send("default_service", TEMPLATE_ID, template_params, API_KEY).then(
            function (response) {
            if (response.status === 200) {
               state.setState({ emailSent: true, loading: false })
               setTimeout(function(){
                  state.setState({ emailSent: false })
               }, 5000)
            } else {
               state.setState({ emailError: true, loading: false })
               setTimeout(function(){
                  state.setState({ emailError: false })
               }, 5000)
            }
            },
            function(error) {
               state.setState({ emailError: true, loading: false })
               setTimeout(function(){
                  state.setState({ emailError: false })
               }, 5000)
            }
         );
      }
      else {
         state.setState({ emailRequired: true, loading: false })
         setTimeout(function(){
            state.setState({ emailRequired: false })
         }, 5000)
      }
    };

  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button onClick={this.handleSubmit} name="submit" type="submit" className="submit">Submit</button>
                     <span className={this.state.loading === false ? 'hide-this-msg' : ''} id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>
               
           <div className={this.state.emailError === false ? 'hide-this-msg' : ''} id="message-warning">There was an error, please try again later.</div>
				   <div className={this.state.emailRequired === false ? 'hide-this-msg' : ''} id="message-required">Please fill out all required* sections.</div>
               <div className={this.state.emailSent === false ? 'hide-this-msg' : ''} id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
                     {email}<br/>
						   <span>{phone}</span>
					   </p>
				   </div>

            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;

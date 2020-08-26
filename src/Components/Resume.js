import React, { Component } from 'react';

class Resume extends Component {
  render() {

    // if(this.props.data){
    //   var skillmessage = this.props.data.skillmessage;
    //   var education = this.props.data.education.map(function(education){
    //     return <div key={education.school}><h3>{education.school}</h3>
    //     <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
    //     <p>{education.description}</p></div>
    //   })
    //   var skills = this.props.data.skills.map(function(skills){
    //     var className = 'bar-expand '+skills.name.toLowerCase();
    //     return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
    //   })
    // }

    return (
      <section id="resume">

      <div className="row" style={{textAlign: "center", marginBottom: "50px"}}>
        <div className="three small-half">
          <div className="skill-icon"><span className="responsive-skill-icon"><i className="fa fa-mobile-phone"></i></span></div>
          <h3>Responsive</h3>
          <p className='skill-detail'>Layouts work on any device from mobile to desktop.</p>
        </div>

        <div className="three small-half">
          <div className="skill-icon"><span><i className="fa fa-heart"></i></span></div>
          <h3>Passion</h3>
          <p className='skill-detail'>Passionate learner desires to keep up the latest trends.</p>
        </div>

        <div className="three small-half">
          <div className="skill-icon"><span><i className="fa fa-rocket"></i></span></div>
          <h3>Fast</h3>
          <p className='skill-detail'>Full effort to have fast load time and lag free interaction.</p>
        </div>

        <div className="three small-half">
          <div className="skill-icon"><span><i className="fa fa-sitemap"></i></span></div>
          <h3>Organized</h3>
          <p className='skill-detail'>Organized and understandable with a glance.</p>
        </div>
      </div>

      <div className="row">

          <h1><span>Skills</span></h1>
          <div className="skilleight"><img src="images/react-logo.png" alt="react"></img></div>
          <div className="skilleight"><img src="images/mongodb-logo.png" alt="mongodb"></img></div>
          <div className="skilleight"><img src="images/mysql-logo.png" alt="mysql"></img></div>
          <div className="skilleight"><img src="images/nodejs-logo.png" alt="nodejs"></img></div>
          <div className="skilleight"><img src="images/javascript-logo.png" alt="javascript"></img></div>
          <div className="skilleight"><img src="images/html-logo.png" alt="html"></img></div>
          <div className="skilleight"><img src="images/css-logo.png" alt="css"></img></div>
          <div className="skilleight"><img src="images/photoshop-logo.png" alt="photoshop"></img></div>

      </div>

      {/* <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div> */}

      {/* <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div> */}
   </section>
    );
  }
}

export default Resume;

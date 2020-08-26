import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <div className="item-wrap-box" title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                     <p>{projects.skills}</p>
                  </div>
                </div>
              {/* <div className="link-icon"><i className="fa fa-link"></i></div> */}
              <a className="project-github-link"href={projects.github}><i className="fa fa-github"></i></a>
              <a className="project-website-link" href={projects.url}><i className="fa fa-laptop"></i></a>
            </div>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns">

            <h1><span>My Works</span></h1>

            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-halves cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;


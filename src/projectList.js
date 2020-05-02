import configzmeImage from "./images/configzme.png";
import prereqCheck from "./images/prereqcheck.png";
import grotonToggle from "./images/grotonfd-toggle.gif";

const projectList = [
  {
    projectName: 'Configz.me',
    description: 'Created front-end for file configuration tool.',
    repoLink: 'https://github.com/bycdiaz/configzme/tree/master/frontend',
    liveLink: '',
    madeWith: 'Made with JavaScript, ReactJS, and CSS.',
    image: configzmeImage
  },
  {
    projectName: 'Pre-req Check',
    description: 'Web application that identifies pre-requisites, co-requisites, and post-requisites for courses at Drexel University.',
    repoLink: 'https://github.com/drexelbiomed/pre-req_check',
    liveLink: 'https://pre-req-check.herokuapp.com/',
    madeWith: 'Made with Sinatra, Ruby, Bootstrap, and CSS.',
    image: prereqCheck
  },
  {
    projectName: 'Groton Fire Rescue - Drawing Winners Page',
    description: 'Added feature for displaying drawing winners by year.',
    repoLink: 'https://github.com/I3uckwheat/GrotonFireRescue',
    liveLink: 'https://www.grotonfiredept.com/gun-drawing',
    madeWith: 'Made with JavaScript, Pug, and CSS.',
    image: grotonToggle
  }
]

export default projectList;

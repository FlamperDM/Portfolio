import logoXrTerra from './../asset/img/experience/logo-xrTerra.jpg'
import logoCarbonBlack from './../asset/img/experience/logo-carbonBlack.jpg'
import logoHackDiversity from './../asset/img/experience/logo-hackDiversity.jpg'

import iconLinkedin from './../asset/icon/linkedin.svg'
import iconGithub from './../asset/icon/github.svg'
import iconMedium from './../asset/icon/medium.svg'

import photo from './../asset/img/photo.jpg'

import portfolioImgSurvival from './../asset/img/portfolio/survivalGame.jpg'
import portfolioImgWitchpires from './../asset/img/portfolio/witchpires.jpg'
import portfolioImgVRCrane from './../asset/img/portfolio/vrcrane.jpg'

export const navLinks = [
  {
    text: 'About',
    path: '#about'
  },
  {
    text: 'Portfolio',
    path: '#portfolio'
  },
  {
    text: 'Experiences',
    path: '#experience'
  },
  {
    text: 'Contact',
    path: '#contact'
  }
];

export const portfolioData = [
  {
    title: 'VR Crane Training Simulator',
    description: '',
    imgPath: portfolioImgVRCrane,
    youtubeUrl: 'https://youtu.be/_4n-gXC5s2s'
  },
  {
    title: '2D survival game',
    description: '',
    imgPath: portfolioImgSurvival,
    youtubeUrl: 'https://www.youtube.com/watch?v=oX0JNEitblY'
  },
  {
    title: '2D witch shooter game',
    description: '',
    imgPath: portfolioImgWitchpires,
    youtubeUrl: 'https://www.youtube.com/watch?v=jjRqEkI5oPk&t=2s'
  }
];

export const experienceData = [
  {
    title: 'XR Terra - AR VR Developer Program',
    description: '12-week boot camp to learn AR/VR development in Unity through project-based instruction and industry projects using XR Foundation',
    date: 'June 2020',
    imgPath: logoXrTerra
  },
  {
    title: 'VM WARE Carbon Black',
    description: '12-week internship into a Cyber Security company B2B based on cloud native endpoint protection.',
    date: 'June 2019',
    imgPath: logoCarbonBlack
  },
  {
    title: 'Hack.Diversity',
    description: '8-month Hack.Diversity Fellowship, a career leadership and workforce development program, integrating Boston\'s innovation, corporate, civic, academic, and philanthropic pillars.',
    date: 'January 2019',
    imgPath: logoHackDiversity
  }
];

export const aboutData = {
  name: 'Flampeyeiry Diaz',
  headLine: 'Software Engineer',
  photo: photo
};

export const socialButtonsData = [
  {
    url: 'https://www.linkedin.com/in/flampeyeiry-diaz/',
    icon: iconLinkedin
  },
  {
    url: 'https://github.com/FlamperDM',
    icon: iconGithub
  },
  {
    url: 'https://medium.com/hack-diversity-movement/cohort-stories-meet-flampeyeiry-4ceffd84c04e',
    icon: iconMedium
  }
];
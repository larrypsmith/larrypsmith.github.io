import bitter from './images/bitter.png';
import plotify from './images/plotify.png';
import thoughtBoard from './images/thought-board.png';
import AngelListIcon from './components/AngelListIcon';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export const projects = {
  bitter: {
    title: "Bitter",
    subtitle: "An Untappd Clone",
    description: "Bitter is a social media web app where users rate, review and discuss beer. It is a clone of Untappd.",
    image: bitter,
    website: "https://bitterapp.herokuapp.com/#/",
    gitHub: "https://github.com/larrypsmith/Bitter"
  },
  thoughtBoard: {
    title: "ThoughtBoard",
    subtitle: "An Image-Based Note-Taking Web App",
    description: "ThoughtBoard is a note-taking web app that lets users drag notes around the screen and organize them as desired.",
    image: thoughtBoard,
    website: "https://thought-board-labs.herokuapp.com/#/profile",
    gitHub: "https://github.com/larrypsmith/thought-board"
  },
  plotify: {
    title: "Plotify",
    subtitle: "A personalized Spotify data visualizer",
    description: "Plotify visualizes your top Spotify artists and genres in a circle-packing chart that shows their relationships.",
    image: plotify,
    website: "https://larrypsmith.github.io/plotify/",
    gitHub: "https://github.com/larrypsmith/plotify"
  }
}

export const social = {
  gitHub: {
    name: "GitHub",
    url: "https://github.com/larrypsmith",
    icon: GitHubIcon
  },
  linkedIn: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/larrypaulsmith/",
    icon: LinkedInIcon
  },
  angelList: {
    name: "AngelList",
    url: "https://angel.co/u/larry-paul-smith",
    icon: AngelListIcon
  }
};
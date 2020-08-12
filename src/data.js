import bitter from './images/bitter.png';
import plotify from './images/plotify.png';
import thoughtBoard from './images/thought-board.png';
import toastmates from './images/toastmates.PNG';
import AngelListIcon from './components/AngelListIcon';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { ReactComponent as ReactLogo } from './images/react.svg';
import { ReactComponent as ReduxLogo } from './images/redux.svg';
import { ReactComponent as JavaScriptLogo } from './images/javascript.svg';
import { ReactComponent as Html5Logo } from './images/html5.svg';
import { ReactComponent as Css3Logo } from './images/css3.svg';
import { ReactComponent as NodeJsLogo } from './images/nodejs.svg';
import { ReactComponent as ExpressJsLogo } from './images/expressjs.svg';
import { ReactComponent as RubyLogo } from './images/ruby.svg';
import { ReactComponent as RailsLogo } from './images/rails.svg';
import { ReactComponent as D3Logo } from './images/d3.svg';
import { ReactComponent as JQueryLogo } from './images/jquery.svg';
import { ReactComponent as PostgreSqlLogo } from './images/postgresql.svg';
import { ReactComponent as MongoDbLogo } from './images/mongodb.svg';
import { ReactComponent as AwsLogo } from './images/aws.svg';
import { ReactComponent as GraphQLLogo } from './images/graphql.svg';
import { ReactComponent as ApolloLogo } from './images/apollo.svg';

import resume from './Larry_Smith_Resume.pdf'

export const projects = {
  toastmates: {
    title: "Toastmates",
    subtitle: "A modern web app powered by GraphQL",
    description: "Toastmates is a clone of the popular courier service, Postmates.",
    image: toastmates,
    website: "https://toastmates.herokuapp.com/#/",
    gitHub: "https://github.com/larrypsmith/toastmates"
  },
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
  },
  resume: {
    name: "Download Résumé",
    url: resume
  },
  email: {
    name: "lawrencepaulsmith1@gmail.com",
    url: "mailto:lawrencepaulsmith1@gmail.com"
  }
};

export const skills = [
  { name: 'React', logo: ReactLogo },
  { name: 'Redux', logo: ReduxLogo },
  { name: 'GraphQL', logo: GraphQLLogo },
  { name: 'Apollo', logo: ApolloLogo },
  { name: 'JavaScript', logo: JavaScriptLogo },
  { name: 'Node.js', logo: NodeJsLogo },
  { name: 'HTML5', logo: Html5Logo },
  { name: 'CSS3', logo: Css3Logo },
  { name: 'Express', logo: ExpressJsLogo },
  { name: 'Ruby', logo: RubyLogo },
  { name: 'Rails', logo: RailsLogo },
  { name: 'D3.js', logo: D3Logo },
  { name: 'jQuery', logo: JQueryLogo },
  { name: 'postgreSQL', logo: PostgreSqlLogo },
  { name: 'MongoDB', logo: MongoDbLogo },
  { name: 'AWS S3', logo: AwsLogo }
]
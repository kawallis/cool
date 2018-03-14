import Keydown from '../images/keyDown.png';
import Musicart from '../images/Musicart.png';
import TweetsFromSpace from '../images/TweetsFromSpace.png';

// 'JavaScript', 'Node.js', 'Jquery', 'Express Js', 'CSS', 'React.js', 'React', 'Native', 'HTML5', 'MongoDB', 'SQL'];
const projectData = [
    {
        title: 'music.art',
        image: Musicart,
        description: "Musicart is a web application that brings your music to life by providing sweet visualizations to accompany it. You can choose a few different views and it makes use of SoundCloud API to search for songs. It was fun side project I've been working on and if you want to know more check out my blog too learn how to build your own. ",
        techDeck: ['JavaScript', 'HTML5', 'CSS', 'Express Js', 'Node.js'],
        url: 'https://mysterious-oasis-85473.herokuapp.com/'
    },
    {
        title: 'space tweets',
        image: TweetsFromSpace, 
        description: 'Space tweets was one of my favorite projects I have built to date. Our team was able to use the twitter API in conjunction with the google map API to bring a unique experience that allows users to see live  tweets displayed on a map of earth. Note twitter has updated settings to where location is optional now which has resulted in lower results. ',
        techDeck: ['Jquery','JavaScript', 'HTML5', 'CSS', 'Express Js', 'Node.js'],
        url: 'https://tweetsfromspace.herokuapp.com/'
    },
    {
        title: 'keydown',
        image: Keydown,
        description: 'Keydown was a web application built in vanilla javascript where your keyboard is turned into a virtual drum machine. There are three different types of drum  kits that users can play with each with their own individual feel. We took advantage of local storage to save users last play drum kit and hope you enjoy. Psst the second one is the best ;)',
        techDeck: ['HTML5', 'CSS','JavaScript'],
        url: 'https://codersfromthewest.github.io/drummachine/'
    },
]

export default projectData;


import passwordGenerator from '../assets/passwordGenerator.png';
import timedQuizz from '../assets/timedQuizz.png';
import dogFinder from '../assets/dogFinder.png';
import noteTaker from '../assets/noteTaker.png';
import JATE from '../assets/JATE.png';
import techblogMVC from '../assets/techblog.png'

const projects = [

    {
        title: 'Password Generator',
        description:
        'A secure password is created using answers from prompts',
        link: 'https://yemnyfeliz.github.io/PasswordGeneratorJS/',
        repo: 'https://github.com/YemnyFeliz/PasswordGeneratorJS',
        image: passwordGenerator,

    },

    {
        title: 'Timed Quizz',
        description:
        'A multiple choiice quiz that has a timer and user local storage to save the scores',
        link: 'https://yemnyfeliz.github.io/TimedQuizz/',
        repo: 'https://github.com/YemnyFeliz/TimedQuizz',
        image: timedQuizz,

    },

    {
        title: 'Dog Finder',
        description:
        'A web that helps users find dogs to adopt nearby and offers information about specific breeds',
        link: 'https://dmerk2.github.io/Dog-Finder/',
        repo: 'https://github.com/dmerk2/Dog-Finder',
        image: dogFinder,

    },

    {
        title: 'Note Taker',
        description:
        'A web application where users can create notes and are able to save them or delete them if they wish',
        link: 'https://notetaker-express-yf-1dc064856b09.herokuapp.com/',
        repo: 'https://github.com/YemnyFeliz/NoteTaker-Express.js',
        image: noteTaker,

    },

    {
        title: 'Tech-Blog-MVC',
        description:
        'A website where users can sign up and login to read and share posts and comments about technology.',
        link: 'https://techblog-yf-0ce34b9af3ec.herokuapp.com/',
        repo: 'https://github.com/YemnyFeliz/Tech-Blog-MVC',
        image: techblogMVC,

    },

    {
        title: 'TextEditor-PWA',
        description:
        'A text editor to create notes or code snippets with or without an internet connection',
        link: 'https://texteditor-pwa-ajm0.onrender.com/',
        repo: 'https://github.com/YemnyFeliz/TextEditor-PWA',
        image: JATE,

    },

];

export default projects;
import IconGeneration from '../assets/icons/generation.png';
import IconPetIt from '../assets/icons/petit.png';
import IconWizelineAcademy from '../assets/icons/wizelineAcademy.png';
import IconNasa from '../assets/icons/nasa-logo.png';
import IconEccomerce from '../assets/icons/eccomerce-logo.png';

export const certification = [
  {
    title: 'Full Stack Java Developer Bootcamp',
    date: 'March 2020',
    logo: IconGeneration,
    company: 'Generation Mexico',
    text: '12-week Bootcamp were my Team and I developed as a final project a front-end web app. Its purpose is to serve as a digital vaccination card for pets',
    url: {
      title: 'mexico.generation.org',
      url: 'https://mexico.generation.org/national-online/desarrolladora-java-full-stack/',
    },
    iconDiploma: {
      url: 'wpf:diploma-1',
      color: '#d991b9',
      width: '18',
      height: '18',
    },
    iconLink: {
      url: 'mdi:link-variant',
      color: '#d991b9',
      width: '18',
      height: '18',
    },
    tags: [
      { title: 'HTML' },
      { title: 'Javascript' },
      { title: 'CSS' },
      { title: 'Github' },
    ],
    iconProject: IconPetIt,
    iconProject: {
      url: IconPetIt,
      link: 'https://petit-project.netlify.app',
    },
    iconGithub: {
      url: 'uiw:github',
      color: '#d991b9',
      width: '18',
      height: '18',
      link: 'https://github.com/gabrielaRazo/PetIt',
    },
  },
  {
    title: 'Women in Leadership Bootcamp',
    date: 'March 2022',
    logo: IconWizelineAcademy,
    company: 'Wizeline Academy',
    text: 'In this Bootcamp, I developed skills that will help me to navigate the challenges women face at different stages of their careers.',
    url: {
      title: 'academy.wizeline.com',
      url: 'https://academy.wizeline.com/course/women-in-leadership-bootcamp-q3-2022/',
    },
    iconDiploma: {
      url: 'wpf:diploma-1',
      color: '#d991b9',
      width: '18',
      height: '18',
    },
    iconLink: {
      url: 'mdi:link-variant',
      color: '#d991b9',
      width: '18',
      height: '18',
    },
    tags: [],
    iconProject: '',
  },
  {
    title: 'React Testing Bootcamp',
    date: 'May 2022',
    logo: IconWizelineAcademy,
    company: 'Wizeline Academy',
    text: '4-week Bootcamp where I developed a single-page App that use the NASA API. Its purpose is to create a mockup that simulates how the API is being called. Also, test the functionality of everything inside the page.',
    url: {
      title: 'academy.wizeline.com',
      url: 'https://academy.wizeline.com/course/react-testing-bootcamp/',
    },
    iconDiploma: {
      url: 'wpf:diploma-1',
      color: '#d991b9',
      width: '18',
      height: '18',
    },
    iconLink: {
      url: 'mdi:link-variant',
      color: '#d991b9',
      width: '18',
      height: '18',
    },
    tags: [
      { title: 'React' },
      { title: 'Ant Design' },
      { title: 'Javascript' },
      { title: 'Hooks' },
      { title: 'Jest' },
      { title: 'React Testing Library' },
    ],
    iconProject: {
      url: IconNasa,
      link: 'https://nasa-api-react-test.netlify.app',
    },
    iconGithub: {
      url: 'uiw:github',
      color: '#d991b9',
      width: '18',
      height: '18',
      link: 'https://github.com/gabrielaRazo/react-testing-bootcamp-cp-2022',
    },
  },
  {
    title: 'React Hooks Bootcamp',
    date: 'May 2022',
    logo: IconWizelineAcademy,
    company: 'Wizeline Academy',
    text: '4-week Bootcamp where I developed as a final project e-commerce using integrated APIs to show furniture and its categories. The purpose was to create a unique design with all you learned in the course.',
    url: {
      title: 'academy.wizeline.com',
      url: 'https://academy.wizeline.com/course/react-bootcamp-4/',
    },
    iconDiploma: {
      url: 'wpf:diploma-1',
      color: '#d991b9',
      width: '18',
      height: '18',
    },
    iconLink: {
      url: 'mdi:link-variant',
      color: '#d991b9',
      width: '18',
      height: '18',
    },
    tags: [
      { title: 'React' },
      { title: 'Styled Componets' },
      { title: 'Redux' },
      { title: 'Redux-Saga' },
      { title: 'Hooks' },
      { title: 'React Testing Library' },
    ],
    iconProject: {
      url: IconEccomerce,
      link: 'https://eccomerce-project-react.netlify.app',
    },
    iconGithub: {
      url: 'uiw:github',
      color: '#d991b9',
      width: '18',
      height: '18',
      link: 'https://github.com/gabrielaRazo/2022React-Bootcamp-CapstoneProject',
    },
  },
];

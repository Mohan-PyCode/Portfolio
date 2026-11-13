// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import {
  SiCelery,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiKubernetes,
  SiRedis,
} from 'react-icons/si';

// Experience Section Logo's
import codevedaLogo from './assets/company_logo/codeveda.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import jmsLogo from './assets/education_logo/JMS.png';
import svmLogo from './assets/education_logo/SVM.png';
// work Section Logo's
import agripulseLogo from './assets/work_logo/agripulse.png';
import carRentalLogo from './assets/work_logo/rental.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Django', logo: SiDjango, color: '#092E20' },
      { name: 'Django REST Framework', logo: SiDjango, color: '#A30000' },
      { name: 'FastAPI', logo: SiFastapi, color: '#009688' },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Docker', logo: SiDocker, color: '#2496ED' },
      { name: 'Redis', logo: SiRedis, color: '#FF4438' },
      { name: 'Kubernetes', logo: SiKubernetes, color: '#326CE5' },
      { name: 'Celery', logo: SiCelery, color: '#37814A' },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: codevedaLogo,
      role: "Python Developer",
      company: "Codeveda",
      date: "June 2026 - July 2026",
      desc: "Developed dynamic and scalable web applications using the Python, Django,FastAPI  handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Django",
        "FastAPI",
        "Tailwind CSS",
        " PostgreSQL",
        " Next Js",
      ],
    },
    // {
    //   id: 1,
    //   img: agcLogo,
    //   role: "Fullstack Engineer",
    //   company: "Agumentik Group of Companies",
    //   date: "July 2023 - March 2024",
    //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    //   skills: [
    //     "ReactJS",
    //     "Redux",
    //     "JavaScript",
    //     "Tailwind CSS",
    //     "HTML",
    //     "CSS",
    //     "SQL",
    //   ],
    // },
    // {
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [
    // {
    //   id: 0,
    //   img: glaLogo,
    //   school: "GLA University, Mathura",
    //   date: "Sept 2022 - July 2024",
    //   grade: "7.81 CGPA",
    //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    //   degree: "Master of Computer Applications - MCA",
    // },
    {
      id: 1,
      img: jmsLogo,
      school: "JMS institute of Management and Technology, Ghaziabad",
      date: "Sept 2023 - Aug 2027",
      grade: "8.0 CGPA",
      desc: "I pursued my Bachelor's degree in Computer Science and Engineering (B.Tech.) from JMS Institute of Management and Technology, Ghaziabad. Throughout my academic journey, I explored various subjects that strengthened my understanding of computer science and technology. From learning Data Structures and Algorithms to developing skills in Web Development and Database Management Systems, I gained valuable knowledge and practical insights into software development. During my time at JMS Institute, I also worked on projects that helped me apply theoretical concepts to real-world challenges.",
      degree: "Bachelor of Technology (Computer Science)",
    },
    {
      id: 2,
      img: svmLogo,
      school: "SVM Inter College",
      date: "Apr 2022 - March 2023",
      grade: "62%",
      desc: "I completed my class 12 education from SVM Inter College, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "UP(XII) - PCM",
    },
    {
      id: 3,
      img: svmLogo,
      school: "SVM Inter College",
      date: "Apr 2015 - March 2016",
      grade: "74%",
      desc: "I completed my class 10 education from SVM Inter College, under the UP board, where I studied Science.",
      degree: "UP(X) - Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AgriPulse",
      image: agripulseLogo,
      description:
        "AI-powered crop disease early-warning system that continuously monitors crop health data and sends real-time alerts to farmers about potential disease outbreak.",
      tags: ["Python", "FastAPI", "React.js", "Machine Learning", "REST API", "MySQL"],
      github: "https://github.com/Mohan-PyCode/agripulse",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Peer-to-Peer Car Rental Platform",
      image: carRentalLogo,
      description:
        "Full-stack P2P car rental marketplace with multi-facet vehicle filtering (location, seating, transmission) and tiered rate calculation (hourly/daily/weekly).",
      tags: ["Python", "Django REST Framework", "React 18", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/Mohan-PyCode/CAR-RENTAL",
      // webapp: "https://csprep.netlify.app/",
    }
  ];  
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mg,
    eng,
    dinamo,
    www,
    gitlab,
    mysql,
    php,
    laravel,
    python,
    flutter,
    dart,
    wordpress,
    angular,
    nextjs,
    elasticsearch,
    solidity,
    ganache,
    flappybird,
    jarvis,
    chatbot,
    instagrambot,
    cryptoexchange,
    dricoin,
    pegasoworld
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Cloud Architecture",
      icon: mobile,
    },
    {
      title: "Blockchain Developer",
      icon: backend,
    },
    {
      title: "Wordpress Expert",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "GitLab",
      icon: gitlab,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Next.js",
      icon: nextjs,
    },
    {
      name: "ElasticSearch",
      icon: elasticsearch,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Web Developer",
      company_name: "Freelancer",
      icon: www,
      iconBg: "#383E56",
      date: "January 2014 - April 2017",
      points: [
        "Developing and maintaining web applications for local activities like restaurants and pizzeria"
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "MG Group Italia",
      icon: mg,
      iconBg: "#383E56",
      date: "July 2018 - September 2020",
      points: [
        "Developing and maintaining web applications using PHP, Symfony, Twig, Laravel and MySql DB.",
        "I take care of the project from its initial conception, prototyping, development, polishing, till publication, working alongside the customer, always trying to find the best solution according to the customer's needs.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "Dinamo Digitale",
      icon: dinamo,
      iconBg: "#E6DEDD",
      date: "September 2020 - February 2022",
      points: [
        "Developing and maintaining web applications using Angular, Node.js and MongoDB.",
        "Natural Language Processing (NLP) with Bert for big project with AI",
        "Development of web portals for large customers, using the latest technologies. Integrated with machine learning algorithms"
      ],
    },
    {
      title: "Software Developer Specialist",
      company_name: "Engineering Ingegneria Informatica",
      icon: eng,
      iconBg: "#383E56",
      date: "March 2022 - Present",
      points: [
        "Software developer for Stellantis. I created an engine to calculate cars' prices considering the peculiarities of each market of the world",
        "Using JAVA SpringBoot, PHP, Angular and MySql DB",
        "Learning how to develop and manage a world wide web project",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI play Flappy Bird",
      description:
        "A Flappy-Bird-like game played by an IA. The software has been made using Pygame and Neat",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "neat",
          color: "green-text-gradient",
        }
      ],
      image: flappybird,
      source_code_link: "https://github.com/drilon-hametaj/FlappyBird",
    },
    {
      name: "Jarvis AI Assistant",
      description:
        "A personal Assistant like Siri or Alexa",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "selenium",
          color: "green-text-gradient",
        },
      ],
      image: jarvis,
      source_code_link: "https://github.com/drilon-hametaj/jarvis",
    },
    {
      name: "ChatBot",
      description:
        "ChatBot using Deep Learning with regression. Using Tensorflow, Numpy",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "numpy",
          color: "pink-text-gradient",
        },
      ],
      image: chatbot,
      source_code_link: "https://github.com/drilon-hametaj/ChatBot",
    },
    {
      name: "Instagram Bot",
      description:
        "Bot for Instagram that simulate person actions",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "selenium",
          color: "green-text-gradient",
        },
      ],
      image: instagrambot,
      source_code_link: "https://github.com/drilon-hametaj/instagram",
    },
    {
      name: "Crypto Exchange",
      description:
        "This want to be the first crypto exchange that I crate by watching the Dapp University tutorial",
      tags: [
        {
          name: "solidity",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "truffle",
          color: "pink-text-gradient",
        },
        {
          name: "web3",
          color: "blue-text-gradient",
        },
      ],
      image: cryptoexchange,
      source_code_link: "https://github.com/drilonhametaj25/crypto-exchange",
    },
    {
      name: "Dricoin",
      description:
        "My personal coin for BNB blockchain",
      tags: [
        {
          name: "solidity",
          color: "blue-text-gradient",
        }
      ],
      image: dricoin,
      source_code_link: "#",
    },
    {
      name: "PegasoWorld",
      description:
        "I develop and maintain this website for one of the best miniatures company in the world",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        }
      ],
      image: pegasoworld,
      source_code_link: "https://pegasoworld.com",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
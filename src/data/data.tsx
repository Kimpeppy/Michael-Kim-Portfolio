import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import chatPic from '../images/portfolio/ChatServerPic.png';
import chessPic from '../images/portfolio/ChessPic.png'
import FinLifePic from '../images/portfolio/FinLifePic.jpg';
import Q2LPic from '../images/portfolio/Q2LPic.jpg'
import swarmPic from '../images/portfolio/SwarmPic.png'
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Michael Kim`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong>Johns Hopkins University student</strong> majoring in <strong>Computer Science</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am current interested in any <strong>Full-Stack/Artificial Intelligence</strong> work.
        Please take a look at my resume and contact me if you are interested in working with me.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1MbNf99spevy2XDzFe64XtGmvRG4PQYoK/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `I am a versatile engineer adept in both front-end and back-end web development. 
  I thrive on collaborating with ambitious student-led initiatives, 
  channeling my expertise into a diverse array of projects aimed at nurturing innovative products. 
  Explore my portfolio to witness the seamless fusion of technology and creativity.`,
  aboutItems: [
    {label: 'Location', text: 'Ridefield, NJ', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Korean', Icon: FlagIcon},
    {label: 'Interests', text: 'Technologies, Animation, Film', Icon: SparklesIcon},
    {label: 'Study', text: 'John Hopkins University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'MaterialUI',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Express.js',
        level: 7,
      },
      {
        name: 'Mern Stack/MongoDB',
        level: 4,
      },
    ],
  },
  {
    name: 'Coding Language',
    skills: [
      {
        name: 'Javascript',
        level: 8,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'C#',
        level: 3,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Augmented Reality Biology/Chemistry Labs',
    description: 'A biology lab that is simulated in AR',
    url: 'https://quest2learn.notion.site/Setting-up-Quest2Learn-1fa034552f6c4edab10e2b9a1deda24a',
    image: Q2LPic,
  },
  {
    title: 'FinLife: Personal Finance Tracker',
    description: 'Project that keeps track of my personal finance (if link is not clickable, you can potentially check my github for demo)',
    image: FinLifePic,
  },
  {
    title: 'Fault Tolerant Multithreaded Chat Server',
    description: 'A chat server that allows users to communicate to each other.',
    url: 'https://drive.google.com/file/d/1thvRvaj1aILPll9B-a6HLIdEReRLiZkX/view',
    image: chatPic,
  },
  {
    title: 'Agent Swarming Simulation	',
    description: 'A MatLab project where users can simulate swarms.',
    url: 'https://drive.google.com/file/d/1k067ue9_-zLyhitjJ4ml471zULYUH4od/view',
    image: swarmPic,
  },
  {
    title: 'Chess Game',
    description: 'Project that simulates the chess game between two players',
    image: chessPic,
  },
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2025',
    location: 'Baltimore, MD',
    title: 'Johns Hopkins University',
    content: <p>
      Relevant Coursework: Advanced Algorithms, 
      Artificial Intelligence, 
      Computer Systems (C /C++), 
      Data Structures and Algorithms (Java), 
      Discrete Mathematics, 
      Linear Algebra, 
      Intermediate Programming (C/C++)</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May. 2023 - Present',
    location: 'Ohanasoft',
    title: 'Web Developer/Consultant Assistant',
    content: (
      <p>
        Effectively deployed data-driven websites on Oracle Cloud, optimizing data organization and presentation to meet clients’ unique needs.
        Orchestrated comprehensive documentation detailing the construction of the application, ensuring transparency and facilitating future enhancements.
        Conducted thorough SQL-based data analysis, delivering actionable insights and recommendations to clients.
      </p>
    ),
  },
  {
    date: 'Feb. 2023 - May. 2023',
    location: 'Teaching Tools',
    title: 'Backend Developer',
    content: (
      <p>
        Built a website that auto generated lesson plans by sending prompts stored in MongoDB to OpenAI API. 
        Engineered a customizable Jinja page for flexible OpenAI setting adjustments using Yaml and Flask integration.
      </p>
    ),
  },
  {
    date: 'Sep. 2021 - Sep. 2022',
    location: 'Quest2Learn',
    title: 'Augmented Reality Programmer/Data Analysist',
    content: (
      <p>
        Led a dynamic team to pioneer an AR-based distance learning app, simulating immersive lab environments for 100+ users. 
        Utilized advanced data analysis (Pandas, Numpy), revealing a compelling 75% preference for Quest2Learn. 
        Received 2021 DELTA Award and $50,000 grant for exceptional achievement.

      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'mkimykol225@gmail.com',
      href: 'mailto:mkimykol225@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Ridgefield NJ, USA',
    },
    {
      type: ContactType.Github,
      text: 'Kimpeppy',
      href: 'https://github.com/Kimpeppy',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Kimpeppy'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/michael-kim-323780216/'}
];

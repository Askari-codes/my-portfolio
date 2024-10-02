import shahin from "../tailwind/images/shahin.jpeg";
import arezoo from "../tailwind/images/arezoo.jpeg";
import arghun from "../tailwind/images/arghun.jpeg";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Home from "../Components/Pages/Home/Home";
import AboutMe from '../Components/Pages/About-Me/AboutMe';
import WhatIDo from '../Components/Pages/WhatIDo/WhatIDo'
import Resume from '../Components/Pages/Resume/Resume';
import Testimonial from '../Components/Pages/Testimonial/Testimonial'
import Contact from '../Components/Pages/Contact/Contact'




export const sections = [
  { id: "home", component: Home },
  { id: "aboutMe", component: AboutMe },
  { id: "whatIDo", component: WhatIDo },
  { id: "resume", component: Resume },
  { id: "testimonial", component: Testimonial },
  { id: "contact", component: Contact },
];


export const IconsData = [
  { name: "linkedin", href: "https://www.linkedin.com/in/mohammad-askarii/" },
  { name: "github", href: "https://github.com/askari-fahlyani" },
];

export const menuItemsData = [
  { label: "Home", path: "#home", isActive: true },
  { label: "About Me", path: "#aboutMe", isActive: false },
  { label: "What I Do", path: "#whatIDo", isActive: false },
  { label: "Resume", path: "#resume", isActive: false },
  { label: "Testimonial", path: "#testimonial", isActive: false },
  { label: "Contact", path: "#contact", isActive: false },
];

export const CONTACT_LABLE= 'Contact'
export const EMAIL_LABEL='Email'

export const Profile_Name = "Mohammad Askari";

export const My_Email = "askari.codes@gmail.com";

export const RESUME_DOWNLOAD_URL = `${process.env.PUBLIC_URL}/my_resume.pdf`

export const sectionNames = {
  HOME: "home",
  ABOUT_ME: "aboutMe",
  WHAT_I_DO: "whatIDo",
  RESUME: "resume",
  TESTIMONIAL: "testimonial",
  CONTACT: "contact",
}



export const myPersonalInformation = [
  { label: "Email", value: My_Email },
  { label: "Age", value: "33" },
  { label: "From", value: "Utrecht" },
  { label: "Experience", value: "3+ Years" },
  { label: "Name", value: "Mohammad Askari" },
];

export const homeContent = {
  textItems: [
    {
      text: "I'm Mohammad Askari",
      className:
        "text-center h-full  xxs:text-[1.7rem] xs:text-[2rem] md:text-[2.5rem] xl:text-[3rem] font-bold text-[--text-home-title]",
      initial: "visible",
      variant: {
        initial: { opacity: 1 },
        exit: { opacity: 1 },
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          y: 0,
        },
      },
    },
    {
      text: "I'm a frontend developer",
      className:
        "p-[0.5rem] xxs:text-[1.5rem] xs:text-[1.7rem] md:text-[2rem] xl:text-[2.5rem] text-center text-white",
      initial: "hidden",
      variant: {
        hidden: { opacity: 0.1 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
          },
        },
      },
    },
    {
      text: "Crafting beautiful and functional web experiences",
      className:
        "p-0.51rem xxs:text-[1rem] xs:text-[1.4rem] md:text-[1.5rem] xl:text-[2rem] text-center text-white",
      initial: "hidden",
      variant: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
          },
        },
      },
    },
  ],
  buttonSection: {
    text: "Get To Know Me",
    className:
      "p-0.51rem xxs:text-[1rem] xs:text-[1.4rem] md:text-[1.5rem] xl:text-[2rem] text-center text-white font-semibold",
    initial: "hidden",
    variant: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
        },
      },
    },
  },
};

export const aboutMeContent = {
  pageBackgroundTitle: "ABOUT ME",
  pageTitle: "Know Me More ",
  buttonTitle:'Download CV',
  myName: Profile_Name,
  myJob: "a Frontend Developer",
  introduction: {
    partOne: `I specialize in creating visually appealing and user-friendly web interfaces. My goal is to help businesses
                        elevate their online presence through responsive and interactive designs. I began my journey as an intern for
                        six months, where I gained foundational skills, and then spent over two years at a leading company,
                        consistently delivering high-quality projects that exceeded expectations.
                      `,
    partTwo: ` I am committed to providing exceptional service and ensuring that every project I undertake is completed to the
                        highest standard. My experience as a frontend developer has equipped me with the skills to turn creative ideas
                        into functional and dynamic websites`,
  },
  partThree: `I love working closely with clients to bring their ideas to life. I believe that the best results come from open communication and collaboration. Whether it's brainstorming new features or tweaking designs, I enjoy making the process as smooth and enjoyable as possible. Plus, I'm always learning and keeping up with the latest trends, so I can bring fresh ideas to every project.`,
};

export const whatIDoContent = {
  pageBackgroundTitle: "SERVICES",
  pageTitle: "What I Do",
  services: [
    {
      id: "react",
      title: "React Frontend Development",
      content:
        "I specialize in building interactive and efficient user interfaces using React. My focus is on delivering clean, reusable code while ensuring optimal performance and seamless user experiences.",
      icon: "FaReact",
    },
    {
      id: "javascript",
      title: "JavaScript Development",
      content:
        "With deep knowledge of JavaScript, I craft dynamic web applications, bringing functionality and interactivity to life. I work with the latest ES6+ features to write maintainable and scalable code.",
      icon: "IoLogoJavascript",
    },
    {
      id: "uiUx",
      title: "UI/UX Design Integration",
      content:
        "I collaborate closely with designers to translate UI/UX designs into responsive and accessible React applications. My goal is to ensure that the user experience is consistent and intuitive across all devices.",
      icon: "FaPencilRuler",
    },
    {
      id: "development",
      title: "App Design & Development",
      content:
        "From wireframes to deployment, I handle the full cycle of web application development, integrating APIs and building fully functional, scalable applications with React.",
      icon: "FaLaptopCode",
    },
    {
      id: "stateManagement",
      title: "State Management",
      content:
        "I implement state management solutions using Redux or the Context API to maintain a predictable, efficient, and maintainable app architecture.",
      icon: "SiRedux",
    },
    {
      id: "performance",
      title: "Performance Optimization",
      content:
        "I focus on performance by optimizing React components, reducing load times, and enhancing the overall user experience by employing best practices like lazy loading, code splitting, and memoization.",
      icon: "FaTachometerAlt",
    },
  ],
};

export const resumeContent = {
  pageBackgroundTitle: "SUMMARY",
  pageTitle: "Resume",
  languages: "English-Farsi",
  skillsData: [
    { skill: "Web Design", percentage: 65 },
    { skill: "React JS", percentage: 85 },
    { skill: "JavaScript", percentage: 70 },
    { skill: "Redux", percentage: 70 },
    { skill: "Scrum", percentage: 90 },
    { skill: "Tailwind", percentage: 90 },
  ],
  sections: [
    {
      title: "My Experience",
      items: [
        {
          title: "Front-end Developer",
          company: "Chargoon",
          date: "2021-2023",
          content: `Collaborated with teams to design, develop, and maintain responsive web applications using React JS. Participated in agile processes, including sprint planning and retrospectives. Conducted code reviews and provided feedback to ensure code quality. Integrated RESTful APIs for seamless front-end and back-end communication. Managed state efficiently with Redux and Context API for optimal performance.`,
        },
        {
          title: "Achievements",
          company: "Chargoon",
          date: "2021-2023",
          content: `Increased team productivity by 20% in completed story points. Reduced bugs by 15%, ensuring better software quality and smoother user experiences. Stayed current with industry trends and best practices. Contributed to overall project success by continuously improving my skills and knowledge, delivering consistently high-quality outcomes for clients and stakeholders.`,
        },
        {
          title: "Technologies Used",
          company: "Chargoon",
          date: "2021-2023",
          content: `Utilized React JS, Redux, and Context API to develop scalable web applications. Integrated RESTful APIs to ensure seamless communication between front-end and back-end systems. Worked within agile methodologies, contributing to project delivery. Focused on performance optimization and state management, ensuring smooth and efficient functionality throughout the development process.`,
        },
      ],
    },
    {
      title: "My Education",
      items: [
        {
          title: "Front-end Developer",
          company: "Mapsa Bootcamp",
          date: "2020-2021",
          content: `Assisted in the development of React components and user interfaces. Worked on state management and UI/UX design tasks. Gained hands-on experience in developing web applications. Participated in various stages of front-end development, ensuring responsiveness and functionality. Contributed to collaborative projects that implemented modern front-end development best practices.`,
        },
        {
          title: "Achievements",
          company: "Mapsa Bootcamp",
          date: "2020-2021",
          content: `Mastered modern JavaScript (ES6+), applying features like arrow functions, destructuring, and async/await. Developed strong debugging skills, resolving issues in React applications. Gained insights into React best practices and methodologies. Applied these skills to build efficient, user-friendly web applications. Improved development workflows and implemented practical solutions during training.`,
        },
        {
          title: "Technologies Used",
          company: "Mapsa Bootcamp",
          date: "2020-2021",
          content: `Worked extensively with React JS, JavaScript (ES6+), HTML, and CSS. Applied Redux for state management and focused on UI/UX design integration. Leveraged modern front-end technologies to create dynamic, responsive web applications that improved the overall user experience. Ensured effective state management and functional design in every project.`,
        },
      ],
    },
  ],
};

export const testimonialContent = {
  pageBackgroundTitle: "TESTIMONIAL",
  pageTitle: "What My Colleagues Say",
  colleagues: [
    {
      id: 1,
      name: "Arezou Zahedi",
      jobRole: "Backend Developer",
      image: arezoo,
      testimonial:
        "Worked with Mohammad for a year at Chargoon as a frontend developer. Delivered high-quality work, tackled challenges with ease, and was an excellent team player. Highly recommend him—he’s a valuable asset.",
    },
    {
      id: 2,
      name: "Shahin Azedi",
      jobRole: "Product Owner",
      image: shahin,
      testimonial:
        "Hardworking and logical, Mohammad is one of my most capable colleagues. If an organization is seeking someone who is dedicated to their work and brings creativity to the table ",
    },
    {
      id: 3,
      name: "Masoud Aqaei",
      jobRole: "Senior Frontend ",
      image: arghun,
      testimonial:
        "Mohammad showed significant growth as a junior frontend developer. His eagerness to learn and quick grasp of complex concepts made him invaluable to our team. I look forward to his continued success",
    },
  ],
};

export const contactContect = {
  pageBackgroundTitle: "CONTACT",
  pageTitle: "Get In Touch",
  buttonText: "Send Message",
  iconLabel: "FOLLOW ME",
  emailBoxTexts: {
    labelNames: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    placeHolderTexts: {
      name: "Name",
      email: "Email",
      commentBox: "Have a question or an opportunity to discuss? Drop me a message..."
    },
  },
  addresses: [
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      description: "Eelderdiephof 90 , Utrecht, Netherlands",
    },
    {
      icon: FaPhone,
      title: "Phone",
      description: "+31 616622826",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      description: My_Email,
    },
  ],
};

export const toastContent = {
  success:'Email successfully sent!',
  error:'Operation failed!'
}

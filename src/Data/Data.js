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

export const Profile_Name = "Mohammad Askari";

export const myPersonalInformation = [
  { label: "Email", value: "askari.codes@gmail.com" },
  { label: "Age", value: "33" },
  { label: "From", value: "Utrecht" },
  { label: "Experience", value: "3+ Years" },
  { label: "Name", value: "Mohammad Askari" },
];

export const aboutMeContent = {
  pageBackgroundTitle: "About Me",
  pageTitle: "Know Me More ",
  myName: Profile_Name,
  myJob: "a Frontend Developer",
  introduction: {
    partOne: `I specialize in creating visually appealing and user-friendly web interfaces. My goal is to help businesses
                        elevate their online presence through responsive and interactive designs. I began my journey as an intern for
                        six months, where I gained foundational skills, and then spent over two years at a leading company,
                        consistently delivering high-quality projects that exceeded expectations.
                      `,
    partTow: ` I am committed to providing exceptional service and ensuring that every project I undertake is completed to the
                        highest standard. My experience as a frontend developer has equipped me with the skills to turn creative ideas
                        into functional and dynamic websites`,
  },
};

export const whatIDoContent = {
  pageBackgroundTitle: "Services",
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


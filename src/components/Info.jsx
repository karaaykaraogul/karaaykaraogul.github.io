const greeting = {
  name: "Karaay Karaoğul",
  title: "Hello! I'm Karaay.",
  summary: `Welcome to my personal github page.\n\nI am a highly motivated and passionate developer with a solid background and experience in software development.\n\nI thrive on taking initiative and collaborating on projects, bringing strong problemsolving skills and attention to detail to every task.`,
};

const socialMediaLinks = {
  github: "https://github.com/karaaykaraogul",
  linkedin: "https://www.linkedin.com/in/karaaykaraogul/",
  gmail: "karaaydev@gmail.com",
  instagram: "https://www.instagram.com/karaaykaraogul/",
  leetcode: "https://leetcode.com/Karaay/",
  twitter: "https://twitter.com/karaaykaraogul",
};

const educationInfo = {
  schools: [
    {
      schoolName: "Sakarya University",
      subHeader: "Bachelor of Science, Computer Engineering",
      duration: "September 2018 - June 2022",
      desc: "Graduated with 3.12 / 4",
    },
    {
      schoolName: "AGH University of Science and Technology",
      subHeader: "Bachelor of Science, Computer Engineering",
      duration: "April 2020 - June 2020",
      desc: "Erasmus Exchange Programme Student",
    },
  ],
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "VR Game Developer",
      company: "Panteon",
      date: "September 2022 - May 2023",
      desc: "Worked on a semi-realistic game for Quest 2 Headset as a VR Game Developer.",
      descBullets: [
        "Used C# language with a great emphasis on Clean Code and Design Patterns in order to achieve the best performance and maintainability on a limited platform.",
        "I have contributed to weekly and overall planning of the project and learnt to work efficiently in a fast paced environment.",
        "I took full responsibility for successfully completing various core and side gameplay aspects.",
      ],
    },
    {
      role: "Game Developer",
      company: "Panteon",
      date: "September 2022 - September 2022",
      desc: "Worked on developing a prototype game for mobile devices on Unity Game Engine. Developed first prototype in two weeks, leading to VR Game Development Team invitation.",
    },
    {
      role: "Software Developer",
      company: "Intertech",
      date: "November 2021 - August 2022",
      desc: "Worked on development and maintenance of the “Inventory” Project, delivering and receiving data via API’s with an easy to use website.",
      descBullets: [
        "Identified and resolved critical cognitive and cyclomatic complexities and fixed reported or not yet identified bugs to ensure a smooth and uninterrupted project.",
        "Used .NET Core for developing and maintaining the project and mainly MSSQL for database with partly MongoDB, Inventory apps were hosted on Google Cloud Platform with Vue.js in front-end.",
        "Used Postman to test, check and design various API inputs and expected results and have used Swagger to document and design APIs.",
      ],
    },
    {
      role: "Intern",
      company: "Yarış Kabin",
      date: "August 2021",
      desc: "Worked on a small project that reads and logs barcodes and QR codes. Used Python with OpenCV to detect the barcodes and QR codes",
    },
  ],
};

const projects = {
  repositories: [
    {
      name: "Midcore Strategy Game",
      link: "https://github.com/karaaykaraogul/Mid-Core-Strategy-Game",
      techstack: "C#, Unity",
    },
    {
      name: "Personal Github Page",
      link: "https://github.com/karaaykaraogul/karaaykaraogul.github.io",
      techstack: "React + Vite, Tailwind, HTML/CSS/JS",
    },
    {
      name: "Ne Yesem",
      link: "https://github.com/karaaykaraogul/Ne_Yesem",
      techstack: "React Native, Expo, Firebase, JavaScript",
    },
    {
      name: "HyperCasual Platform Runner",
      link: "https://github.com/karaaykaraogul/HyperCasual-PlatformRunner",
      techstack: "C#, Unity",
    },
    {
      name: "Quest-Map",
      link: "https://github.com/karaaykaraogul/quest-map",
      techstack: "Java, Google Maps API, MySQL",
    },
    {
      name: "Computer Graphics - 3D Object Project",
      link: "https://github.com/karaaykaraogul/ComputerGraphics_Project",
      techstack: "C++",
    },
  ],
};

export { greeting, socialMediaLinks, educationInfo, workExperiences, projects };

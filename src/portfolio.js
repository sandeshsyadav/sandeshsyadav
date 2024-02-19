/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Sandesh Yadav",
  logo_name: "sandesh.y()",
  nickname: "",
  full_name: "Sandesh Yadav",
  subTitle:
    "Principal Software Engineering Manager, front-end expert 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1naFFWJo1VXconirE_J0IcrWG-AhShFBH/view?usp=drive_link",
  mail: "mailto:sandeshsyadav@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/sandeshsyadav",
  linkedin: "https://www.linkedin.com/in/sandeshsyadav/",
  gmail: "sandeshsyadav@gmail.com",
};

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Manage, lead and mentor resources",
        "⚡ Cross collaborating across different team",
        "⚡ Creating application backend in Node, Express & Graphql",
        "⚡ Integration of third party services such as Firebase/ AWS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "aws",
          fontAwesomeClassname: "simple-icons:amazon",
          style: {
            color: "DE33A6",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "SUNY Binghmaton",
      subtitle: "Master's in Computer Science",
      logo_path: "sunyb.png",
      alt_name: "SSEC",
      duration: "2008 - 2009",
    },
    {
      title: "University of Mumbai",
      subtitle: "Bachelors in Information Technology",
      logo_path: "umum.jpg",
      alt_name: "unversity of mumbai",
      duration: "2002 - 2006",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Scrum Alliance",
      subtitle: "certified scrum master",
      logo_path: "csms.png",
      alt_name: "Scrum Alliance",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Scrum Alliance",
      subtitle: "certified product owner",
      logo_path: "csmp.jpeg",
      alt_name: "Scrum Alliance",
      color_code: "#E2405F",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I have over 17+ years of industry experience in managing, leading, designing, implementing, and delivery of enterprise-level and incubator solutions to support growing needs of technology industry. A visionary who translates business requirements into strategic technical solutions with focus on functionality, technicality, and scalability.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Principal Software Engineering Manager",
          company: "Level 20",
          company_url: "https://www.level20.com/",
          logo_path: "l20_logo_v2.svg",
          duration: "Jan 2021 - Present",
          location: "Cleveland, Ohio",
          description: `Working with a growth incubator for one of the largest US Insurance providers, led a 14+ member cross-functional team of UX designers, data
          scientists, data engineers, full stack developers and testers to develop new-to-market technical products. Responsible for managing and
          providing technical guidelines for new and innovative solutions to drive digital transformation and growth at Level20.
          `,
          responsibilities: [
            "⚡ Defined Most viable product (MVP) / Most viable experience (MVE) scope by collaborating with business through risk and cost tradeoff",
            "⚡ Developed a prioritized technical roadmap by collaborating with business leaders and technical teams to identify dependencies and phased implementation of product features",
            "⚡ Designed proof of concepts for beta releases using React, Typescript, GraphQL and AWS with CI/CD workflow to evaluate the complexity of the technical build and identify the building components and established an architectural framework for the product",
            "⚡ Evaluated several technical and operational vendors to assist in building a robust product by benchmarking against various data points like ease of integration, cost of operation and support based on the use case",
            "⚡ Studied and analyzed 4000+ transactional record to develop a pattern to feed into our proprietary prediction algorithm",
            "⚡ Led benchmarking initiatives to identify trends and opportunities, leading to the development of the new financial management product line",
            "⚡ Conducted over 30+ target user interviews and identified potential enhancement opportunities in the competitive market",
            "⚡ Architected predictions algorithm and maintained a code base for reusability and scalability",
            "⚡ Increased competitive edge of the proprietary product by automating customer financial management model",
            "⚡ Reduced defects by 30% by creating architecture designs and QA blueprints for the projects",
            "⚡ Maintained code standard and quality by establishing standards for linting, unit testing, pull request, code reviews, and end-end testing",
            "⚡ Developed technical and business use cases to evaluate and onboard vendors to expedite project execution to meet go-to-market timeline",
            "⚡ Increased operational efficiency by 17% by developing technical descriptions of operations and process workflows",
            "⚡ Conducted ideation workshops with subject matter experts to gather out of the box ideas to align on the target state of the financial product",
            "⚡ Implemented CI/CD processes for efficient development and testing of web technologies using React",
            "⚡ Established and maintained strong vendor relationships to drive transparency, high-quality service, and cost-effectiveness",
          ],
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Senior Software Engineering Manager",
          company: "Progressive Insurance",
          company_url: "https://www.progressive.com/",
          logo_path: "progressive.svg",
          duration: "May 2009 - Jan 2021",
          location: "Cleveland, Ohio",
          description: `Technical Leader focused on full stack development providing innovative cost-effective solutions to enhance customer experience on Progressive
          websites. Additionally, involved in improving and maintaining IT software programs/applications, and supporting infrastructure.`,
          responsibilities: [
            "⚡ Created and managed a design system to unify the design of UI across various Progressive platforms to create consistency in development and UX experience",
            "⚡ Responsible for creating analytics library with a team of 6 resources consisting of QA, developers, and data analytics to track user behavior and logging application data which helped in improving application performance and architecture",
            "⚡ Designed custom dashboards in Google Analytics and Splunk to centralize log management. Enabled efficiency in debugging issues by 20%",
            "⚡ Designed and implemented several proofs of concepts in Angular and Nodejs to identify potential enhancement opportunities and support advanced technology in Progressive's infrastructure",
            "⚡ Led initiative to implement Git branching strategy to deliver and maintain production code resulting in quick turnaround",
            "⚡ Integrated IBM tealeaf with Angular application to monitor and track user interaction on customer facing web pages",
            "⚡ Conducted multiple training sessions on Angular technology including key features, design concepts, best coding practices to maintain and enhance the Angular applications",
          ],
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Community Involvement",
  description:
    "Dedicated and passionate educator with a proven ability to engage and inspire young minds within the community. With a commitment to fostering a sense of belonging and responsibility, I strive to instill in children the values of collaboration, empathy, and respect for diversity. Through innovative and interactive teaching methods, I create a supportive learning environment where every child feels valued and empowered to reach their full potential. By integrating real-world examples and encouraging active participation, I aim to equip students with the skills and knowledge necessary to become conscientious and contributing members of their community.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sandesh.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Technology Education and Learning Support (TEALS)",
      url: "https://www.microsoft.com/en-us/teals",
      description:
        "Technology Education and Learning Support (TEALS) is a Microsoft Philanthropies program that builds sustainable computer science (CS) programs in high schools. With focus on serving students excluded from learning CS because of race, gender, or geography. TEALS helps teachers learn to teach CS by pairing them with industry volunteers and proven curricula. ",
      languages: [],
      links: [],
    },
    {
      id: "1",
      name: "DEI ambassador",
      url: "https://www.progressive.com/about/diversity-and-inclusion/",
      description:
        "It keeps us looking for what's new and next to better serve our customers and work with each other. To maintain this level of energy and engagement, we strive for diversity in our teams, equity in our practices, and inclusion in our culture. Diversity, equity, and inclusion may feel like ambitious words, but for us, DEI means we make sure all voices are heard, act with kindness, invest in relationships, and make intentional changes to get better at what we do every day.",
      languages: [],
      links: [],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};

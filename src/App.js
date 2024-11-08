import React from 'react';
import BasicInfo from './components/BasicInfo';
import Work from './components/Work';
import Skills from './components/Skills';
import Resource from './components/Resource';

// Import images
import WYAFImage from './assets/images/WYAF_03.webp';
import CordusImage from './assets/images/cover.png';
import githubLogo from './assets/images/github-logo.svg';
import rrcLogo from './assets/images/rrc-catalogue.svg';

function App() {
    const basicInfo = {
        name: "Ashbeel Bhatti",
        location: "Winnipeg, MB",
        email: "abhatti2@gmail.com",
        github: "https://github.com/abhatti2",
        summary: "Web Application Developer with a strong foundation in Full Stack Development. Proficient in front-end technologies like JavaScript and React, as well as back-end frameworks such as Ruby on Rails, PHP, and Python. Experienced in building responsive, user-friendly web applications and integrating APIs. Known for collaborative problem-solving and dedicated to crafting optimized digital experiences."
    };

    const workItems = [
        {
            title: "CMS Website for Winnipeg Youth Arts Foundation (WYAF)",
            description: "Developed a content management system (CMS) with PHP, HTML, CSS, and Bootstrap for WYAF, enhancing content management capabilities for administrators. Implemented responsive admin dashboard with full CRUD functionality for user profiles and content management, improving backend efficiency. Added user authentication and session management for security.",
            image: WYAFImage,
            link: "https://github.com/abhatti2/WYAF.git",
            techList: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript", "MySQL", "MariaDB", "Docker"]
        },
        {
            title: "Social Club Website",
            description: "Built a responsive social club website featuring event details, updates, and membership registration, increasing member engagement. Integrated JavaScript-based client-side validation for forms, reducing errors and enhancing user experience. Optimized for both desktop and mobile platforms, achieving 100% responsiveness.",
            image: CordusImage,
            link: "https://abhatti2.github.io/",
            techList: ["HTML", "CSS", "JavaScript"]
        },
    ];

    const skills = {
        description: "An overview of my technical skills and experience in front-end, back-end, and database management, with a strong commitment to building responsive, optimized web applications.",
        languages: ["HTML5", "CSS3", "JavaScript", "React.js", "TailwindCSS", "Ruby on Rails", "Python (Flask/Django)", "PHP"],
        tools: ["Git", "GitHub", "Visual Studio Code", "RESTful API Development", "Docker"]
    };

    const resources = [
        {
            title: "GitHub Profile",
            image: githubLogo,
            summary: "Explore repositories showcasing full-stack projects and contributions, including CMS systems and responsive websites.",
            link: "https://github.com/abhatti2"
        },
        {
            title: "Full Stack Web Development Program - Course Overview",
            image: rrcLogo,
            summary: "Detailed information about the Full Stack Web Development program’s courses at Red River College Polytechnic, covering topics in front-end, back-end, databases, and web development tools.",
            link: "https://catalogue.rrc.ca/Programs/WPG/Fulltime/FUSTF-DP/CoursesandDescriptions"
        }
    ];

    return (
        <div>
            <BasicInfo {...basicInfo} />
            <h2 className="my-4 text-center">Work</h2>
            <div className="container">
                {workItems.map((work, index) => (
                    <Work key={index} {...work} />
                ))}
            </div>
            <Skills {...skills} />
            <h2 className="my-4 text-center">Resources</h2>
            <div className="container">
                {resources.map((resource, index) => (
                    <Resource key={index} {...resource} />
                ))}
            </div>
        </div>
    );
}

export default App;

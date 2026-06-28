export const portfolioData = {
  personalInfo: {
    fullName: "Fakiha Zahoor",
    title: "Full-Stack MERN Developer | AI Integration Enthusiast",
    shortTitle: "Full-Stack MERN Developer",
    avatar: "/fakiha.jpg",
    aboutMe: "I am a Software Engineering student (Class of 2027) with hands-on experience in Full-Stack MERN Development and AI-powered applications. I have completed remote internships and developed multiple web, mobile, and AI-based projects. My expertise includes building scalable web applications, designing RESTful APIs, managing databases, implementing secure authentication systems, and integrating Large Language Models (LLMs) to create intelligent solutions. I am passionate about solving real-world problems through technology and continuously learning emerging tools and frameworks.",
    resumeUrl: "/resume.pdf",
    location: "Okara, Pakistan",
    email: "fakihazahoor0@gmail.com",
    phone: "+92 306 6916931",
    localTimezone: "Asia/Karachi",
  },

  socials: {
    email: "fakihazahoor0@gmail.com",
    github: "https://github.com/fakihazahoor168-ctrl",
    linkedin: "https://www.linkedin.com/in/fakiha-zahoor-86789a32a",
    twitter: "",
    behance: ""
  },

  stats: [
    { label: "CGPA", value: "3.96/4.0", icon: "graduation" },
    { label: "Internships", value: "2+", icon: "briefcase" },
    { label: "Projects", value: "8+", icon: "rocket" },
    { label: "Technologies", value: "20+", icon: "code" },
    { label: "AI Projects", value: "2+", icon: "brain" },
    { label: "Mobile Apps", value: "1+", icon: "mobile" },
    { label: "Full-Stack Apps", value: "3+", icon: "globe" },
  ],

  skills: {
    categories: [
      {
        name: "Frontend Development",
        items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Context API"]
      },
      {
        name: "Backend Development",
        items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"]
      },
      {
        name: "Databases",
        items: ["MongoDB (Mongoose)", "MySQL", "Database Schema Design", "XAMPP"]
      },
      {
        name: "AI & Machine Learning",
        items: ["Python", "OpenCV", "Streamlit", "LLM Integration (OpenAI, Gemini)", "Hugging Face Transformers"]
      },
      {
        name: "Tools & Platforms",
        items: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Netlify", "Firebase", "VS Code", "Jupyter Notebook", "Adobe Illustrator", "Flutter"]
      },
      {
        name: "Core Concepts",
        items: ["MERN Architecture", "REST API Design", "Responsive Design", "Agile Development", "OOP", "DSA", "Parallel Processing"]
      }
    ]
  },

  projects: [
    {
      id: 1,
      title: "SkillSync – MERN Collaboration Platform",
      image: "/projects/skillsync.png",
      description: "A full-stack platform that connects students with project opportunities and teammates based on skills and interests. Features user authentication, profile management, project posting, and skill matching.",
      longDescription: "SkillSync is a comprehensive MERN stack application designed to bridge the gap between students seeking project collaborators and those looking for skill-matched teammates. Built with a focus on scalability, clean API design, and seamless UX.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      github: "https://github.com/fakihazahoor168-ctrl/Skill-Based-Student-Project-Collaboration-Platform.git",
      live: "https://skill-based-student-project-collabo.vercel.app/",
      category: "Fullstack",
      highlights: ["User Authentication", "Profile Management", "Project Posting", "Team Requests", "Skill Matching"]
    },
    {
      id: 2,
      title: "AI PDF Reader & Question Generator",
      image: "/projects/ai_pdf.png",
      description: "An AI-powered application that extracts text from PDFs and automatically generates summaries, questions, and MCQs with multiple difficulty levels using Hugging Face Transformers.",
      longDescription: "Leverages BART and T5 transformer models to intelligently process PDF documents, generating concise summaries and context-aware questions. Streamlit provides an interactive, accessible UI for non-technical users.",
      tech: ["Python", "Streamlit", "Hugging Face", "BART", "T5", "PyPDF2"],
      github: "https://github.com/fakihazahoor168-ctrl/Smart-Pdf-Reader.git",
      live: "https://github.com/fakihazahoor168-ctrl/Smart-Pdf-Reader",
      category: "AI",
      highlights: ["PDF Text Extraction", "AI Summarization", "Auto Question Generation", "MCQ Generation", "Multiple Difficulty Levels"]
    },
    {
      id: 3,
      title: "Recipe Finder App",
      image: "/projects/recipe_app.png",
      description: "A cross-platform mobile application for discovering and saving recipes. Features Firebase authentication, dark mode, recipe search, category filtering, and detailed cooking instructions.",
      longDescription: "Built with Flutter and Dart, the Recipe Finder App delivers a polished, cross-platform experience. Firebase handles authentication and real-time data syncing, while Material Design ensures a consistent and beautiful UI.",
      tech: ["Flutter", "Dart", "Firebase", "Material Design"],
      github: "https://github.com/AlihaAsif/Recipe-Finder-App.git",
      live: "https://github.com/AlihaAsif/Recipe-Finder-App",
      category: "Mobile",
      highlights: ["Firebase Auth", "Dark Mode", "Recipe Search", "Category Filtering", "Favorites System"]
    },
    {
      id: 4,
      title: "Smart Alarm Management System",
      image: "/projects/smart_alarm.png",
      description: "A console-based alarm management system built with C++ and Data Structures. Supports creating, editing, deleting, and snoozing multiple alarms with file handling persistence.",
      longDescription: "Demonstrates strong DSA fundamentals through the implementation of linked lists, queues, and arrays to manage alarm data efficiently. File handling ensures alarm persistence across sessions.",
      tech: ["C++", "Linked Lists", "Queues", "Arrays", "File Handling"],
      github: "https://github.com/fakihazahoor168-ctrl/Alarm-Clock.git",
      live: "https://github.com/fakihazahoor168-ctrl/Alarm-Clock",
      category: "Systems",
      highlights: ["Create/Edit/Delete Alarms", "Snooze Functionality", "Multiple Alarm Management", "File Persistence"]
    },
    {
      id: 5,
      title: "UI Components Playground",
      image: "/projects/ui_playground.png",
      description: "A web-based UI component builder that allows users to quickly create and customize HTML components with live code preview. Ideal for students, developers, and designers who want to experiment with Bootstrap-based components visually.",
      longDescription: "UI Components Playground lets you visually build and customize Bootstrap 5 components — buttons, cards, navbars, modals, inputs, alerts, badges, progress bars, and spinners — with live customization controls for text, colors, font sizes, border radius, and shadows. Auto-generates clean HTML code that can be copied instantly. Fully client-side with no backend required.",
      tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Drag & Drop API"],
      github: "https://github.com/fakihazahoor168-ctrl/UI-Components-Playground.git",
      live: "https://ui-components-playground-iota.vercel.app/",
      category: "Frontend",
      highlights: ["Live Code Preview", "9+ UI Components", "Drag & Drop", "One-Click Copy HTML", "Live Customization Controls", "Fully Client-Side"]
    },
    {
      id: 6,
      title: "Website Behavior Simulator",
      image: "/projects/behavior_simulator.png",
      description: "An interactive frontend mini-project that demonstrates how a website's behavior can dynamically change using DOM manipulation and classList. Switch between Focus, Reading, and Night modes in real time.",
      longDescription: "Website Behavior Simulator showcases the power of JavaScript DOM manipulation through three dynamic modes: Focus Mode hides images to reduce distractions, Reading Mode improves readability with better font size and spacing, and Night Mode applies a dark theme for comfortable viewing. An active mode indicator always shows the current state. Built with Bootstrap 5 for full responsiveness.",
      tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "DOM Manipulation"],
      github: "https://github.com/fakihazahoor168-ctrl/website-behavior-simulator.git",
      live: "https://website-behavior-simulator.vercel.app/",
      category: "Frontend",
      highlights: ["Focus Mode", "Reading Mode", "Night Mode", "Active Mode Indicator", "DOM Manipulation", "Responsive Design"]
    },
    {
      id: 7,
      title: "Connect — Premium Social Media Platform",
      image: "/projects/connect_social.png",
      description: "Connect is a modern, high-fidelity, and feature-rich social media platform built using a powerful, lightweight stack: Node.js, Express, and SQLite3, with a Vanilla Glassmorphism UI on the frontend.",
      longDescription: "Designed from the ground up to offer professional-grade aesthetics, seamless interactions, and robust security, Connect elevates the standard of simple web applications to a premium experience. It features a Real-Time Notification System, Interactive Explore & Live Search, and robust Security with Bcrypt & JSON Web Tokens (JWT).",
      tech: ["Node.js", "Express.js", "SQLite3", "JavaScript", "JWT Auth"],
      github: "https://github.com/fakihazahoor168-ctrl/CodeAlpha-Social-Media-Platform.git",
      live: "https://github.com/fakihazahoor168-ctrl/CodeAlpha-Social-Media-Platform",
      category: "Fullstack",
      highlights: ["Real-Time Notifications", "Live Search", "JWT Authentication", "SQLite3 Database", "Glassmorphism UI"]
    },
    {
      id: 8,
      title: "OnlineUstaad – Home Services Booking",
      image: "/projects/online_ustaad.png",
      description: "A web-based solution that digitally connects customers with verified home service providers such as electricians, plumbers, carpenters, and cleaners through a centralized platform.",
      longDescription: "The system allows users to register, log in, browse available services, and place service bookings by selecting service category, date, and time slot. Users can also track the status of their bookings through a personalized dashboard. An admin panel is implemented to manage users, view all bookings, and update booking statuses.",
      tech: ["HTML5", "CSS3", "JavaScript", "Backend API", "Database"],
      github: "https://github.com/fakihazahoor168-ctrl/Online-Home-Services.git",
      live: "https://github.com/fakihazahoor168-ctrl/Online-Home-Services",
      category: "Fullstack",
      highlights: ["Service Booking", "Booking Tracking", "Admin Panel", "User Authentication", "Provider Management"]
    }
  ],

  experience: [
    {
      id: 1,
      type: "internship",
      role: "Full-Stack Developer Intern",
      company: "CodeAlpha",
      location: "Remote",
      duration: "Jun 2025 – Aug 2025",
      description: [
        "Developed a responsive e-commerce store with a custom Admin Dashboard using HTML5, CSS3, and modern JavaScript (ES6+) as per the internship’s foundational scope.",
        "Wrote modular, maintainable code following industry best practices — including separation of concerns, reusable utility functions, and clear documentation.",
        "Delivered assigned modules on schedule with clean, documented Git commits — demonstrating professional workflow discipline in a remote team setting."
      ]
    },
    {
      id: 2,
      type: "internship",
      role: "Frontend Developer Intern",
      company: "Developers Hub",
      location: "Remote",
      duration: "March 2026 – April 2026",
      description: [
        "Developed responsive and interactive user interfaces using React.js, BS, HTML, CSS ensuring smooth user experience across different screen sizes and devices.",
        "Collaborated with backend developers to integrate APIs and display dynamic data on the frontend while ensuring proper error handling and loading states."
      ]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "COMSATS University Islamabad, Sahiwal Campus",
      duration: "Expected June 2027",
      details: "CGPA: 3.96 / 4.00 | Relevant Coursework: DSA, Database Systems, Web Technologies, Software Engineering, Operating Systems, Computer Networks, Artificial Intelligence, OOP.",
      cgpa: "3.96 / 4.00"
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Understanding Artificial Intelligence",
      issuer: "DataCamp",
      date: "Sep 2025",
      link: "https://datacamp.com",
      image: "/certificates/cert-ai.jpg"
    },
    {
      id: 2,
      title: "Understanding ChatGPT",
      issuer: "DataCamp",
      date: "Sep 2025",
      link: "https://datacamp.com",
      image: "/certificates/cert-chatgpt.jpg"
    },
    {
      id: 3,
      title: "Introduction to SQL",
      issuer: "DataCamp",
      date: "Sep 2025",
      link: "https://datacamp.com",
      image: "/certificates/cert-sql.jpg"
    },
    {
      id: 4,
      title: "CSS Full Data for Beginners",
      issuer: "MindLuster",
      date: "Aug 2025",
      link: "https://mindluster.com",
      image: "/certificates/cert-css.jpg"
    },
    {
      id: 5,
      title: "HTML Build a Website",
      issuer: "MindLuster",
      date: "Aug 2025",
      link: "https://mindluster.com",
      image: "/certificates/cert-html.jpg"
    },
    {
      id: 6,
      title: "Photo Editing",
      issuer: "MindLuster",
      date: "Aug 2025",
      link: "https://mindluster.com",
      image: "/certificates/cert-photo.jpg"
    },
    {
      id: 7,
      title: "Web Development Course",
      issuer: "WebDevelopmentCourse.in",
      date: "2025",
      link: "https://webdevelopmentcourse.in",
      image: "/certificates/cert-webdev.jpg"
    }
  ],

  achievements: [
    {
      id: 1,
      title: "Prime Minister's Laptop Scheme Awardee",
      description: "Awarded a laptop under Pakistan's Prime Minister's Laptop Scheme in recognition of outstanding academic performance."
    },
    {
      id: 2,
      title: "Outstanding CGPA – 3.96/4.00",
      description: "Maintained an exceptional academic record with a CGPA of 3.96/4.00 throughout the degree program."
    },
    {
      id: 3,
      title: "Top Positions in Academic Projects",
      description: "Secured top positions in multiple academic and departmental projects across AI, Web, and Systems categories."
    },
    {
      id: 4,
      title: "Multiple Remote Internships Completed",
      description: "Successfully completed internships at CodeAlpha and Developers Hub, delivering production-quality work in fully remote environments."
    },
    {
      id: 5,
      title: "Diverse Technology Portfolio",
      description: "Developed AI, Web, Mobile (Flutter), and Data Structure-based projects spanning multiple technology domains."
    }
  ]
};

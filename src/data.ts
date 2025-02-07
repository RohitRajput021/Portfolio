import { Project, TimelineItem, Skill } from './types';

export const projects: Project[] = [
  {
    title: 'Calculator Web App',
    description:
      'A responsive calculator application built during Oasis Infobyte internship. Features modern UI and comprehensive mathematical operations.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    demoLink: 'https://demo-calculator.example.com',
    githubLink: 'https://github.com/RohitRajput021/Calculator.git',
    image:
      'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80',
  },
  {
    title: 'Todo Web App',
    description:
      'A feature-rich todo application with user authentication, task management, and real-time updates.',
    technologies: ['React', 'JavaScript', 'CSS', 'Firebase'],
    demoLink: 'https://demo-todo.example.com',
    githubLink: 'https://github.com/RohitRajput021/To-Do-List-App.git',
    image:
      'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80',
  },
  {
    title: 'Login Authentication System',
    description:
      'Secure user authentication system with features like password hashing, session management, and user profile handling.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoLink: 'https://demo-auth.example.com',
    githubLink: 'https://github.com/RohitRajput021/auth-system',
    image:
      'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80',
  },
  // IT Projects
  {
    title: 'Interactive Online Banking Application',
    description:
      'Developed an online banking platform for managing accounts, viewing balances, and performing transactions, achieving a 40% improvement in operational efficiency.',
    technologies: ['React JS', 'JavaScript', 'CSS', 'APIs'],
    demoLink: 'https://demo-banking.example.com',
    githubLink: 'https://github.com/RohitRajput021/Banking-App.git',
    image:
      'https://static.vecteezy.com/system/resources/previews/038/459/130/non_2x/bank-account-balance-illustration-vector.jpg?auto=format&fit=crop&q=80',
  },
  {
    title: 'Interactive Resume Builder',
    description:
      'Developed an interactive resume builder with real-time preview and customization options, increasing user engagement by 40%.',
    technologies: ['React JS', 'JavaScript', 'CSS', 'PDF Export Libraries'],
    demoLink: 'https://demo-resume-builder.example.com',
    githubLink: 'https://github.com/RohitRajput021/RESUME_BUILDER.git',
    image:
      'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1593113654/mntechnologycom/xa4hkhwqf91vwwu6yt2q/CCCWebThumbnailResume.png?auto=format&fit=crop&q=80',
  },
  {
    title: 'Image Steganography',
    description:
      'Created an image Steganography tool to hide and extract text in images, improving security by 40%.',
    technologies: ['Python', 'Tkinter', 'File Handling'],
    demoLink: 'https://demo-steganography.example.com',
    githubLink: 'https://github.com/RohitRajput021/steganography',
    image:
      'https://ctf101.org/forensics/images/steg-cat-text.png?auto=format&fit=crop&q=80',
  },
  // Core Projects
  {
    title: 'Autonomous Floor Cleaning Robot',
    description:
      'Spearheaded the development of an autonomous robot for efficient floor cleaning, achieving a 30% improvement in navigation efficiency through optimized algorithms and power management techniques.',
    technologies: ['ESP8266', 'Python', 'Ultrasonic Sensors', 'BLDC Motors'],
    demoLink: 'https://demo-floor-cleaner.example.com',
    githubLink:
      'https://github.com/RohitRajput021/Autonomous-Floor-Cleaning-Robot.git',
    image:
      'https://i5.walmartimages.com/asr/5eee3046-2355-4209-be4e-e815aa3eebdb.3f2c19ebbbb8a9409a91412cc49fe304.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF?auto=format&size=100&fit=crop&q=2000',
  },
  {
    title: 'Sign Language to Speech Conversion System',
    description:
      'Designed and built a system that translates sign language into speech, improving communication for users by 40%.',
    technologies: ['Arduino', 'Flex Sensors', 'DFPlayer Mini'],
    demoLink: 'https://demo-sign-language.example.com',
    githubLink:
      'https://github.com/RohitRajput021/Sign-Language-to-Speech-Conversion.git',
    image:
      'https://en-media.thebetterindia.com/uploads/2015/06/gesture-vocalizer.jpg?auto=format&fit=crop&q=80',
  },
];

export const timeline: TimelineItem[] = [
  {
    title: 'Web Development Intern',
    company: 'Oasis Infobyte',
    date: 'Aug 2024 - Sept 2024',
    description:
      'Developed responsive web applications, improved user engagement by 30%, and optimized front-end performance. Collaborated on various projects including Calculator, Todo WebApp, and Login Authentication.',
    type: 'internship',
  },
  {
    title: 'B.Tech in Electronics and Telecommunication',
    company: 'R.C. Patel Institute of Technology, Shirpur',
    date: 'Jun 2021 - Jun 2025',
    description:
      'Currently pursuing B.Tech with a CGPA of 7.26. Focusing on core electronics and telecommunication concepts while developing software skills.',
    type: 'education',
  },
  {
    title: 'Higher Secondary Education',
    company: 'Poojya Sane Guruji Vidya Prasarak Mandal, Shahada',
    date: 'April 2019 - March 2021',
    description:
      'Completed HSC with 92.17%, demonstrating strong academic performance and analytical skills.',
    type: 'education',
  },
];

export const skills: Skill[] = [
  // Languages
  {
    name: 'Python',
    category: 'Languages',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    level: 90,
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 85,
  },
  {
    name: 'C/C++',
    category: 'Languages',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    level: 80,
  },

  // Frameworks
  {
    name: 'React',
    category: 'Frameworks',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: 90,
  },
  {
    name: 'Django',
    category: 'Frameworks',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    level: 75,
  },
  {
    name: 'Flask',
    category: 'Frameworks',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    level: 70,
  },

  // Tools
  {
    name: 'Git',
    category: 'Tools',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    level: 95,
  },
  {
    name: 'SQL',
    category: 'Tools',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    level: 85,
  },

  // Core Technologies
  {
    name: 'Arduino',
    category: 'Core Technologies',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
    level: 80,
  },
  {
    name: 'ESP8266',
    category: 'Core Technologies',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/ESP8266_Logo.svg',
    level: 75,
  },
  {
    name: 'Ultrasonic Sensors',
    category: 'Core Technologies',
    image: 'https://cdn-icons-png.flaticon.com/512/2795/2795653.png',
    level: 70,
  },
  {
    name: 'BLDC Motors',
    category: 'Core Technologies',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/BLDC_motor.svg',
    level: 60,
  },

  // Soft Skills
  {
    name: 'Communication',
    category: 'Soft Skills',
    image: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    level: 95,
  },
  {
    name: 'Teamwork',
    category: 'Soft Skills',
    image: 'https://cdn-icons-png.flaticon.com/512/3212/3212608.png',
    level: 90,
  },
  {
    name: 'Leadership',
    category: 'Soft Skills',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    level: 85,
  },

  // Technical Skills
  {
    name: 'Embedded Systems',
    category: 'Technical Skills',
    image: 'https://cdn-icons-png.flaticon.com/512/3065/3065583.png',
    level: 90,
  },
  {
    name: 'Robotics',
    category: 'Technical Skills',
    image: 'https://cdn-icons-png.flaticon.com/512/1089/1089129.png',
    level: 80,
  },
  {
    name: 'Data Structures & Algorithms',
    category: 'Technical Skills',
    image: 'https://cdn-icons-png.flaticon.com/512/3721/3721897.png',
    level: 85,
  },
];

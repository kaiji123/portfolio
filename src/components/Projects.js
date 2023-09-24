import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'character-device-driver',
      description: 'This is a software component developed to interact with and manage character devices within the Linux kernel. Character devices are a type of special file in the Linux file system that represents devices that provide or accept data on a character-by-character basis. Examples of character devices include serial ports, keyboards, mice, and various hardware sensors.',
      githubLink: 'https://github.com/kaiji123/character-device-driver',
      technologies: ['C', 'Linux', 'bash'],
    },
    {
      title: 'haskell-interpreter',
      description: 'This is a custom language interpreter developed using the Haskell programming language. Unlike traditional Haskell, which follows its well-defined syntax and semantics, this interpreter introduces its own syntax, enabling users to write code in a way that deviates from standard Haskell conventions. The primary goal of this project is to provide a platform for experimenting with and executing code using a unique syntax while harnessing the power of Haskell capabilities',
      githubLink: 'https://github.com/kaiji123/haskell-interpreter',
      technologies: ['Haskell', 'Programming Language Design'],
    },
    {
      title: 'quantum-algs',
      description: 'This code uses Qiskit, a quantum computing framework, to create and utilize quantum circuits for various tasks. It includes functions for Quantum Approximate Optimization Algorithm (QAOA), Quantum Fourier Transform (QFT), Variational Quantum Eigensolver (VQE), and data encoding. These tools demonstrate expertise in quantum algorithm development and quantum circuit design, with applications in optimization, signal processing, and data manipulation.',
      githubLink: 'https://github.com/kaiji123/quantum-algs',
      technologies: ['Quantum Computing', 'Qiskit'],
    },
    {
      title: 'Final Year Project',
      description: 'For my final year project, I developed cutting-edge artificial intelligence systems known as Adaptive Distance Detection and Adaptive Instance Segmentation. These advanced systems integrate the power of both object detection and segmentation techniques to effectively identify and locate targets in visual data. By combining these methods, the AI systems offer enhanced precision and accuracy, making them highly efficient tools for various applications. Through this project, I have explored the frontiers of artificial intelligence, contributing to the field of computer vision and object recognition.',
      githubLink: 'https://github.com/kaiji123/AIS-ADD',
      technologies: ['Python', 'Tensorflow', 'PyTorch', 'Jupyter Notebook', 'Detectron'],
    },
    {
      title: 'GeoQuiz',
      description: 'This is a Geographical Quiz Application, a fun and interactive platform that puts your global knowledge to the test. Lets users explore various quizzes about countries, capitals, landmarks, and more.',
      githubLink: 'https://github.com/kaiji123/GeoQuiz',
      technologies: ['JavaScript', 'ExpressJS', 'CSS', 'NodeJS', 'CI/CD', 'Docker', 'MongoDB'],
    },
    {
        title: 'YourAnki',
        description: 'YourAnki is a user-friendly Anki application designed to make learning and memorization a breeze. With an intuitive interface, it helps users efficiently create and review flashcards, making it an ideal tool for language learning, exam preparation, and knowledge retention. Whether you are a student, professional, or lifelong learner, YourAnki empowers you to effortlessly organize, study, and master the subjects that matter most to you.',
        githubLink: 'https://github.com/kaiji123/your-anki',
        technologies: ['Kotlin', 'Gradle', 'SQL', 'XML'],
    },
    {
        title: 'GameDeals',
        description: 'The GameDeals is a user-friendly application that enables seamless addition and removal of the most current deals to your personalized dashboard. With a convenient user login feature, you can easily access and manage deals according to your preferences. The application offers powerful filtering and sorting options to quickly find and organize deals based on categories and discounts. Developed with TypeScript and React for the frontend and PHP Laravel for the backend, this application provides a responsive and secure platform for efficient deal management',
        githubLink: 'https://github.com/kaiji123/game-deals-frontend',
        technologies: ['Typescript', 'HTML', 'CSS', 'PHP', 'Laravel'],
    },

      {
        title: 'audio-editor-python',
        description: 'This is a Python script designed to simplify audio processing tasks. It efficiently removes silence from audio recordings, automating a tedious and time-consuming process. Moreover, it allows users to speed up audio playback without affecting the pitch, offering a convenient way to review or transcribe content more efficiently. This tool enhances your audio experience and streamlines your workflow with ease',
        githubLink: 'https://github.com/kaiji123/audio-editor-python',
        technologies: ['Python'],
      },

      {
        title: 'wordle',
        description: 'A simple application that you can play wordle.',
        githubLink: 'https://github.com/kaiji123/wordle',
        technologies: ['EJS', 'CSS', 'Javascript'],
      },

      {
        title: 'weight-app',
        description: 'An application that tracks your weight',
        githubLink: 'https://github.com/kaiji123/weight-app',
        technologies: ['Kotlin'],
      },
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="technologies">Technologies used: {project.technologies.join(', ')}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

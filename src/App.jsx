import React, { useState, useEffect } from 'react';

const projectData = [
  {
    id: 1,
    title: "Quizzical Trivia",
    subTitle: "Detailed Description:",
    description: "A dynamic trivia application that fetches real-time questions from the Open Trivia API. Features include category-based quizzes, score tracking, and a sleek React-based interface with smooth state management.",
    link: "https://klinti13.github.io/Quizzical/",
    icons: ["fa-brands fa-react text-[#61DBFB]", "fa-brands fa-js text-[#FFD43B]"]
  },
  {
    id: 2,
    title: "Guess the Word",
    subTitle: "Detailed Description:",
    description: "A modern word-guessing game built with React & Vite. It focuses on handling user input, managing complex game states, and providing an interactive visual experience.",
    link: "https://klinti13.github.io/Word/",
    icons: ["fa-brands fa-react text-[#61DBFB]", "fa-brands fa-js text-[#FFD43B]"]
  },
  {
    id: 3,
    title: "Urban Estate",
    subTitle: "Detailed Description:",
    description: "A professional real estate demo platform. It showcases modern UI/UX design patterns, property listing simulations, and a fully responsive layout.",
    link: "https://urban-estate-demo.netlify.app",
    icons: ["fa-brands fa-react text-[#61DBFB]", "fa-brands fa-js text-[#FFD43B]"]
  },
  {
    id: 4,
    title: "Tenzies Game",
    subTitle: "Detailed Description:",
    description: "Fast-paced interactive game built to master React hooks. Players roll dice to match numbers, utilizing state management.",
    link: "https://klinti13.github.io/Tenzies/",
    icons: ["fa-brands fa-react text-[#61DBFB]", "fa-brands fa-js text-[#FFD43B]"]
  },
  {
  id: 5,
  title: "E-Market",
  subTitle: "Detailed Description:",
  description: "A full-stack e-commerce application built with the MERN stack. It features a minimal aesthetic built with React, powered by a robust Node.js and Express backend, utilizing MongoDB for scalable data management.",
  link: "https://www.emarketi.store/",
  icons: [
    "devicon-mongodb-plain text-[#47A248]", 
    "devicon-express-original text-gray-800", 
    "fa-brands fa-react text-[#61DBFB]", 
    "fa-brands fa-node-js text-[#68A063]"
  ]
  },
  {
    id: 6,
    title: "Leads Tracker",
    subTitle: "Detailed Description:",
    description: "Leads Tracker is a productive browser extension that allows users to save, manage, and track important URLs directly from their browser tabs. It uses local storage to persist data, ensuring your links are saved even after you close the browser.",
    link: "https://klinti13.github.io/chrome-extension/",
    icons: ["fa-brands fa-js text-[#FFD43B]", "fa-brands fa-html5 text-[#d47408]", "fa-brands fa-css3 text-[#28A745]"]
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="bg-[#011818] text-[#ddffff] min-h-screen font-sans selection:bg-[#61DBFB] selection:text-[#011818]">
      
      <header className="fixed w-full top-0 z-50 bg-[#011818]/80 backdrop-blur-md border-b border-[#333d3d] px-6 md:px-16 py-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-wider hover:text-[#61DBFB] transition-colors">
            <a href="#about">Klinti</a>
          </div>
          <ul className="flex gap-6 text-xl m-0 p-0 list-none">
            <li><a target='_blank' rel="noreferrer" href="https://github.com/Klinti13" className="text-[#ddffff] hover:text-[#61DBFB] transition-colors"><i className="fa-brands fa-github"></i></a></li>
            <li><a target='_blank' rel="noreferrer" href="https://linkedin.com/in/klinti-bodurri-472a9228a" className="text-[#ddffff] hover:text-[#61DBFB] transition-colors"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a target='_blank' rel="noreferrer" href="mailto:klinti.bodurri@gmail.com" className="text-[#ddffff] hover:text-[#61DBFB] transition-colors"><i className="fa-solid fa-envelope"></i></a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-16 pt-32 flex flex-col gap-24 pb-20">
        
        <section id="about" className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight m-0 mb-8">Hi, I'm Klinti</h1>
            <div className="text-lg md:text-xl text-gray-300 space-y-4 font-light leading-relaxed mb-10">
              <p>I’m a Computer Engineering graduate with a strong interest in web development, scalable architecture, and problem-solving.</p>
              <p>I enjoy building practical projects using React, Node.js, SQL, and modern web technologies.</p>
              <p>Continuously experimenting with new tools and improving my skills through real-world applications.</p>
            </div>
            <div>
              <a href="Klinti_Bodurri_CV.pdf" download="Klinti_Bodurri_CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-[#61DBFB] text-[#ddffff] rounded-lg font-bold hover:bg-[#61DBFB] hover:text-[#011818] transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(97,219,251,0.2)] hover:shadow-[0_0_25px_rgba(97,219,251,0.5)] no-underline">
                <i className="fa-solid fa-file-arrow-down"></i> Download CV
              </a>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center text-center gap-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-[#61DBFB] m-0">Tech Stack</h2>
            <p className="text-gray-400 italic m-0">"Turning ideas into practical, scalable solutions."</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-5xl md:text-6xl m-0 p-0 list-none">
             <i className="fa-brands fa-js text-[#FFD43B] hover:scale-110 transition-transform cursor-pointer"></i>
             <i className="devicon-typescript-plain text-[#3178C6] hover:scale-110 transition-transform cursor-pointer"></i>
             <i className="fa-brands fa-react text-[#61DBFB] hover:scale-110 transition-transform cursor-pointer drop-shadow-[0_0_8px_rgba(97,219,251,0.5)]"></i>
             <i className="fa-brands fa-node-js text-[#0ad62c] hover:scale-110 transition-transform cursor-pointer"></i>
             <i className="devicon-tailwindcss-original text-[#38BDF8] hover:scale-110 transition-transform cursor-pointer"></i>
             <i className="fa-solid fa-database text-[#63E6BE] hover:scale-110 transition-transform cursor-pointer"></i>
             <i className="devicon-mongodb-plain text-[#47A248] hover:scale-110 transition-transform cursor-pointer"></i>
             <i className="fa-brands fa-css3 text-[#28A745] hover:scale-110 transition-transform cursor-pointer"></i>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold uppercase tracking-widest pb-2 text-[#61DBFB] m-0">Education</h2>
            <div className="space-y-6">
              <div className="bg-[#333d3d]/20 p-6 rounded-xl border border-[#333d3d] hover:border-[#61DBFB]/50 transition-colors">
                <h3 className="text-xl font-bold m-0 mb-2">MSc in Computer Engineering</h3>
                <p className="text-gray-400 m-0">European University of Tirana &bull; 2022 – 2024</p>
              </div>
              <div className="bg-[#333d3d]/20 p-6 rounded-xl border border-[#333d3d] hover:border-[#61DBFB]/50 transition-colors">
                <h3 className="text-xl font-bold m-0 mb-2">Bachelor in Computer Engineering</h3>
                <p className="text-gray-400 m-0">European University of Tirana &bull; 2019 – 2022</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold uppercase tracking-widest pb-2 text-[#61DBFB] m-0">Experience</h2>
            <div className="space-y-6">
               <div className="bg-[#333d3d]/20 p-6 rounded-xl border border-[#333d3d] hover:border-[#61DBFB]/50 transition-colors relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#61DBFB]"></div>
                <h3 className="text-xl font-bold m-0 mb-2">QA Engineer</h3>
                <p className="text-[#61DBFB]/80 text-sm m-0">Enpal &bull; 2024 – Present</p>
              </div>
              <div className="bg-[#333d3d]/20 p-6 rounded-xl border border-[#333d3d] hover:border-[#61DBFB]/50 transition-colors">
                <h3 className="text-xl font-bold m-0 mb-2">Full-Stack Developer</h3>
                <p className="text-gray-400 text-sm m-0">Independent Projects &bull; 2023 – Present</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-[#61DBFB] m-0">Featured Projects</h2>
            <p className="text-gray-400 m-0">Applications that reflect my growth and passion for engineering.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group border border-[#333d3d] bg-[#333d3d]/10 p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-[#61DBFB] hover:shadow-[0_10px_30px_rgba(97,219,251,0.1)] flex flex-col justify-between h-full min-h-[180px]"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#61DBFB] transition-colors m-0">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 m-0 mt-2">{project.description}</p>
                </div>
                <div className="flex gap-4 mt-6 text-2xl">
                  {project.icons.map((icon, idx) => (
                    <i key={idx} className={icon}></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#333d3d] bg-[#001010] py-12 text-center">
        <h2 className="text-2xl font-bold mb-4 m-0">Let's connect</h2>
        <p className="text-gray-400 mb-6 m-0 mt-2">Open for new opportunities and collaborations.</p>
        <div className="flex justify-center gap-6 text-3xl mb-8">
          <a target='_blank' rel="noreferrer" href="https://linkedin.com/in/klinti-bodurri-472a9228a" className="text-[#ddffff] hover:text-[#61DBFB] hover:-translate-y-1 transition-all"><i className="fa-brands fa-linkedin"></i></a>
          <a target='_blank' rel="noreferrer" href="https://github.com/Klinti13" className="text-[#ddffff] hover:text-[#61DBFB] hover:-translate-y-1 transition-all"><i className="fa-brands fa-github"></i></a>
          <a target='_blank' rel="noreferrer" href="mailto:klinti.bodurri@gmail.com" className="text-[#ddffff] hover:text-[#61DBFB] hover:-translate-y-1 transition-all"><i className="fa-solid fa-envelope"></i></a>
        </div>
        <p className="text-sm text-gray-500 m-0">© {new Date().getFullYear()} Klinti Portfolio. Built with React & Tailwind.</p>
      </footer>

      {selectedProject && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#011818] border border-[#333d3d] w-full max-w-2xl rounded-2xl p-6 md:p-8 relative cursor-default shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-6 text-3xl text-gray-500 hover:text-red-500 transition-colors bg-transparent border-none cursor-pointer p-0"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <h2 className="text-3xl md:text-4xl font-bold text-[#61DBFB] mb-2 m-0 pr-6">{selectedProject.title}</h2>
            <h3 className="text-base md:text-lg text-gray-400 mb-4 m-0 mt-2">{selectedProject.subTitle}</h3>
            <p className="text-base md:text-lg leading-relaxed mb-8 m-0 mt-4">{selectedProject.description}</p>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex gap-4 text-3xl">
                {selectedProject.icons.map((icon, idx) => (
                  <i key={idx} className={icon}></i>
                ))}
              </div>
              <a 
                href={selectedProject.link} 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 w-full sm:w-auto text-center bg-[#61DBFB]/10 border border-[#61DBFB] text-[#61DBFB] rounded-lg font-bold hover:bg-[#61DBFB] hover:text-[#011818] transition-all no-underline"
              >
                View Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
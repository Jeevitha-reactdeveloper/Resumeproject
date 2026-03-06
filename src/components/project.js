export default function Projects() {
  const projects = [
    {
      title: "Daily Deal E-Commerce App",
      description: "Daily Deal Full Stack E-commerce Application is a web application where users can browse products and place orders through a responsive interface.It is built using React for the frontend and Node.js with Express.js for the backend, with MongoDB used for data storage, demonstrating full-stack development and CRUD operations.",
      tech: ["React", "Nodejs", "mongoDB"],
      link: "https://daily-deal-app-shfy.vercel.app/",
      github: "https://github.com/Jeevitha-reactdeveloper/Daily-Deal-App.git"
    },
    {
      title: "X-Clone",
      description: "**X-Clone – Social Media Web Application** is a full-stack social media platform inspired by X (Twitter) where users can create posts, view feeds, and interact with content in a responsive interface. The application is built using React for the frontend and Node.js with Express.js for the backend, with MongoDB used for data storage, demonstrating features like user authentication, post creation, and CRUD operations.",
      tech: ["React", "Nodejs","mongoDB"],
      link: "https://x-clone-frontend-chi.vercel.app/",
      github: "https://github.com/Jeevitha-reactdeveloper/X-clone.git"
    },
    {
      title: "Social Media CRUD App",
      description: "This is a simple social media app built with React that allows users to add, view, edit, and delete posts. It demonstrates basic CRUD operations and uses JSON Server as a mock backend to store post data. The project also uses React Router for navigation between pages.",
      tech: ["React", "JSON Server"],
      link:"https://social-media-app-local.netlify.app/",
      github:"https://github.com/Jeevitha-reactdeveloper/social-media-app-using-crud-operations.git"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using React to showcase my projects, skills, and contact information. It highlights my frontend development work and provides an easy way for visitors to view my projects and connect with me.",
      tech: ["React", "HTML","CSS"],
      link: "https://jeevithaportfoliowebsite.netlify.app/",
      github:""
    },
    {
      title: "To Do App",
      description: "A simple To-Do List application built using React that allows users to add, edit, and delete tasks. The app demonstrates basic task management functionality and uses React state to handle dynamic updates in the user interface.",
      tech: ["React", "HTML", "CSS"],
      link: "https://todoapp-jeevitha.netlify.app/",
      github:"https://github.com/Jeevitha-reactdeveloper/Todo-list-app.git"
    },
  ];

  return (
    <section className="py-20 bg-secondary text-white min-h-screen" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className=" text-xl md:text-3xl font-bold mb-4 text-orange-500 ">My Projects</h2>
        <p className="text-gray-300 mb-10">
          A collection of web applications I have built.
        </p>

        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[300px] snap-start bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a href={project.link} target="_blank" rel="noreferrer"><button className="px-4 py-2 bg-purple-600 rounded-full hover:scale-105 transition">
                  Live
                </button>
                </a>
                <a href={project.github} target="_blank" rel="noreferrer"><button className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                  GitHub
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
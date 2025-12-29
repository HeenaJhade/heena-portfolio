import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
     {
      title: 'IndiStay (Accommodation Booking)',
      description: 'A responsive rental platform that includes user authentication, home listings, favorites, bookings, and Razorpay payment integration. Features secure data storage and a clean user interface.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL', 'Razorpay'],
      link: null,
      status: 'Currently Running',
      github: 'https://github.com/HeenaJhade/IndiStay-AirbnbPracticeClone-Node-Express-MySQL-Razorpay',
      gradient: 'from-green-500 to-green-700',
      image: '/assets/airbnb.png',
    },
    {
      title: 'JobConnect (JobSathi)',
      description: 'A fully responsive local job-search platform featuring secure email-based authentication, role-based dashboards for employers and job seekers, profile management, job postings, applications, and a built-in messaging system.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL'],
      link: 'https://job-sathi-theta.vercel.app/',
      github: 'https://github.com/HeenaJhade/JobSathi',
      gradient: 'from-blue-500 to-blue-700',
      image: '/assets/JobSathi.png',

    },
   
    {
      title: 'Portfolio Website',
      description: 'A modern and responsive personal portfolio website showcasing my projects, technical skills, and experience. Built with modern web technologies, it features a clean UI, smooth navigation, and a professional design for recruiters.',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      link: 'https://heena-portfolio-ebon.vercel.app',
      github: 'https://github.com/HeenaJhade/heena-portfolio',
      gradient: 'from-purple-500 to-purple-700',
      image: '/assets/portfolio.png',
    },
    {
      title: 'Airbnb Landing Page',
      description: 'A pixel-perfect clone of the Airbnb landing page, demonstrating proficiency in HTML, CSS, and responsive design techniques.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/HeenaJhade/landing-page',
      github: 'https://github.com/HeenaJhade/landing-page',
      gradient: 'from-pink-500 to-pink-700',
      image: '/assets/airbnb.png',
    },
    {
      title: 'Weather Website',
      description: 'A weather application that provides real-time weather information using API integration. Features clean UI and location-based weather data.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
      link: 'https://github.com/HeenaJhade/weatherweb',
      github: 'https://github.com/HeenaJhade/weatherweb',
      gradient: 'from-cyan-500 to-cyan-700',
      image: '/assets/weather.png',
    },
    {
      title: 'Calculator',
      description: 'A functional calculator web application with a clean interface and smooth animations. Supports basic arithmetic operations.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/HeenaJhade/web-calculator',
      github: 'https://github.com/HeenaJhade/web-calculator',
      gradient: 'from-orange-500 to-orange-700',
      image: '/assets/calculator.png',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 relative overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />

  {project.status && (
    <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">
      {project.status}
    </div>
  )}
</div>


              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Live</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Not Live Yet</span>
                    </button>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
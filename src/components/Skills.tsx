import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaBootstrap, FaWind, FaGitAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMysql, SiNextdotjs, SiCanvas} from 'react-icons/si'; // Note: Some icons like SiCodesoft, SiInternship might need custom or adjusted; use placeholders if not available
import { VscVscode } from "react-icons/vsc";
import { FaBriefcase } from 'react-icons/fa'; // Placeholder for internship

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt size={40} className="text-emerald-600" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={40} className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact size={40} className="text-emerald-400" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-600" /> },
    { name: 'Express.js', icon: <FaNodeJs size={40} className="text-gray-700" /> }, // Reuse Node icon or find specific
    { name: 'MySQL', icon: <SiMysql size={40} className="text-orange-600" /> },
    { name: 'Canva', icon: <SiCanvas size={40} className="text-pink-500" /> },
    { name: 'VS Code', icon: <VscVscode size={40} className="text-emerald-600" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={40} className="text-purple-600" /> },
    { name: 'Tailwind', icon: <FaWind size={40} className="text-emerald-500" /> },
    { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub size={40} className="text-gray-800" /> },
  ];

 

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-4"></div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-4 flex flex-col items-center hover:shadow-md transition-shadow border border-slate-200">
              <div className="mb-2">{skill.icon}</div>
              <span className="text-sm text-slate-700 text-center font-medium">{skill.name}</span>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
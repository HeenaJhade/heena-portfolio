import { Github, Linkedin, FileDown } from 'lucide-react';

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/heena_jhade_resume_(2)_(2).pdf';
    link.download = 'Heena_Jhade_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-slate-800">
            Heena Jhade
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-emerald-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-emerald-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-600 hover:text-emerald-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-emerald-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-emerald-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('education')} className="text-slate-600 hover:text-emerald-600 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-emerald-600 transition-colors">
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/heenajhade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/heena-jhade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
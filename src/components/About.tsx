import { Code, Database, Layout, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Full Stack Web Development Enthusiast
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              I am a Full Stack Web Development enthusiast with knowledge of HTML, CSS, React, JavaScript, Node.js, Express.js, and MySQL. I have experience in developing responsive user interfaces, backend APIs, and database-driven applications through academic and personal projects.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              I am skilled in integrating frontend and backend to deliver complete web solutions. I am passionate about learning new technologies and eager to contribute to real-world projects as a web developer.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium">
                Problem Solving
              </span>
              <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium">
                Team Collaboration
              </span>
              <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium">
                Quick Learner
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Layout className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Frontend</h4>
              <p className="text-sm text-slate-600">Building responsive and interactive UIs</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Backend</h4>
              <p className="text-sm text-slate-600">Creating robust server-side solutions</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Database</h4>
              <p className="text-sm text-slate-600">Efficient data management</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Full Stack</h4>
              <p className="text-sm text-slate-600">End-to-end development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Code, Smartphone, Database, Palette, Wrench, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and dynamic websites using modern technologies like React, HTML, CSS, and JavaScript.',
      color: 'emerald'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Creating mobile-first, responsive designs that work seamlessly across all devices and screen sizes.',
      color: 'emerald'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Developing robust server-side applications using Node.js, Express.js, and MySQL for efficient data management.',
      color: 'emerald'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and user-friendly interfaces using Figma and Canva with attention to detail.',
      color: 'emerald'
    },
    {
      icon: Wrench,
      title: 'API Integration',
      description: 'Integrating third-party APIs and creating RESTful APIs for seamless data communication.',
      color: 'emerald'
    },
    {
      icon: Rocket,
      title: 'Full Stack Solutions',
      description: 'Delivering end-to-end web solutions from concept to deployment with complete frontend and backend integration.',
      color: 'emerald'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Services I Provide</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 text-${service.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Let's collaborate to create something amazing. I'm always excited to work on new and challenging projects.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
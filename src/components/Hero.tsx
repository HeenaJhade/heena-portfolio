import { Mail, Phone, MapPin } from 'lucide-react';
import myImg from "../assets/myimg.jpg";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              Full Stack Developer
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Hi, I'm <span className="text-emerald-600">Heena Jhade</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Full Stack Web Developer passionate about building responsive and user-friendly web applications using modern technologies like React, Node.js, and MySQL.
            </p>

            <div className="flex flex-col space-y-3 mb-8 text-slate-600">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-600" />
                <a href="mailto:heenajhade949@gmail.com" className="hover:text-emerald-600 transition-colors">
                  heenajhade949@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>+91 6261295530</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span>Bhopal, Madhya Pradesh</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
              >
                View Projects
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img src={myImg} alt="my-image" className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-8xl font-bold shadow-2xl"/>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">2+</div>
                  <div className="text-xs">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
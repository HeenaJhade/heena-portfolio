import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'SAGE University, Bhopal',
      location: 'Madhya Pradesh',
      duration: '2023 - 2027',
      grade: 'Current CGPA: 8.6',
      description: 'Pursuing Bachelor of Technology in Computer Science with focus on Full Stack Development and Software Engineering.',
      color: 'emerald'
    },
    {
      degree: '12th Standard (CBSE)',
      institution: 'Gyan Sagar Public School (GSPS)',
      location: 'New Delhi',
      duration: '2022 - 2023',
      grade: '80%',
      description: 'Completed senior secondary education with distinction in Science stream.',
      color: 'emerald'
    },
    {
      degree: '10th Standard (MP Board)',
      institution: 'SGGA School',
      location: 'Madhya Pradesh',
      duration: '2020 - 2021',
      grade: '86%',
      description: 'Completed secondary education with excellent academic performance.',
      color: 'emerald'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My academic journey and educational qualifications
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow border-l-4 border-emerald-600"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${edu.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <GraduationCap className={`w-6 h-6 text-${edu.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                      <div className="text-emerald-600 font-medium mb-2">{edu.institution}</div>
                      <p className="text-slate-600 text-sm mb-3">{edu.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center space-x-2 text-slate-600">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-600">
                          <Award className="w-4 h-4" />
                          <span className="font-semibold text-green-600">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Internship Experience</h3>
            <div className="text-emerald-100 font-medium mb-2">CODESOFT - Frontend Web Developer Intern</div>
            <p className="text-emerald-50 text-sm leading-relaxed">
              Developed responsive web projects including landing pages and portfolio websites using HTML, CSS, and JavaScript. Focused on frontend development with attention to design, responsiveness, and user experience.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Achievements</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">2nd Position - Coding Competition</div>
                  <div className="text-green-50 text-sm">SAGE University Bhopal</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Multiple Certifications</div>
                  <div className="text-green-50 text-sm">Full Stack Development & Programming</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Navbar from '../components/Navbar';
import { ArrowDown, BookOpen, Code, GraduationCap, Laptop, Mail, User } from 'lucide-react';

const Index = () => {
  const skills = [
    { name: 'Flutter', level: 90 },
    { name: 'Firebase', level: 85 },
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'SQL', level: 85 }
  ];

  const education = [
    {
      title: "Técnico Superior en Programación",
      institution: "Instituto Superior",
      year: "2018 - 2021",
      description: "Especialización en desarrollo de software y aplicaciones"
    }
  ];

  const projects = [
    {
      title: "App Móvil de Gestión",
      description: "Aplicación móvil desarrollada con Flutter y Firebase para la gestión empresarial",
      technologies: ["Flutter", "Firebase", "Dart"],
      type: "Mobile"
    },
    {
      title: "Sistema de Escritorio",
      description: "Software de escritorio para control de inventario y facturación",
      technologies: ["C#", ".NET", "SQL Server"],
      type: "Desktop"
    },
    {
      title: "Aplicación Web React",
      description: "Plataforma web responsive para gestión de datos en tiempo real",
      technologies: ["React", "TypeScript", "Firebase"],
      type: "Web"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/80 z-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-up text-foreground">
              Tomás Peschiutta
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-up" style={{animationDelay: '0.2s'}}>
              Técnico Superior en Programación
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 fade-up" style={{animationDelay: '0.4s'}}>
              Especializado en desarrollo de aplicaciones a medida para escritorio y móviles
            </p>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
              className="group bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 fade-up flex items-center gap-2 mx-auto"
              style={{animationDelay: '0.6s'}}
            >
              Conocer más de mí
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Sobre Mí</h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-primary/20 p-1">
                <img 
                  src="/lovable-uploads/9e3a8aa0-1385-4391-96e0-3b4d76c9e047.png"
                  alt="Tomás Peschiutta" 
                  className="object-cover w-full h-full rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Como Técnico Superior en Programación, me especializo en el desarrollo de soluciones de software personalizadas. 
                  Mi enfoque se centra en crear aplicaciones eficientes y escalables que resuelvan problemas reales del negocio.
                </p>
                <p className="text-lg text-muted-foreground">
                  Con experiencia en desarrollo móvil y de escritorio, me apasiona crear interfaces intuitivas y funcionales 
                  que mejoren la experiencia del usuario final.
                </p>
                
                <div className="space-y-4 pt-6">
                  <h3 className="text-xl font-semibold text-foreground">Aspectos Personales</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                      Apasionado por el deporte y la actividad física, lo cual me ayuda a mantener un equilibrio en mi vida profesional
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                      Disfruto trabajando en equipo, aportando ideas y aprendiendo de mis compañeros
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                      Busco constantemente nuevos desafíos que me permitan crecer profesionalmente
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                      Comprometido con el aprendizaje continuo y la mejora de mis habilidades técnicas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 rounded-full bg-blue-100">
                <Code className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
            <p className="text-lg text-gray-600">Tecnologías y herramientas que domino</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 rounded-full bg-blue-100">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Formación Académica</h2>
            <p className="text-lg text-gray-600">Mi trayectoria educativa</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">{edu.title}</h3>
                </div>
                <p className="text-gray-600 mb-2">{edu.institution}</p>
                <p className="text-gray-500 mb-4">{edu.year}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 rounded-full bg-blue-100">
                <Laptop className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-lg text-gray-600">Algunos de mis trabajos más relevantes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section Placeholder */}
      <section id="contact" className="min-h-screen bg-white">
        {/* Contact content will go here */}
      </section>
    </div>
  );
};

export default Index;

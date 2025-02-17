
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-up">
              Tomás Peschiutta
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 fade-up" style={{animationDelay: '0.2s'}}>
              Técnico Superior en Programación
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 fade-up" style={{animationDelay: '0.4s'}}>
              Especializado en desarrollo de aplicaciones a medida para escritorio y móviles
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 fade-up"
              style={{animationDelay: '0.6s'}}
            >
              Contáctame
            </button>
          </div>
        </div>
      </section>

      {/* Placeholder sections - to be implemented */}
      <section id="about" className="min-h-screen bg-white">
        {/* About content will go here */}
      </section>
      
      <section id="skills" className="min-h-screen bg-gray-50">
        {/* Skills content will go here */}
      </section>
      
      <section id="education" className="min-h-screen bg-white">
        {/* Education content will go here */}
      </section>
      
      <section id="projects" className="min-h-screen bg-gray-50">
        {/* Projects content will go here */}
      </section>
      
      <section id="contact" className="min-h-screen bg-white">
        {/* Contact content will go here */}
      </section>
    </div>
  );
};

export default Index;

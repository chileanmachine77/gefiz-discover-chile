import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      location: "Madrid, España",
      rating: 5,
      text: "Increíble experiencia con Gefiz Travels. El tour a Valparaíso fue espectacular, los guías muy conocedores y el transporte impecable. Definitivamente recomendado para conocer Chile.",
      tour: "Tour Valparaíso y Viña del Mar",
      avatar: "MG"
    },
    {
      id: 2,
      name: "Carlos Rodriguez",
      location: "Buenos Aires, Argentina",
      rating: 5,
      text: "Profesionalismo de primera. Contraté su servicio de transporte para un grupo de 30 personas y todo salió perfecto. Buses modernos, conductores expertos y puntualidad absoluta.",
      tour: "Transporte Corporativo",
      avatar: "CR"
    },
    {
      id: 3,
      name: "Ana Silva",
      location: "São Paulo, Brasil",
      rating: 5,
      text: "La ruta del vino fue una experiencia inolvidable. La organización fue perfecta y pudimos disfrutar de viñedos exclusivos con catas excepcionales. Volveremos sin duda.",
      tour: "Ruta del Vino Premium",
      avatar: "AS"
    },
    {
      id: 4,
      name: "James Thompson",
      location: "Toronto, Canadá",
      rating: 5,
      text: "Amazing service! The guide was very knowledgeable about Chilean history and culture. The mountain tour exceeded our expectations. Highly recommended for international visitors.",
      tour: "Tour Cajón del Maipo",
      avatar: "JT"
    },
    {
      id: 5,
      name: "Francesca Rossi",
      location: "Roma, Italia",
      rating: 5,
      text: "Servizio eccellente! Il tour gastronomico ci ha fatto scoprire i veri sapori del Cile. Organizzazione perfetta e guide molto preparate. Esperienza indimenticabile.",
      tour: "Tour Gastronómico",
      avatar: "FR"
    },
    {
      id: 6,
      name: "Luis Morales",
      location: "Santiago, Chile",
      rating: 5,
      text: "Como santiaguino, pensé que conocía mi ciudad, pero Gefiz me sorprendió mostrándome lugares increíbles que no conocía. Excelente para redescubrir Chile.",
      tour: "Santiago Colonial",
      avatar: "LM"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Clientes Opinan
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Las experiencias de nuestros viajeros hablan por sí solas. 
            Descubre por qué miles eligen Gefiz Travels para sus aventuras.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="flex items-center justify-between mb-8">
              <Quote className="w-12 h-12 text-primary opacity-50" />
              <div className="flex space-x-1">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 font-light">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <div className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-white/70">
                    {testimonials[currentTestimonial].location}
                  </div>
                  <div className="text-primary text-sm font-medium">
                    {testimonials[currentTestimonial].tour}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={goToPrevious}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-white/90 mb-4 leading-relaxed">
                "{testimonial.text.substring(0, 120)}..."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statistics */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-white/70">Calificación Promedio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-white/70">Reseñas Verificadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-white/70">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-white/70">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
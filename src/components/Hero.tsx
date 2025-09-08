import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import patagoniaImage from '@/assets/patagonia-torres-hero.jpg';
import torresPaine3Image from '@/assets/torres-paine-3-hero.jpg';
import lagoCongullioImage from '@/assets/lago-conguillio-hero.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Descubre Chile con Comodidad y Estilo",
      subtitle: "Viajes seguros, confortables y llenos de experiencias inolvidables",
      image: patagoniaImage,
      cta1: "Ver Tours",
      cta2: "Cotiza tu Transporte",
      cta1Link: "/todos-los-tours",
      cta2Link: "https://wa.me/56966435647?text=Hola,%20me%20gustaría%20cotizar%20transporte%20para%20mi%20grupo"
    },
    {
      title: "Tours Exclusivos por Santiago y Regiones",
      subtitle: "Explora viñedos, montañas y costas con guías expertos",
      image: torresPaine3Image,
      cta1: "Explorar Destinos",
      cta2: "Reservar Ahora",
      cta1Link: "/todos-los-tours",
      cta2Link: "https://wa.me/56966435647?text=Hola,%20me%20gustaría%20reservar%20un%20tour"
    },
    {
      title: "Transporte Seguro y Profesional",
      subtitle: "Buses modernos con todas las comodidades para tu grupo",
      image: lagoCongullioImage,
      cta1: "Solicitar Cotización",
      cta2: "Contactar Ahora",
      cta1Link: "https://wa.me/56966435647?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización%20de%20transporte",
      cta2Link: "#contacto"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="inicio" className="relative h-[80vh] min-h-[600px] max-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            {slides[currentSlide].subtitle}
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm md:text-base">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>4.9/5 • 1,200+ reseñas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>15+ destinos únicos</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Calendar className="w-5 h-5 text-secondary" />
              <span>Tours diarios disponibles</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {slides[currentSlide].cta1Link.startsWith('http') ? (
              <a href={slides[currentSlide].cta1Link} target="_blank" rel="noopener noreferrer">
                <Button className="btn-hero">
                  {slides[currentSlide].cta1}
                </Button>
              </a>
            ) : (
              <Link to={slides[currentSlide].cta1Link}>
                <Button className="btn-hero">
                  {slides[currentSlide].cta1}
                </Button>
              </Link>
            )}
            {slides[currentSlide].cta2Link.startsWith('http') ? (
              <a href={slides[currentSlide].cta2Link} target="_blank" rel="noopener noreferrer">
                <Button className="btn-hero-outline">
                  {slides[currentSlide].cta2}
                </Button>
              </a>
            ) : slides[currentSlide].cta2Link.startsWith('#') ? (
              <a href={slides[currentSlide].cta2Link}>
                <Button className="btn-hero-outline">
                  {slides[currentSlide].cta2}
                </Button>
              </a>
            ) : (
              <Link to={slides[currentSlide].cta2Link}>
                <Button className="btn-hero-outline">
                  {slides[currentSlide].cta2}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/70 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Desliza</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
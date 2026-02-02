import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, Users, Calendar, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import vineyardImage from '@/assets/vineyard.jpg';
import valparaisoImage from '@/assets/valparaiso.jpg';

const Vinedos = () => {
  const [selectedCategory, setSelectedCategory] = useState('Chile');

  const categories = [
    'Chile',
    'Santiago',
    'Viñedos',
    'Cordillera de Los Andes',
    'Costa Central',
    'El Colorado',
    'Farellones'
  ];

  const vineyardExperiences = [
    {
      id: 1,
      title: 'Isla Negra, Algarrobo y Viñedos',
      location: 'Isla Negra, Algarrobo',
      image: '/images/tours/isla-negra-algarrobo/isla3-1.jpg',
      rating: 4.7,
      reviews: 142,
      duration: '8 horas',
      price: 'CLP 85.000',
      category: 'Costero'
    },
    {
      id: 2,
      title: 'Marques de Casa Concha',
      location: 'Pirque, Santiago',
      image: '/images/tours/marques-casa-concha/marques.jpg',
      rating: 4.8,
      reviews: 178,
      duration: '5 horas',
      price: 'CLP 65.000',
      category: 'Premium'
    },
    {
      id: 3,
      title: 'Ruta del Vino Valle de Casablanca',
      location: 'Valle de Casablanca',
      image: '/images/tours/ruta-vino-valle-casablanca/casablanca-2.jpg',
      rating: 4.5,
      reviews: 98,
      duration: '7 horas',
      price: 'CLP 95.000',
      category: 'Premium'
    },
    {
      id: 4,
      title: 'Valparaíso, Viña del Mar y Viñedo',
      location: 'Valparaíso, Viña del Mar',
      image: '/images/tours/valparaiso-vina-vinedo/valparaiso-2.jpg',
      rating: 4.6,
      reviews: 156,
      duration: '9 horas',
      price: 'CLP 95.000',
      category: 'Costero'
    },
    {
      id: 5,
      title: 'Ruta del Vino Valle del Maipo',
      location: 'Valle del Maipo',
      image: '/images/tours/ruta-vino-valle-maipo/maipo-4.jpg?t=' + Date.now(),
      rating: 4.8,
      reviews: 189,
      duration: '6 horas',
      price: 'CLP 75.000',
      category: 'Tradicional'
    },
    {
      id: 6,
      title: 'Viña de Concha y Toro',
      location: 'Pirque, Santiago',
      image: '/images/tours/vina-concha-toro/concha-toro-1.jpg',
      rating: 4.7,
      reviews: 203,
      duration: '4 horas',
      price: 'CLP 45.000',
      category: 'Premium'
    },
    {
      id: 7,
      title: 'Viña Cousiño Macul',
      location: 'Macul, Santiago',
      image: '/images/tours/vina-cousino-macul/cousino-macul-2.jpg',
      rating: 4.6,
      reviews: 156,
      duration: '5 horas',
      price: 'CLP 40.000',
      category: 'Tradicional'
    },
    {
      id: 8,
      title: 'Viña de Concha y Toro - Tour Nocturno',
      location: 'Pirque, Santiago',
      image: '/images/tours/vina-concha-toro-nocturno/nocturno-1.jpg',
      rating: 4.8,
      reviews: 127,
      duration: '5 horas',
      price: 'CLP 65.000',
      category: 'Premium'
    },
    {
      id: 9,
      title: 'Viña Santa Rita',
      location: 'Alto Jahuel, Buin',
      image: '/images/tours/vina-santa-rita/santa-rita-2.jpg',
      rating: 4.9,
      reviews: 89,
      duration: '5 horas',
      price: 'CLP 55.000',
      category: 'Premium'
    },
    {
      id: 10,
      title: 'Viña Undurraga - Tour Sibaris',
      location: 'Talagante, Santiago',
      image: '/images/tours/vina-undurraga-sibaris/undurraga-4.jpg',
      rating: 4.7,
      reviews: 234,
      duration: '4 horas',
      price: 'CLP 48.000',
      category: 'Premium'
    },
    {
      id: 11,
      title: 'Viñedo Haras de Pirque',
      location: 'Pirque, Santiago',
      image: '/images/tours/haras-de-pirque/haras-3.jpg',
      rating: 4.8,
      reviews: 156,
      duration: '6 horas',
      price: 'CLP 85.000',
      category: 'Boutique'
    }
  ];

  const filteredExperiences = vineyardExperiences.filter(experience => {
    if (selectedCategory === 'Chile') return true;
    // Filter by category - you can customize this logic based on your needs
    return true; // For now, show all experiences regardless of category
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${vineyardImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            Viñedos
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Descubre los mejores viñedos de Chile con experiencias únicas
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-foreground-muted">
          <span>Inicio</span>
          <ChevronRight className="w-4 h-4" />
          <span>Chile</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Viñedos</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 border border-card-border sticky top-8">
              
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">CATEGORÍAS</h3>
                <div className="space-y-2">
                  <div className="mb-2">
                    <span className="text-blue-600 font-medium">
                      Chile
                    </span>
                  </div>
                  <div className="ml-4 space-y-2">
                    {categories.slice(1).map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          if (category === 'Santiago') {
                            window.location.href = '/santiago';
                          } else if (category === 'Cordillera de Los Andes') {
                            window.location.href = '/cordillera-andes';
                          } else if (category === 'Costa Central') {
                            window.location.href = '/costa-central';
                          } else {
                            setSelectedCategory(category);
                          }
                        }}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                          category === 'Viñedos'
                            ? 'bg-orange-500 text-white font-semibold'
                            : selectedCategory === category
                            ? 'text-black font-semibold hover:text-primary hover:bg-accent'
                            : 'text-blue-600 hover:text-primary hover:bg-accent'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-background-alt rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3">¿Necesitas ayuda?</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-foreground-muted">Teléfono:</span>
                    <a href="tel:+56966435647" className="text-primary hover:text-primary-hover">
                      +56966435647
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-foreground-muted">Email:</span>
                    <a href="mailto:gefiz.spa@gmail.com" className="text-primary hover:text-primary-hover">
                      gefiz.spa@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Experiencias en Viñedos
                </h2>
                <p className="text-foreground-muted">
                  {filteredExperiences.length} experiencias encontradas
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-foreground-muted">Ordenar por:</span>
                <select className="px-3 py-2 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Más populares</option>
                  <option>Precio: menor a mayor</option>
                  <option>Precio: mayor a menor</option>
                  <option>Mejor valorados</option>
                </select>
              </div>
            </div>

            {/* Experiences Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredExperiences.map((experience) => (
                <div key={experience.id} className="card-tour cursor-pointer"
                     onClick={() => {
                       if (experience.title === 'Isla Negra, Algarrobo y Viñedos') {
                         window.location.href = '/tour/isla-negra-algarrobo-vinedos';
                       } else if (experience.title === 'Marques de Casa Concha') {
                         window.location.href = '/tour/marques-casa-concha';
                       } else if (experience.title === 'Ruta del Vino Valle de Casablanca') {
                         window.location.href = '/tour/ruta-vino-valle-casablanca';
                       } else if (experience.title === 'Valparaíso, Viña del Mar y Viñedo') {
                         window.location.href = '/tour/valparaiso-vina-vinedo';
                       } else if (experience.title === 'Ruta del Vino Valle del Maipo') {
                         window.location.href = '/tour/ruta-vino-valle-maipo';
                       } else if (experience.title === 'Viña de Concha y Toro') {
                         window.location.href = '/tour/vina-concha-toro';
                       } else if (experience.title === 'Viña Cousiño Macul') {
                         window.location.href = '/tour/vina-cousino-macul';
                       } else if (experience.title === 'Viña de Concha y Toro - Tour Nocturno') {
                         window.location.href = '/tour/vina-concha-toro-nocturno';
                       } else if (experience.title === 'Viña Santa Rita') {
                         window.location.href = '/tour/vina-santa-rita';
                       } else if (experience.title === 'Viña Undurraga - Tour Sibaris') {
                         window.location.href = '/tour/vina-undurraga-tour-sibaris';
                       } else if (experience.title === 'Viñedo Haras de Pirque') {
                         window.location.href = '/tour/vinedo-haras-pirque';
                       }
                     }}>
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-semibold">
                      {experience.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold text-foreground">{experience.rating}</span>
                        <span className="text-sm text-foreground-muted">({experience.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1 text-foreground-muted">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                      {experience.title}
                    </h3>

                    <div className="flex items-center space-x-1 mb-3 text-foreground-muted">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-primary">{experience.price}</span>
                        <span className="text-sm text-foreground-muted ml-1">/persona</span>
                      </div>
                      <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                        Ver Más
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button className="bg-secondary hover:bg-secondary-hover text-secondary-foreground px-8 py-3 rounded-xl font-semibold text-lg">
                Ver Más Experiencias
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vinedos;

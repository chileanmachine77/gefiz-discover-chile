import { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Star } from 'lucide-react';


const Santiago = () => {
  const [selectedCategory, setSelectedCategory] = useState('Chile');

  const categories = [
    'Chile',
    'Santiago',
    'Viñedos',
    'Cordillera de Los Andes',
    'Costa Central'
  ];

  const santiagoTours = [

    {
      id: 2,
      title: 'City Tour Santiago',
      image: '/images/tours/city-tour-santiago/city-4.jpg',
      location: 'Santiago Centro',
      duration: '4 horas',
      groupSize: '1-15 personas',
      rating: 4.9,
      reviews: 89,
      price: 'CLP 35.000',
      category: 'Turismo',
      description: 'Recorre los principales atractivos de Santiago con guía especializado.'
    },
    {
      id: 3,
      title: 'Santiago en las Alturas',
      image: '/images/tours/santiago-en-las-alturas/alturas-2.jpg',
      location: 'Cerro San Cristóbal',
      duration: '4.5 horas',
      groupSize: '1-12 personas',
      rating: 4.7,
      reviews: 156,
      price: 'CLP 125.000',
      category: 'Aventura',
      description: 'Vista panorámica de Santiago desde sus miradores más emblemáticos.'
    },
    {
      id: 4,
      title: 'Tour Zoológico Buin Zoo',
      image: '/images/tours/zoologico-buin-zoo/zoo-7.jpg',
      location: 'Buin',
      duration: '7.5 horas',
      groupSize: '2-25 personas',
      rating: 4.6,
      reviews: 203,
      price: 'CLP 125.000',
      category: 'Familiar',
      description: 'Experiencia familiar única conociendo la fauna chilena y mundial.'
    },
    {
      id: 5,
      title: 'Cordillera Panorámico',
      image: '/images/tours/cordillera-panoramico/cordillera-5.jpg',
      location: 'Cordillera de los Andes',
      duration: '11 horas',
      groupSize: '2-15 personas',
      rating: 4.8,
      reviews: 127,
      price: 'CLP 185.000',
      category: 'Aventura',
      description: 'Vistas espectaculares de la majestuosa Cordillera de los Andes con miradores únicos.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/citytoursgomosaico-hero.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Santiago</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Descubre la capital de Chile y sus alrededores
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-foreground-muted">
          <span>INICIO</span>
          <span>/</span>
          <span>Chile</span>
          <span>/</span>
          <span className="text-foreground font-medium">Santiago</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-card-border rounded-xl p-6 sticky top-6">
              
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
                            // Already on Santiago page, just update selection
                            setSelectedCategory(category);
                          } else if (category === 'Viñedos') {
                            window.location.href = '/vinedos';
                          } else if (category === 'Cordillera de Los Andes') {
                            window.location.href = '/cordillera-andes';
                          } else if (category === 'Costa Central') {
                            window.location.href = '/costa-central';
                          } else {
                            setSelectedCategory(category);
                          }
                        }}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                          category === 'Santiago'
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
                <h2 className="text-2xl font-bold text-foreground">Tours en Santiago</h2>
                <p className="text-foreground-muted mt-1">
                  Mostrando {santiagoTours.length} experiencias disponibles
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-foreground-muted">Mostrar en el mapa resultados</span>
                <select className="border border-border rounded-lg px-3 py-2 text-sm">
                  <option>Orden predeterminado</option>
                  <option>Precio: menor a mayor</option>
                  <option>Precio: mayor a menor</option>
                  <option>Mejor valorados</option>
                </select>
              </div>
            </div>

            {/* Tours Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {santiagoTours.map((tour) => (
                <Card key={tour.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
                      onClick={() => {
                        if (tour.title === 'City Tour Santiago') {
                          window.location.href = '/tour/city-tour-santiago';
                        } else if (tour.title === 'Santiago en las Alturas') {
                          window.location.href = '/tour/santiago-en-las-alturas';
                        } else if (tour.title === 'Tour Zoológico Buin Zoo') {
                          window.location.href = '/tour/zoologico-buin-zoo';
                        }
                      }}>
                  <div className="relative">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      {tour.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {tour.title}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-foreground-muted mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{tour.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{tour.groupSize}</span>
                      </div>
                    </div>

                    <p className="text-sm text-foreground-muted mb-3 line-clamp-2">
                      {tour.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{tour.rating}</span>
                        <span className="text-sm text-foreground-muted">({tour.reviews})</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{tour.price}</div>
                        <div className="text-xs text-foreground-muted">por persona</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Santiago;

import { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Star } from 'lucide-react';

const CordilleraAndes = () => {
  const [selectedCategory, setSelectedCategory] = useState('Cordillera de Los Andes');

  const categories = [
    'Chile',
    'Santiago',
    'Viñedos',
    'Cordillera de Los Andes',
    'Costa Central'
  ];

  const cordilleraTours = [
    {
      id: 1,
      title: 'Cordillera Panorámico',
      image: '/images/tours/cordillera-panoramico/cordillera-5.jpg',
      location: 'Cordillera de Los Andes',
      duration: '6 horas',
      groupSize: '2-15 personas',
      rating: 4.9,
      reviews: 87,
      price: 'CLP 65.000',
      category: 'Panorámico',
      description: 'Disfruta de vistas espectaculares de la Cordillera de Los Andes con paisajes únicos.'
    },
    {
      id: 2,
      title: 'Full Day Parque Farellones',
      image: '/images/tours/full-day-parque-farellones/farellones-2.jpg',
      location: 'Parque Farellones',
      duration: '10.5 horas',
      groupSize: '4-20 personas',
      rating: 4.8,
      reviews: 156,
      price: 'CLP 75.000',
      category: 'Aventura',
      description: 'Aventura completa en el parque de montaña más emocionante cerca de Santiago.'
    },
    {
      id: 3,
      title: 'Portillo & Laguna del Inca con Almuerzo',
      image: '/images/tours/portillo-laguna-inca-almuerzo/portillo-1.jpg',
      location: 'Portillo - 2.880m',
      duration: '12 horas',
      groupSize: '2-25 personas',
      rating: 4.9,
      reviews: 203,
      price: 'CLP 95.000',
      category: 'Premium',
      description: 'Experiencia premium en el centro de esquí más famoso de Sudamérica con almuerzo gourmet.'
    },
    {
      id: 4,
      title: 'Ski Day El Colorado',
      image: '/images/tours/ski-day-el-colorado/colorado-1.jpg',
      location: 'El Colorado',
      duration: '7 horas',
      groupSize: '2-12 personas',
      rating: 4.7,
      reviews: 89,
      price: 'CLP 80.000',
      category: 'Deportes',
      description: 'Día completo de esquí en uno de los centros más populares de Chile.'
    },
    {
      id: 5,
      title: 'Ski Day Farellones',
      image: '/images/tours/ski-day-farellones/farellones-4.jpg',
      location: 'Farellones',
      duration: '7 horas',
      groupSize: '2-15 personas',
      rating: 4.6,
      reviews: 203,
      price: 'CLP 80.000',
      category: 'Deportes',
      description: 'Experiencia de esquí en Farellones para todos los niveles.'
    },
    {
      id: 6,
      title: 'Ski Day Valle Nevado',
      image: '/images/tours/ski-day-valle-nevado/valle-nevado-4.jpg',
      location: 'Valle Nevado',
      duration: '8 horas',
      groupSize: '2-18 personas',
      rating: 4.8,
      reviews: 167,
      price: 'CLP 90.000',
      category: 'Premium',
      description: 'Día de esquí en Valle Nevado, el centro de esquí más moderno de Chile.'
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
            backgroundImage: 'url("/cordillera-hero.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Snow effect overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Cordillera de Los Andes</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Aventuras en las montañas más espectaculares de Chile
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
          <span className="text-foreground font-medium">Cordillera de Los Andes</span>
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
                            window.location.href = '/santiago';
                          } else if (category === 'Viñedos') {
                            window.location.href = '/vinedos';
                          } else if (category === 'Cordillera de Los Andes') {
                            setSelectedCategory(category);
                          } else if (category === 'Costa Central') {
                            window.location.href = '/costa-central';
                          } else {
                            setSelectedCategory(category);
                          }
                        }}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                          category === 'Cordillera de Los Andes'
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

              {/* Help Section */}
              <div className="bg-background-alt rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3">¿Necesitas ayuda?</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-foreground-muted">Teléfono:</span>
                    <a href="tel:+56966435647" className="text-primary hover:text-primary-hover">+56 9 6643 5647</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-foreground-muted">Email:</span>
                    <a href="mailto:gefiz.spa@gmail.com" className="text-primary hover:text-primary-hover">gefiz.spa@gmail.com</a>
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
                <h2 className="text-2xl font-bold text-foreground">Tours en Cordillera de Los Andes</h2>
                <p className="text-foreground-muted mt-1">
                  Mostrando {cordilleraTours.length} experiencias disponibles
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
              {cordilleraTours.map((tour) => (
                <Card key={tour.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
                      onClick={() => {
                        if (tour.title === 'Cordillera Panorámico') {
                          window.location.href = '/tour/cordillera-panoramico';
                        } else if (tour.title === 'Full Day Parque Farellones') {
                          window.location.href = '/tour/full-day-parque-farellones';
                        } else if (tour.title === 'Portillo & Laguna del Inca con Almuerzo') {
                          window.location.href = '/tour/portillo-laguna-inca-almuerzo';
                        } else if (tour.title === 'Ski Day El Colorado') {
                          window.location.href = '/tour/ski-day-el-colorado';
                        } else if (tour.title === 'Ski Day Farellones') {
                          window.location.href = '/tour/ski-day-farellones';
                        } else if (tour.title === 'Ski Day Valle Nevado') {
                          window.location.href = '/tour/ski-day-valle-nevado';
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

export default CordilleraAndes;

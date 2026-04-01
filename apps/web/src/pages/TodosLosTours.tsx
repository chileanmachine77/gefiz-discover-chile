import { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Star, Mountain, Building, Grape, Waves } from 'lucide-react';

import cordilleraPanoramicoImage from '@/assets/cordillera-panoramico.jpg';
import mountainsImage from '@/assets/mountains.jpg';
import cajonMaipoImage from '@/assets/cajon-maipo.jpg';
import santiagoImage from '@/assets/santiago-palacio.jpg';
import vineyardImage from '@/assets/vineyard.jpg';
import vinedosCasablancaImage from '@/assets/vinedos-casablanca.jpg';
import valparaisoImage from '@/assets/valparaiso.jpg';
import costaCentralImage from '@/assets/costa-central-vina.jpg';

const TodosLosTours = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Mountain Tours (Cordillera de Los Andes)
  const mountainTours = [
    {
      id: 1,
      title: 'Cordillera Panorámico',
      image: '/images/tours/cordillera-panoramico/cordillera-5.jpg',
      location: 'Cordillera de Los Andes',
      duration: '6 horas',
      groupSize: '2-15 personas',
      rating: 4.9,
      reviews: 87,
      price: 'CLP 44.000',
      category: 'Panorámico',
      description: 'Disfruta de vistas espectaculares de la Cordillera de Los Andes con paisajes únicos.',
      type: 'mountain'
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
      price: 'CLP 99.000',
      category: 'Aventura',
      description: 'Aventura completa en el parque de montaña más emocionante cerca de Santiago.',
      type: 'mountain'
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
      price: 'CLP 99.000',
      category: 'Premium',
      description: 'Experiencia premium en el centro de esquí más famoso de Sudamérica con almuerzo gourmet.',
      type: 'mountain'
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
      price: 'CLP 142.000',
      category: 'Deportes',
      description: 'Día completo de esquí en uno de los centros más populares de Chile.',
      type: 'mountain'
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
      price: 'CLP 139.000',
      category: 'Deportes',
      description: 'Experiencia de esquí en Farellones para todos los niveles.',
      type: 'mountain'
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
      price: 'CLP 191.000',
      category: 'Premium',
      description: 'Día de esquí en Valle Nevado, el centro de esquí más moderno de Chile.',
      type: 'mountain'
    }
  ];

  // Santiago Tours
  const santiagoTours = [
    {
      id: 7,
      title: 'City Tour Santiago',
      image: '/images/tours/city-tour-santiago/city-4.jpg',
      location: 'Santiago Centro',
      duration: '4 horas',
      groupSize: '1-15 personas',
      rating: 4.9,
      reviews: 89,
      price: 'CLP 27.000',
      category: 'Turismo',
      description: 'Recorre los principales atractivos de Santiago con guía especializado.',
      type: 'santiago'
    },
    {
      id: 8,
      title: 'Santiago en las Alturas',
      image: '/images/tours/santiago-en-las-alturas/alturas-2.jpg',
      location: 'Cerro San Cristóbal',
      duration: '4.5 horas',
      groupSize: '1-12 personas',
      rating: 4.7,
      reviews: 156,
      price: 'CLP 77.000',
      category: 'Aventura',
      description: 'Vista panorámica de Santiago desde sus miradores más emblemáticos.',
      type: 'santiago'
    },
    {
      id: 9,
      title: 'Tour Zoológico Buin Zoo',
      image: '/images/tours/zoologico-buin-zoo/zoo-7.jpg',
      location: 'Buin',
      duration: '7.5 horas',
      groupSize: '2-25 personas',
      rating: 4.6,
      reviews: 203,
      price: 'CLP 80.000',
      category: 'Familiar',
      description: 'Experiencia familiar única conociendo la fauna chilena y mundial.',
      type: 'santiago'
    }
  ];

  // Vineyard Tours
  const vineyardTours = [
    {
      id: 10,
      title: 'Isla Negra, Algarrobo y Viñedos',
      image: '/images/tours/isla-negra-algarrobo/isla3-1.jpg',
      location: 'Isla Negra, Algarrobo',
      duration: '8 horas',
      groupSize: '2-15 personas',
      rating: 4.7,
      reviews: 142,
      price: 'CLP 94.000',
      category: 'Costero',
      description: 'Visita la casa museo de Pablo Neruda en Isla Negra, Algarrobo y un viñedo costero.',
      type: 'vineyard'
    },
    {
      id: 11,
      title: 'Marques de Casa Concha',
      image: '/images/tours/marques-casa-concha/marques.jpg',
      location: 'Pirque, Santiago',
      duration: '5 horas',
      groupSize: '2-20 personas',
      rating: 4.8,
      reviews: 178,
      price: 'CLP 119.000',
      category: 'Premium',
      description: 'Experiencia exclusiva en la viña premium de Concha y Toro.',
      type: 'vineyard'
    },
    {
      id: 12,
      title: 'Ruta del Vino Valle de Casablanca',
      image: '/images/tours/ruta-vino-valle-casablanca/casablanca-2.jpg',
      location: 'Valle de Casablanca',
      duration: '7 horas',
      groupSize: '2-16 personas',
      rating: 4.5,
      reviews: 98,
      price: 'CLP 182.000',
      category: 'Premium',
      description: 'Viñedos cerca del mar con vinos blancos excepcionales y vista al Pacífico.',
      type: 'vineyard'
    },
    {
      id: 13,
      title: 'Valparaíso, Viña del Mar y Viñedo',
      image: '/images/tours/valparaiso-vina-vinedo/valparaiso-2.jpg',
      location: 'Valparaíso, Viña del Mar',
      duration: '9 horas',
      groupSize: '2-20 personas',
      rating: 4.6,
      reviews: 156,
      price: 'CLP 91.000',
      category: 'Costero',
      description: 'Tour completo por Valparaíso patrimonio de la humanidad, Viña del Mar y viñedo.',
      type: 'vineyard'
    },
    {
      id: 14,
      title: 'Ruta del Vino Valle del Maipo',
      image: '/images/tours/ruta-vino-valle-maipo/maipo-4.jpg',
      location: 'Valle del Maipo',
      duration: '6 horas',
      groupSize: '2-12 personas',
      rating: 4.8,
      reviews: 189,
      price: 'CLP 137.000',
      category: 'Tradicional',
      description: 'Recorrido por 3 viñas del prestigioso Valle del Maipo con almuerzo incluido.',
      type: 'vineyard'
    },
    {
      id: 15,
      title: 'Viña de Concha y Toro',
      image: '/images/tours/vina-concha-toro/concha-toro-1.jpg',
      location: 'Pirque, Santiago',
      duration: '4 horas',
      groupSize: '2-25 personas',
      rating: 4.7,
      reviews: 203,
      price: 'CLP 80.000',
      category: 'Premium',
      description: 'Visita la viña más famosa de Chile con cata de vinos premium.',
      type: 'vineyard'
    },
    {
      id: 16,
      title: 'Viña Cousiño Macul',
      image: '/images/tours/vina-cousino-macul/cousino-macul-2.jpg',
      location: 'Macul, Santiago',
      duration: '5 horas',
      groupSize: '2-18 personas',
      rating: 4.6,
      reviews: 156,
      price: 'CLP 68.200',
      category: 'Tradicional',
      description: 'Viña familiar con más de 150 años de tradición en el corazón de Santiago.',
      type: 'vineyard'
    },
    {
      id: 17,
      title: 'Viña de Concha y Toro - Tour Nocturno',
      image: '/images/tours/vina-concha-toro-nocturno/nocturno-1.jpg',
      location: 'Pirque, Santiago',
      duration: '5 horas',
      groupSize: '2-15 personas',
      rating: 4.8,
      reviews: 127,
      price: 'CLP 174.000',
      category: 'Premium',
      description: 'Una experiencia mágica en la viña Concha y Toro con cata de vinos bajo las estrellas.',
      type: 'vineyard'
    },
    {
      id: 18,
      title: 'Viña Santa Rita',
      image: '/images/tours/vina-santa-rita/santa-rita-2.jpg',
      location: 'Alto Jahuel, Buin',
      duration: '5 horas',
      groupSize: '2-20 personas',
      rating: 4.9,
      reviews: 89,
      price: 'CLP 68.200',
      category: 'Premium',
      description: 'Un viaje a la historia del vino chileno en una de las viñas más emblemáticas.',
      type: 'vineyard'
    },
    {
      id: 19,
      title: 'Viña Undurraga - Tour Sibaris',
      image: '/images/tours/vina-undurraga-sibaris/undurraga-4.jpg',
      location: 'Talagante, Santiago',
      duration: '4 horas',
      groupSize: '2-20 personas',
      rating: 4.7,
      reviews: 234,
      price: 'CLP 68.000',
      category: 'Premium',
      description: 'Descubre una de las viñas más antiguas de Chile con degustación incluida.',
      type: 'vineyard'
    },
    {
      id: 20,
      title: 'Viñedo Haras de Pirque',
      image: '/images/tours/haras-de-pirque/haras-3.jpg',
      location: 'Pirque, Santiago',
      duration: '6 horas',
      groupSize: '2-14 personas',
      rating: 4.8,
      reviews: 156,
      price: 'CLP 68.200',
      category: 'Boutique',
      description: 'Viña boutique con caballos de polo y vinos ultra premium.',
      type: 'vineyard'
    }
  ];

  // Costa Central Tours
  const costaCentralTours = [
    {
      id: 21,
      title: 'Isla Negra, Algarrobo & Viñedo',
      image: '/images/tours/isla-negra-algarrobo/isla3-1.jpg',
      location: 'Costa Central',
      duration: '8 horas',
      groupSize: '2-15 personas',
      rating: 4.8,
      reviews: 142,
      price: 'CLP 94.000',
      category: 'Cultural',
      description: 'Visita la casa museo de Pablo Neruda en Isla Negra, Algarrobo y un viñedo costero.',
      type: 'costa'
    },
    {
      id: 22,
      title: 'Valparaíso, Viña del Mar y Viñedo',
      image: '/images/tours/valparaiso-vina-vinedo/valparaiso-2.jpg',
      location: 'Valparaíso',
      duration: '10 horas',
      groupSize: '2-20 personas',
      rating: 4.9,
      reviews: 198,
      price: 'CLP 91.000',
      category: 'Histórico',
      description: 'Tour completo por Valparaíso patrimonio de la humanidad, Viña del Mar y viñedo.',
      type: 'costa'
    },
    {
      id: 23,
      title: 'Viña del Mar & Valparaíso',
      image: '/images/tours/vina-del-mar-valparaiso/vina-valpo-5.jpg',
      location: 'Viña del Mar',
      duration: '10 horas',
      groupSize: '4-12 personas',
      rating: 4.7,
      reviews: 167,
      price: 'CLP 44.000',
      category: 'Costero',
      description: 'Descubre la ciudad jardín y el puerto histórico de Valparaíso.',
      type: 'costa'
    }
  ];

  const allTours = [...mountainTours, ...santiagoTours, ...vineyardTours, ...costaCentralTours];

  const getFilteredTours = () => {
    if (selectedCategory === 'Todos') return allTours;
    if (selectedCategory === 'Montaña') return mountainTours;
    if (selectedCategory === 'Santiago') return santiagoTours;
    if (selectedCategory === 'Viñedos') return vineyardTours;
    if (selectedCategory === 'Costa Central') return costaCentralTours;
    return allTours;
  };

  const handleTourClick = (tour: any) => {
    // Navigation logic for each tour
    const tourRoutes: { [key: string]: string } = {
      // Mountain Tours
      'Cordillera Panorámico': '/tour/cordillera-panoramico',
      'Full Day Parque Farellones': '/tour/full-day-parque-farellones',
      'Portillo & Laguna del Inca con Almuerzo': '/tour/portillo-laguna-inca-almuerzo',
      'Ski Day El Colorado': '/tour/ski-day-el-colorado',
      'Ski Day Farellones': '/tour/ski-day-farellones',
      'Ski Day Valle Nevado': '/tour/ski-day-valle-nevado',
      
      // Santiago Tours
      'City Tour Santiago': '/tour/city-tour-santiago',
      'Santiago en las Alturas': '/tour/santiago-en-las-alturas',
      'Tour Zoológico Buin Zoo': '/tour/zoologico-buin-zoo',
      
      // Vineyard Tours
      'Isla Negra, Algarrobo y Viñedos': '/tour/isla-negra-algarrobo-vinedos',
      'Marques de Casa Concha': '/tour/marques-casa-concha',
      'Ruta del Vino Valle de Casablanca': '/tour/ruta-vino-valle-casablanca',
      'Ruta del Vino Valle del Maipo': '/tour/ruta-vino-valle-maipo',
      'Viña de Concha y Toro': '/tour/vina-concha-toro',
      'Viña Cousiño Macul': '/tour/vina-cousino-macul',
      'Viña de Concha y Toro - Tour Nocturno': '/tour/vina-concha-toro-nocturno',
      'Viña Santa Rita': '/tour/vina-santa-rita',
      'Viña Undurraga - Tour Sibaris': '/tour/vina-undurraga-tour-sibaris',
      'Viñedo Haras de Pirque': '/tour/vinedo-haras-pirque',
      
      // Costa Central Tours
      'Isla Negra, Algarrobo & Viñedo': '/tour/isla-negra-algarrobo-vinedo',
      'Valparaíso, Viña del Mar y Viñedo': '/tour/valparaiso-vina-vinedo',
      'Viña del Mar & Valparaíso': '/tour/vina-valparaiso'
    };

    const route = tourRoutes[tour.title];
    if (route) {
      window.location.href = route;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/moais.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Todos los Tours
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Descubre todas nuestras experiencias únicas en Chile: montaña, ciudad, viñedos y costa
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Mountain className="w-4 h-4" />
              <span>{mountainTours.length} Tours de Montaña</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Building className="w-4 h-4" />
              <span>{santiagoTours.length} Tours de Santiago</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Grape className="w-4 h-4" />
              <span>{vineyardTours.length} Tours de Viñedos</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Waves className="w-4 h-4" />
              <span>{costaCentralTours.length} Tours de Costa Central</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-card border border-card-border rounded-xl p-6 sticky top-6">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">CATEGORÍAS</h3>
                <div className="space-y-2">
                  <div className="mb-2">
                    <span className="text-blue-600 font-medium">
                      Chile
                    </span>
                  </div>
                  <div className="ml-4 space-y-2">
                    {['Todos', 'Montaña', 'Santiago', 'Viñedos', 'Costa Central'].map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                          category === 'Todos'
                            ? 'bg-orange-500 text-white font-semibold'
                            : selectedCategory === category
                            ? 'bg-primary text-primary-foreground'
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
              <div className="border-t border-card-border pt-6">
                <h4 className="font-semibold text-foreground mb-3">¿Necesitas ayuda?</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-foreground-muted">
                    Contáctanos para tours personalizados
                  </div>
                  <div>
                    <a href="https://wa.me/56966435647" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
                      +56 9 6643 5647
                    </a>
                  </div>
                  <div>
                    <a href="mailto:gefiz.spa@gmail.com" className="text-primary hover:underline">
                      gefiz.spa@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedCategory === 'Todos' ? 'Todos los Tours' : `Tours de ${selectedCategory}`}
                </h2>
                <p className="text-foreground-muted mt-1">
                  Mostrando {getFilteredTours().length} experiencias disponibles
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

            {/* Tours by Category */}
            {selectedCategory === 'Todos' ? (
              <div className="space-y-12">
                {/* Mountain Tours Section */}
                <div>
                  <div className="flex items-center mb-6">
                    <Mountain className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Tours de Montaña</h3>
                    <span className="ml-2 text-sm text-foreground-muted">({mountainTours.length})</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {mountainTours.map((tour) => (
                      <TourCard key={tour.id} tour={tour} onClick={() => handleTourClick(tour)} />
                    ))}
                  </div>
                </div>

                {/* Santiago Tours Section */}
                <div>
                  <div className="flex items-center mb-6">
                    <Building className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Tours de Santiago</h3>
                    <span className="ml-2 text-sm text-foreground-muted">({santiagoTours.length})</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {santiagoTours.map((tour) => (
                      <TourCard key={tour.id} tour={tour} onClick={() => handleTourClick(tour)} />
                    ))}
                  </div>
                </div>

                {/* Vineyard Tours Section */}
                <div>
                  <div className="flex items-center mb-6">
                    <Grape className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Tours de Viñedos</h3>
                    <span className="ml-2 text-sm text-foreground-muted">({vineyardTours.length})</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {vineyardTours.map((tour) => (
                      <TourCard key={tour.id} tour={tour} onClick={() => handleTourClick(tour)} />
                    ))}
                  </div>
                </div>

                {/* Costa Central Tours Section */}
                <div>
                  <div className="flex items-center mb-6">
                    <Waves className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Tours de Costa Central</h3>
                    <span className="ml-2 text-sm text-foreground-muted">({costaCentralTours.length})</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {costaCentralTours.map((tour) => (
                      <TourCard key={tour.id} tour={tour} onClick={() => handleTourClick(tour)} />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Filtered Tours Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {getFilteredTours().map((tour) => (
                  <TourCard key={tour.id} tour={tour} onClick={() => handleTourClick(tour)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Tour Card Component
const TourCard = ({ tour, onClick }: { tour: any; onClick: () => void }) => (
  <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer" onClick={onClick}>
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
);

export default TodosLosTours;

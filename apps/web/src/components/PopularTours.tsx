import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import valparaisoImage from '@/assets/valparaiso.jpg';
import vineyardImage from '@/assets/vineyard.jpg';
import mountainsImage from '@/assets/mountains.jpg';
import cajonMaipoImage from '@/assets/cajon-maipo.jpg';

const PopularTours = () => {
  const tours = [
    {
      id: 1,
      title: "Viña Concha y Toro - Tour Nocturno",
      description: "Experiencia única nocturna en la viña más famosa de Chile con degustación bajo las estrellas.",
      image: '/images/tours/vina-concha-toro-nocturno/nocturno-1.jpg',
      price: "CLP 95.000",
      duration: "4 horas",
      groupSize: "Hasta 25 personas",
      rating: 4.9,
      reviews: 187,
      highlights: ["Tour nocturno", "Casillero del Diablo", "Degustación premium", "Cena incluida"],
      badge: "Más Popular",
      detailPage: "/tour/vina-concha-toro-nocturno"
    },
    {
      id: 2,
      title: "Santiago en las Alturas",
      description: "Descubre Santiago desde sus miradores más espectaculares con vistas panorámicas únicas.",
      image: '/images/tours/santiago-en-las-alturas/alturas-2.jpg',
      price: "CLP 65.000",
      duration: "6 horas",
      groupSize: "Hasta 35 personas",
      rating: 4.8,
      reviews: 234,
      highlights: ["Cerro San Cristóbal", "Sky Costanera", "Cerro Santa Lucía", "Almuerzo incluido"],
      badge: "Premium",
      detailPage: "/tour/santiago-en-las-alturas"
    },
    {
      id: 3,
      title: "City Tour Santiago",
      description: "Recorrido completo por los lugares más emblemáticos e históricos de la capital chilena.",
      image: '/images/tours/city-tour-santiago/city-4.jpg',
      price: "CLP 45.000",
      duration: "4 horas",
      groupSize: "Hasta 45 personas",
      rating: 4.7,
      reviews: 312,
      highlights: ["Palacio La Moneda", "Plaza de Armas", "Mercado Central", "Barrio Bellavista"],
      detailPage: "/tour/city-tour-santiago"
    },
    {
      id: 4,
      title: "Viña del Mar y Valparaíso",
      description: "Descubre las joyas del Pacífico: la elegante Viña del Mar y el colorido puerto de Valparaíso.",
      image: '/images/tours/vina-del-mar-valparaiso/vina-valpo-5.jpg',
      price: "CLP 85.000",
      duration: "8 horas",
      groupSize: "Hasta 45 personas",
      rating: 4.8,
      reviews: 289,
      highlights: ["Jardín Botánico", "Casa Pablo Neruda", "Ascensores históricos", "Almuerzo incluido"],
      detailPage: "/tour/valparaiso-vina-vinedo"
    },
    {
      id: 5,
      title: "Viña Santa Rita",
      description: "Visita la histórica Viña Santa Rita con degustación de vinos y recorrido por sus jardines.",
      image: '/images/tours/vina-santa-rita/santa-rita-2.jpg',
      price: "CLP 75.000",
      duration: "5 horas",
      groupSize: "Hasta 30 personas",
      rating: 4.8,
      reviews: 156,
      highlights: ["Museo Andino", "Degustación de vinos", "Jardines históricos", "Casa patronal"],
      detailPage: "/tour/vina-santa-rita"
    },
    {
      id: 6,
      title: "Viña Concha y Toro",
      description: "Tour clásico por la viña más reconocida de Chile con visita al famoso Casillero del Diablo.",
      image: '/images/tours/vina-concha-toro/concha-toro-1.jpg',
      price: "CLP 65.000",
      duration: "4 horas",
      groupSize: "Hasta 40 personas",
      rating: 4.9,
      reviews: 423,
      highlights: ["Casillero del Diablo", "Degustación de vinos", "Viñedos históricos", "Transporte incluido"],
      badge: "Clásico",
      detailPage: "/tour/vina-concha-toro"
    }
  ];

  return (
    <section id="tours" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Tours Más Solicitados
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Descubre Chile a través de experiencias cuidadosamente diseñadas. 
            Cada tour incluye transporte, guía experto y momentos inolvidables.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="card-tour">
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {tour.badge && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-semibold">
                    {tour.badge}
                  </Badge>
                )}
                {'originalPrice' in tour && tour.originalPrice && (
                  <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground font-semibold">
                    Oferta
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{tour.title}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-foreground">{tour.rating}</span>
                    <span className="text-sm text-foreground-muted">({tour.reviews})</span>
                  </div>
                </div>

                <p className="text-foreground-muted mb-4 line-clamp-2">
                  {tour.description}
                </p>

                {/* Tour Details */}
                <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.slice(0, 2).map((highlight, index) => (
                      <span key={index} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                    {tour.highlights.length > 2 && (
                      <span className="text-xs text-foreground-muted">
                        +{tour.highlights.length - 2} más
                      </span>
                    )}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">{tour.price}</span>
                    {'originalPrice' in tour && (tour as any).originalPrice && (
                      <span className="text-sm text-foreground-muted line-through">
                        {(tour as any).originalPrice}
                      </span>
                    )}
                  </div>
                  {tour.detailPage ? (
                    <Link to={tour.detailPage}>
                      <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2 rounded-lg font-semibold">
                        Ver Más
                      </Button>
                    </Link>
                  ) : (
                    <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2 rounded-lg font-semibold">
                      Ver Más
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/todos-los-tours">
            <Button className="bg-secondary hover:bg-secondary-hover text-secondary-foreground px-8 py-3 rounded-xl font-semibold text-lg">
              Ver Todos los Tours
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
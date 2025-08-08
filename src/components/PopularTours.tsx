import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, MapPin } from 'lucide-react';
import valparaisoImage from '@/assets/valparaiso.jpg';
import vineyardImage from '@/assets/vineyard.jpg';
import mountainsImage from '@/assets/mountains.jpg';
import cajonMaipoImage from '@/assets/cajon-maipo.jpg';

const PopularTours = () => {
  const tours = [
    {
      id: 1,
      title: "Viña del Mar y Valparaíso",
      description: "Descubre las joyas del Pacífico: la elegante Viña del Mar y el colorido puerto de Valparaíso.",
      image: valparaisoImage,
      price: "CLP 85.000",
      originalPrice: "CLP 100.000",
      duration: "8 horas",
      groupSize: "Hasta 45 personas",
      rating: 4.8,
      reviews: 234,
      highlights: ["Jardín Botánico", "Casa Pablo Neruda", "Ascensores históricos", "Almuerzo incluido"],
      badge: "Más Popular"
    },
    {
      id: 2,
      title: "Ruta del Vino - Maipo",
      description: "Experiencia premium en viñedos boutique con cata de vinos y maridaje gourmet.",
      image: vineyardImage,
      price: "CLP 120.000",
      duration: "6 horas",
      groupSize: "Hasta 20 personas",
      rating: 4.9,
      reviews: 156,
      highlights: ["3 viñedos premium", "Cata dirigida", "Almuerzo maridaje", "Transporte VIP"],
      badge: "Premium"
    },
    {
      id: 3,
      title: "Nieve en Farellones",
      description: "Aventura invernal en la cordillera con actividades en la nieve y almuerzo de montaña.",
      image: mountainsImage,
      price: "CLP 95.000",
      duration: "8 horas",
      groupSize: "Hasta 35 personas",
      rating: 4.7,
      reviews: 189,
      highlights: ["Actividades en nieve", "Equipo incluido", "Almuerzo caliente", "Vistas panorámicas"]
    },
    {
      id: 4,
      title: "Cajón del Maipo Adventure",
      description: "Explora la naturaleza salvaje del Cajón del Maipo con termas y paisajes únicos.",
      image: cajonMaipoImage,
      price: "CLP 75.000",
      duration: "10 horas",
      groupSize: "Hasta 30 personas",
      rating: 4.8,
      reviews: 203,
      highlights: ["Termas Colina", "Embalse El Yeso", "Trekking opcional", "Fotografía profesional"]
    },
    {
      id: 5,
      title: "Santiago Colonial + Cerro San Cristóbal",
      description: "Recorre la historia de Santiago desde el centro histórico hasta las alturas del San Cristóbal.",
      image: valparaisoImage,
      price: "CLP 55.000",
      duration: "5 horas",
      groupSize: "Hasta 50 personas",
      rating: 4.6,
      reviews: 145,
      highlights: ["Palacio La Moneda", "Plaza de Armas", "Funicular", "Vista panorámica"]
    },
    {
      id: 6,
      title: "Tour Gastronómico Mercados",
      description: "Experimenta los sabores auténticos de Chile en mercados tradicionales y picadas locales.",
      image: cajonMaipoImage,
      price: "CLP 65.000",
      duration: "4 horas",
      groupSize: "Hasta 15 personas",
      rating: 4.9,
      reviews: 98,
      highlights: ["Mercado Central", "Degustaciones", "Productos locales", "Guía gastronómico"],
      badge: "Nuevo"
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
                {tour.originalPrice && (
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
                    {tour.originalPrice && (
                      <span className="text-sm text-foreground-muted line-through">
                        {tour.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2 rounded-lg font-semibold">
                    Ver Más
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="bg-secondary hover:bg-secondary-hover text-secondary-foreground px-8 py-3 rounded-xl font-semibold text-lg">
            Ver Todos los Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
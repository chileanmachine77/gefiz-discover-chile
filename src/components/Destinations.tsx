import { ArrowRight } from 'lucide-react';
import valparaisoImage from '@/assets/valparaiso.jpg';
import vineyardImage from '@/assets/vineyard.jpg';
import mountainsImage from '@/assets/mountains.jpg';
import cajonMaipoImage from '@/assets/cajon-maipo.jpg';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      title: "Montaña",
      subtitle: "Cordillera de los Andes",
      description: "Nieve, aventura y paisajes únicos",
      image: mountainsImage,
      tours: "8 tours disponibles",
      size: "large"
    },
    {
      id: 2,
      title: "Costa",
      subtitle: "Litoral Central",
      description: "Playas, puertos y cultura marina",
      image: valparaisoImage,
      tours: "12 tours disponibles",
      size: "medium"
    },
    {
      id: 3,
      title: "Viñedos",
      subtitle: "Valle del Maipo",
      description: "Cata de vinos y experiencias gourmet",
      image: vineyardImage,
      tours: "6 tours disponibles",
      size: "medium"
    },
    {
      id: 4,
      title: "Norte de Chile",
      subtitle: "Desierto de Atacama",
      description: "Paisajes únicos y astronomía",
      image: cajonMaipoImage,
      tours: "4 tours disponibles",
      size: "small"
    },
    {
      id: 5,
      title: "Sur de Chile",
      subtitle: "Lagos y Volcanes",
      description: "Naturaleza y tradiciones",
      image: mountainsImage,
      tours: "7 tours disponibles",
      size: "small"
    },
    {
      id: 6,
      title: "Ciudades Históricas",
      subtitle: "Patrimonio Nacional",
      description: "Historia, cultura y arquitectura",
      image: valparaisoImage,
      tours: "5 tours disponibles",
      size: "small"
    }
  ];

  const getGridClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2 h-96 md:h-auto';
      case 'medium':
        return 'md:col-span-1 md:row-span-2 h-80';
      case 'small':
        return 'md:col-span-1 md:row-span-1 h-48';
      default:
        return 'h-64';
    }
  };

  return (
    <section id="destinos" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explora Nuestros Destinos
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Desde la majestuosa cordillera hasta las costas del Pacífico, descubre la diversidad 
            de Chile con nuestros tours especializados por región.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 max-w-7xl mx-auto">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className={`card-destination ${getGridClass(destination.size)}`}
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  <p className="text-sm font-medium mb-1 opacity-90">
                    {destination.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-3 max-w-xs">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {destination.tours}
                    </span>
                    <button className="flex items-center space-x-2 text-sm font-semibold hover:text-primary transition-colors">
                      <span>Explorar</span>
                      <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿No encuentras tu destino ideal?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Creamos tours personalizados según tus intereses y presupuesto
            </p>
            <button className="bg-white text-primary hover:bg-accent hover:text-primary px-8 py-3 rounded-xl font-semibold text-lg transition-colors">
              Solicitar Tour Personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
import { ArrowRight, MapPin, Mountain, Building, Grape } from 'lucide-react';
import { Link } from 'react-router-dom';
import santiagoImage from '@/assets/santiago-palacio.jpg';
import cordilleraImage from '@/assets/cordillera-panoramico.jpg';
import vinedosImage from '@/assets/vinedos-casablanca.jpg';
import costaCentralImage from '@/assets/costa-central-vina.jpg';
import exploraHomeImage from '@/assets/explorahome.jpeg';

const Destinations = () => {
  // Main large destination (left side)
  const mainDestination = {
    id: 1,
    title: "TODOS LOS TOURS",
    description: "Explora todas nuestras experiencias únicas",
    image: exploraHomeImage,
    link: "/todos-los-tours"
  };

  // Grid destinations (right side 2x2)
  const gridDestinations = [
    {
      id: 2,
      title: "SANTIAGO",
      image: santiagoImage,
      link: "/santiago"
    },
    {
      id: 3,
      title: "CORDILLERA DE LOS ANDES",
      image: cordilleraImage,
      link: "/cordillera-andes"
    },
    {
      id: 4,
      title: "VIÑEDOS",
      image: vinedosImage,
      link: "/vinedos"
    },
    {
      id: 5,
      title: "COSTA CENTRAL",
      image: costaCentralImage,
      link: "/costa-central"
    }
  ];

  return (
    <section id="destinos" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            EXPLORA NUESTROS DESTINOS
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Desde la majestuosa cordillera hasta las costas del Pacífico, descubre la diversidad 
            de Chile con nuestros tours especializados por región.
          </p>
        </div>

        {/* Destinations Layout */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[600px]">
            
            {/* Large Main Destination (Left Side) - Todos los Tours */}
            <Link to={mainDestination.link} className="block h-full min-h-[600px]">
              <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg h-full transition-transform duration-300 hover:scale-[1.02]">
                {/* Background Image */}
                <img
                  src={mainDestination.image}
                  alt={mainDestination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-colors duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                  <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide drop-shadow-lg">
                      {mainDestination.title}
                    </h3>
                    <p className="text-lg opacity-90 drop-shadow-md mb-6">
                      {mainDestination.description}
                    </p>
                    <div className="flex justify-center space-x-4 text-sm">
                      <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                        <Mountain className="w-4 h-4" />
                        <span>6 Tours Montaña</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                        <Building className="w-4 h-4" />
                        <span>4 Tours Santiago</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                        <Grape className="w-4 h-4" />
                        <span>7 Tours Viñedos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Grid of 4 Destinations (Right Side) */}
            <div className="grid grid-cols-2 gap-4 h-full">
              {gridDestinations.map((destination) => (
                <Link key={destination.id} to={destination.link} className="block h-[290px]">
                  <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg h-full transition-transform duration-300 hover:scale-105">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white px-2">
                        <h3 className="text-lg md:text-xl font-bold tracking-wide leading-tight group-hover:scale-110 transition-transform duration-300">
                          {destination.title}
                        </h3>
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowRight className="w-6 h-6 mx-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
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
            <a 
              href="https://wa.me/56966435647?text=Hola%2C%20me%20interesa%20solicitar%20un%20tour%20personalizado.%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20informaci%C3%B3n%20y%20cotizaci%C3%B3n%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-white text-primary hover:bg-accent hover:text-primary px-8 py-3 rounded-xl font-semibold text-lg transition-colors">
                Solicitar Tour Personalizado
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
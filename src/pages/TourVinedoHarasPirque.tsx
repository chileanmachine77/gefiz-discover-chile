import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star, 
  Camera, 
  Car, 
  Coffee,
  Phone,
  Mail,
  ChevronRight,
  Check,
  Wine,
  Grape,
  Crown
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import vineyardImage from '@/assets/vineyard.jpg';

const TourVinedoHarasPirque = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  const tourImages = [
    { src: '/images/tours/haras-de-pirque/haras-1.jpg', alt: 'Haras de Pirque - Vista aérea del viñedo', title: 'Vista Aérea del Viñedo' },
    { src: '/images/tours/haras-de-pirque/haras-2.jpg', alt: 'Haras de Pirque - Instalaciones premium', title: 'Instalaciones Premium' },
    { src: '/images/tours/haras-de-pirque/haras-3.jpg', alt: 'Haras de Pirque - Viñedos cordilleranos', title: 'Viñedos Cordilleranos' },
    { src: '/images/tours/haras-de-pirque/haras-4.jpg', alt: 'Haras de Pirque - Bodegas de lujo', title: 'Bodegas de Lujo' },
    { src: '/images/tours/haras-de-pirque/haras-5.jpg', alt: 'Haras de Pirque - Paisajes únicos', title: 'Paisajes Únicos' },
    { src: '/images/tours/haras-de-pirque/haras-6.jpg', alt: 'Haras de Pirque - Campos de polo', title: 'Campos de Polo' },
    { src: '/images/tours/haras-de-pirque/haras-7.jpg', alt: 'Haras de Pirque - Experiencia boutique', title: 'Experiencia Boutique' },
    { src: '/images/tours/haras-de-pirque/haras-8.jpg', alt: 'Haras de Pirque - Vista panorámica', title: 'Vista Panorámica' },
    { src: '/images/tours/haras-de-pirque/haras-9.jpg', alt: 'Haras de Pirque - Viñedo exclusivo', title: 'Viñedo Exclusivo' },
    { src: '/images/tours/haras-de-pirque/haras-10.jpg', alt: 'Haras de Pirque - Cordillera de los Andes', title: 'Cordillera de los Andes' },
    { src: '/images/tours/haras-de-pirque/haras-11.jpg', alt: 'Haras de Pirque - Foto aérea completa', title: 'Foto Aérea Completa' }
  ];

  const tourHighlights = [
    "Visita exclusiva a Viñedo Haras de Pirque",
    "Experiencia premium en viñedo boutique",
    "Degustación de vinos ultra premium",
    "Recorrido por instalaciones de lujo",
    "Almuerzo gourmet con maridaje especial",
    "Vista panorámica de la Cordillera de los Andes",
    "Historia del polo y la viticultura",
    "Transporte premium incluido"
  ];

  const itinerary = [
    {
      time: "09:30",
      activity: "Recogida en Hotel",
      description: "Recogida en hoteles de Santiago en vehículo premium"
    },
    {
      time: "10:30",
      activity: "Llegada a Haras de Pirque",
      description: "Bienvenida y presentación del viñedo boutique"
    },
    {
      time: "11:00",
      activity: "Tour por las Instalaciones",
      description: "Recorrido por bodegas y campos de polo históricos"
    },
    {
      time: "12:00",
      activity: "Degustación Premium",
      description: "Cata de vinos ultra premium con sommelier experto"
    },
    {
      time: "13:30",
      activity: "Almuerzo Gourmet",
      description: "Almuerzo de 3 tiempos con maridaje especial"
    },
    {
      time: "15:00",
      activity: "Vista Panorámica",
      description: "Tiempo libre para disfrutar las vistas cordilleranas"
    },
    {
      time: "15:30",
      activity: "Compras y Souvenirs",
      description: "Oportunidad de adquirir vinos exclusivos"
    },
    {
      time: "16:00",
      activity: "Regreso a Santiago",
      description: "Retorno a hoteles en Santiago"
    }
  ];

  const includedServices = [
    "Guía especializado en vinos premium",
    "Transporte premium desde/hacia Santiago",
    "Visita completa a Viñedo Haras de Pirque",
    "Degustación de 6 vinos ultra premium",
    "Almuerzo gourmet de 3 tiempos",
    "Maridaje especial con cada plato",
    "Material informativo exclusivo",
    "Seguro de tour premium"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/tours/haras-de-pirque/haras-9.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            Viñedo Haras de Pirque
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Experiencia ultra premium en viñedo boutique con historia ecuestre
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-4 h-4" />
              <span>6 horas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-4 h-4" />
              <span>2-12 personas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Crown className="w-4 h-4" />
              <span>Experiencia Premium</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tour Description */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Sobre este Tour</h2>
              <div className="prose prose-lg max-w-none text-foreground-muted">
                <p className="text-lg leading-relaxed mb-4">
                  Vive una experiencia única en Viñedo Haras de Pirque, donde la tradición 
                  ecuestre se encuentra con la excelencia vinícola. Este viñedo boutique, 
                  ubicado en el corazón del Valle del Maipo, ofrece una experiencia premium 
                  incomparable.
                </p>
                <p className="leading-relaxed mb-4">
                  Haras de Pirque combina la elegancia del polo con la sofisticación de los 
                  vinos ultra premium. Sus instalaciones de lujo y la vista panorámica de 
                  la Cordillera de los Andes crean el escenario perfecto para una experiencia 
                  vinícola inolvidable.
                </p>
                <p className="leading-relaxed">
                  Este tour exclusivo incluye degustación de vinos de clase mundial, almuerzo 
                  gourmet con maridaje especial, y la oportunidad de conocer la fascinante 
                  historia que une el mundo ecuestre con la viticultura de alta gama.
                </p>
              </div>
            </section>

            {/* Interactive Image Gallery */}
            <section className="bg-card rounded-xl p-6 border border-card-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Galería de Imágenes</h2>
              
              <div className="mb-8">
                {/* Main Image */}
                <div className="mb-4">
                  <img 
                    width="510" 
                    height="213"
                    src={tourImages[selectedImage].src}
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                    alt={tourImages[selectedImage].alt}
                    title={tourImages[selectedImage].title}
                    data-caption=""
                    data-src={tourImages[selectedImage].src}
                    data-large_image={tourImages[selectedImage].src}
                    data-large_image_width="1200"
                    data-large_image_height="500"
                    decoding="async"
                    srcSet={`${tourImages[selectedImage].src} 510w, ${tourImages[selectedImage].src} 600w, ${tourImages[selectedImage].src} 768w, ${tourImages[selectedImage].src} 1200w`}
                    sizes="(max-width: 510px) 100vw, 510px"
                  />
                  <p className="text-sm text-foreground-muted mt-2 text-center font-medium">
                    {tourImages[selectedImage].title}
                  </p>
                </div>
                
                {/* Thumbnail Row */}
                <div className="flex gap-2 justify-center flex-wrap">
                  {tourImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative overflow-hidden rounded-lg transition-all duration-200 ${
                        selectedImage === index 
                          ? 'ring-2 ring-primary ring-offset-2 scale-105' 
                          : 'hover:scale-105 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-14 h-14 md:w-16 md:h-16 object-cover"
                      />
                      {selectedImage === index && (
                        <div className="absolute inset-0 bg-primary/20"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Tour Highlights */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Lo que Incluye</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tourHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-background-alt rounded-lg">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Itinerario Detallado</h2>
              <div className="space-y-4">
                {itinerary.map((item, index) => (
                  <div key={index} className="flex space-x-4 p-6 bg-background-alt rounded-xl">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.activity}</h3>
                      <p className="text-foreground-muted leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Included Services */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Servicios Incluidos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-background-alt rounded-lg">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground-muted">{service}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Booking Form */}
              <div className="bg-card border border-card-border rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary">CLP 85.000</div>
                  <div className="text-foreground-muted">por persona</div>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.8</span>
                    <span className="text-sm text-foreground-muted">(156 reseñas)</span>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Fecha del Tour
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Hora de Inicio
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Seleccionar hora</option>
                      <option value="09:30">09:30 AM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Número de Personas
                    </label>
                    <select
                      value={groupSize}
                      onChange={(e) => setGroupSize(e.target.value)}
                      className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Seleccionar cantidad</option>
                      <option value="2">2 personas</option>
                      <option value="4">4 personas</option>
                      <option value="6">6 personas</option>
                      <option value="8">8 personas</option>
                      <option value="10">10 personas</option>
                      <option value="12">12 personas</option>
                    </select>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 rounded-lg font-semibold">
                    Reservar Tour Premium
                  </Button>

                  <div className="text-center">
                    <p className="text-foreground-muted text-sm mb-3">¿Necesitas más información?</p>
                    <div className="space-y-2">
                      <a 
                        href="tel:+56966435647" 
                        className="flex items-center justify-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">+56966435647</span>
                      </a>
                      <a 
                        href="mailto:gefiz.spa@gmail.com" 
                        className="flex items-center justify-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">gefiz.spa@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>

              {/* Quick Info */}
              <div className="bg-card border border-card-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Información Rápida</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Duración</div>
                      <div className="text-sm text-foreground-muted">6 horas completas</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Ubicación</div>
                      <div className="text-sm text-foreground-muted">Pirque, Santiago</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Car className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Transporte</div>
                      <div className="text-sm text-foreground-muted">Premium incluido</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wine className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Degustación</div>
                      <div className="text-sm text-foreground-muted">6 vinos premium</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Coffee className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Almuerzo</div>
                      <div className="text-sm text-foreground-muted">Gourmet con maridaje</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TourVinedoHarasPirque;

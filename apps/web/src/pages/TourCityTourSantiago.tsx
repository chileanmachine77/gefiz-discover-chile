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
  TreePine,
  Moon,
  Building,
  Mountain,
  Church
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import valparaisoImage from '@/assets/valparaiso.jpg';

const TourCityTourSantiago = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  const tourImages = [
    { src: '/images/tours/city-tour-santiago/city-2.jpg', alt: 'City Tour Santiago - Plaza de Armas', title: 'Plaza de Armas' },
    { src: '/images/tours/city-tour-santiago/city-3.jpg', alt: 'City Tour Santiago - Cerro San Cristóbal', title: 'Cerro San Cristóbal' },
    { src: '/images/tours/city-tour-santiago/city-4.jpg', alt: 'City Tour Santiago - Palacio de La Moneda', title: 'Palacio de La Moneda' },
    { src: '/images/tours/city-tour-santiago/city-5.jpg', alt: 'City Tour Santiago - Santiago moderno', title: 'Santiago Moderno' }
  ];

  const tourDescription = "Descubre la fascinante capital de Chile en un recorrido completo que combina historia, cultura y modernidad. Nuestro City Tour Santiago te llevará por los lugares más emblemáticos de la ciudad, desde el histórico centro colonial hasta los modernos barrios de Providencia y Las Condes. Visita el imponente Palacio de La Moneda, recorre la tradicional Plaza de Armas, sube al Cerro San Cristóbal para disfrutar de vistas panorámicas espectaculares y conoce la vibrante vida cultural del barrio Bellavista. Una experiencia perfecta para conocer la esencia de Santiago en un solo día.";

  const tourHighlights = [
    "Recorrido por el centro histórico de Santiago",
    "Visita al Palacio de La Moneda y Plaza de Armas",
    "Subida al Cerro San Cristóbal con vista panorámica",
    "Tour por los barrios Providencia y Las Condes",
    "Visita al Mercado Central y degustación local",
    "Recorrido por el barrio Bellavista y casa de Pablo Neruda",
    "Tiempo libre en el centro comercial Costanera Center",
    "Guía turístico especializado en historia de Santiago"
  ];

  const itinerary = [
    {
      time: "09:00",
      activity: "Recogida en Hotel",
      description: "Inicio del tour desde tu hotel en Santiago centro"
    },
    {
      time: "09:30",
      activity: "Centro Histórico",
      description: "Plaza de Armas, Catedral y Palacio de La Moneda"
    },
    {
      time: "10:30",
      activity: "Mercado Central",
      description: "Recorrido y degustación de productos locales"
    },
    {
      time: "11:30",
      activity: "Cerro San Cristóbal",
      description: "Ascenso en funicular y vista panorámica de Santiago"
    },
    {
      time: "12:30",
      activity: "Barrio Bellavista",
      description: "Casa de Pablo Neruda y arte callejero"
    },
    {
      time: "13:30",
      activity: "Almuerzo (Opcional)",
      description: "Tiempo libre para almorzar en restaurante local"
    },
    {
      time: "14:30",
      activity: "Providencia y Las Condes",
      description: "Santiago moderno y Costanera Center"
    },
    {
      time: "15:30",
      activity: "Regreso al Hotel",
      description: "Fin del tour con regreso a tu hotel"
    }
  ];

  const includedServices = [
    "Transporte privado durante todo el recorrido",
    "Guía turístico profesional especializado",
    "Entrada al funicular del Cerro San Cristóbal",
    "Visita a la casa museo de Pablo Neruda",
    "Degustación en el Mercado Central",
    "Recogida y regreso al hotel",
    "Seguro de viaje completo",
    "Agua mineral durante el tour"
  ];

  const recommendations = [
    {
      title: "Ropa Cómoda",
      description: "Calzado cómodo para caminar y ropa según el clima"
    },
    {
      title: "Cámara Fotográfica",
      description: "Santiago ofrece vistas espectaculares desde sus miradores"
    },
    {
      title: "Dinero en Efectivo",
      description: "Para compras en el Mercado Central y propinas"
    },
    {
      title: "Protección Solar",
      description: "Bloqueador solar y lentes, especialmente en el Cerro San Cristóbal"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hola, me gustaría reservar el City Tour Santiago:

*Detalles de la Reserva:*
• Fecha: ${selectedDate}
• Hora: ${selectedTime}
• Número de personas: ${groupSize}

*Tour:* City Tour Santiago
*Duración:* 4 horas
*Incluye:* Degustación y transporte

¡Espero su confirmación!`;

    const whatsappUrl = `https://wa.me/56966435647?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/tours/city-tour-santiago/city-4.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            City Tour Santiago
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Descubre la capital de Chile: historia, cultura y modernidad en un solo día
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>4 horas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5 text-primary" />
              <span>1-15 personas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Building className="w-5 h-5 text-primary" />
              <span>Centro Histórico</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Mountain className="w-5 h-5 text-primary" />
              <span>Cerro San Cristóbal</span>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Descripción</h2>
              
              {/* Interactive Image Gallery */}
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
                <div className="flex gap-3 justify-center flex-wrap">
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
                        className="w-16 h-16 md:w-20 md:h-20 object-cover"
                      />
                      {selectedImage === index && (
                        <div className="absolute inset-0 bg-primary/20"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-foreground-muted">
                <p className="text-lg leading-relaxed mb-4">
                  {tourDescription}
                </p>
              </div>
            </section>

            {/* Tour Highlights */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Lo que Incluye</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tourHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Itinerario</h2>
              <div className="space-y-4">
                {itinerary.map((item, index) => (
                  <div key={index} className="flex space-x-4 p-4 bg-card border border-card-border rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                        {item.time}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.activity}</h3>
                      <p className="text-foreground-muted text-sm">{item.description}</p>
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
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommendations */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Recomendaciones Generales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendations.map((rec, index) => (
                  <div key={index} className="bg-card border border-card-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">{rec.title}</h3>
                    <p className="text-foreground-muted text-sm">{rec.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Tours */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">También te Recomendamos...</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                     onClick={() => window.location.href = '/tour/vina-concha-toro'}>
                  <img src={valparaisoImage} alt="Viña Concha y Toro Diurno" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Viña Concha y Toro - Tour Diurno</h3>
                    <p className="text-foreground-muted text-sm">La experiencia clásica de día en la viña más famosa de Chile</p>
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                     onClick={() => window.location.href = '/tour/vina-santa-rita'}>
                  <img src={valparaisoImage} alt="Viña Santa Rita" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Viña Santa Rita</h3>
                    <p className="text-foreground-muted text-sm">Otra experiencia vinícola premium en el Valle del Maipo</p>
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                     onClick={() => window.location.href = '/tour/ruta-vino-valle-maipo'}>
                  <img src="/images/tours/ruta-vino-valle-maipo/maipo-4.jpg" alt="Ruta del Vino Valle del Maipo" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Ruta del Vino Valle del Maipo</h3>
                    <p className="text-foreground-muted text-sm">Descubre múltiples viñas en el valle más prestigioso</p>
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                     onClick={() => window.location.href = '/tour/vinedo-haras-pirque'}>
                  <img src={valparaisoImage} alt="Viñedo Haras de Pirque" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Viñedo Haras de Pirque</h3>
                    <p className="text-foreground-muted text-sm">Experiencia boutique en viñedo exclusivo</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Policies and Conditions */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Políticas y Condiciones</h2>
              <div className="bg-card border border-card-border rounded-lg p-6">
                <div className="space-y-4 text-foreground-muted">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cancelaciones</h3>
                    <p className="text-sm">Cancelación gratuita hasta 48 horas antes del tour nocturno. Cancelaciones con menos de 48 horas tendrán un cargo del 75%.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Condiciones Climáticas</h3>
                    <p className="text-sm">El tour nocturno se realiza solo con buen clima. En caso de lluvia o viento fuerte, se reprogramará sin costo adicional.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Edad Mínima</h3>
                    <p className="text-sm">Solo mayores de 18 años pueden participar en este tour nocturno debido a las degustaciones de alcohol.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cupos Limitados</h3>
                    <p className="text-sm">Tour exclusivo con máximo 20 personas por grupo. Se recomienda reservar con al menos 7 días de anticipación.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Form */}
            <div className="bg-card border border-card-border rounded-xl p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">CLP 125.000</div>
                <div className="text-foreground-muted">por persona</div>
                <div className="text-sm text-foreground-muted mt-1">Incluye degustación y transporte</div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                    Fecha del Tour
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                    Hora de Salida
                  </label>
                  <select
                    id="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Seleccionar hora</option>
                    <option value="09:00">09:00 - Salida Estándar</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="group-size" className="block text-sm font-medium text-foreground mb-2">
                    Número de Personas
                  </label>
                  <select
                    id="group-size"
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Seleccionar cantidad</option>
                    <option value="2">2 personas</option>
                    <option value="4">4 personas</option>
                    <option value="6">6 personas</option>
                    <option value="8">8 personas</option>
                    <option value="10">10 personas</option>
                    <option value="12">12 personas</option>
                    <option value="15">15 personas</option>
                    <option value="20">20 personas</option>
                  </select>
                </div>

                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 rounded-lg font-semibold">
                  Reservar City Tour
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
            <div className="bg-background-alt rounded-xl p-4 mt-6">
              <h3 className="font-semibold text-foreground mb-3">Información Rápida</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Duración: 4 horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Recogida en hotel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Transporte privado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Centro histórico</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mountain className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Cerro San Cristóbal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Degustación incluida</span>
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

export default TourCityTourSantiago;

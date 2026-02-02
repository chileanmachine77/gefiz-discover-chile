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
import valparaisoImage from '@/assets/valparaiso.jpg';

const TourVinasCasaConcha = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState('');

  const tourHighlights = [
    "Visita a Viñas de Casa Concha, línea premium de Concha y Toro",
    "Recorrido por viñedos exclusivos de alta gama",
    "Degustación de vinos premium y reserva especial",
    "Cata dirigida por sommelier especializado",
    "Almuerzo gourmet con maridaje premium",
    "Experiencia exclusiva en bodega boutique",
    "Transporte premium desde Santiago",
    "Acceso a colección privada de vinos"
  ];

  const itinerary = [
    {
      time: "09:00",
      activity: "Salida desde Santiago",
      description: "Recogida en hotel y traslado hacia Viñas de Casa Concha"
    },
    {
      time: "09:45",
      activity: "Llegada a Casa Concha",
      description: "Bienvenida y presentación de la línea premium"
    },
    {
      time: "10:15",
      activity: "Recorrido Exclusivo",
      description: "Visita a viñedos premium y proceso de vinificación"
    },
    {
      time: "11:30",
      activity: "Bodega Premium",
      description: "Recorrido por bodega exclusiva y barricas especiales"
    },
    {
      time: "12:30",
      activity: "Cata Especializada",
      description: "Degustación de vinos premium con sommelier"
    },
    {
      time: "13:30",
      activity: "Almuerzo Gourmet",
      description: "Almuerzo premium con maridaje de vinos exclusivos"
    },
    {
      time: "15:00",
      activity: "Colección Privada",
      description: "Acceso a colección privada y vinos de guarda"
    },
    {
      time: "16:00",
      activity: "Regreso a Santiago",
      description: "Traslado de vuelta con llegada aproximada a las 17:00"
    }
  ];

  const includedServices = [
    "Transporte premium ida y vuelta desde Santiago",
    "Guía especializado en enología premium",
    "Recorrido exclusivo por viñedos de alta gama",
    "Degustación de 6 vinos premium",
    "Almuerzo gourmet con maridaje exclusivo",
    "Acceso a colección privada de vinos",
    "Cata dirigida por sommelier certificado",
    "Seguro premium de viaje incluido"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${valparaisoImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            Viñas de Casa Concha
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Experiencia premium en la línea más exclusiva de Concha y Toro
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-4 h-4" />
              <span>7 horas</span>
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
                  Viñas de Casa Concha representa la línea más premium y exclusiva de Concha y Toro, 
                  donde la tradición centenaria se combina con la innovación más avanzada para crear 
                  vinos de clase mundial. Esta experiencia exclusiva te lleva al corazón de la 
                  viticultura de alta gama chilena.
                </p>
                <p className="leading-relaxed mb-4">
                  En esta experiencia premium, descubrirás los secretos de la elaboración de vinos 
                  de alta gama, desde la selección meticulosa de uvas hasta el proceso de crianza 
                  en barricas francesas. Cada detalle está cuidadosamente diseñado para ofrecer 
                  una experiencia sensorial única.
                </p>
                <p className="leading-relaxed">
                  Este tour exclusivo incluye acceso a áreas restringidas, degustación de vinos 
                  de colección privada y la oportunidad de conocer los procesos que hacen de 
                  Casa Concha una referencia mundial en vinos premium.
                </p>
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
                  <div className="text-3xl font-bold text-primary">CLP 65.000</div>
                  <div className="text-foreground-muted">por persona</div>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.8</span>
                    <span className="text-sm text-foreground-muted">(178 reseñas)</span>
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
                      <option value="09:00">09:00 AM</option>
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
                      <option value="2">2 personas</option>
                      <option value="4">4 personas</option>
                      <option value="6">6 personas</option>
                      <option value="8">8 personas</option>
                      <option value="10">10+ personas</option>
                    </select>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 rounded-lg font-semibold">
                    Reservar Tour Cultural
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
                    <span className="text-foreground-muted">Duración: 7 horas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Ubicación: Pirque, Santiago</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Transporte premium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wine className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">6 degustaciones premium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Almuerzo gourmet</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Crown className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Acceso exclusivo</span>
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

export default TourVinasCasaConcha;

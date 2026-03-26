import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, MapPin, Users, Clock, Shield, Car } from 'lucide-react';

const Traslados = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Image Section */}
        <section>
          <img src="/aeropuerto-hero.jpg" alt="Traslado Aeropuerto Santiago" className="w-full h-auto max-h-[60vh] object-cover" />
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-wider border-b-2 border-gray-200 pb-4 inline-block mb-8">
                TRASLADOS PRIVADOS Y CORPORATIVOS
              </h1>
              
              <div className="text-lg text-foreground-muted space-y-6 text-left">
                <p>
                  En <strong>Gefiz Travel</strong> ofrecemos un servicio exclusivo de traslados privados en toda la Región Metropolitana. Nuestro compromiso es brindarte comodidad, seguridad y puntualidad en cada viaje.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Nuestros Servicios</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Car className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground">Traslados Aeropuerto</h3>
                      <p className="text-sm">Servicio privado desde y hacia el Aeropuerto Internacional Arturo Merino Benítez.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground">Traslados Urbanos</h3>
                      <p className="text-sm">Movilidad privada dentro de Santiago y alrededores.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground">Disponibilidad 24/7</h3>
                      <p className="text-sm">Servicio disponible las 24 horas del día, los 7 días de la semana.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Características del Servicio</h2>
                
                <ul className="list-disc list-inside space-y-2 text-left">
                  <li>Conductores profesionales y experimentados</li>
                  <li>Vehículos modernos y confortables</li>
                  <li>Capacidad para 1 a 6 pasajeros</li>
                  <li>Seguro de viaje completo</li>
                  <li>Monitoreo GPS en tiempo real</li>
                  <li>Equipaje sin costo adicional</li>
                </ul>

                <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-3">¿Necesitas un traslado?</h3>
                  <p className="mb-4">
                    Contáctanos para cotizar tu servicio. Ofrecemos tarifas competitivas y atención personalizada.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="tel:+56966435647" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Llamar ahora
                    </a>
                    <a 
                      href="mailto:gefiz.spa@gmail.com" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      Enviar correo
                    </a>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                  <div className="text-primary mb-4">
                    <MessageCircle size={48} strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-semibold text-foreground">24/7</span>
                  <span className="text-sm text-foreground-muted text-center mt-2">Disponibilidad total</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-primary mb-4">
                    <MapPin size={48} strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-semibold text-foreground">Región Metropolitana</span>
                  <span className="text-sm text-foreground-muted text-center mt-2">Cobertura completa</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-primary mb-4">
                    <Users size={48} strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-semibold text-foreground">1 a 6</span>
                  <span className="text-sm text-foreground-muted text-center mt-2">Pasajeros por viaje</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-primary mb-4">
                    <Shield size={48} strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-semibold text-foreground">Seguro</span>
                  <span className="text-sm text-foreground-muted text-center mt-2">Protección completa</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Traslados;

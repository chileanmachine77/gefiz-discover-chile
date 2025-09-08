import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, MapPin, Users } from 'lucide-react';

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
              <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-wider border-b-2 border-gray-200 pb-4 inline-block">
                TRASLADO AEROPUERTO
              </h1>
              <div className="mt-8 text-lg text-foreground-muted space-y-6 text-left">
                <p>
                  Ofrecemos traslados cómodos y seguros desde y hacia el <strong>Aeropuerto Internacional Arturo Merino Benítez</strong>; el aeropuerto internacional más próximo a la ciudad de Santiago. Nuestro servicio de transporte privado está pensado para que tu llegada o salida de Chile sea tranquila y puntual.
                </p>
                <p>
                  Contamos con conductores profesionales y vehículos acondicionados para brindarte la mejor experiencia, ya sea que viajes por turismo, negocios o conexión internacional.
                </p>
                <p>
                  Además, nuestro equipo de atención está disponible 24/7 para ayudarte en todo momento.
                </p>
                <p>
                  El valor del servicio varía según la zona de recogida y el destino final dentro de Santiago.
                </p>
                <p className="font-bold text-foreground">
                  Reserva tu traslado al aeropuerto hoy mismo y viaja sin preocupaciones.
                </p>
              </div>

              {/* Features Section */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="text-primary mb-4">
                    <MessageCircle size={48} strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-semibold text-foreground">24/7</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-primary mb-4">
                    <MapPin size={48} strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-semibold text-foreground">Región Metropolitana</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-primary mb-4">
                    <Users size={48} strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-semibold text-foreground">1 a 6</span>
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

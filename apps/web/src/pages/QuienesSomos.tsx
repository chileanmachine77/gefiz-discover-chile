import Header from '@/components/Header';
import Footer from '@/components/Footer';

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-background-alt py-20 relative overflow-hidden">
        <img
          src="/logo-hero.png"
          alt="Gefiz Travels Logo"
          className="absolute inset-0 w-full h-full object-contain opacity-10"
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Quienes Somos
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Conoce la historia y la pasión detrás de Gefiz Travels Chile.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-foreground">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Gefiz Travels Chile es una empresa de transporte y turismo con 8 años de experiencia, creada por un joven ingeniero en administración con espíritu de servicio y emprendimiento, ademas de una conciencia clara para contribuir en convertir a Chile en un lugar turístico por excelencia.
                </p>
                <p>
                  Las ganas de crear un servicio de calidad nos ha llevado a trabajar en entregar un servicio entretenido, personalizado y seguro, con guias o conductores bilingües que sean unos buenos anfitriones y acompañantes de nuestros viajes, para hacer de cada experiencia algo inolvidable.
                </p>
                <p>
                  Como empresa orientada al servicio, nos esforzamos por ser una empresa con un buen ambiente laboral y constante comunicación para transmitir las mejores energías a nuestros clientes.
                </p>
                <p>
                  Buscamos la oportunidad para tener una experiencia cercana, a través de consejos, anécdotas e información sobre los mas cotidiano de nuestro país para lograr crear los mejores recuerdos.
                </p>
              </div>
              <div>
                <img src="/quienes-somos.jpeg" alt="Equipo de Gefiz Travels Chile" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-card border border-card-border rounded-xl p-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Misión</h2>
                <p className="text-lg leading-relaxed">
                  Nuestra misión es entregar un servicio confiable y detallado a cada uno de nuestros clientes, para que logren cumplir el sueño de visitar el país mas austral del mundo.
                </p>
              </div>
              <div className="bg-card border border-card-border rounded-xl p-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Visión</h2>
                <p className="text-lg leading-relaxed">
                  Deseamos ser un reconocido participante en el mundo del turismo y transporte, a través de la búsqueda de mejor calidad y profesionalismo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuienesSomos;

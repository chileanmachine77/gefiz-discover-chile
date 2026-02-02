import { Shield, Star, Users, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Transporte Cómodo y Seguro",
      description: "Flota moderna con buses equipados con aire acondicionado, asientos reclinables y sistemas de seguridad certificados.",
      stats: "100% seguros"
    },
    {
      icon: Star,
      title: "Experiencia en Turismo",
      description: "Más de 8 años conectando viajeros con los destinos más hermosos de Chile, con guías expertos certificados.",
      stats: "8+ años"
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Grupos reducidos y atención dedicada para garantizar una experiencia única y memorias que durarán toda la vida.",
      stats: "Max 45 personas"
    },
    {
      icon: Award,
      title: "Certificación y Confianza",
      description: "Certificados por SERNATUR y avalados por miles de clientes satisfechos. Tu tranquilidad es nuestra prioridad.",
      stats: "1200+ reseñas"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Por Qué Elegir Gefiz Travels?
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Nos diferenciamos por nuestro compromiso con la calidad, seguridad y experiencias 
            auténticas que superan las expectativas de nuestros viajeros.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-card-border rounded-xl p-8 text-center hover:shadow-card-hover transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground-muted mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Stats */}
              <div className="inline-flex items-center bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-accent rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1,200+</div>
              <div className="text-foreground-muted">Clientes Satisfechos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">25+</div>
              <div className="text-foreground-muted">Tours Únicos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">4.9/5</div>
              <div className="text-foreground-muted">Calificación Promedio</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8 pt-8 border-t border-card-border">
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Certificado SERNATUR</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Seguro de Viajero</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Guías Certificados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import valparaisoImage from '@/assets/valparaiso.jpg';
import vineyardImage from '@/assets/vineyard.jpg';
import cajonMaipoImage from '@/assets/cajon-maipo.jpg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Lugares Imperdibles en Valparaíso que Debes Conocer",
      excerpt: "Descubre los rincones más hermosos y auténticos del puerto más importante de Chile, desde sus icónicos ascensores hasta sus vibrantes murales callejeros.",
      image: valparaisoImage,
      author: "Carolina Mendez",
      date: "15 Dic 2024",
      readTime: "5 min",
      category: "Destinos",
      featured: true
    },
    {
      id: 2,
      title: "Guía Completa para tu Primera Cata de Vinos en Chile",
      excerpt: "Todo lo que necesitas saber para disfrutar al máximo de la experiencia vinícola chilena, desde la etiqueta hasta la degustación profesional.",
      image: vineyardImage,
      author: "Roberto Silva",
      date: "12 Dic 2024",
      readTime: "7 min",
      category: "Gastronomía"
    },
    {
      id: 3,
      title: "Consejos para Fotografiar Paisajes en la Cordillera",
      excerpt: "Aprende técnicas profesionales para capturar la majestuosidad de los Andes chilenos y crear recuerdos fotográficos espectaculares.",
      image: cajonMaipoImage,
      author: "Andrés Fuentes",
      date: "10 Dic 2024",
      readTime: "6 min",
      category: "Fotografía"
    },
    {
      id: 4,
      title: "Los Mejores Mercados Locales de Santiago para Turistas",
      excerpt: "Explora la auténtica cultura gastronómica chilena visitando mercados tradicionales donde los locales compran y comen a diario.",
      image: valparaisoImage,
      author: "María José Torres",
      date: "8 Dic 2024",
      readTime: "4 min",
      category: "Cultura"
    },
    {
      id: 5,
      title: "Qué Llevar en tu Mochila para un Tour de Montaña",
      excerpt: "Lista completa de elementos esenciales para disfrutar seguramente de las actividades de montaña en Chile durante cualquier época del año.",
      image: cajonMaipoImage,
      author: "Diego Ramírez",
      date: "6 Dic 2024",
      readTime: "8 min",
      category: "Aventura"
    },
    {
      id: 6,
      title: "Historia y Leyendas de los Pueblos Costeros de Chile",
      excerpt: "Sumérgete en las fascinantes historias que han dado forma a los pueblos pesqueros de la costa chilena a lo largo de los siglos.",
      image: vineyardImage,
      author: "Francisca López",
      date: "4 Dic 2024",
      readTime: "6 min",
      category: "Historia"
    }
  ];

  const categories = ["Todos", "Destinos", "Gastronomía", "Cultura", "Aventura", "Historia", "Fotografía"];

  return (
    <section id="blog" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Blog & Consejos de Viaje
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Descubre consejos útiles, historias fascinantes y guías completas para aprovechar 
            al máximo tu experiencia viajando por Chile.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "default" : "outline"}
              className="rounded-full px-6 py-2 text-sm font-medium transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-card border border-card-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Destacado
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4 text-sm text-foreground-muted">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-foreground-muted mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{blogPosts[0].author}</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2 rounded-lg font-semibold flex items-center space-x-2">
                    <span>Leer Más</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-card border border-card-border rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-background-alt/90 text-foreground px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-xs text-foreground-muted">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-foreground-muted mb-4 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{post.author}</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-primary hover:text-primary-hover p-2">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button className="bg-secondary hover:bg-secondary-hover text-secondary-foreground px-8 py-3 rounded-xl font-semibold text-lg">
            Ver Más Artículos
          </Button>
        </div>

        {/* Newsletter Subscribe */}
        <div className="mt-16 bg-accent rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Suscríbete a Nuestro Blog
          </h3>
          <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
            Recibe los mejores consejos de viaje, ofertas exclusivas y las últimas 
            noticias sobre destinos chilenos directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg border border-card-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-lg font-semibold">
              Suscribirse
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
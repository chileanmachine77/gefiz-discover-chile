import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Tours', href: '#tours' },
    { name: 'Transporte', href: '#transporte' },
    { name: 'Destinos', href: '#destinos' },
    { name: 'Blog', href: '#blog' },
    { name: 'Quiénes Somos', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="bg-background-alt shadow-sm border-b border-card-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">G</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Gefiz Travels</h1>
              <p className="text-xs text-foreground-muted">Turismo & Transporte</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+56212345678" className="flex items-center space-x-2 text-foreground-muted hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+56 2 1234-5678</span>
            </a>
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2 rounded-xl font-semibold flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Reserva tu Viaje</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-card-border pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a href="tel:+56212345678" className="flex items-center space-x-2 text-foreground-muted hover:text-primary transition-colors py-2">
                  <Phone className="w-4 h-4" />
                  <span>+56 2 1234-5678</span>
                </a>
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 rounded-xl font-semibold flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Reserva tu Viaje</span>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
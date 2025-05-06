
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md py-3 border-b border-border/50" 
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary glow-text">
          Devfolio
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-foreground/80 hover:text-primary hover:glow-text transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/dashboard"
                className="text-foreground/80 hover:text-primary hover:glow-text transition-colors"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          {/* Mobile menu button - simplified for this version */}
          <button className="text-foreground">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

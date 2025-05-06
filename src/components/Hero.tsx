
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="animate-fade-down">
            <p className="text-primary inline-block border border-primary/30 rounded-full px-4 py-1 mb-4">
              Software Engineer
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-up">
            Building digital <span className="text-primary glow-text">solutions</span> for the modern web
          </h1>
          
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mt-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            I craft elegant, efficient, and scalable applications that solve real-world problems
            using cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Button asChild size="lg">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="hidden md:block absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="flex flex-col items-center text-sm text-foreground/50 hover:text-primary">
              <span>Scroll Down</span>
              <ArrowRight className="h-4 w-4 mt-2 rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

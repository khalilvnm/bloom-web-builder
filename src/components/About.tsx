
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-card/50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-4">
                  I'm a passionate software engineer with expertise in building robust, scalable applications. 
                  With a strong foundation in both frontend and backend technologies, I create seamless digital 
                  experiences that prioritize both functionality and user experience.
                </p>
                
                <p className="text-lg mb-4">
                  My journey in software development started with a deep curiosity about how digital systems work. 
                  This curiosity evolved into a career where I've had the opportunity to work on diverse projects, 
                  from responsive web applications to complex backend systems.
                </p>
                
                <p className="text-lg">
                  I approach each project with a problem-solving mindset, focusing on creating clean, maintainable code 
                  that delivers exceptional value to users. When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source, or enhancing my skills through continuous learning.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

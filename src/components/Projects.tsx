
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  // Sample project data
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, product filtering, and admin dashboard.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with collaborative features. Implemented drag-and-drop functionality, real-time updates, and user permission systems.",
      technologies: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard displaying complex datasets with customizable charts and filters. Optimized for performance when handling large data volumes.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Social Media API",
      description: "RESTful API for a social media application with features including user profiles, posts, comments, likes, and friend relationships.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-card/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="border-primary/20 bg-card/70 hover:bg-card/90 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-accent/50 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

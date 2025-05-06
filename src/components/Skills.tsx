
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  // Skill categories with their respective skills
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML/CSS"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"]
    },
    {
      name: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "SQL"]
    },
    {
      name: "DevOps & Tools",
      skills: ["Git", "Docker", "CI/CD", "AWS", "Linux", "GitHub Actions"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.name}
              className="border-primary/20 bg-card/70 hover:bg-card/90 transition-colors"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-accent/50 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

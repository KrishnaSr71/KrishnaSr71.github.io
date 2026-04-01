import { Link } from "wouter";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projectsData";

export default function Projects() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 md:py-32 bg-white animate-stagger-1">
        <div className="container">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-foreground font-medium">
              A selection of projects that showcase my work in <em>quantum computing</em>, <em>embedded systems</em>,
              and <em>software engineering</em>.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-stagger-2">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <a className="block h-full">
                  <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white h-full flex flex-col cursor-pointer group">
                    {/* Project Image */}
                    <div className="w-full h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-[#b691fe] font-semibold">{project.placement}</p>
                        <p className="text-xs text-muted-foreground mt-1">{project.date}</p>
                      </div>

                      {/* Description */}
                      <p className="text-base text-foreground mb-6 leading-relaxed flex-grow">
                        {project.shortDescription}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-secondary text-foreground">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="bg-secondary text-foreground">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Read More Button */}
                      <Button className="w-full bg-[#b691fe] hover:bg-[#a77bff] text-white font-medium flex items-center justify-center gap-2">
                        View Project
                        <ArrowRight size={18} />
                      </Button>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          {/* More Coming Soon */}
          <div className="text-center py-12 border-t border-border">
            <p className="text-muted-foreground text-base">
              More projects coming soon. Check back regularly for updates!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

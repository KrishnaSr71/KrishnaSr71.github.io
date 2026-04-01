import { Link, useParams, useLocation } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projectsData";

export default function ProjectDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const projectId = parseInt(params.id as string);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <a>
              <Button className="bg-[#b691fe] hover:bg-[#a77bff] text-white">
                <ArrowLeft size={18} className="mr-2" />
                Back to Projects
              </Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-white">
      {/* Back Button */}
      <div className="py-8 border-b border-border">
        <div className="container">
          <button
            onClick={() => setLocation("/projects")}
            className="flex items-center gap-2 text-[#b691fe] hover:text-[#a77bff] font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>
        </div>
      </div>

      {/* Hero Section with Image */}
      <div className="w-full h-96 bg-gray-200 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-[#b691fe] font-semibold mb-2">{project.placement}</p>
                <p className="text-lg text-muted-foreground">{project.date}</p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
                >
                  <ExternalLink size={32} />
                </a>
              )}
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none space-y-4">
              {project.overview.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-base text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Results</h2>
            <ul className="space-y-3">
              {project.results.map((result, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-[#3772FF] font-bold text-lg mt-0.5">•</span>
                  <span className="text-base text-[#3772FF] leading-relaxed">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#3772FF]">Technologies & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <Badge key={tech} className="bg-transparent border-2 border-[#3772FF] text-[#3772FF] px-4 py-2 text-base">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="border-t border-border pt-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <a>
                  <Button className="bg-[#b691fe] hover:bg-[#a77bff] text-white font-medium">
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Projects
                  </Button>
                </a>
              </Link>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white hover:bg-gray-50 text-[#b691fe] font-medium border-2 border-[#b691fe]">
                    <ExternalLink size={18} className="mr-2" />
                    View on GitHub
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

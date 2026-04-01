import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";


const projects = [
  {
    id: 1,
    title: "RefNet",
    placement: "2nd Best Project — 900+ competitors at HackGT 12",
    date: "October 2025",
    description:
      "Research shouldn't feel like a chore. I built RefNet to turn the dense web of academic citations into something visual and intuitive. Using React and D3.js, it maps out literature reviews as interactive networks, making it easy to spot the most influential papers at a glance. We dockerized the Flask backend and ran it on AWS to keep things fast, even with high traffic.",
    technologies: ["React", "D3.js", "NetworkX", "Flask", "Docker", "AWS EC2"],
    link: "https://github.com/Shreyas765/RefNet",
  },
  {
    id: 2,
    title: "Noise Modeling & QEC Circuits",
    placement: "2nd Place — QuEra Technical Challenge at MIT iQuHack 2026",
    date: "January 2026",
    description:
      "Quantum computers are notoriously noisy. For this challenge, I designed hardware-aware Quantum Error Correction (QEC) circuits that actually account for real-world decoherence. By implementing Steane QEC on distance-3 color codes, we hit a 90.16% fidelity rate. It was a deep dive into the messy, fascinating reality of making quantum hardware reliable.",
    technologies: ["Python", "Cirq", "Bloqade", "Tsim"],
    link: "https://github.com/VigneshSK17/2026-QuEra-Technical-PhaZeClan",
  },
];

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
              <div
                key={project.id}
                className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-[#b691fe] font-semibold">{project.placement}</p>
                  <p className="text-xs text-muted-foreground mt-1">{project.date}</p>
                </div>

                {/* Description */}
                <p className="text-base text-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary text-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
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

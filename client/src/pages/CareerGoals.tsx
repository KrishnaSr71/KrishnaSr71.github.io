import { CheckCircle2 } from "lucide-react";

export default function CareerGoals() {
  const shortTermGoals = [
    "Go deeper with the GT Quantum Computing Association",
    "Pursue undergraduate research in quantum hardware or embedded systems",
    "Keep competing in hackathons and technical challenges",
    "Secure internships in quantum or embedded hardware",
  ];

  const concreteSteps = [
    {
      title: "Advanced Coursework",
      description:
        "Tackling the most challenging ECE classes at Georgia Tech to build a rock-solid foundation in quantum systems and embedded design.",
    },
    {
      title: "Research",
      description:
        "Engaging in undergraduate research specifically focused on quantum hardware or embedded systems to gain hands-on experience.",
    },
    {
      title: "Industry Experience",
      description:
        "Securing internships that offer exposure to professional hardware design and testing environments in quantum or embedded domains.",
    },
    {
      title: "Continuous Building",
      description:
        "Keeping my portfolio active with projects that bridge the gap between my academic interests and practical application.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-3xl">
          {/* Vision */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Career Goals</h1>
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                I've always been more driven by "how does this work?" than by a specific job title.
                Right now, that curiosity has led me to the frontier of quantum computing and
                embedded hardware. I'm at a point where I'm genuinely excited about the complexity
                of these systems, and I'm following that thread to see where it leads.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                The path forward isn't a rigid 5-year plan—it's more about staying curious, pushing
                deeper into the problems that matter, and building the skills to contribute
                meaningfully to the next era of computing.
              </p>
            </div>
          </div>

          {/* Short-Term Goals */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 pb-2 border-b-2 border-primary">
              Short-Term (1–2 years)
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              My immediate focus is going deeper with the GT Quantum Computing Association. I want
              to spend more time in the lab, pursue undergraduate research, and keep testing my
              skills in hackathons. I'm also looking for internships where I can get my hands on
              actual quantum or embedded hardware—places where the theory meets the real world.
            </p>
            <div className="space-y-3">
              {shortTermGoals.map((goal, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-base text-foreground">{goal}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Long-Term Goals */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 pb-2 border-b-2 border-primary">
              Long-Term (5–10 years)
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              Looking further out, I want to be in a position where I'm contributing to the
              hardware that defines the next era of computing. Whether that's in a research lab or
              a high-growth industry, I want to be working on the "hard" problems in VLSI, ASIC
              design, or quantum systems. The goal isn't just to build things—it's to build things
              that matter.
            </p>
          </div>

          {/* Concrete Steps */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 pb-2 border-b-2 border-primary">
              Concrete Steps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {concreteSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-secondary/30 p-6 rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-foreground mb-3 text-lg">{step.title}</h3>
                  <p className="text-base text-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

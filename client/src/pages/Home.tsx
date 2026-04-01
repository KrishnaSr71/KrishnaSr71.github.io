import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
const PROFESSIONAL_HEADSHOT =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663500508743/ZRLiNaexgy3gXBgXixsnzQ/professional-headshot_f9a1098a.webp";

export default function Home() {
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
        "Taking courses in the Computing Hardwares and Emerging Architectures (CHEA) and Signal and Information Processing Threads.",
    },
    {
      title: "Research",
      description:
        "Engaging in undergraduate research specifically focused on quantum hardware or embedded systems.",
    },
    {
      title: "Industry Experience",
      description:
        "Securing internships that offer exposure to professional hardware design and testing environments.",
    },
    {
      title: "Continuous Building",
      description:
        "Keeping my portfolio active with projects that bridge the gap between my academic interests and practical application.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white animate-stagger-1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 animate-stagger-2 opacity-0">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 italic">
                  Krishna Sripathi
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground" style={{whiteSpace: 'nowrap'}}>
                  [Computer Engineer @ Georgia Tech 🐝]
                </p>
              </div>

              {/* Welcome Paragraph */}
              <p className="text-base md:text-lg text-foreground leading-relaxed max-w-lg">
                I'm a <em>builder at heart</em>. Whether I'm stabilizing lasers for quantum
                experiments or simulating soccer matches for fun, I'm at my best when I'm working
                where <em>high-level software meets the actual hardware</em>. Right now, I'm just
                focused on pushing the boundaries of what's possible in computing—one system at a
                time.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects">
                  <a>
                    <Button className="w-full sm:w-auto bg-[#b691fe] hover:bg-[#a77bff] text-white font-medium">
                      View My Work
                    </Button>
                  </a>
                </Link>
                <Link href="/about">
                  <a>
                    <Button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#b691fe] font-medium border-2 border-[#b691fe]">
                      About Me
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            {/* Right: Headshot */}
            <div className="flex justify-center animate-stagger-3">
              <div className="w-72 h-96 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-lg border border-border flex-shrink-0">
                <img
                  src={PROFESSIONAL_HEADSHOT}
                  alt="Krishna Sripathi - Professional Headshot"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Goals Section */}
      <section className="py-20 md:py-32 bg-white border-t border-border animate-stagger-1">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Where I'm Headed
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                I've always been more driven by <em>"how does this work?"</em> than by a specific
                job title. Right now, that curiosity has led me to the frontier of quantum
                computing and embedded hardware. I'm at a point where I'm genuinely excited about
                the complexity of these systems, and I'm following that thread to see where it
                leads.
              </p>
            </div>

            {/* Short-Term Goals */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-border">
                Short-Term (1–2 years)
              </h3>
              <p className="text-base text-foreground mb-6 leading-relaxed">
                My immediate focus is going deeper with the GT Quantum Computing Association. I
                want to spend more time in the lab, pursue undergraduate research, and keep testing
                my skills in hackathons.
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
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-border">
                Long-Term (5–10 years)
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                Looking further out, I want to be in a position where I'm contributing to the
                hardware that defines the next era of computing. Whether that's in a research lab
                or a high-growth industry, I want to be working on the <em>"hard" problems</em> in
                VLSI, ASIC design, or quantum systems.
              </p>
            </div>

            {/* Concrete Steps */}
            <div>
              <h3 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-border">
                Concrete Steps
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {concreteSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg border border-border hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="font-bold mb-3 text-lg">
                      {step.title}
                    </h4>
                    <p className="text-base text-foreground leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { ExternalLink } from "lucide-react";


const CANDID_HEADSHOT =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663500508743/ZRLiNaexgy3gXBgXixsnzQ/candid-headshot_c8684aeb.webp";

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 md:py-32 bg-white animate-stagger-1">
        <div className="container max-w-3xl">
          {/* Pre-approved Opening */}
          <div className="mb-12 space-y-4 animate-stagger-2">
            <h1 className="text-4xl md:text-5xl font-bold">Hello, World!</h1>
            <p className="text-lg text-foreground leading-relaxed">
              I'm Krishna Sripathi, a Computer Engineer passionate about hardware-software systems.
              My main interests are quantum computing and embedded firmware, and I'm looking to
              explore <em>VLSI and ASIC design</em>.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              I am currently working on a{" "}
              <a
                href="https://github.com/KrishnaSr71/footy-montecarlo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b691fe] font-medium hover:underline inline-flex items-center gap-1"
              >
                Monte-Carlo based soccer match simulator
                <ExternalLink size={16} />
              </a>{" "}
              👀.
            </p>
          </div>

          {/* Origin Story */}
          <div className="mb-16 space-y-4 animate-stagger-2">
            <h2 className="text-3xl font-bold">Where I'm From</h2>
            <p className="text-base text-foreground leading-relaxed">
              I grew up in Hyderabad, India, a city that has both a rich history and
              a massive, modern tech scene. Whether it was fixing broken bike chains on
              my own or pranking my friends with 'fake viruses' using batch files, this 
              is where my love for engineering started.
            </p>
          </div>

          {/* UGA to GT Transfer */}
          <div className="mb-16 space-y-4 animate-stagger-3">
            <h2 className="text-3xl font-bold">The Journey</h2>
            <p className="text-base text-foreground leading-relaxed">
              I began my engineering journey at UGA, where I finished degrees in Computer Systems
              Engineering and Mathematics. I wanted to push further into hardware and computing
              research, so I transferred to Georgia Tech.
            </p>
          </div>

          {/* Candid Photo */}
          <div className="mb-16">
            <div className="rounded-lg overflow-hidden shadow-md border border-border max-w-md">
              <img src={CANDID_HEADSHOT} alt="Candid Photo" className="w-full h-auto" />
            </div>
          </div>

          {/* Personal Touch */}
          <div className="mb-16 space-y-4 animate-stagger-4">
            <h3 className="text-2xl font-bold">Outside of Engineering</h3>
            <p className="text-base text-foreground leading-relaxed">
              When I'm not in the lab, you'll probably find me at the cinema. I'm a big fan of
              directors who have a distinct voice: Christopher Nolan and the Coen Brothers
              on the Hollywood side, and Jandhyala or Trivikram Srinivas for Telugu classics. If
              I'm not watching a movie, I'm likely playing a casual game of basketball or soccer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

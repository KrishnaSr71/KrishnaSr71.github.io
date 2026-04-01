import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";


const RESUME_PDF =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663500508743/ZRLiNaexgy3gXBgXixsnzQ/Krishna_Sripathi_Resume_177297ad.pdf";

export default function Resume() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 md:py-32 bg-white animate-stagger-1">
        <div className="container max-w-4xl">
          {/* Header with Download Button */}
          <div className="mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Resume</h1>
              <p className="text-lg text-foreground font-medium">
                Computer Engineering student at Georgia Tech
              </p>
            </div>
            <a href={RESUME_PDF} download target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#b691fe] hover:bg-[#a77bff] text-white flex items-center gap-2 whitespace-nowrap font-medium">
                <Download size={18} />
                Download PDF
              </Button>
            </a>
          </div>

          {/* Education */}
          <div className="mb-12 animate-stagger-2">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#3772FF]">
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Georgia Institute of Technology
                  </h3>
                  <span className="text-sm text-muted-foreground">Expected May 2027</span>
                </div>
                <p className="text-base text-muted-foreground">B.S. Computer Engineering</p>
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">University of Georgia</h3>
                  <span className="text-sm text-muted-foreground">December 2025</span>
                </div>
                <p className="text-base text-muted-foreground">
                  B.S. Computer Systems Engineering & Mathematics
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#3772FF]">
              Experience
            </h2>
            <div className="space-y-8">
              {/* GT Quantum Computing */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    GT Quantum Computing Association
                  </h3>
                  <span className="text-sm text-muted-foreground">Jan 2026 – Present</span>
                </div>
                <p className="text-base text-muted-foreground mb-3">Experiment Team Member</p>
                <ul className="space-y-2 text-base text-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Designing a photonic qubit platform with a focus on high-precision control
                      electronics and systems.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Implementing closed-loop PID algorithms on an STM32H7 to achieve laser
                      frequency and intensity stabilization.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Collaborating with Theory and Optics subteams to validate experimental
                      performance through bench testing.
                    </span>
                  </li>
                </ul>
              </div>

              {/* UGA Small Satellite */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    UGA Small Satellite Research Laboratory
                  </h3>
                  <span className="text-sm text-muted-foreground">Mar 2025 – Dec 2025</span>
                </div>
                <p className="text-base text-muted-foreground mb-3">Flight Software Team Member</p>
                <ul className="space-y-2 text-base text-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Developed a CCSDS-based space framing and packetization layer to streamline
                      satellite data transmission.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Designed a Reed-Solomon error correction pipeline, reducing bit-error rates
                      by 45% across communication stack.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Performed Day-in-the-Life simulations and end-to-end Command Execution Tests
                      to ensure mission reliability.
                    </span>
                  </li>
                </ul>
              </div>

              {/* UGA Motorsports */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">UGA Motorsports Club</h3>
                  <span className="text-sm text-muted-foreground">Aug 2024 – Dec 2025</span>
                </div>
                <p className="text-base text-muted-foreground mb-3">Electronics Team Member</p>
                <ul className="space-y-2 text-base text-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Led sub-team of 4 to develop an Electronic Throttle Body system, including
                      redundant safety and control logic.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Conducted FMEA for critical electronics systems to ensure 100% adherence to
                      competition safety standards.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Drafted comprehensive cost reports and component sourcing for a $1,000
                      electronics budget.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Thotaka Technologies */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">Thotaka Technologies</h3>
                  <span className="text-sm text-muted-foreground">Jun 2025 – Jul 2025</span>
                </div>
                <p className="text-base text-muted-foreground mb-3">Embedded Engineering Intern</p>
                <ul className="space-y-2 text-base text-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Deployed and optimized Computer Vision models for image-processing
                      microchips using the TFLite framework.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Executed a complete ML pipeline, including the creation of custom 1000+
                      image dataset, achieving 94% accuracy.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Designed a custom low-power audio chip interface using register-level
                      programming and custom PCB integration.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Duke STAQ */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Duke STAQ Quantum Ideas Summer School
                  </h3>
                  <span className="text-sm text-muted-foreground">Jun 2025</span>
                </div>
                <p className="text-base text-muted-foreground mb-3">Attendee</p>
                <ul className="space-y-2 text-base text-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Engaged in an intensive program focused on quantum information, simulation
                      and hardware architecture.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Collaborated with graduate researchers to analyze emerging qubit
                      implementations and design constraints.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#3772FF]">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-semibold text-foreground mb-3 uppercase">Languages</h3>
                <p className="text-base text-foreground">Java, Python, C/C++, Bash, JavaScript</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-foreground mb-3 uppercase">Hardware</h3>
                <p className="text-base text-foreground">
                  PCB Design (Altium), Digital Logic Design, STM32, CAN/I2C Bus, PID Control, FMEA
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-foreground mb-3 uppercase">Tools</h3>
                <p className="text-base text-foreground">
                  Git, Docker, AWS (EC2), TFLite, React, Flask, Autodesk Fusion/Inventor,
                  SolidWorks
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-foreground mb-3 uppercase">Libraries</h3>
                <p className="text-base text-foreground">
                  Pandas, NumPy, Matplotlib, Qiskit, Bloqade, Cirq
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

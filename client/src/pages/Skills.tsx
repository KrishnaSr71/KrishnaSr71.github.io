import { Badge } from "@/components/ui/badge";



const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C/C++", "Bash", "JavaScript"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "Hardware & Embedded Systems",
    skills: [
      "PCB Design (Altium)",
      "Digital Logic Design",
      "STM32",
      "CAN/I2C Bus",
      "PID Control",
      "FMEA",
    ],
    color: "bg-orange-100 text-orange-800",
  },
  {
    title: "Quantum Computing Tools",
    skills: ["Qiskit", "Bloqade", "Cirq", "Tsim"],
    color: "bg-purple-100 text-purple-800",
  },
  {
    title: "Software & DevOps Tools",
    skills: ["Git", "Docker", "AWS EC2", "TFLite", "React", "Flask"],
    color: "bg-green-100 text-green-800",
  },
  {
    title: "CAD & Design Tools",
    skills: ["Autodesk Fusion", "Autodesk Inventor", "SolidWorks"],
    color: "bg-red-100 text-red-800",
  },
  {
    title: "Libraries & Frameworks",
    skills: ["Pandas", "NumPy", "Matplotlib", "NetworkX", "D3.js"],
    color: "bg-indigo-100 text-indigo-800",
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 md:py-32 bg-white animate-stagger-1">
        <div className="container">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills</h1>
            <p className="text-lg text-foreground font-medium max-w-2xl">
              A comprehensive overview of my technical expertise across <em>programming</em>, <em>hardware
              design</em>, <em>quantum computing</em>, and <em>software development</em>.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-stagger-2">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                {/* Category Title with Accent */}
                <div className="mb-6 pb-4 border-b-2 border-[#3772FF]">
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`px-4 py-2 text-sm font-medium rounded-full ${category.color} border-0`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-16 bg-secondary/30 border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">What I Bring</h3>
            <p className="text-base text-foreground leading-relaxed">
              My skill set spans the full stack of hardware-software integration, from low-level
              embedded systems and PCB design to high-level software architecture and quantum
              algorithms. I'm comfortable working at any level of abstraction, whether it's
              optimizing PID loops on microcontrollers, designing quantum error correction circuits,
              or building full-stack web applications. I believe the best engineers understand how
              all these pieces fit together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

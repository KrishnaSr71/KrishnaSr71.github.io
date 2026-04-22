export interface Project {
  id: number;
  title: string;
  placement: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  overview: string;
  results: string[];
  technologies: string[];
  link?: string;
  imageUrl: string;
  isDiscoveryProject?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "RefNet",
    placement: "2nd Best Project — 900+ competitors at HackGT 12",
    date: "October 2025",
    shortDescription:
      "Research shouldn't feel like a chore. I built RefNet to turn the dense web of academic citations into something visual and intuitive.",
    fullDescription:
      "Research shouldn't feel like a chore. I built RefNet to turn the dense web of academic citations into something visual and intuitive. Using React and D3.js, it maps out literature reviews as interactive networks, making it easy to spot the most influential papers at a glance. We dockerized the Flask backend and ran it on AWS to keep things fast, even with high traffic.",
    overview: `RefNet is an interactive visualization tool designed to transform the complexity of academic literature reviews into an intuitive, explorable network. The core challenge was addressing the pain point researchers face when navigating dense citation networks—traditional methods like reading lists or spreadsheets are linear and don't capture the relationships between papers.

The solution leverages D3.js to render a force-directed graph where each node represents a paper and edges represent citation relationships. The frontend, built with React, provides interactive features like filtering by publication year, searching for specific authors, and highlighting citation paths. The backend, written in Flask and containerized with Docker, processes citation data and serves it efficiently to the frontend.

We deployed the entire system on AWS EC2, ensuring the application could handle multiple concurrent users without performance degradation. The architecture was designed with scalability in mind—the backend can process large academic datasets, and the frontend dynamically loads data to maintain smooth interactions even with thousands of nodes.

What makes RefNet unique is its ability to surface hidden connections between research areas. Users can quickly identify seminal papers, trace the evolution of ideas across time, and discover papers they might have missed through traditional search methods.`,
    results: [
      "Achieved 2nd Best Project award at HackGT 12 among 900+ competitors",
      "Successfully visualized citation networks with 1000+ nodes in real-time",
      "Reduced literature review time by approximately 40% compared to traditional methods",
      "Deployed on AWS with sub-second response times for graph queries",
      "Built a responsive interface that works seamlessly on desktop and tablet devices",
    ],
    technologies: ["React", "D3.js", "NetworkX", "Flask", "Docker", "AWS EC2"],
    link: "https://github.com/Shreyas765/RefNet",
    imageUrl: "https://i.imgur.com/X0BBB1H.jpeg",
  },
  {
    id: 2,
    title: "Noise Modeling & QEC Circuits",
    placement: "2nd Place — QuEra Technical Challenge at MIT iQuHack 2026",
    date: "January 2026",
    shortDescription:
      "Quantum computers are notoriously noisy. I designed hardware-aware Quantum Error Correction circuits that account for real-world decoherence.",
    fullDescription:
      "Quantum computers are notoriously noisy. For this challenge, I designed hardware-aware Quantum Error Correction (QEC) circuits that actually account for real-world decoherence. By implementing Steane QEC on distance-3 color codes, we hit a 90.16% fidelity rate. It was a deep dive into the messy, fascinating reality of making quantum hardware reliable.",
    overview: `This project addresses one of the most critical challenges in quantum computing: error correction. Quantum systems are inherently fragile, with qubits losing their quantum properties (decoherence) due to environmental noise. Without error correction, quantum computers cannot perform reliable long-duration computations.

Our approach focused on implementing Steane Quantum Error Correction using distance-3 color codes. The key innovation was making the error correction circuit aware of the actual hardware noise characteristics rather than assuming ideal conditions. We modeled noise sources including T1 relaxation, T2 dephasing, and gate errors specific to the QuEra Bloqade platform.

Using Cirq and Tsim for circuit simulation, we designed a QEC implementation that could detect and correct single-qubit errors while minimizing the overhead of additional qubits. The distance-3 color code provides protection against arbitrary single-qubit errors, and our hardware-aware approach optimized the circuit depth to reduce the window during which errors could occur.

The implementation involved careful calibration of error thresholds and strategic placement of syndrome measurement qubits to maximize information extraction while minimizing measurement-induced errors. We validated our approach through extensive simulation on various noise profiles.`,
    results: [
      "Achieved 90.16% fidelity rate on distance-3 color code implementation",
      "Placed 2nd in MIT iQuHack 2026 QuEra Technical Challenge",
      "Successfully modeled and compensated for hardware-specific noise characteristics",
      "Reduced logical error rate by 3.2x compared to naive QEC implementation",
      "Developed reusable noise modeling framework for other QEC codes",
    ],
    technologies: ["Python", "Cirq", "Bloqade", "Tsim"],
    link: "https://github.com/VigneshSK17/2026-QuEra-Technical-PhaZeClan",
    imageUrl: "https://i.imgur.com/9hBXGGi.png",
  },
  {
    id: 3,
    title: "Electronic Throttle Body System",
    placement: "UGA Motorsports",
    date: "December 2025",
    shortDescription:
      "In racing, 'drive-by-wire' has to be perfect. I led a sub-team to build a throttle system that replaced mechanical cables with precise electronic control.",
    fullDescription:
      "In racing, 'drive-by-wire' has to be perfect. I led a sub-team to build a throttle system that replaced mechanical cables with precise electronic control. We used C++ for the PID feedback loops and integrated everything over a CAN bus. Safety was the priority, so we built in redundant logic and ran full FMEA (Failure Mode and Effects Analysis) to make sure it wouldn't fail on the track.",
    overview: `The Electronic Throttle Body (ETB) system is a critical component in modern race vehicles, replacing traditional mechanical cable-actuated throttles with electronic control. This project involved designing a system that translates driver input into precise motor commands while maintaining multiple layers of safety redundancy.

The architecture consists of three main components: the driver interface (pedal sensor), the control logic (microcontroller running C++), and the actuation system (stepper motor driving the throttle butterfly). The microcontroller implements a PID control loop to maintain desired throttle position with high precision, accounting for motor dynamics and friction.

Communication between the ETB system and other vehicle systems occurs over the CAN (Controller Area Network) bus, a robust automotive standard that ensures reliable message delivery even in electrically noisy environments. The system monitors multiple sensors including pedal position, throttle position, and motor current to detect faults.

Safety was paramount in the design. We implemented redundant position sensors so that if one fails, the system can still operate. The firmware includes watchdog timers that automatically close the throttle if the microcontroller becomes unresponsive. We conducted a comprehensive Failure Mode and Effects Analysis (FMEA) to identify potential failure points and implemented mitigations for each critical failure mode.

The system was validated through extensive bench testing and vehicle testing on the track, ensuring it performs reliably under the extreme conditions of motorsports competition.`,
    results: [
      "Successfully replaced mechanical throttle cable with electronic system",
      "Achieved ±2° throttle position accuracy with PID control",
      "Implemented redundant safety systems with zero critical failures during testing",
      "Completed comprehensive FMEA covering 47 potential failure modes",
      "System passed all vehicle testing and performed reliably during competition",
    ],
    technologies: ["C++", "CAN Bus", "Altium", "PID Control"],
    link: undefined,
    imageUrl: "https://i.imgur.com/UnOQngU.png",
  },
  {
    id: 4,
    title: "Footy Monte-Carlo",
    placement: "Personal Project",
    date: "Ongoing",
    shortDescription:
      "Combining my love for soccer and math. This is a simulator that uses Monte-Carlo methods to predict match outcomes based on historical data and team metrics.",
    fullDescription:
      "Combining my love for soccer and math. This is a simulator that uses Monte-Carlo methods to predict match outcomes based on historical data and team metrics. It's a fun way to apply statistical modeling to something I'm genuinely passionate about.",
    overview: `Footy Monte-Carlo is a soccer match simulator that applies Monte-Carlo statistical methods to predict match outcomes. The project bridges my passion for soccer with my interest in statistical modeling and simulation techniques.

The simulator models each match as a sequence of discrete events (shots, passes, defensive actions) where the probability of each event is derived from historical team statistics. Rather than using a simple expected goals (xG) model, the Monte-Carlo approach runs thousands of simulated matches with probabilistic outcomes, providing a distribution of possible results rather than a single point estimate.

The model incorporates team-level statistics including offensive strength, defensive strength, possession patterns, and shot accuracy. It also accounts for contextual factors like home field advantage and team form (recent performance). By running 10,000+ simulations per match, the system generates confidence intervals around predictions, giving users a sense of uncertainty in the predictions.

The implementation uses Python for the core simulation engine and data processing. Historical match data is collected from public soccer databases and processed to extract the statistical parameters needed for the model. The system is designed to be extensible—new features like player-level statistics or weather effects can be added to improve prediction accuracy.`,
    results: [
      "Implemented Monte-Carlo simulation engine with 10,000+ iterations per match",
      "Achieved 58% prediction accuracy on historical match data",
      "Developed extensible framework for adding new statistical features",
      "Created visualization tools to display prediction distributions",
      "Ongoing project with plans to integrate live betting data for validation",
    ],
    technologies: ["Python", "Monte-Carlo Simulation", "Pandas", "Matplotlib"],
    link: "https://github.com/KrishnaSr71/footy-montecarlo",
    imageUrl: "https://i.imgur.com/7WknC3R.png",
  },
    {
    id: 5,
    title: "64-Bit Calculator Chip",
    placement: "SiliconJackets",
    date: "Ongoing",
    shortDescription:
      "Conducted physical & digital design and verification of a 64-bit calculator chip. Created a Finite State Machine to synchronize tasks across chip, and built an interface for on-chip SRAM module.",
    fullDescription:
      "Conducted physical & digital design and verification of a 64-bit calculator chip. Created a Finite State Machine to synchronize tasks across chip, and built an interface for on-chip SRAM module.",
    overview: `This project involved the full-stack design and verification of a 64-bit calculator chip, spanning both the physical and digital domains from initial architecture through final sign-off. On the digital side, the work covered RTL-level logic design for a 64-bit datapath capable of performing arithmetic and logic operations. On the physical side, the design was carried through layout, including floorplanning, placement and routing, and physical verification checks such as DRC and LVS.

A central contribution of the project was the design of a Finite State Machine to serve as the chip's control backbone. The FSM was responsible for synchronizing task execution across the chip's subsystems, managing sequencing and timing to ensure correct operation across all operational states.

The project also included building a dedicated interface for the chip's on-chip SRAM module. This interface handled the communication protocol between the processor logic and static memory, enabling structured and reliable read/write access during chip operation.

Taken together, the project touched every major phase of the VLSI design flow — architecture, logic design, physical implementation, memory integration, and verification — making it a comprehensive end-to-end hardware design experience.`,
    results: [
      "98% functional verification coverage across all operational states and datapath logic",
      "0 DRC violations at physical signoff",
      "Full FSM state transition graph validated with no unreachable states and no deadlock conditions",
      "Positive timing slack across all critical paths under worst-case PVT conditions",
      "All signoff checks passed with no outstanding violations across functional, physical, and timing categories",
    ],
    technologies: ["SystemVerilog", "Cadence Tools", "GitHub"],
    link: undefined,
    imageUrl: "https://i.imgur.com/N3Eu9Q1.png",
  },
];

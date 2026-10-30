export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
  metrics?: string;
  isCurrent?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "gospl-engineer",
    role: "Network / IT Engineer",
    company: "Grand Ortus Solutions Pvt. Ltd.",
    period: "October 2024 – July 2026",
    location: "Gurugram, India",
    type: "Full-Time Engineering",
    responsibilities: [
      "Configured and maintained Cisco IOS networking environments across switching and routing topologies.",
      "Engineered VLAN segmentation, Access Control Lists (ACLs), and NAT/PAT translations in lab and proof-of-concept deployments.",
      "Troubleshot network connectivity, packet loss, throughput bottlenecks, and Layer 2/3 performance issues.",
      "Implemented security policies involving Next-Generation Firewalls (NGFW), Zero Trust Network Access (ZTNA), and SD-WAN concepts.",
      "Managed Matrix biometric security devices, enterprise access controllers, and cPanel web hosting environments.",
      "Authored rigorous technical documentation, network topology diagrams, and structured network design blueprints."
    ],
    technologies: [
      "Cisco IOS",
      "VLAN / 802.1Q",
      "ACL & NAT/PAT",
      "Firewalls & NGFW",
      "ZTNA & SD-WAN",
      "cPanel",
      "Matrix Systems"
    ],
    metrics: "Cisco IOS & Security Deployments",
    isCurrent: true
  },
  {
    id: "cynet-coordinator",
    role: "IT Onboarding Coordinator",
    company: "Cynet Systems",
    period: "June 2022 – June 2024",
    location: "Remote",
    type: "IT Operations & Client Services",
    responsibilities: [
      "Managed 50+ active verification cases concurrently for US-based enterprise clients.",
      "Improved overall case closure turnaround time by approximately 20% through workflow automation.",
      "Maintained documentation workflows and orchestrated systematic verification and onboarding pipelines.",
      "Collaborated with cross-functional technical teams to ensure strict compliance and data accuracy."
    ],
    technologies: [
      "Verification Pipelines",
      "Client Management",
      "Process Automation",
      "SLA Optimization",
      "Workflow Documentation"
    ],
    metrics: "20% Case Closure Turnaround Improvement"
  }
];

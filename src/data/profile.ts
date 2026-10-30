export interface ProfileData {
  name: string;
  tagline: string;
  title: string;
  subtitles: string[];
  experienceYears: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  stats: {
    label: string;
    value: string;
    caption: string;
  }[];
  expertiseAreas: {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    technologies: string[];
  }[];
}

export const profileData: ProfileData = {
  name: "Piyush Rai",
  tagline: "BEYOND DIGITAL – Where Code Meets Infrastructure",
  title: "Full Stack Developer | Cloud & Network Engineer",
  subtitles: [
    "Full Stack Developer",
    "Cloud & Network Engineer",
    "Enterprise IT Infrastructure Specialist",
    "Python & React Architect"
  ],
  experienceYears: "1–2 Years",
  bio: "I am a technology professional specializing in full-stack development, cloud technologies, enterprise networking and IT infrastructure. I build modern digital experiences, scalable business applications and reliable technology solutions.",
  email: "piyushkumar9959@gmail.com",
  github: "https://github.com/Piyush-GOSPL",
  linkedin: "https://www.linkedin.com/in/piyush-rai-43b5a9241/",
  resumeUrl: "#contact", // or PDF download
  stats: [
    {
      label: "Production Platforms",
      value: "6+",
      caption: "Commercial & enterprise systems delivered"
    },
    {
      label: "Technical Domains",
      value: "3",
      caption: "Software engineering, Cloud & Enterprise networking"
    },
    {
      label: "Network Protocols & Labs",
      value: "16+",
      caption: "VLAN, OSPF, BGP, GRE VPN, NAT/PAT & ACLs"
    },
    {
      label: "Hands-on Experience",
      value: "1-2 Yrs",
      caption: "Production codebases, ERPNext & cloud deployments"
    }
  ],
  expertiseAreas: [
    {
      number: "01",
      title: "Full Stack Development",
      subtitle: "Modern Web Systems & Resilient APIs",
      description: "Engineering scalable web architectures with React, TypeScript, Python, and Django. Crafting intuitive responsive user interfaces backed by performant REST APIs, modular databases, and clean system design.",
      icon: "Code2",
      technologies: ["React.js", "TypeScript", "Python", "Django", "Node.js", "Tailwind CSS", "REST APIs"]
    },
    {
      number: "02",
      title: "Cloud Technologies",
      subtitle: "Multi-Cloud Deployments & Scalability",
      description: "Deploying and managing virtualized compute, storage, relational databases, and serverless components across AWS, Microsoft Azure, and GCP with a focus on high availability, security, and efficiency.",
      icon: "Cloud",
      technologies: ["AWS (EC2, S3, RDS)", "Microsoft Azure", "Google Cloud", "Linux / WSL", "Docker"]
    },
    {
      number: "03",
      title: "Enterprise Networking",
      subtitle: "Routing, Switching & Network Topologies",
      description: "Architecting robust enterprise campus and data center topologies. Deep configuration and troubleshooting of VLANs, Inter-VLAN routing, STP, EtherChannel, OSPF, EIGRP, BGP, NAT, HSRP, and site-to-site GRE VPNs.",
      icon: "Network",
      technologies: ["Cisco IOS", "VLAN / 802.1Q", "OSPF / EIGRP / BGP", "HSRP Redundancy", "Packet Tracer", "EVE-NG"]
    },
    {
      number: "04",
      title: "IT Infrastructure & Security",
      subtitle: "Perimeter Defense & Enterprise ERP",
      description: "Securing network perimeters with FortiGate, FortiManager, FortiAnalyzer and Check Point firewalls. Implementing enterprise workflows, business automations, and custom modules using Frappe Framework and ERPNext.",
      icon: "ShieldCheck",
      technologies: ["FortiGate Firewall", "Check Point", "ACL & NAT", "ERPNext / Frappe", "Linux SysAdmin"]
    }
  ]
};

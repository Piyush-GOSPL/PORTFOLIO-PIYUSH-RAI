export interface SkillItem {
  name: string;
  category: string;
  description: string;
  badge?: string;
  level?: string; // e.g. "Proficient", "Core Competency", "Practical Experience"
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "Modern User Interfaces & Interactive Web",
    icon: "Layout",
    description: "Crafting modern, accessible, high-performance responsive web applications with component-driven architecture and fluid motion.",
    skills: [
      { name: "React.js", category: "frontend", description: "Component state management, hooks, Context API, dynamic rendering, and SPA architecture.", featured: true },
      { name: "JavaScript (ES6+)", category: "frontend", description: "Modern asynchronous workflows, Promises, DOM manipulation, and functional patterns.", featured: true },
      { name: "Tailwind CSS", category: "frontend", description: "Utility-first design systems, responsive typography, custom animations, and glassmorphism UI.", featured: true },
      { name: "HTML5", category: "frontend", description: "Semantic markup, modern web storage, accessibility compliance, and SEO best practices." },
      { name: "CSS3", category: "frontend", description: "CSS Grid, Flexbox, keyframe animations, 3D transforms, and custom properties." },
      { name: "Bootstrap", category: "frontend", description: "Rapid UI layout prototyping, grid frameworks, and responsive utility classes." }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "Robust Services, Logic & REST APIs",
    icon: "Server",
    description: "Designing structured backend architectures, microservices, secure authentication flows, and dependable RESTful communication.",
    skills: [
      { name: "Python", category: "backend", description: "Object-oriented design, scripting, data manipulation, automation, and backend logic.", featured: true },
      { name: "Django", category: "backend", description: "MVC/MVT web architecture, ORM query optimization, authentication, middleware, and admin portals.", featured: true },
      { name: "REST APIs", category: "backend", description: "RESTful resource design, HTTP methods, token/session authentication, and serialization.", featured: true },
      { name: "Node.js", category: "backend", description: "Event-driven runtime for scalable networking platforms and lightweight microservices." },
      { name: "Express.js", category: "backend", description: "Middleware routing, API endpoint protection, and JSON body parsing pipelines." }
    ]
  },
  {
    id: "networking",
    title: "Enterprise Networking",
    subtitle: "Cisco Routing, Switching & Protocol Engineering",
    icon: "Network",
    description: "Deep configuration and analysis of enterprise campus, multi-area routing, packet inspection, and high-availability protocols.",
    skills: [
      { name: "VLAN & 802.1Q", category: "networking", description: "Virtual LAN segmentation, access & trunk port modes, DTP, and Inter-VLAN routing with subinterfaces.", featured: true },
      { name: "OSPF", category: "networking", description: "Open Shortest Path First link-state routing, multi-area topologies, neighbor adjacencies, and metric calculations.", featured: true },
      { name: "STP & RSTP", category: "networking", description: "Spanning Tree Protocol loop prevention, root bridge election, port roles (blocking, forwarding), and Rapid STP.", featured: true },
      { name: "EtherChannel", category: "networking", description: "Link aggregation using LACP and PAgP for bandwidth multiplication and redundancy.", featured: true },
      { name: "BGP", category: "networking", description: "Border Gateway Protocol path attributes, autonomous systems (AS), and eBGP peering fundamentals." },
      { name: "EIGRP", category: "networking", description: "Enhanced Interior Gateway Routing Protocol DUAL algorithm, metric weights, and successor routes." },
      { name: "NAT & PAT", category: "networking", description: "Network Address Translation (Static, Dynamic) and Port Address Translation (Overload) for IPv4 conservation." },
      { name: "ACL", category: "networking", description: "Standard and Extended Access Control Lists for packet filtering based on source/dest IP and layer-4 ports." },
      { name: "HSRP", category: "networking", description: "Hot Standby Router Protocol default gateway redundancy, virtual IP/MAC, and priority preemption." },
      { name: "GRE VPN", category: "networking", description: "Generic Routing Encapsulation point-to-point tunnels across public IP transport." }
    ]
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    subtitle: "Scalable Compute, Virtualization & High Availability",
    icon: "Cloud",
    description: "Deploying production applications, elastic compute clusters, secure VPC networks, and managed storage on leading cloud platforms.",
    skills: [
      { name: "AWS", category: "cloud", description: "Amazon EC2 instances, S3 object storage, RDS database instances, VPC networking, security groups, and IAM.", featured: true },
      { name: "Microsoft Azure", category: "cloud", description: "Azure Virtual Machines, Virtual Networks (VNet), Network Security Groups, and Blob Storage.", featured: true },
      { name: "Google Cloud Platform", category: "cloud", description: "GCP Compute Engine, Cloud Storage buckets, and Google Cloud network services." }
    ]
  },
  {
    id: "security",
    title: "Network Security & Firewalls",
    subtitle: "Next-Gen Firewalls & Perimeter Defense",
    icon: "Shield",
    description: "Configuring perimeter defenses, security policies, VPN tunnels, and centralized log inspection across enterprise firewalls.",
    skills: [
      { name: "FortiGate", category: "security", description: "Fortinet Next-Generation Firewall policy rules, NAT policies, SSL-VPN portals, and inspection profiles.", featured: true },
      { name: "FortiManager", category: "security", description: "Centralized policy deployment and device management across distributed FortiGate clusters." },
      { name: "FortiAnalyzer", category: "security", description: "Real-time threat analytics, compliance reporting, and centralized event log aggregation." },
      { name: "Check Point", category: "security", description: "Security Gateway policy rulebase, SmartConsole, NAT rules, and threat prevention." }
    ]
  },
  {
    id: "database",
    title: "Database Systems",
    subtitle: "Relational Modeling, Indexing & Querying",
    icon: "Database",
    description: "Relational schema design, entity relationship normalization, query optimization, and transaction safety.",
    skills: [
      { name: "MySQL", category: "database", description: "Relational table schemas, foreign key constraints, indexing strategies, and multi-table JOINs.", featured: true },
      { name: "MariaDB", category: "database", description: "Enterprise open-source relational engine with high concurrency and ACID guarantees." },
      { name: "SQLite", category: "database", description: "Lightweight embedded serverless database for practice examination platforms and rapid development." }
    ]
  },
  {
    id: "erp",
    title: "ERP & Enterprise Business",
    subtitle: "Frappe Framework & ERPNext Customization",
    icon: "Layers",
    description: "Customizing business management workflows, DocTypes, custom server scripts, and client-side automation in ERPNext.",
    skills: [
      { name: "Frappe Framework", category: "erp", description: "Python & JS metadata-driven architecture, DocType lifecycle, Server Scripts, and hooks.", featured: true },
      { name: "ERPNext", category: "erp", description: "Core business suite customization: CRM, Sales, Purchase, Inventory, and custom print formats.", featured: true },
      { name: "Frappe CRM", category: "erp", description: "Modern open-source CRM pipelines, lead routing, and customer interaction tracking." }
    ]
  },
  {
    id: "tools",
    title: "Tools, OS & Simulation",
    subtitle: "DevOps, Simulation Labs & Operating Systems",
    icon: "Cpu",
    description: "Operating system administration, version control, and multi-vendor network simulation testbeds.",
    skills: [
      { name: "Linux", category: "tools", description: "Ubuntu/Debian administration, systemd service management, SSH hardening, and shell commands.", featured: true },
      { name: "WSL (Windows Subsystem for Linux)", category: "tools", description: "Unix toolchain integration, cross-platform compilation, and server reproduction." },
      { name: "Git & GitHub", category: "tools", description: "Branching strategies, pull requests, merge conflict resolution, and CI/CD triggers.", featured: true },
      { name: "Cisco Packet Tracer", category: "tools", description: "Enterprise campus simulation, protocol verification, and topology design." },
      { name: "EVE-NG", category: "tools", description: "Emulated virtual environment for real multi-vendor network images (Cisco IOU/vIOS, FortiGate)." }
    ]
  }
];

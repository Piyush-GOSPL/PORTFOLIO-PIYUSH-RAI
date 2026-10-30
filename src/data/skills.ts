export interface SkillItem {
  name: string;
  category: string;
  description: string;
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  accentColor: string;
  skills: SkillItem[];
}

export const skillGroupsData: SkillGroup[] = [
  {
    id: "networking",
    title: "Networking",
    subtitle: "Enterprise Routing, Switching & Protocols",
    iconName: "Network",
    accentColor: "#00D4FF",
    skills: [
      { name: "VLAN & 802.1Q", category: "networking", description: "Broadcast domain isolation, access & trunk tagging, DTP, and Inter-VLAN routing.", featured: true },
      { name: "OSPF", category: "networking", description: "Link-state hierarchical routing, Area 0 backbones, LSA sync, and Dijkstra calculations.", featured: true },
      { name: "BGP", category: "networking", description: "Border Gateway Protocol path vectoring, autonomous systems, and exterior WAN routing.", featured: true },
      { name: "STP & RSTP", category: "networking", description: "Spanning Tree Protocol loop avoidance, Root Bridge election, and rapid convergence.", featured: true },
      { name: "EtherChannel", category: "networking", description: "Multi-link bandwidth aggregation utilizing LACP (802.3ad) and PAgP protocols.", featured: true },
      { name: "EIGRP", category: "networking", description: "Advanced distance-vector routing using DUAL algorithm and unequal cost path balancing." },
      { name: "NAT & PAT", category: "networking", description: "Static, Dynamic NAT and Port Address Translation (Overload) for IPv4 allocation." },
      { name: "HSRP", category: "networking", description: "Hot Standby Router Protocol for first-hop default gateway failover and high availability." },
      { name: "GRE VPN", category: "networking", description: "Generic Routing Encapsulation point-to-point tunnels across untrusted WAN links." }
    ]
  },
  {
    id: "network-security",
    title: "Network Security",
    subtitle: "Perimeter Defenses, Firewalls & Zero Trust",
    iconName: "ShieldAlert",
    accentColor: "#168BFF",
    skills: [
      { name: "Firewalls & NGFW", category: "network-security", description: "Stateful packet inspection, deep packet analysis, and application-layer traffic controls.", featured: true },
      { name: "ACL (Access Control Lists)", category: "network-security", description: "Standard and Extended IP/protocol packet filtering applied at ingress and egress boundaries.", featured: true },
      { name: "ZTNA Concepts", category: "network-security", description: "Zero Trust Network Access architecture enforcing least-privilege verification before granting access.", featured: true },
      { name: "DLP (Data Loss Prevention)", category: "network-security", description: "Policy enforcement preventing unauthorized data leakage across USB endpoints and network protocols.", featured: true },
      { name: "SD-WAN Concepts", category: "network-security", description: "Software-Defined WAN application steering, dynamic link aggregation, and overlay encryption." },
      { name: "FortiGate & Check Point", category: "network-security", description: "Enterprise perimeter firewall policy rules, NAT inspection, and threat prevention suites." }
    ]
  },
  {
    id: "cisco-infrastructure",
    title: "Cisco & Infrastructure",
    subtitle: "Hardware Racks, Junos & Physical Layer",
    iconName: "Server",
    accentColor: "#00D4FF",
    skills: [
      { name: "Cisco IOS", category: "cisco-infrastructure", description: "Command-Line Interface configuration, running-config management, and diagnostic show routines.", featured: true },
      { name: "Juniper Switches (Junos OS)", category: "cisco-infrastructure", description: "Junos OS configuration, commit candidate model, and Virtual Chassis link aggregation.", featured: true },
      { name: "Data Center Colocation", category: "cisco-infrastructure", description: "Tier-3 rack mounting, PDU power balancing, meet-me room fiber patching, and thermal airflow.", featured: true },
      { name: "Server Hardware Assembly", category: "cisco-infrastructure", description: "Multi-socket CPU assembly, ECC RAM, hardware RAID controller configurations, and GPU integration.", featured: true },
      { name: "Data Center Migration", category: "cisco-infrastructure", description: "Physical de-racking, logistics transport, re-racking, and structured subnet cutovers." },
      { name: "Matrix Device Management", category: "cisco-infrastructure", description: "Enterprise biometric attendance systems, door access controllers, and hardware integration." }
    ]
  },
  {
    id: "software-development",
    title: "Software Development",
    subtitle: "Full-Stack Web Engineering & Scalable APIs",
    iconName: "Code2",
    accentColor: "#168BFF",
    skills: [
      { name: "React.js", category: "software-development", description: "Component-driven SPA architecture, custom hooks, dynamic state, and high-speed VDOM rendering.", featured: true },
      { name: "Python", category: "software-development", description: "Object-oriented software development, data parsing, network automation scripts, and server backends.", featured: true },
      { name: "Django", category: "software-development", description: "MVT framework, ORM query optimization, secure authentication pipelines, and RESTful APIs.", featured: true },
      { name: "TypeScript & JavaScript", category: "software-development", description: "Strict static typing, modern ESNext asynchronous workflows, and Promise concurrency.", featured: true },
      { name: "Node.js & Express.js", category: "software-development", description: "Event-driven runtime building REST APIs and exam assessment platforms.", featured: true },
      { name: "Tailwind CSS", category: "software-development", description: "Utility-first design systems, modern responsive layouts, and glassmorphic user interfaces." },
      { name: "Frappe Framework & ERPNext", category: "software-development", description: "Metadata-driven ERP customization, Python Server Scripts, custom DocTypes, and business hooks." },
      { name: "MySQL & MariaDB", category: "software-development", description: "Relational schema design, normalization, indexing, foreign keys, and complex multi-table queries." }
    ]
  },
  {
    id: "cloud-platforms",
    title: "Cloud & Platforms",
    subtitle: "Compute Virtualization, Hosting & Storage",
    iconName: "Cloud",
    accentColor: "#00D4FF",
    skills: [
      { name: "Amazon Web Services (AWS)", category: "cloud-platforms", description: "Amazon EC2 virtual instances, S3 object storage, RDS managed databases, and VPC security groups.", featured: true },
      { name: "Microsoft Azure", category: "cloud-platforms", description: "Azure Virtual Machines, Virtual Networks (VNets), Network Security Groups, and Blob Storage.", featured: true },
      { name: "cPanel Web Hosting", category: "cloud-platforms", description: "DNS zone file records, SSL certificates, Apache/Nginx vhosts, email servers, and FTP allocations.", featured: true },
      { name: "Linux Virtualization", category: "cloud-platforms", description: "KVM and containerized services hosting web servers, database engines, and networking services." }
    ]
  },
  {
    id: "tools-technologies",
    title: "Tools & Technologies",
    subtitle: "Simulation, Version Control & SysAdmin",
    iconName: "Cpu",
    accentColor: "#168BFF",
    skills: [
      { name: "Linux (Ubuntu / RHEL)", category: "tools-technologies", description: "Systemd service supervisor, bash scripting, SSH key hardening, UFW firewalling, and package mgmt.", featured: true },
      { name: "Cisco Packet Tracer", category: "tools-technologies", description: "Campus topology modeling, protocol packet inspection, and CCNA laboratory simulations.", featured: true },
      { name: "EVE-NG", category: "tools-technologies", description: "Emulated virtual testbed running multi-vendor virtual images (Cisco vIOS, Junos, FortiGate).", featured: true },
      { name: "Git & GitHub", category: "tools-technologies", description: "Version control branching, pull requests, merge conflict resolution, and CI/CD workflow triggers.", featured: true },
      { name: "WSL (Windows Subsystem for Linux)", category: "tools-technologies", description: "Seamless Unix development environment on Windows for cross-platform toolchains." }
    ]
  }
];

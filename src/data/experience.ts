export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  field: string;
  highlights: string[];
}

export interface CertificationTrack {
  id: string;
  title: string;
  issuer: string;
  status: "In Active Preparation" | "Completed / Earned" | "Advanced Study";
  badgeColor: string;
  description: string;
  coreTopics: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer & Cloud Systems Engineer",
    company: "Technology Solutions & Client Projects",
    period: "2023 – Present",
    type: "Professional Engineering",
    location: "Remote / Hybrid",
    description: "Architecting and deploying end-to-end full-stack web applications, business management ERP systems, and cloud infrastructure for client solutions.",
    achievements: [
      "Engineered production e-commerce platforms (Arojima Foods) utilizing Python, Django, MySQL, with dynamic variant pricing and secure payment verification workflows.",
      "Developed high-conversion modern web applications (VoltTrack Solar NZ, Sanatan NZ, BizApps365) with React.js, Tailwind CSS, and optimized responsive layouts.",
      "Implemented custom Frappe Framework DocTypes, server scripts, and CRM pipeline automation inside ERPNext for enterprise client workflows.",
      "Built specialized networking examination simulation tool with Express.js, React, and SQLite for Cisco CCNA assessment testbeds.",
      "Configured multi-tier Linux hosting environments with Nginx reverse proxying, SSL encryption, and automated database backups."
    ],
    techStack: ["React.js", "Python", "Django", "MySQL", "Frappe / ERPNext", "Tailwind CSS", "Linux", "REST APIs"],
    isCurrent: true
  },
  {
    id: "exp-2",
    role: "Junior Software & Systems Engineer",
    company: "Enterprise Technology Engineering",
    period: "2022 – 2023",
    type: "Full-Time / Foundation",
    location: "India",
    description: "Contributed to web service implementations, backend relational database querying, network configuration testing, and IT systems administration.",
    achievements: [
      "Assisted in frontend UI development using modern HTML5, CSS3, JavaScript, and Bootstrap components.",
      "Participated in enterprise network topology configuration testing using Cisco Packet Tracer and EVE-NG virtual labs.",
      "Performed Linux server maintenance, package deployments, and automated bash scripting routines.",
      "Collaborated with senior engineers on REST API integrations and software bug fixes."
    ],
    techStack: ["JavaScript", "Python", "HTML5/CSS3", "Cisco IOS", "Packet Tracer", "Git", "Ubuntu Linux"]
  }
];

export const educationList: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology / Computer Science & Engineering",
    institution: "Engineering Institution",
    period: "Graduated",
    field: "Computer Science & Information Technology",
    highlights: [
      "Focus on Data Structures, Algorithms, Computer Networks, and Database Management Systems",
      "Hands-on lab specialization in IP Routing Protocols, Network Switching, and Operating Systems",
      "Completed practical capstone engineering project integrating web frameworks with relational storage"
    ]
  }
];

export const certificationTracks: CertificationTrack[] = [
  {
    id: "cert-ccna",
    title: "Cisco Certified Network Associate (CCNA 200-301)",
    issuer: "Cisco Systems",
    status: "In Active Preparation",
    badgeColor: "bg-blue-100 text-primary-blue border-blue-200",
    description: "Rigorous preparation covering Network Fundamentals, IP Connectivity (OSPFv2), IP Services (NAT, NTP, DHCP, DNS, SNMP), Security Fundamentals (ACLs, Port Security), and Network Automation.",
    coreTopics: ["IPv4 / IPv6 Subnetting", "VLANs & Trunking (802.1Q)", "OSPF Dynamic Routing", "EtherChannel (LACP)", "Standard & Extended ACLs", "HSRP Gateway Redundancy"]
  },
  {
    id: "cert-aws",
    title: "AWS Certified Solutions Architect – Associate Track",
    issuer: "Amazon Web Services",
    status: "In Active Preparation",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    description: "Deep study of resilient cloud architectures, multi-tier VPC network topologies, compute virtualization (EC2), managed databases (RDS), storage tiers (S3), and IAM identity policies.",
    coreTopics: ["VPC Peering & Subnets", "EC2 Auto Scaling Groups", "RDS Multi-AZ Deployments", "Application Load Balancers", "IAM Security Policies", "S3 Storage Classes"]
  },
  {
    id: "cert-azure",
    title: "Microsoft Azure Administrator (AZ-104 Track)",
    issuer: "Microsoft",
    status: "In Active Preparation",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    description: "Comprehensive study of managing Azure subscriptions, creating Virtual Networks (VNets), configuring Network Security Groups (NSGs), implementing storage accounts, and managing Azure VMs.",
    coreTopics: ["Azure VNets & Subnets", "Network Security Groups (NSG)", "Azure Virtual Machines", "Blob Storage Management", "Entra ID / Azure AD", "Azure Monitor & Alerts"]
  },
  {
    id: "cert-fortinet",
    title: "Fortinet Network Security Expert (NSE) Studies",
    issuer: "Fortinet",
    status: "In Active Preparation",
    badgeColor: "bg-red-100 text-red-800 border-red-200",
    description: "Practical engineering of next-generation perimeter firewalls, security policy rule creation, NAT policies, SSL-VPN portals, and centralized FortiAnalyzer log inspection.",
    coreTopics: ["FortiOS Firewall Policies", "Source & Destination NAT", "SSL-VPN Configuration", "Security Profiles (AV, IPS)", "FortiAnalyzer Analytics"]
  },
  {
    id: "cert-linux",
    title: "Linux System Administration & Shell Automation",
    issuer: "Enterprise Linux Ecosystem",
    status: "Advanced Study",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    description: "Practical system administration covering systemd process supervisor management, SSH hardening, iptables / UFW firewalling, Nginx reverse proxy configurations, and automated cron jobs.",
    coreTopics: ["Systemd Services", "Nginx Reverse Proxy", "UFW / Iptables", "File Permissions & ACLs", "SSH Key Hardening", "Bash Shell Scripting"]
  }
];

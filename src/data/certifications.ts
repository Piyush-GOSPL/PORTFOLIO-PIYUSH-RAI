export interface CertificationTrack {
  id: string;
  title: string;
  issuer: string;
  status: "In Active Preparation" | "Completed / Earned" | "Advanced Practical Track";
  badgeColor: string;
  description: string;
  coreTopics: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  field: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "bachelor-degree",
    degree: "Bachelor of Technology / Computer Science & Engineering",
    institution: "Engineering Institution",
    period: "Graduated",
    field: "Computer Science & Information Technology",
    highlights: [
      "Rigorous foundation in Computer Networks, Operating Systems, Algorithms, and Database Management",
      "Specialized lab work in IP Routing Protocols, Network Switching Topologies, and Packet Analysis",
      "Capstone engineering project integrating web frameworks with relational database storage"
    ]
  }
];

export const certificationData: CertificationTrack[] = [
  {
    id: "cert-ccna",
    title: "Cisco Certified Network Associate (CCNA 200-301 Track)",
    issuer: "Cisco Systems",
    status: "In Active Preparation",
    badgeColor: "border-[#00D4FF]/40 text-[#00D4FF] bg-[#00D4FF]/10",
    description: "Deep study covering Network Fundamentals, IP Connectivity (OSPFv2), IP Services (NAT, NTP, DHCP, DNS), Security Fundamentals (ACLs, Port Security), and Network Automation.",
    coreTopics: ["IPv4 / IPv6 Subnetting", "VLANs & 802.1Q Trunking", "OSPF Dynamic Routing", "EtherChannel (LACP)", "Standard & Extended ACLs", "HSRP Default Gateway Redundancy"]
  },
  {
    id: "cert-aws",
    title: "AWS Certified Solutions Architect – Associate Track",
    issuer: "Amazon Web Services",
    status: "In Active Preparation",
    badgeColor: "border-[#168BFF]/40 text-[#168BFF] bg-[#168BFF]/10",
    description: "Comprehensive preparation in multi-tier resilient VPC topologies, EC2 compute scaling, RDS managed databases, S3 storage tiers, and IAM identity policies.",
    coreTopics: ["VPC Peering & Subnets", "EC2 Auto Scaling Groups", "RDS Multi-AZ Deployments", "Application Load Balancers", "IAM Policies & Roles", "S3 Storage Classes"]
  },
  {
    id: "cert-azure",
    title: "Microsoft Azure Administrator (AZ-104 Track)",
    issuer: "Microsoft",
    status: "In Active Preparation",
    badgeColor: "border-[#00D4FF]/40 text-[#00D4FF] bg-[#00D4FF]/10",
    description: "In-depth study of Azure Virtual Networks (VNets), Network Security Groups (NSGs), VM provisioning, Blob storage, and Entra ID access control.",
    coreTopics: ["Azure VNets & Subnets", "Network Security Groups (NSG)", "Azure Virtual Machines", "Blob Storage Management", "Entra ID / Azure AD", "Azure Monitor Alerts"]
  },
  {
    id: "cert-security",
    title: "Enterprise Network Security & NGFW",
    issuer: "Fortinet / Check Point Standards",
    status: "Advanced Practical Track",
    badgeColor: "border-[#168BFF]/40 text-[#168BFF] bg-[#168BFF]/10",
    description: "Hands-on engineering of next-generation perimeter firewalls, security policy rules, NAT policies, SSL-VPN portals, and DLP endpoint safeguards.",
    coreTopics: ["Firewall Security Policies", "Source & Destination NAT", "SSL-VPN Configuration", "DLP Egress Safeguards", "ZTNA Least-Privilege Rules"]
  },
  {
    id: "cert-linux",
    title: "Linux System Administration & Network Services",
    issuer: "Enterprise Linux Ecosystem",
    status: "Advanced Practical Track",
    badgeColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    description: "Practical production system administration covering systemd process supervisors, SSH hardening, UFW/iptables firewalling, Nginx reverse proxying, and bash automation.",
    coreTopics: ["Systemd Services", "Nginx Reverse Proxy", "UFW / Iptables", "File Permissions & ACLs", "SSH Key Hardening", "Bash Automation"]
  }
];


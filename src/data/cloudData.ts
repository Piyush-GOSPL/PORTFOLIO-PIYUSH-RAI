export interface CloudComponent {
  id: string;
  name: string;
  provider: "AWS" | "Azure" | "GCP" | "Hybrid";
  category: "Compute" | "Storage" | "Database" | "Networking & Security" | "Application Layer";
  icon: string;
  position: [number, number, number];
  color: string;
  tagline: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  services: string[];
}

export const cloudProviders = [
  {
    id: "aws",
    name: "Amazon Web Services (AWS)",
    accent: "#0090D2",
    description: "Core production hosting with EC2 elastic instances, S3 object distribution, RDS managed engines, and VPC network isolation."
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    accent: "#00C8FF",
    description: "Enterprise hybrid infrastructure, Azure Virtual Networks, Blob storage, and unified Active Directory federation."
  },
  {
    id: "gcp",
    name: "Google Cloud Platform (GCP)",
    accent: "#1263B5",
    description: "Scalable container runtimes, global Cloud Load Balancing, and high-throughput network backbones."
  }
];

export const cloudComponents: CloudComponent[] = [
  {
    id: "load-balancer",
    name: "Application Load Balancer (ALB)",
    provider: "AWS",
    category: "Networking & Security",
    icon: "Network",
    position: [0, 2.2, 0],
    color: "#00C8FF",
    tagline: "High-Availability Traffic Distribution & TLS Offloading",
    description: "Distributes incoming HTTP/HTTPS application traffic across multiple EC2 targets and availability zones. Terminates TLS certificates, performs health checks, and triggers dynamic auto-scaling policies.",
    specs: [
      { label: "Protocol Support", value: "HTTP / HTTPS / gRPC / WebSockets" },
      { label: "Target Routing", value: "Path-based & Host-header routing" },
      { label: "Health Monitoring", value: "Sub-5s heartbeat health checks" }
    ],
    services: ["AWS ALB", "Azure Application Gateway", "GCP Cloud Load Balancing"]
  },
  {
    id: "cloud-firewall",
    name: "Cloud Perimeter & WAF",
    provider: "Hybrid",
    category: "Networking & Security",
    icon: "ShieldAlert",
    position: [0, 3.4, 0],
    color: "#1263B5",
    tagline: "DDoS Mitigation & Web Application Firewall",
    description: "Inspects incoming requests against Layer 7 OWASP top 10 vulnerabilities, blocks SQL injection / XSS vectors, and restricts brute-force IP rate limits before packets touch compute resources.",
    specs: [
      { label: "Security Rules", value: "OWASP Top 10 automated mitigation" },
      { label: "Rate Limiting", value: "Custom threshold IP throttling" },
      { label: "DDoS Defense", value: "Layer 3/4 SYN flood protection" }
    ],
    services: ["AWS WAF / Shield", "Azure Front Door WAF", "Cloudflare Zero Trust"]
  },
  {
    id: "virtual-servers",
    name: "Elastic Virtual Servers",
    provider: "AWS",
    category: "Compute",
    icon: "Server",
    position: [-2.6, 0.6, -1],
    color: "#0090D2",
    tagline: "Scalable Linux & Containerized Workloads",
    description: "Virtual instances running Linux (Ubuntu/Debian) and Docker environments for hosting backend Python/Django services, Node.js API endpoints, and ERPNext workers with auto-scaling capabilities.",
    specs: [
      { label: "Operating System", value: "Ubuntu 22.04 LTS / Debian Linux" },
      { label: "Runtime", value: "Gunicorn / Nginx / Node.js Engine" },
      { label: "Scaling", value: "EC2 Auto Scaling Groups across AZs" }
    ],
    services: ["AWS EC2", "Azure Virtual Machines", "GCP Compute Engine"]
  },
  {
    id: "app-services",
    name: "Web & Microservices Layer",
    provider: "Azure",
    category: "Application Layer",
    icon: "Cpu",
    position: [2.6, 0.6, -1],
    color: "#00C8FF",
    tagline: "Containerized Web Services & RESTful Endpoints",
    description: "Hosts the frontend React builds, backend business logic, and web APIs. Decoupled microservices communicate over internal private VPC subnets to maintain low latency and airtight security.",
    specs: [
      { label: "Frameworks", value: "React.js / Django / Express" },
      { label: "Protocol", value: "JSON REST APIs & GraphQL" },
      { label: "Containerization", value: "Docker & Container Registry" }
    ],
    services: ["Azure App Service", "AWS ECS", "Google Cloud Run"]
  },
  {
    id: "cloud-storage",
    name: "Object Storage & CDN",
    provider: "AWS",
    category: "Storage",
    icon: "HardDrive",
    position: [-2.2, -1.8, 1.2],
    color: "#1263B5",
    tagline: "Resilient S3 Storage & Edge Caching",
    description: "Highly durable (99.999999999%) cloud object storage used for static frontend bundles, user media uploads, ERP documents, and automated database backups with encryption at rest.",
    specs: [
      { label: "Durability", value: "11 Nines (99.999999999%)" },
      { label: "Security", value: "SSE-S3 / AES-256 server-side encryption" },
      { label: "Distribution", value: "CloudFront edge CDN caching" }
    ],
    services: ["AWS S3", "Azure Blob Storage", "GCP Cloud Storage"]
  },
  {
    id: "cloud-databases",
    name: "Managed Relational Database",
    provider: "AWS",
    category: "Database",
    icon: "Database",
    position: [2.2, -1.8, 1.2],
    color: "#0090D2",
    tagline: "Multi-AZ MySQL / MariaDB Relational Engine",
    description: "Fully managed relational database deployment with automated snapshots, point-in-time recovery, standby read replicas, and strict placement within isolated private database subnets.",
    specs: [
      { label: "Engines", value: "MySQL 8.0 & MariaDB 10.6" },
      { label: "High Availability", value: "Synchronous Multi-AZ standby replica" },
      { label: "Encryption", value: "KMS managed key at-rest encryption" }
    ],
    services: ["AWS RDS", "Azure SQL Database", "GCP Cloud SQL"]
  }
];


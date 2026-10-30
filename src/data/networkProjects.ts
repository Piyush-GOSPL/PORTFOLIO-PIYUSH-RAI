export interface NetworkProject {
  id: string;
  number: string;
  title: string;
  category: "Security" | "Compute & Servers" | "Routing & Switching" | "Data Center Migration" | "Network Design";
  clientOrDomain: string;
  summary: string;
  description: string;
  technicalHighlights: string[];
  toolsAndHardware: string[];
  status: "Completed Deployment" | "Production Staging" | "Verified Audit";
  iconName: "Shield" | "Cpu" | "Network" | "FileSearch" | "Server" | "HardDrive";
  accentColor: string;
}

export const networkProjectsData: NetworkProject[] = [
  {
    id: "dlp-deployment",
    number: "01",
    title: "DLP Deployment, Demo & Testing",
    category: "Security",
    clientOrDomain: "Enterprise Data Protection",
    summary: "Comprehensive Data Loss Prevention (DLP) architecture staging, policy configuration, and breach simulation testing.",
    description: "Designed, installed, and verified an end-to-end DLP solution to safeguard enterprise intellectual property and confidential records. Formulated inspection rules across endpoints and egress network channels, simulated unauthorized exfiltration attempts, and delivered live functional demonstrations for stakeholders.",
    technicalHighlights: [
      "Configured endpoint DLP policies for USB mass storage restriction, clipboard control, and sensitive keyword watermarking",
      "Monitored network egress pathways (HTTP/S, SMTP, FTP) with deep packet content inspection",
      "Executed simulated data leakage attack vectors to evaluate alerting thresholds and policy enforcement latency",
      "Authored remediation runbooks and compliance policy documentation"
    ],
    toolsAndHardware: ["Endpoint DLP Agents", "Network DLP Monitor", "Next-Gen Firewall", "Packet Sniffing", "Policy Console"],
    status: "Completed Deployment",
    iconName: "Shield",
    accentColor: "#00D4FF"
  },
  {
    id: "rgci-gpu-server",
    number: "02",
    title: "RGCI GPU Server Installation & Configuration",
    category: "Compute & Servers",
    clientOrDomain: "High-Performance Medical Research & AI",
    summary: "Physical assembly, driver deployment, and network integration of high-density GPU computing clusters.",
    description: "Orchestrated physical deployment, hardware validation, and OS configuration for enterprise GPU computing servers at RGCI. Integrated specialized PCIe accelerators, configured dedicated high-speed network interfaces, established out-of-band remote management, and verified driver/CUDA runtimes for computational workloads.",
    technicalHighlights: [
      "Mounted high-density rackmount chassis, enterprise redundant power supplies, and GPU accelerators",
      "Installed enterprise Linux distribution with optimized proprietary GPU driver toolchains and CUDA environments",
      "Configured dedicated out-of-band IPMI / iLO management networks for lights-out administration",
      "Benchmarked memory throughput, thermal dissipation under stress loads, and multi-gigabit NIC connectivity"
    ],
    toolsAndHardware: ["Enterprise GPU Servers", "Linux (Ubuntu/RHEL)", "PCIe Accelerators", "IPMI / Out-of-band Mgmt", "10GbE Uplinks"],
    status: "Completed Deployment",
    iconName: "Cpu",
    accentColor: "#168BFF"
  },
  {
    id: "juniper-colocation",
    number: "03",
    title: "Juniper Switch Configuration & Colocation",
    category: "Routing & Switching",
    clientOrDomain: "Data Center Colocation",
    summary: "Colocation data center rack installation, Junos OS configuration, VLAN segmentation, and redundant uplink aggregation.",
    description: "Deployed Juniper enterprise switches in a tier-3 colocation facility. Configured Junos OS interfaces, provisioned 802.1Q trunking, deployed Virtual Chassis technology for management simplification, and established redundant fiber uplinks to data center carrier meet-me rooms.",
    technicalHighlights: [
      "Configured Junos OS CLI: interfaces, VLANs, link aggregation (AE / LACP), and RSTP loop prevention",
      "Implemented Juniper Virtual Chassis to bond dual physical switches into a single logical control plane",
      "Ran SFP+ optical fiber cabling, optical power budget testing, and structured cable labeling",
      "Verified BGP / static peering and failover resilience with zero packet drop over redundant paths"
    ],
    toolsAndHardware: ["Juniper EX Series", "Junos OS", "Virtual Chassis", "SFP+ 10G Transceivers", "LACP Aggregated Ethernet"],
    status: "Completed Deployment",
    iconName: "Network",
    accentColor: "#00D4FF"
  },
  {
    id: "network-audit-design",
    number: "04",
    title: "Network Audit & Network Design",
    category: "Network Design",
    clientOrDomain: "Enterprise Infrastructure Modernization",
    summary: "Comprehensive campus network topology discovery, security vulnerability audit, and redesigned architecture blueprint.",
    description: "Executed a thorough multi-floor enterprise network audit to identify bottlenecks, broadcast storm vulnerabilities, legacy unmanaged switches, and suboptimal routing. Formulated a modernized modular core-distribution-access architecture blueprint with dual-homed redundancy.",
    technicalHighlights: [
      "Audited switch port allocations, broadcast domains, spanning-tree topologies, and rogue DHCP servers",
      "Analyzed bandwidth utilization graphs, duplex mismatches, and intermittent link flaps",
      "Designed modernized hierarchical topology featuring Layer 3 distribution routing and isolated guest/staff VLANs",
      "Delivered comprehensive network documentation with port-mapping schedules and Visio/Draw.io architectural diagrams"
    ],
    toolsAndHardware: ["Wireshark", "Cisco Network Assistant", "SNMP Scanners", "Topology Mapping", "Visio / Lucidchart"],
    status: "Verified Audit",
    iconName: "FileSearch",
    accentColor: "#168BFF"
  },
  {
    id: "vmart-dc-migration",
    number: "05",
    title: "VMart Data Centre Migration",
    category: "Data Center Migration",
    clientOrDomain: "Retail Enterprise Infrastructure",
    summary: "Migration of physical and virtualized server assets, storage volumes, and core routing between enterprise data centers.",
    description: "Coordinated mission-critical data center server and network migration for retail enterprise VMart. Executed pre-migration inventorying, network cutover planning, server de-racking and transport logistics, re-racking, IP re-addressing, and post-cutover application verification.",
    technicalHighlights: [
      "Designed structured migration execution plan minimizing business operational downtime during cutover windows",
      "Migrated rackmount compute nodes, SAN/NAS storage arrays, and network distribution appliances",
      "Reconfigured core switch VLAN interfaces, gateway addresses, and firewall NAT rules to match new subnet schemes",
      "Conducted post-migration connectivity verifications with POS endpoints and database clusters"
    ],
    toolsAndHardware: ["Rackmount Servers", "SAN Storage", "Core Switches", "Firewalls", "VLAN / Subnet Re-architecting"],
    status: "Completed Deployment",
    iconName: "Server",
    accentColor: "#00D4FF"
  },
  {
    id: "nutaste-server-assembly",
    number: "06",
    title: "Data Centre Server Assembly & Configuration — NUTASTE",
    category: "Compute & Servers",
    clientOrDomain: "NUTASTE Food & Drink Manufacturing",
    summary: "Physical server assembly, RAID array provisioning, hypervisor installation, and production ERP hosting.",
    description: "Assembled, deployed, and configured enterprise data center server hardware for NUTASTE Food & Drink manufacturing facilities. Provisioned hardware RAID arrays for fault-tolerant redundancy, deployed Linux hypervisor environments, and established secure local network access for manufacturing ERP systems.",
    technicalHighlights: [
      "Assembled multicore server chassis, redundant hot-swap power supplies, and ECC memory modules",
      "Configured hardware RAID controllers (RAID 10 / RAID 5) with hot-spare disk failover",
      "Installed enterprise Linux and configured automated storage snapshot and backup scheduling",
      "Integrated server into campus VLANs with firewall ACLs protecting production database ports"
    ],
    toolsAndHardware: ["Hardware RAID Controllers", "SAS/SATA Drives", "Linux Server OS", "Enterprise Rack Rails", "UPS Power Conditioning"],
    status: "Completed Deployment",
    iconName: "HardDrive",
    accentColor: "#168BFF"
  }
];

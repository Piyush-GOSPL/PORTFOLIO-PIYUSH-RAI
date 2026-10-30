export interface NetworkDevice {
  id: string;
  name: string;
  type: "router" | "l3switch" | "l2switch" | "firewall" | "server" | "pc" | "cloud";
  label: string;
  ip: string;
  vlan?: string;
  position: [number, number, number]; // 3D coordinates
  description: string;
}

export interface NetworkLink {
  id: string;
  from: string;
  to: string;
  type: "copper" | "fiber" | "trunk" | "vpn" | "serial";
  label?: string;
  vlanAllowed?: string;
}

export interface NetworkTopic {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: "Switching & Layer 2" | "Routing & Layer 3" | "Security & Edge" | "High Availability & Tunnels";
  explanation: string;
  keyConcepts: string[];
  activeDevices: string[]; // device IDs highlighted
  activeLinks: string[];   // link IDs highlighted
  packetFlow: {
    from: string;
    to: string;
    label: string;
    color: string;
  }[];
  ciscoCommands: string[];
  verificationCommands: string[];
}

export const networkDevices: NetworkDevice[] = [
  {
    id: "edge-cloud",
    name: "WAN-Cloud",
    type: "cloud",
    label: "ISP & Public WAN",
    ip: "203.0.113.1/30",
    position: [0, 3.5, -4],
    description: "Public Internet gateway and external service access provider."
  },
  {
    id: "fw-01",
    name: "FW-Perimeter",
    type: "firewall",
    label: "FortiGate / ASA Next-Gen FW",
    ip: "203.0.113.2 / 10.0.0.1",
    position: [0, 2.2, -2.5],
    description: "Stateful inspection, NAT/PAT translation, and perimeter ACL enforcement."
  },
  {
    id: "r-core-1",
    name: "R-Core-01",
    type: "router",
    label: "Core Edge Router 01 (Primary)",
    ip: "10.0.0.2/30",
    position: [-2.4, 1.2, -1.2],
    description: "Handles external BGP peering, OSPF routing, GRE encapsulation, and HSRP Active status."
  },
  {
    id: "r-core-2",
    name: "R-Core-02",
    type: "router",
    label: "Core Edge Router 02 (Standby)",
    ip: "10.0.0.6/30",
    position: [2.4, 1.2, -1.2],
    description: "Secondary edge router participating in HSRP standby gateway and OSPF dynamic routing."
  },
  {
    id: "sw-dist-1",
    name: "SW-Dist-L3",
    type: "l3switch",
    label: "Distribution L3 Switch (Core)",
    ip: "192.168.10.1 / 192.168.20.1",
    position: [0, 0.2, 0],
    description: "Cisco Catalyst multi-layer switch performing Inter-VLAN routing (SVIs) and EtherChannel distribution."
  },
  {
    id: "sw-acc-1",
    name: "SW-Access-Floor1",
    type: "l2switch",
    label: "Access Switch 01 (Sales & Eng)",
    ip: "192.168.10.2",
    vlan: "VLAN 10, 20",
    position: [-2.5, -1.2, 1.5],
    description: "Layer 2 access switch with 802.1Q trunk uplink, STP root protection, and port security."
  },
  {
    id: "sw-acc-2",
    name: "SW-Access-Floor2",
    type: "l2switch",
    label: "Access Switch 02 (DMZ / Mgmt)",
    ip: "192.168.30.2",
    vlan: "VLAN 30, 99",
    position: [2.5, -1.2, 1.5],
    description: "Layer 2 access switch servicing server farm and management VLAN."
  },
  {
    id: "pc-sales",
    name: "PC-Sales-01",
    type: "pc",
    label: "Sales Workstation",
    ip: "192.168.10.50/24",
    vlan: "VLAN 10",
    position: [-3.8, -2.5, 2.8],
    description: "Client workstation assigned to VLAN 10 (Sales Department)."
  },
  {
    id: "pc-eng",
    name: "PC-Eng-01",
    type: "pc",
    label: "Engineering Workstation",
    ip: "192.168.20.50/24",
    vlan: "VLAN 20",
    position: [-1.4, -2.5, 2.8],
    description: "Client workstation assigned to VLAN 20 (Engineering Subnet)."
  },
  {
    id: "srv-app",
    name: "SRV-Web-Prod",
    type: "server",
    label: "Web & ERPNext Server",
    ip: "192.168.30.10/24",
    vlan: "VLAN 30",
    position: [1.4, -2.5, 2.8],
    description: "Production web and business application server situated in VLAN 30."
  },
  {
    id: "srv-db",
    name: "SRV-DB-Prod",
    type: "server",
    label: "Database Server (MySQL)",
    ip: "192.168.30.20/24",
    vlan: "VLAN 30",
    position: [3.8, -2.5, 2.8],
    description: "Internal relational database cluster hosting production application records."
  }
];

export const networkLinks: NetworkLink[] = [
  { id: "l-cloud-fw", from: "edge-cloud", to: "fw-01", type: "fiber", label: "WAN Uplink" },
  { id: "l-fw-r1", from: "fw-01", to: "r-core-1", type: "copper", label: "DMZ Link A" },
  { id: "l-fw-r2", from: "fw-01", to: "r-core-2", type: "copper", label: "DMZ Link B" },
  { id: "l-r1-r2", from: "r-core-1", to: "r-core-2", type: "vpn", label: "HSRP / OSPF Adjacency" },
  { id: "l-r1-dist", from: "r-core-1", to: "sw-dist-1", type: "trunk", label: "Core Uplink 1" },
  { id: "l-r2-dist", from: "r-core-2", to: "sw-dist-1", type: "trunk", label: "Core Uplink 2" },
  { id: "l-dist-acc1", from: "sw-dist-1", to: "sw-acc-1", type: "trunk", label: "Port-Channel 1 (Trunk)" },
  { id: "l-dist-acc2", from: "sw-dist-1", to: "sw-acc-2", type: "trunk", label: "Port-Channel 2 (Trunk)" },
  { id: "l-acc1-sales", from: "sw-acc-1", to: "pc-sales", type: "copper", label: "Fa0/1 (VLAN 10)" },
  { id: "l-acc1-eng", from: "sw-acc-1", to: "pc-eng", type: "copper", label: "Fa0/2 (VLAN 20)" },
  { id: "l-acc2-app", from: "sw-acc-2", to: "srv-app", type: "copper", label: "Fa0/10 (VLAN 30)" },
  { id: "l-acc2-db", from: "sw-acc-2", to: "srv-db", type: "copper", label: "Fa0/20 (VLAN 30)" }
];

export const networkTopics: NetworkTopic[] = [
  {
    id: "vlan",
    number: 1,
    title: "VLAN (Virtual Local Area Network)",
    subtitle: "Logical Network Segmentation & Broadcast Domain Isolation",
    category: "Switching & Layer 2",
    explanation: "VLANs divide a single physical Layer 2 switch into multiple distinct logical broadcast domains. This isolates sensitive department traffic (e.g., Sales vs Engineering), enhances security, prevents broadcast storms, and optimizes bandwidth utilization.",
    keyConcepts: [
      "Breaks large Layer 2 broadcast domains into smaller isolated domains",
      "Assigns specific ports to separate VLAN IDs (1–4094)",
      "Requires Layer 3 routing for inter-VLAN communication"
    ],
    activeDevices: ["sw-acc-1", "pc-sales", "pc-eng"],
    activeLinks: ["l-acc1-sales", "l-acc1-eng"],
    packetFlow: [
      { from: "pc-sales", to: "sw-acc-1", label: "Untagged Frame", color: "#00C8FF" },
      { from: "sw-acc-1", to: "pc-eng", label: "VLAN Isolation (Blocked without L3)", color: "#1263B5" }
    ],
    ciscoCommands: [
      "! Configure VLAN 10 (Sales) and VLAN 20 (Engineering)",
      "Switch# configure terminal",
      "Switch(config)# vlan 10",
      "Switch(config-vlan)# name SALES_DEPT",
      "Switch(config-vlan)# exit",
      "Switch(config)# vlan 20",
      "Switch(config-vlan)# name ENGINEERING",
      "Switch(config-vlan)# exit"
    ],
    verificationCommands: [
      "Switch# show vlan brief",
      "Switch# show vlan id 10",
      "Switch# show interfaces status"
    ]
  },
  {
    id: "access-ports",
    number: 2,
    title: "Access Ports",
    subtitle: "End-Host Port Assignment & Tag Stripping",
    category: "Switching & Layer 2",
    explanation: "An Access Port connects end devices (PCs, printers, single NIC servers) to a single specific VLAN. Frames entering the port are tagged internally with the port's assigned VLAN ID, and the 802.1Q tag is stripped before frames exit toward the host.",
    keyConcepts: [
      "Belongs to only ONE access VLAN at a time",
      "Never passes 802.1Q tagged frames to the standard client device",
      "Protected with PortFast and BPDU Guard for instant desktop connectivity"
    ],
    activeDevices: ["sw-acc-1", "pc-sales"],
    activeLinks: ["l-acc1-sales"],
    packetFlow: [
      { from: "pc-sales", to: "sw-acc-1", label: "Access Port Ingress (Tag added)", color: "#0090D2" }
    ],
    ciscoCommands: [
      "Switch(config)# interface FastEthernet 0/1",
      "Switch(config-if)# description Link-To-Sales-PC-01",
      "Switch(config-if)# switchport mode access",
      "Switch(config-if)# switchport access vlan 10",
      "Switch(config-if)# spanning-tree portfast",
      "Switch(config-if)# spanning-tree bpduguard enable",
      "Switch(config-if)# no shutdown"
    ],
    verificationCommands: [
      "Switch# show interfaces fa0/1 switchport",
      "Switch# show running-config interface fa0/1"
    ]
  },
  {
    id: "trunk-ports",
    number: 3,
    title: "Trunk Ports (802.1Q)",
    subtitle: "Carrying Multiple VLANs Across Switch Interconnects",
    category: "Switching & Layer 2",
    explanation: "Trunk links connect switches together or connect a switch to a router/firewall. They insert a 4-byte 802.1Q header containing the 12-bit VLAN ID tag, allowing multiple VLAN broadcasts and frames to traverse a single physical cable.",
    keyConcepts: [
      "802.1Q standard encapsulation inserts a 4-byte VLAN tag",
      "Native VLAN traffic traverses the trunk untagged",
      "Allowed VLAN pruning restricts unnecessary broadcast flooding"
    ],
    activeDevices: ["sw-acc-1", "sw-dist-1"],
    activeLinks: ["l-dist-acc1"],
    packetFlow: [
      { from: "sw-acc-1", to: "sw-dist-1", label: "802.1Q Tagged Frame [VLAN 10/20]", color: "#00C8FF" }
    ],
    ciscoCommands: [
      "Switch(config)# interface GigabitEthernet 0/1",
      "Switch(config-if)# switchport trunk encapsulation dot1q",
      "Switch(config-if)# switchport mode trunk",
      "Switch(config-if)# switchport trunk allowed vlan 10,20,30,99",
      "Switch(config-if)# switchport trunk native vlan 99",
      "Switch(config-if)# switchport nonegotiate"
    ],
    verificationCommands: [
      "Switch# show interfaces trunk",
      "Switch# show interfaces gig0/1 switchport"
    ]
  },
  {
    id: "inter-vlan",
    number: 4,
    title: "Inter-VLAN Routing",
    subtitle: "Router-on-a-Stick & Layer 3 Switch SVIs",
    category: "Routing & Layer 3",
    explanation: "By default, devices in different VLANs cannot communicate because they reside in separate Layer 2 broadcast domains and IP subnets. Inter-VLAN routing enables cross-VLAN communication either via a Router-on-a-Stick (subinterfaces) or via Switched Virtual Interfaces (SVIs) on a Layer 3 switch.",
    keyConcepts: [
      "SVI (interface Vlan <id>) acts as default gateway on Multi-Layer Switch",
      "Router-on-a-stick uses subinterfaces with 'encapsulation dot1q <vlan>'",
      "Enables firewall rule enforcement between internal subnets"
    ],
    activeDevices: ["pc-sales", "sw-acc-1", "sw-dist-1", "srv-app"],
    activeLinks: ["l-acc1-sales", "l-dist-acc1", "l-dist-acc2", "l-acc2-app"],
    packetFlow: [
      { from: "pc-sales", to: "sw-dist-1", label: "VLAN 10 Ingress -> L3 Gateway SVI", color: "#0090D2" },
      { from: "sw-dist-1", to: "srv-app", label: "L3 Routed -> VLAN 30 Egress", color: "#00C8FF" }
    ],
    ciscoCommands: [
      "! Configuration on Layer 3 Distribution Switch",
      "CoreSwitch(config)# ip routing",
      "CoreSwitch(config)# interface vlan 10",
      "CoreSwitch(config-if)# ip address 192.168.10.1 255.255.255.0",
      "CoreSwitch(config-if)# no shutdown",
      "CoreSwitch(config)# interface vlan 30",
      "CoreSwitch(config-if)# ip address 192.168.30.1 255.255.255.0",
      "CoreSwitch(config-if)# no shutdown"
    ],
    verificationCommands: [
      "CoreSwitch# show ip route",
      "CoreSwitch# show ip interface brief | include Vlan"
    ]
  },
  {
    id: "dtp",
    number: 5,
    title: "DTP (Dynamic Trunking Protocol)",
    subtitle: "Automatic Trunk Negotiation & Security Hardening",
    category: "Switching & Layer 2",
    explanation: "Dynamic Trunking Protocol is a proprietary Cisco protocol that negotiates trunk links between neighboring switch ports. In production environments, best security practices dictate disabling DTP (switchport nonegotiate) to prevent unauthorized VLAN hopping attacks.",
    keyConcepts: [
      "Modes: dynamic auto, dynamic desirable, trunk, access",
      "Dynamic desirable actively attempts to form a trunk link",
      "Hardened practice: statically set 'mode access' or 'mode trunk' + 'nonegotiate'"
    ],
    activeDevices: ["sw-acc-1", "sw-dist-1"],
    activeLinks: ["l-dist-acc1"],
    packetFlow: [
      { from: "sw-acc-1", to: "sw-dist-1", label: "DTP Negotiation Packet (Suppressed)", color: "#1263B5" }
    ],
    ciscoCommands: [
      "Switch(config)# interface GigabitEthernet 0/1",
      "Switch(config-if)# switchport mode trunk",
      "Switch(config-if)# switchport nonegotiate",
      "! Disable on access ports for security",
      "Switch(config)# interface range fa0/1 - 24",
      "Switch(config-if-range)# switchport mode access",
      "Switch(config-if-range)# switchport nonegotiate"
    ],
    verificationCommands: [
      "Switch# show dtp interface gi0/1",
      "Switch# show interfaces gi0/1 switchport | include Negotiation"
    ]
  },
  {
    id: "stp",
    number: 6,
    title: "STP (Spanning Tree Protocol - 802.1D / RSTP)",
    subtitle: "Loop-Free Topologies & Redundant Bridging",
    category: "Switching & Layer 2",
    explanation: "STP prevents destructive Layer 2 switching loops and broadcast storms in redundant network designs. It elects a Root Bridge based on lowest Bridge ID (Priority + MAC) and logically places redundant backup ports in an Alternating/Blocking state until primary links fail.",
    keyConcepts: [
      "Root Bridge Election: Lowest Priority (default 32768) + MAC address",
      "Port States: Blocking -> Listening -> Learning -> Forwarding (RSTP: Discarding, Learning, Forwarding)",
      "BPDUs (Bridge Protocol Data Units) exchange topology health every 2 seconds"
    ],
    activeDevices: ["sw-dist-1", "sw-acc-1", "sw-acc-2"],
    activeLinks: ["l-dist-acc1", "l-dist-acc2"],
    packetFlow: [
      { from: "sw-dist-1", to: "sw-acc-1", label: "STP Root BPDU (Cost 0)", color: "#00C8FF" },
      { from: "sw-dist-1", to: "sw-acc-2", label: "STP Root BPDU (Cost 0)", color: "#00C8FF" }
    ],
    ciscoCommands: [
      "! Configure Root Bridge with high priority",
      "CoreSwitch(config)# spanning-tree mode rapid-pvst",
      "CoreSwitch(config)# spanning-tree vlan 1-100 root primary",
      "! Or explicitly set priority lower than default",
      "CoreSwitch(config)# spanning-tree vlan 10 priority 4096",
      "! Edge protection",
      "Switch(config-if)# spanning-tree portfast",
      "Switch(config-if)# spanning-tree bpduguard enable"
    ],
    verificationCommands: [
      "Switch# show spanning-tree",
      "Switch# show spanning-tree root",
      "Switch# show spanning-tree interface gi0/1 detail"
    ]
  },
  {
    id: "etherchannel",
    number: 7,
    title: "EtherChannel (LACP & PAgP)",
    subtitle: "Multi-Link Aggregation & Bandwidth Scaling",
    category: "Switching & Layer 2",
    explanation: "EtherChannel bundles up to 8 physical links into a single logical link (Port-Channel). This increases backbone throughput, offers seamless link redundancy without triggering STP recalculation, and performs hash-based load balancing across member links.",
    keyConcepts: [
      "LACP (IEEE 802.3ad): Standards-based (active / passive)",
      "PAgP: Cisco proprietary (desirable / auto)",
      "Static manual aggregation (on / on)",
      "Fast sub-second failover when any bundled physical link drops"
    ],
    activeDevices: ["sw-dist-1", "sw-acc-1"],
    activeLinks: ["l-dist-acc1"],
    packetFlow: [
      { from: "sw-acc-1", to: "sw-dist-1", label: "LACP Bundled Flow [Gi0/1 + Gi0/2]", color: "#0090D2" }
    ],
    ciscoCommands: [
      "Switch(config)# interface range GigabitEthernet 0/1 - 2",
      "Switch(config-if-range)# channel-group 1 mode active",
      "Switch(config-if-range)# exit",
      "Switch(config)# interface port-channel 1",
      "Switch(config-if)# switchport mode trunk",
      "Switch(config-if)# switchport trunk allowed vlan 10,20,30,99"
    ],
    verificationCommands: [
      "Switch# show etherchannel summary",
      "Switch# show etherchannel port-channel",
      "Switch# show interfaces port-channel 1"
    ]
  },
  {
    id: "static-routing",
    number: 8,
    title: "Static & Floating Static Routing",
    subtitle: "Deterministic Path Selection & Backup Routes",
    category: "Routing & Layer 3",
    explanation: "Static routes allow network administrators to explicitly define the next-hop IP or egress interface for destination networks. Floating static routes use higher Administrative Distance (e.g. AD 200 vs AD 1) to remain dormant until the primary dynamic or static route drops.",
    keyConcepts: [
      "Administrative Distance: Default Static AD = 1, Direct Connected = 0",
      "Default Route (Gateway of Last Resort): 0.0.0.0 0.0.0.0 <next-hop>",
      "Floating Static Route: Backup route configured with higher AD"
    ],
    activeDevices: ["r-core-1", "fw-01", "edge-cloud"],
    activeLinks: ["l-fw-r1", "l-cloud-fw"],
    packetFlow: [
      { from: "r-core-1", to: "fw-01", label: "Static Route 0.0.0.0/0 Next-Hop", color: "#1263B5" }
    ],
    ciscoCommands: [
      "! Default Gateway Route to Firewall",
      "Router(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.1",
      "! Specific Subnet Static Route",
      "Router(config)# ip route 192.168.30.0 255.255.255.0 10.0.0.5",
      "! Floating Backup Route (AD 200)",
      "Router(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.9 200"
    ],
    verificationCommands: [
      "Router# show ip route static",
      "Router# show ip route 0.0.0.0"
    ]
  },
  {
    id: "ospf",
    number: 9,
    title: "OSPF (Open Shortest Path First)",
    subtitle: "Dijkstra Link-State Dynamic Routing Protocol",
    category: "Routing & Layer 3",
    explanation: "OSPF (Open Shortest Path First) is an open-standard link-state routing protocol operating within an autonomous system (IGP). Routers build a complete topology map using Link State Advertisements (LSAs) and calculate optimal loop-free shortest paths using Dijkstra's SPF algorithm.",
    keyConcepts: [
      "Hierarchical Area Architecture: Area 0 (Backbone) required",
      "Metric based on Cumulative Cost = 100,000,000 / Bandwidth in bps",
      "Neighbor Adjacency States: Down -> Init -> 2-Way -> ExStart -> Exchange -> Loading -> Full",
      "Designated Router (DR) and Backup DR (BDR) election on broadcast segments"
    ],
    activeDevices: ["r-core-1", "r-core-2", "sw-dist-1"],
    activeLinks: ["l-r1-r2", "l-r1-dist", "l-r2-dist"],
    packetFlow: [
      { from: "r-core-1", to: "r-core-2", label: "OSPF Hello & LSA Updates", color: "#00C8FF" },
      { from: "r-core-1", to: "sw-dist-1", label: "SPF Shortest-Path Sync", color: "#0090D2" }
    ],
    ciscoCommands: [
      "Router(config)# router ospf 1",
      "Router(config-router)# router-id 1.1.1.1",
      "Router(config-router)# auto-cost reference-bandwidth 1000",
      "Router(config-router)# network 10.0.0.0 0.0.0.3 area 0",
      "Router(config-router)# network 192.168.10.0 0.0.0.255 area 0",
      "Router(config-router)# passive-interface default",
      "Router(config-router)# no passive-interface GigabitEthernet 0/0"
    ],
    verificationCommands: [
      "Router# show ip ospf neighbor",
      "Router# show ip ospf database",
      "Router# show ip route ospf"
    ]
  },
  {
    id: "eigrp",
    number: 10,
    title: "EIGRP (Enhanced Interior Gateway Routing Protocol)",
    subtitle: "Advanced Distance Vector & DUAL Algorithm",
    category: "Routing & Layer 3",
    explanation: "EIGRP is an advanced distance-vector protocol using the Diffusing Update Algorithm (DUAL) to deliver rapid convergence and loop-free routing. It maintains Successor and Feasible Successor routes for instantaneous backup switching without recalculation.",
    keyConcepts: [
      "Composite Metric: Bandwidth, Delay (and optional Reliability, Load, MTU)",
      "Feasibility Condition: Reported Distance (RD) < Feasible Distance (FD)",
      "Supports unequal-cost path load balancing via the 'variance' multiplier"
    ],
    activeDevices: ["r-core-1", "r-core-2"],
    activeLinks: ["l-r1-r2"],
    packetFlow: [
      { from: "r-core-1", to: "r-core-2", label: "EIGRP DUAL Update & Hello", color: "#00C8FF" }
    ],
    ciscoCommands: [
      "Router(config)# router eigrp 100",
      "Router(config-router)# no auto-summary",
      "Router(config-router)# network 10.0.0.0 0.0.0.3",
      "Router(config-router)# network 192.168.0.0 0.0.255.255",
      "Router(config-router)# variance 2"
    ],
    verificationCommands: [
      "Router# show ip eigrp neighbors",
      "Router# show ip eigrp topology",
      "Router# show ip route eigrp"
    ]
  },
  {
    id: "nat",
    number: 11,
    title: "Static NAT (Network Address Translation)",
    subtitle: "One-to-One Private to Public Address Mapping",
    category: "Security & Edge",
    explanation: "Static NAT provides a permanent one-to-one mapping between a private internal IPv4 address and a globally routable public IPv4 address. Commonly used for web servers and mail servers that must remain reachable from external internet clients.",
    keyConcepts: [
      "Permanent bidirectional 1:1 translation mapping",
      "Designates inside source and outside interface roles",
      "Preserves original port numbers in Layer 4 headers"
    ],
    activeDevices: ["fw-01", "srv-app", "edge-cloud"],
    activeLinks: ["l-fw-r1", "l-cloud-fw"],
    packetFlow: [
      { from: "edge-cloud", to: "fw-01", label: "Public Dest: 203.0.113.15", color: "#0090D2" },
      { from: "fw-01", to: "srv-app", label: "NAT Transformed: 192.168.30.10", color: "#00C8FF" }
    ],
    ciscoCommands: [
      "Router(config)# ip nat inside source static 192.168.30.10 203.0.113.15",
      "Router(config)# interface GigabitEthernet 0/0",
      "Router(config-if)# ip nat inside",
      "Router(config)# interface GigabitEthernet 0/1",
      "Router(config-if)# ip nat outside"
    ],
    verificationCommands: [
      "Router# show ip nat translations",
      "Router# show ip nat statistics"
    ]
  },
  {
    id: "dynamic-nat",
    number: 12,
    title: "Dynamic NAT",
    subtitle: "Pool-Based Many-to-Many Translation",
    category: "Security & Edge",
    explanation: "Dynamic NAT maps internal private addresses to a registered pool of public IP addresses on a first-come, first-served basis. If the pool of public IPs is exhausted, subsequent internal hosts must wait until an active session times out.",
    keyConcepts: [
      "Dynamic allocation from a defined public IP pool",
      "ACL identifies candidate internal source IP addresses",
      "Translations expire automatically after idle timeout periods"
    ],
    activeDevices: ["fw-01", "r-core-1"],
    activeLinks: ["l-fw-r1"],
    packetFlow: [
      { from: "r-core-1", to: "fw-01", label: "Dynamic Pool Allocation (203.0.113.20-30)", color: "#1263B5" }
    ],
    ciscoCommands: [
      "Router(config)# ip nat pool PUBLIC_POOL 203.0.113.20 203.0.113.30 netmask 255.255.255.0",
      "Router(config)# access-list 1 permit 192.168.10.0 0.0.0.255",
      "Router(config)# ip nat inside source list 1 pool PUBLIC_POOL"
    ],
    verificationCommands: [
      "Router# show ip nat translations verbose",
      "Router# show ip nat statistics"
    ]
  },
  {
    id: "pat",
    number: 13,
    title: "PAT (Port Address Translation / NAT Overload)",
    subtitle: "Many-to-One Translation Using Layer 4 TCP/UDP Ports",
    category: "Security & Edge",
    explanation: "PAT (also called NAT Overload) maps thousands of private internal IP addresses to a single public IP address by assigning unique Layer 4 source port numbers to each outbound conversation session. This is the foundation of modern internet access.",
    keyConcepts: [
      "Over 65,000 concurrent translation sockets per public IP",
      "Tracks connections using unique TCP/UDP source ports",
      "Conserves IPv4 address space for enterprise campuses"
    ],
    activeDevices: ["pc-sales", "pc-eng", "sw-acc-1", "sw-dist-1", "fw-01", "edge-cloud"],
    activeLinks: ["l-acc1-sales", "l-dist-acc1", "l-fw-r1", "l-cloud-fw"],
    packetFlow: [
      { from: "pc-sales", to: "fw-01", label: "Src 192.168.10.50:52134", color: "#0090D2" },
      { from: "fw-01", to: "edge-cloud", label: "PAT Overload: 203.0.113.2:40001", color: "#00C8FF" }
    ],
    ciscoCommands: [
      "! Configure Standard ACL matching internal subnets",
      "Router(config)# access-list 10 permit 192.168.0.0 0.0.255.255",
      "! NAT Overload onto WAN egress interface",
      "Router(config)# ip nat inside source list 10 interface GigabitEthernet 0/1 overload",
      "Router(config)# interface GigabitEthernet 0/0",
      "Router(config-if)# ip nat inside",
      "Router(config)# interface GigabitEthernet 0/1",
      "Router(config-if)# ip nat outside"
    ],
    verificationCommands: [
      "Router# show ip nat translations",
      "Router# clear ip nat translation *"
    ]
  },
  {
    id: "acl",
    number: 14,
    title: "ACL (Access Control Lists)",
    subtitle: "Packet Filtering & Traffic Inspection at Edge / Core",
    category: "Security & Edge",
    explanation: "Access Control Lists filter network traffic by comparing packet header fields against sequential permit and deny statements. Standard ACLs evaluate source IP only; Extended ACLs inspect source IP, destination IP, protocol (TCP/UDP/ICMP), and port numbers.",
    keyConcepts: [
      "Sequential rule matching with an implicit 'deny all' at the end",
      "Extended ACLs (100–199, 2000–2699) placed closest to source traffic",
      "Inbound vs Outbound packet inspection directions"
    ],
    activeDevices: ["fw-01", "sw-dist-1", "srv-db"],
    activeLinks: ["l-fw-r1", "l-dist-acc2", "l-acc2-db"],
    packetFlow: [
      { from: "pc-sales", to: "srv-db", label: "Blocked: Port 3306 Restricted by ACL", color: "#EF4444" }
    ],
    ciscoCommands: [
      "! Extended ACL: Allow Web & HTTPS, block direct MySQL from user VLAN",
      "Router(config)# ip access-list extended FILTER_USER_TRAFFIC",
      "Router(config-ext-nacl)# permit tcp 192.168.10.0 0.0.0.255 192.168.30.10 0.0.0.0 eq 80",
      "Router(config-ext-nacl)# permit tcp 192.168.10.0 0.0.0.255 192.168.30.10 0.0.0.0 eq 443",
      "Router(config-ext-nacl)# deny tcp 192.168.10.0 0.0.0.255 192.168.30.20 0.0.0.0 eq 3306",
      "Router(config-ext-nacl)# permit ip any any",
      "! Apply to incoming interface",
      "Router(config)# interface Vlan 10",
      "Router(config-if)# ip access-group FILTER_USER_TRAFFIC in"
    ],
    verificationCommands: [
      "Router# show access-lists",
      "Router# show ip interface vlan 10 | include access list"
    ]
  },
  {
    id: "hsrp",
    number: 15,
    title: "HSRP (Hot Standby Router Protocol)",
    subtitle: "First-Hop Default Gateway Redundancy",
    category: "High Availability & Tunnels",
    explanation: "HSRP is a Cisco First-Hop Redundancy Protocol (FHRP) that creates a transparent fault-tolerant default gateway. Active and Standby routers share a Virtual IP and Virtual MAC. If the Active router fails, the Standby router assumes forwarding duties with zero host reconfiguration.",
    keyConcepts: [
      "Shares Virtual IP (e.g. 10.0.0.254) and Virtual MAC (0000.0c07.acXX)",
      "Priority election (default 100); highest priority becomes Active",
      "'preempt' command allows higher priority router to reclaim active status"
    ],
    activeDevices: ["r-core-1", "r-core-2", "sw-dist-1"],
    activeLinks: ["l-r1-r2", "l-r1-dist", "l-r2-dist"],
    packetFlow: [
      { from: "r-core-1", to: "r-core-2", label: "HSRP Hello [Active <-> Standby]", color: "#00C8FF" },
      { from: "sw-dist-1", to: "r-core-1", label: "VIP 10.0.0.254 Traffic -> Active Router", color: "#0090D2" }
    ],
    ciscoCommands: [
      "! R1 - Primary Active Router",
      "R1(config)# interface GigabitEthernet 0/0",
      "R1(config-if)# ip address 10.0.0.2 255.255.255.0",
      "R1(config-if)# standby 1 ip 10.0.0.254",
      "R1(config-if)# standby 1 priority 110",
      "R1(config-if)# standby 1 preempt",
      "R1(config-if)# standby 1 authentication md5 key-string SecretKey",
      "! R2 - Standby Router",
      "R2(config)# interface GigabitEthernet 0/0",
      "R2(config-if)# ip address 10.0.0.6 255.255.255.0",
      "R2(config-if)# standby 1 ip 10.0.0.254",
      "R2(config-if)# standby 1 priority 90"
    ],
    verificationCommands: [
      "Router# show standby brief",
      "Router# show standby 1 detail"
    ]
  },
  {
    id: "gre-vpn",
    number: 16,
    title: "GRE VPN (Generic Routing Encapsulation)",
    subtitle: "Point-to-Point Tunneling Across Public Networks",
    category: "High Availability & Tunnels",
    explanation: "Generic Routing Encapsulation creates a point-to-point IP tunnel over an untrusted transport network (such as the Internet). GRE encapsulates any Layer 3 protocol payload inside IP packets, enabling dynamic routing protocols (like OSPF and EIGRP) to form neighbor adjacencies across WAN boundaries.",
    keyConcepts: [
      "Encapsulates multicast and broadcast traffic across WAN links",
      "Adds 24 bytes of overhead (20-byte IP header + 4-byte GRE header)",
      "Frequently paired with IPsec (GRE over IPsec) for confidentiality & encryption"
    ],
    activeDevices: ["r-core-1", "edge-cloud"],
    activeLinks: ["l-cloud-fw", "l-r1-r2"],
    packetFlow: [
      { from: "r-core-1", to: "edge-cloud", label: "GRE Tunnel Packet [IP Protocol 47]", color: "#00C8FF" }
    ],
    ciscoCommands: [
      "Router(config)# interface Tunnel 0",
      "Router(config-if)# ip address 172.16.1.1 255.255.255.252",
      "Router(config-if)# tunnel source GigabitEthernet 0/1",
      "Router(config-if)# tunnel destination 198.51.100.2",
      "Router(config-if)# tunnel mode gre ip",
      "Router(config-if)# ip mtu 1400",
      "Router(config-if)# ip tcp adjust-mss 1360"
    ],
    verificationCommands: [
      "Router# show interfaces tunnel 0",
      "Router# ping 172.16.1.2",
      "Router# show ip route tunnel 0"
    ]
  }
];


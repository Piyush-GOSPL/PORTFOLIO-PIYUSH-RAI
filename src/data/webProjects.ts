export interface WebProject {
  id: string;
  number: string;
  title: string;
  category: "Full Stack Web" | "Enterprise Frontend" | "Systems & EdTech" | "ERP Customization";
  website?: string;
  hasLiveDemo: boolean;
  technologies: string[];
  summary: string;
  description: string;
  architectureHighlights: string[];
  features: string[];
  status: "Live Production" | "Deployed Platform" | "Active System";
}

export const webProjectsData: WebProject[] = [
  {
    id: "arojima-foods",
    number: "01",
    title: "Arojima Foods",
    category: "Full Stack Web",
    website: "https://arojimafoods.com",
    hasLiveDemo: true,
    technologies: ["Python", "Django", "MySQL", "JavaScript", "REST APIs", "Tailwind CSS"],
    summary: "Full-scale agricultural & commercial food e-commerce platform with end-to-end shopping pipelines.",
    description: "An enterprise-grade e-commerce web platform engineered for product catalog discovery, dynamic variant pricing, secure checkout flows, and operational dispatch tracking. Engineered dynamic relational models in MySQL with Django ORM for multi-variant inventories.",
    architectureHighlights: [
      "Custom Django ORM models managing dynamic product variants & stock levels",
      "Secure SMS/Email OTP verification flow for customer sign-up and authentication",
      "Persistent session-backed shopping cart and multi-item wishlist workflows",
      "Integrated payment gateway with webhook verification for order confirmation",
      "Real-time shipment & order status tracking dashboard for customers & fulfillment staff"
    ],
    features: [
      "Product Variant Selector (Weights / Packs)",
      "Dynamic Cart & Real-time Tax / Shipping Calculation",
      "OTP-based Secure Authentication",
      "Wishlist & Quick View Modal",
      "Live Order Tracking Timeline",
      "Admin Inventory & Sales Dispatch Management"
    ],
    status: "Live Production"
  },
  {
    id: "volttrack-solar",
    number: "02",
    title: "VoltTrack Solar",
    category: "Enterprise Frontend",
    website: "https://www.volttracksolar.co.nz",
    hasLiveDemo: true,
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "Responsive Design"],
    summary: "High-conversion responsive clean-energy solutions website for residential and commercial customers in New Zealand.",
    description: "Architected a high-performance modern website targeting New Zealand's renewable energy sector. Designed custom interactive quote calculators, residential/commercial tier breakdowns, and fluid visual presentations tailored for high mobile responsiveness and search engine visibility.",
    architectureHighlights: [
      "Component-based React single-page architecture optimized for sub-second load times",
      "Interactive solar savings estimation calculator with client-side state models",
      "Custom responsive design system built strictly with Tailwind CSS",
      "Geo-targeted New Zealand service area directory and contact pipelines"
    ],
    features: [
      "Interactive Solar Energy Estimator",
      "Residential vs Commercial Comparison Panels",
      "Interactive Case Studies & ROI Breakdown",
      "Mobile-First Responsive Layout",
      "Lead Capture Pipeline with Client Validation"
    ],
    status: "Live Production"
  },
  {
    id: "sanatan-nz",
    number: "03",
    title: "Sanatan NZ",
    category: "Enterprise Frontend",
    website: "https://www.sanatan.nz",
    hasLiveDemo: true,
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Modern Web Architecture"],
    summary: "Modern community and cultural organization web portal with accessible navigation and event showcases.",
    description: "Developed a comprehensive digital presence for Sanatan New Zealand. Emphasized high visual clarity, seamless cross-device typography, community event calendars, announcements, and donation/membership inquiries.",
    architectureHighlights: [
      "Modern component architecture with accessible HTML5 semantics and ARIA tags",
      "Dynamic event schedule presentation and responsive media gallery",
      "Fast CDN distribution with optimized asset compression for quick mobile access"
    ],
    features: [
      "Event Calendar & Celebration Schedules",
      "Interactive Gallery with Lightbox Previews",
      "Community Announcement Board",
      "Bilingual-Friendly Clean Typography",
      "Direct Inquiry & Contact Form Integration"
    ],
    status: "Live Production"
  },
  {
    id: "bizapps365",
    number: "04",
    title: "BizApps365",
    category: "Enterprise Frontend",
    website: "https://www.bizapps365.co.nz",
    hasLiveDemo: true,
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Modern Cloud Hosting"],
    summary: "Enterprise business technology consultancy website showcasing cloud ERP, IT infrastructure, and modern SaaS solutions.",
    description: "Crafted a modern corporate digital interface for BizApps365 New Zealand, presenting enterprise software implementations, ERPNext migration consulting, cloud infrastructure services, and custom software development roadmaps.",
    architectureHighlights: [
      "Next.js modern web architecture with TypeScript for rigorous type safety",
      "Interactive project and ERP solution recommender with dynamic questions",
      "Professional enterprise glassmorphic design system matching global tech standards",
      "Enterprise lead capture and business service enquiry routing"
    ],
    features: [
      "Enterprise Service Showcase (ERP, Cloud, Dev)",
      "Interactive Solution Matcher Tool",
      "Client Engagement & Consultation Inquiries",
      "SEO Optimized Metadata & Structured Data",
      "Ultra-crisp Enterprise Typography"
    ],
    status: "Live Production"
  },
  {
    id: "networking-certification-platform",
    number: "05",
    title: "Networking Certification Platform",
    category: "Systems & EdTech",
    website: "https://github.com/PiyushKumarRai",
    hasLiveDemo: false,
    technologies: ["React.js", "Node.js", "Express.js", "SQLite", "Sequelize", "REST APIs"],
    summary: "Specialized practice and assessment platform for engineers preparing for Cisco CCNA and CCNP examinations.",
    description: "Engineered a full-stack examination and topology quiz platform tailored for networking students and professionals. Features categorized question banks across IP Routing, Switching, Subnetting, Security ACLs, and Network Automation with timed simulation runs and in-depth CLI explanations.",
    architectureHighlights: [
      "Express.js RESTful API serving randomized question sets categorized by CCNA/CCNP exam blueprints",
      "Sequelize ORM with SQLite backend for zero-overhead local deployment and lightning-fast queries",
      "Interactive topology subnet calculator and CLI command snippet viewer in React",
      "Score analytics tracking domain-specific weakness (e.g. OSPF vs Spanning-Tree)"
    ],
    features: [
      "Cisco CCNA 200-301 & CCNP Core Exam Simulation",
      "Interactive Subnetting & CIDR Practice Engine",
      "Command Syntax Quizzer with Instant Explanation",
      "Session Progress & Timed Mode Testing",
      "Domain Breakdown & Topic Review Mode"
    ],
    status: "Deployed Platform"
  },
  {
    id: "erpnext-customization",
    number: "06",
    title: "ERPNext Customization & Workflows",
    category: "ERP Customization",
    website: "https://github.com/PiyushKumarRai",
    hasLiveDemo: false,
    technologies: ["Frappe Framework", "ERPNext", "Python", "JavaScript", "MariaDB", "Linux"],
    summary: "Enterprise ERP customization, tailored CRM pipelines, automated server scripts, and custom DocType workflows.",
    description: "Architected customized business logic and tailored UI modules for enterprise workflows inside ERPNext. Implemented custom Frappe DocTypes, automated server-side validations via Python Server Scripts, custom client-side UI extensions with JavaScript, and transactional email automations.",
    architectureHighlights: [
      "Custom Frappe DocType architecture with linked child tables and computed fields",
      "Server-side Python Hooks intercepting document lifecycle events (validate, on_submit)",
      "Custom CRM pipeline enhancements with automated stage progression and lead assignment",
      "Tailored Print Formats using Jinja2 and Bootstrap CSS for branded invoices and quotations"
    ],
    features: [
      "Custom Lead & Opportunity Stage Automations",
      "Dynamic Pricing & Multi-Tier Discount Hooks",
      "Custom Role-Based Permission Matrices",
      "Automated PDF Invoicing & Notification Triggers",
      "REST API Integration for External Webhooks"
    ],
    status: "Active System"
  }
];


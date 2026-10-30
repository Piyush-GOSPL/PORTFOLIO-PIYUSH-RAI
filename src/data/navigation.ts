export interface NavLink {
  id: string;
  name: string;
  href: string;
  badge?: string;
  highlight?: boolean;
}

export const navLinks: NavLink[] = [
  { id: "about", name: "About", href: "#about" },
  { id: "skills", name: "Skills", href: "#skills" },
  { id: "infra-projects", name: "Network Projects", href: "#infra-projects" },
  { id: "web-projects", name: "Web Systems", href: "#web-projects" },
  { id: "networking-lab", name: "Cisco 3D Lab", href: "#networking-lab", highlight: true },
  { id: "experience", name: "Experience", href: "#experience" },
  { id: "certifications", name: "Certifications", href: "#certifications" },
  { id: "contact", name: "Contact", href: "#contact" }
];


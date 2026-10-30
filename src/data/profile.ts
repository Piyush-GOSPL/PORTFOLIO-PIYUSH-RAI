export interface ProfileData {
  name: string;
  tagline: string;
  title: string;
  roles: string[];
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  resumeDownloadUrl: string;
  stats: {
    label: string;
    value: string;
    caption: string;
  }[];
  heroTags: {
    name: string;
    color: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Piyush Rai",
  tagline: "BEYOND DIGITAL — Where Code Meets Enterprise Infrastructure",
  title: "Network Engineer | Full Stack Developer | Cloud & IT Infrastructure",
  roles: [
    "Network Engineer",
    "Full Stack Developer",
    "Cloud & IT Infrastructure Specialist",
    "Cisco IOS & Linux Administrator"
  ],
  bio: "Specializing in enterprise Cisco networking, data center migrations, perimeter firewalls, and modern full-stack application development. Bridging deterministic infrastructure engineering with scalable software architectures.",
  email: "piyushkumar9959@gmail.com",
  github: "https://github.com/PiyushKumarRai",
  linkedin: "https://www.linkedin.com/in/piyush-rai-43b5a9241/",
  resumeDownloadUrl: "mailto:piyushkumar9959@gmail.com?subject=Resume%20Request%20-%20Piyush%20Rai",
  stats: [
    {
      label: "Infrastructure Deployments",
      value: "6+",
      caption: "Data center, GPU server, & colocation rollouts"
    },
    {
      label: "Web Platforms",
      value: "6+",
      caption: "Commercial & enterprise systems in production"
    },
    {
      label: "Case Verifications",
      value: "50+",
      caption: "Active client onboarding cases resolved"
    },
    {
      label: "Cisco Protocol Labs",
      value: "16+",
      caption: "VLAN, OSPF, BGP, GRE VPN, NAT/PAT & ACLs"
    }
  ],
  heroTags: [
    { name: "Cisco", color: "#00D4FF" },
    { name: "React", color: "#168BFF" },
    { name: "Python", color: "#00D4FF" },
    { name: "AWS", color: "#168BFF" },
    { name: "Azure", color: "#00D4FF" },
    { name: "Linux", color: "#168BFF" },
    { name: "Networking", color: "#00D4FF" }
  ]
};

export const profile = {
  name: "Adedapo Popoola",
  alias: "Dsgnr Aremu",
  tagline: "7 years. Two disciplines. One obsession: Excellence.",
  roles: [
    "Graphic Designer",
    "Video Editor",
    "Brand Strategist",
  ],
  quote:
    "Whether it's a 15-second edit or a full brand identity, if it isn't 'NotTheRegular,' it isn't finished. I don't just make visuals; I create experiences that breathe.",
  bio:
    "I'm a multidisciplinary designer and video editor who works at the meeting point of tech and raw creativity. Over the last 7 years I've put in 5+ years on brand identity and graphic design, and sharpened my video editing over the past year.",
  personalNote:
    "Outside of work, I'm a tech enthusiast who's always picking up a new skill or thinking through a problem for fun. I'm an ambivert who gets along easily with people, I'm a big dog lover, and yes, I make a really good bowl of garri.",
  phone: "07048469296",
  phoneIntl: "+2347048469296",
  email: "dsgnraremu@gmail.com",
  location: "Lagos, Nigeria",
  languages: ["English", "Yoruba"],
} as const

export const stats = [
  { label: "Years of Experience", value: "7+" },
  { label: "Years in Graphic Design", value: "5+" },
  { label: "Year in Video Editing", value: "1+" },
] as const

export const coreSkills = [
  {
    title: "Graphics Design",
    description:
      "Brand identity systems, social campaigns and visual assets built to hold attention and stick in people's heads.",
  },
  {
    title: "Video Editing",
    description:
      "Match highlights, viral reels and storytelling edits, taken from concept to final cut and optimized for every platform.",
  },
] as const

export const tools = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "Framer",
  "After Effects",
  "Sketch",
] as const

export const interpersonalSkills = [
  "Creativity",
  "Team Work",
  "Positivity",
  "Communication",
] as const

export type Experience = {
  company: string
  location: string
  role: string
  period: string
  description: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: "Apollo 80six",
    location: "Lagos",
    role: "Graphics Designer / Video Editor",
    period: "Aug 2025 - Present",
    description:
      "A diversified media holding company at the forefront of digital storytelling, managing brands across social media and football culture content.",
    highlights: [
      "Conceptualize and execute high-impact social media graphics, including matchday posters, player stats and trending visuals.",
      "Design visual identities for live Watch Party events, from invitations to on-screen overlays.",
      "Lead post-production on high-energy football content, including match highlights and viral short-form reels.",
    ],
  },
  {
    company: "Nottheregular Studios",
    location: "Remote",
    role: "Lead Creative Technologist, Brand & Motion",
    period: "Apr 2023 - Present",
    description:
      "A multi-disciplinary design and development studio turning client concepts into polished brand identities and motion content.",
    highlights: [
      "Deliver end-to-end creative direction using a hybrid workflow of Adobe Creative Suite and generative AI.",
      "Lead brand identity projects from concept through final assets for clients across industries.",
      "Edit promotional videos and motion content that bring brand campaigns to life across platforms.",
    ],
  },
  {
    company: "WXFC",
    location: "Akure",
    role: "Graphics Designer",
    period: "Dec 2023 - May 2025",
    description:
      "Wonderxchange FC, a football club competing in Nigeria's NPFL League One.",
    highlights: [
      "Created match templates, jersey designs and social media campaigns.",
      "Designed websites for match-day articles and promotional content.",
      "Planned and executed visual content for matchdays and club activities through the season.",
    ],
  },
  {
    company: "Partfinda",
    location: "Lagos",
    role: "Lead Graphics Designer (Contract)",
    period: "May 2023 - Sept 2023",
    description:
      "A platform helping startups find leads, talent and grants, built from the ground up alongside its structure and brand strategy.",
    highlights: [
      "Coordinated junior designers, delegating roles and managing deadlines.",
      "Led branding and kept guidelines consistent across all social platforms.",
      "Helped close deals with SEL Healthcare (UK) and Givviepoint.",
    ],
  },
  {
    company: "Kinsleaf",
    location: "Ibadan",
    role: "Graphics Designer",
    period: "Sept 2022 - Nov 2023",
    description:
      "A results-driven real estate firm, bridging property listings and serious investors through high-conversion marketing assets.",
    highlights: [
      "Led a corporate rebrand that became the company's primary market face for years.",
      "Built visual identities for developments including Purple Lane, Green Estate, AMRG and Millennial Parks & Gardens.",
      "Designed event branding for corporate seminars and anniversary celebrations.",
    ],
  },
]

export type PortfolioLink = {
  label: string
  platform: string
  description: string
  href: string
}

export const portfolioLinks: PortfolioLink[] = [
  {
    label: "Graphics Design",
    platform: "Dribbble",
    description: "Brand identity, social and visual design shots.",
    href: "https://dribbble.com/Dsgnr__Aremu",
  },
  {
    label: "Sports Design",
    platform: "Behance",
    description: "Football club branding and matchday graphics.",
    href: "https://www.behance.net/nottheregular",
  },
  {
    label: "Video Editing",
    platform: "Google Drive",
    description: "A reel of highlights, edits and motion work.",
    href: "https://drive.google.com/drive/folders/1NjlDYViiDzRKIrUkJUWpSDwuL4048-uI?usp=sharing",
  },
]

import type { LucideIcon } from "lucide-react"
import {
  Rocket,
  FlaskConical,
  Lightbulb,
  Target,
  Layers,
  BookOpen,
  Users,
  Award,
  Archive,
  FileText,
  Mail,
  Globe,
  Image,
  Calendar,
  Share2,
  Code2,
} from "lucide-react"

export const OWNER = {
  name: "Abhijay Gopal",
  firstName: "Abhijay",
  role: "AI Product Manager • Researcher • IEEE Innovation Leader",
  headline: "Building Intelligent AI Products That Shape a Better Tomorrow.",
  tagline: "Translating frontier AI research & complex systems into high-impact B2B/B2C products and commercial enterprise solutions.",
  email: "hello@abhijaygopal.com",
  location: "San Francisco, CA",
}

export type EntryType = "folder" | "pdf" | "mail" | "web"

export type FileEntry = {
  title: string
  subtitle?: string
  description: string
  meta?: string
  tag?: string
}

export type Link = {
  label: string
  href: string
  handle: string
}

export type DesktopItem = {
  id: string
  name: string
  type: EntryType
  icon: LucideIcon
  col: number
  row: number
  inDock?: boolean
  onlyDock?: boolean
  entries?: FileEntry[]
  links?: Link[]
}

export const ITEMS: DesktopItem[] = [
  {
    id: "shipped",
    name: "My Shipped Products",
    type: "folder",
    icon: Rocket,
    col: 0,
    row: 0,
    entries: [
      {
        title: "Atlas — AI Research Copilot",
        subtitle: "0 → 1 · 120k MAU",
        meta: "Lead PM · 2024",
        tag: "Shipped",
        description:
          "Led product for an AI copilot that summarizes and cross-references long-form research. Drove the roadmap from concept to 120k monthly active users with a 41% week-4 retention rate.",
      },
      {
        title: "Signal — Enterprise Insights",
        subtitle: "B2B SaaS · $4M ARR",
        meta: "Senior PM · 2023",
        tag: "Shipped",
        description:
          "Owned an ML-powered analytics suite for enterprise teams. Shipped natural-language querying that cut time-to-insight by 60% for pilot customers.",
      },
      {
        title: "Muse — Creative Assistant",
        subtitle: "Consumer · iOS + Web",
        meta: "PM · 2022",
        tag: "Shipped",
        description:
          "Built a generative assistant for creators. Launched to 4.7★ on the App Store and grew to 300k installs in the first quarter.",
      },
    ],
  },
  {
    id: "teardowns",
    name: "AI Product Teardowns",
    type: "folder",
    icon: FlaskConical,
    col: 0,
    row: 1,
    entries: [
      {
        title: "Why Perplexity's onboarding works",
        meta: "Teardown · 8 min read",
        description:
          "A breakdown of how answer-first onboarding sets expectations, reduces the blank-canvas problem, and converts curiosity into habit.",
      },
      {
        title: "The economics of AI wrappers",
        meta: "Teardown · 11 min read",
        description:
          "When a thin wrapper is a feature and when it's a company — mapping defensibility, margins, and switching costs across the stack.",
      },
      {
        title: "Notion AI vs. the incumbents",
        meta: "Teardown · 6 min read",
        description:
          "How embedded AI changes the value of a document surface, and what it means for pricing and packaging decisions.",
      },
    ],
  },
  {
    id: "thinking",
    name: "Product Thinking Lab",
    type: "folder",
    icon: Lightbulb,
    col: 0,
    row: 2,
    entries: [
      {
        title: "Evals are the new PRD",
        meta: "Essay",
        description:
          "Why defining what 'good' looks like — with measurable evals — is becoming the core artifact of AI product management.",
      },
      {
        title: "Designing for probabilistic UX",
        meta: "Essay",
        description:
          "Frameworks for building trust when your product is right most of the time but not all of the time.",
      },
      {
        title: "The taste-to-spec pipeline",
        meta: "Essay",
        description:
          "How to translate qualitative product taste into rubrics your team and your models can both act on.",
      },
    ],
  },
  {
    id: "strategy",
    name: "Product Strategy",
    type: "folder",
    icon: Target,
    col: 1,
    row: 0,
    entries: [
      {
        title: "AI-native GTM playbook",
        meta: "Strategy doc",
        description:
          "A repeatable motion for taking AI features from private beta to GA, including pricing, positioning, and guardrails.",
      },
      {
        title: "Build vs. buy vs. fine-tune",
        meta: "Framework",
        description:
          "A decision framework for choosing between foundation-model APIs, open weights, and in-house training.",
      },
    ],
  },
  {
    id: "case-studies",
    name: "Case Studies",
    type: "folder",
    icon: Layers,
    col: 1,
    row: 1,
    entries: [
      {
        title: "Cutting hallucinations by 3x",
        meta: "Case study · Atlas",
        description:
          "How retrieval design, citation UX, and a feedback loop reduced factual errors and lifted user trust scores.",
      },
      {
        title: "From 12% to 41% retention",
        meta: "Case study · Atlas",
        description:
          "The activation experiments and habit loops that transformed a leaky funnel into a durable product.",
      },
    ],
  },
  {
    id: "research",
    name: "Research Lab",
    type: "folder",
    icon: BookOpen,
    col: 1,
    row: 2,
    entries: [
      {
        title: "How people trust AI answers",
        meta: "User research · n=48",
        description:
          "A mixed-methods study on the signals that make users believe — or doubt — an AI-generated response.",
      },
      {
        title: "Prompting behavior in the wild",
        meta: "Research · longitudinal",
        description:
          "Patterns in how non-expert users phrase requests, and what that means for interface design.",
      },
    ],
  },
  {
    id: "leadership",
    name: "Leadership",
    type: "folder",
    icon: Users,
    col: 2,
    row: 0,
    entries: [
      {
        title: "Building a 0→1 product team",
        meta: "Reflection",
        description:
          "Lessons from hiring and scaling a cross-functional team of designers, ML engineers, and researchers.",
      },
      {
        title: "Mentoring APMs",
        meta: "Program",
        description:
          "Ran an internal apprenticeship that graduated 6 associate PMs into full ownership roles.",
      },
    ],
  },
  {
    id: "awards",
    name: "Awards & Recognition",
    type: "folder",
    icon: Award,
    col: 2,
    row: 1,
    entries: [
      {
        title: "Product of the Year — Finalist",
        meta: "2024",
        description: "Recognized for Atlas among a shortlist of standout AI products.",
      },
      {
        title: "Top 40 Under 40 in Product",
        meta: "2023",
        description: "Named to an industry list celebrating emerging product leaders.",
      },
      {
        title: "Best AI UX — Community Award",
        meta: "2022",
        description: "Awarded for the design of Muse's creative assistant.",
      },
    ],
  },
  {
    id: "archive",
    name: "Archive",
    type: "folder",
    icon: Archive,
    col: 2,
    row: 2,
    entries: [
      {
        title: "Early experiments & side projects",
        meta: "2018 – 2021",
        description:
          "A grab bag of prototypes, hackathon wins, and weekend builds from before the AI-native era.",
      },
    ],
  },
  {
    id: "gallery",
    name: "Gallery",
    type: "folder",
    icon: Image,
    col: 3,
    row: 0,
    inDock: true,
    entries: [
      {
        title: "Speaking Engagements",
        meta: "2024",
        description: "Keynotes and panels on AI product, research, and innovation.",
      },
      {
        title: "Conference Highlights",
        meta: "2023 – 2024",
        description: "Best moments from product and AI conferences.",
      },
      {
        title: "Team & Events",
        meta: "Behind the scenes",
        description: "Photos from launches, team offsites, and community events.",
      },
    ],
  },
  {
    id: "resume",
    name: "Resume.pdf",
    type: "pdf",
    icon: FileText,
    col: 3,
    row: 1,
    inDock: true,
    onlyDock: true,
    entries: [
      {
        title: "AI Product Manager & Innovation Research Lead",
        subtitle: "Present",
        meta: "Leading AI product strategy and applied research.",
        description:
          "Own product vision and roadmap for a suite of AI products. Bridge research and shipping — turning novel model capabilities into durable, loved features.",
      },
      {
        title: "Senior Product Manager",
        subtitle: "2021 – 2024",
        meta: "Enterprise AI · B2B SaaS",
        description: "Scaled an ML analytics platform to $4M ARR and led the 0→1 launch of an AI research copilot.",
      },
      {
        title: "Product Manager",
        subtitle: "2019 – 2021",
        meta: "Consumer mobile",
        description: "Shipped a generative creative assistant to 300k users across iOS and web.",
      },
    ],
  },
  {
    id: "contact",
    name: "Contact",
    type: "mail",
    icon: Mail,
    col: 3,
    row: 2,
    inDock: true,
    onlyDock: true,
  },
  {
    id: "linkedin",
    name: "My LinkedIn Profile",
    type: "web",
    icon: Share2,
    col: 3,
    row: 3,
    inDock: true,
    onlyDock: true,
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/abhijaygopal", handle: "/in/abhijaygopal" },
    ],
  },
  {
    id: "github",
    name: "GitHub Profile",
    type: "web",
    icon: Code2,
    col: 4,
    row: 0,
    inDock: true,
    onlyDock: true,
    links: [
      { label: "GitHub", href: "https://github.com/abhijaygopal", handle: "@abhijaygopal" },
    ],
  },
  {
    id: "mail-dock",
    name: "Mail",
    type: "mail",
    icon: Mail,
    col: 4,
    row: 1,
    inDock: true,
    onlyDock: true,
  },
  {
    id: "calendar",
    name: "Calendar",
    type: "web",
    icon: Calendar,
    col: 4,
    row: 2,
    inDock: true,
    onlyDock: true,
    links: [
      { label: "Book a Meeting", href: "https://calendar.app.google.com/calendar/u/0/r", handle: "Google Calendar" },
    ],
  },
  {
    id: "connect",
    name: "Connect",
    type: "web",
    icon: Globe,
    col: 4,
    row: 3,
    onlyDock: true,
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/abhijaygopal", handle: "/in/abhijaygopal" },
      { label: "X / Twitter", href: "https://x.com/abhijaygopal", handle: "@abhijaygopal" },
      { label: "GitHub", href: "https://github.com/abhijaygopal", handle: "@abhijaygopal" },
      { label: "Substack", href: "https://substack.com/profile/abhijay", handle: "abhijay.substack.com" },
    ],
  },
]

export const DOCK_ITEM_IDS = ["gallery", "contact", "linkedin", "github", "resume", "mail-dock", "calendar"]

// All the content that is shared between pages lives here,
// so a new program or stat only needs to be added once.

export const TELEGRAM_URL = "https://t.me/pinkcodeeed";
export const EMAIL = "info@pinkcoded.net";

// Shown on the Home and About pages. Add or remove items freely —
// the layout adjusts to any number of stats.
export const stats = [
  { value: "7K+", label: "members in our online & offline community" },
  { value: "2K+", label: "girls trained in our courses and programs" },
  { value: "20+", label: "countries our community reaches" },
];

export const programs = [
  {
    id: "ielts-marathon",
    title: "IELTS Marathon",
    format: "4-week online bootcamp",
    description:
      "Speaking clubs, essay workshops and realistic mock tests for girls aiming at 7.0+.",
    status: "Completed",
    image: "/images/events/ielts-marathon.jpeg",
  },
  {
    id: "richmond-common-app",
    title: "Common App Review with Richmond University",
    format: "Application & essay clinic",
    description:
      "Live feedback from admissions officers on activities, personal statements and supplements.",
    status: "Completed",
    image: "/images/events/commonapp-review.jpg",
  },
  {
    id: "summer-programs",
    title: "Summer Programs Bootcamp",
    format: "Finding & applying to summer schools",
    description:
      "Step-by-step support: where to apply, how to write motivation letters and how to ask for recommendations.",
    status: "Completed",
    image: "/images/events/summer-bootcamp.jpg",
  },
  {
    id: "sat-marathon",
    title: "SAT Marathon",
    format: "Math & English intensive",
    description:
      "Weekly diagnostics, strategy sessions and small study groups led by mentors who took the SAT themselves.",
    status: "Completed",
    image: "/images/events/sat-marathon.jpg",
  },
];

export const pillars = [
  {
    title: "Code & projects",
    text: "From the first lines of Python or JavaScript to apps, hackathons and startup-level ideas.",
    icon: "code",
  },
  {
    title: "English",
    text: "Speaking clubs, essay structure and academic vocabulary for exams, research and applications.",
    icon: "chat",
  },
  {
    title: "Olympiads & research",
    text: "Preparation, project labs and science fairs — from the first idea to the final presentation.",
    icon: "spark",
  },
  {
    title: "Studying abroad",
    text: "Summer schools and college applications with real examples, checklists and peer mentors.",
    icon: "globe",
  },
];

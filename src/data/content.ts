import iconCart from "../assets/icon-cart3.svg";
import iconPhone from "../assets/icon-phone.svg";
import iconTruck from "../assets/icon-truck.svg";
import iconWindow from "../assets/icon-window-sidebar.svg";
import thumbAtelier from "../assets/thumb-atelier.svg";
import thumbFresco from "../assets/thumb-fresco.svg";
import thumbNordlicht from "../assets/thumb-nordlicht.svg";
import thumbRoutely from "../assets/thumb-routely.svg";

export const navLinks = [
  { label: "about", href: "#about" },
  { label: "services", href: "#services" },
  { label: "contact", href: "#contact" },
  { label: "projects", href: "#projects" },
];

export const expertise = ["E-Commerce", "Mobile Apps", "Logistics", "Websites"];

export const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "40+", label: "Happy clients" },
  { value: "8 yrs", label: "In the craft" },
];

export const services = [
  {
    icon: iconPhone,
    title: "Mobile Apps",
    description: "Native-feeling iOS and Android apps, from first prototype to App Store launch.",
  },
  {
    icon: iconWindow,
    title: "Websites",
    description: "Fast, responsive marketing sites and web apps that turn visitors into customers.",
  },
  {
    icon: iconCart,
    title: "E-Commerce",
    description:
      "Storefronts and checkout flows designed to convert, built on platforms you can manage.",
  },
  {
    icon: iconTruck,
    title: "Logistics",
    description: "Dashboards and tracking tools that keep fleets, orders and teams in sync.",
  },
];

export const projects = [
  { thumbnail: thumbFresco, title: "Fresco · Grocery delivery app", tags: ["Mobile app", "UX/UI"] },
  { thumbnail: thumbRoutely, title: "Routely · Fleet dashboard", tags: ["Web app", "Logistics"] },
  { thumbnail: thumbAtelier, title: "Atelier · Fashion store", tags: ["E-Commerce", "Branding"] },
  { thumbnail: thumbNordlicht, title: "Nordlicht · Studio website", tags: ["Website", "Motion"] },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Workshops to understand your users, business goals and technical constraints.",
  },
  {
    number: "02",
    title: "Design",
    description: "Wireframes, prototypes and a polished UI system, tested with real people.",
  },
  {
    number: "03",
    title: "Build",
    description: "Clean, scalable code shipped in weekly iterations you can click through.",
  },
  {
    number: "04",
    title: "Launch & grow",
    description: "Smooth releases, analytics and ongoing support as your product evolves.",
  },
];

export const testimonials = [
  {
    initials: "LM",
    name: "Lena Marsh",
    role: "Founder, Fresco",
    quote:
      "NO_PAPER turned a rough napkin sketch into an app our customers genuinely love. Fast, thoughtful and a joy to work with.",
  },
  {
    initials: "JW",
    name: "Jonas Weber",
    role: "COO, Routely",
    quote:
      "Our dispatch team went from five spreadsheets to one dashboard. The attention to detail in every screen is outstanding.",
  },
  {
    initials: "AO",
    name: "Amara Okafor",
    role: "Head of Digital, Atelier",
    quote:
      "They redesigned our store end to end and conversions jumped 38% in the first quarter. We would hire them again tomorrow.",
  },
];

export const contact = {
  email: "hello@nopaper.studio",
  phone: "+1 (555) 014-2290",
  phoneHref: "tel:+15550142290",
  location: "Remote · Working worldwide",
};

export const footerColumns = [
  {
    title: "Studio",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Process", href: "#process" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Mobile apps", href: "#services" },
      { label: "Websites", href: "#services" },
      { label: "E-Commerce", href: "#services" },
      { label: "Logistics", href: "#services" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@nopaper.studio", href: "mailto:hello@nopaper.studio" },
      { label: "+1 (555) 014-2290", href: "tel:+15550142290" },
      { label: "Remote · Worldwide", href: "#contact" },
    ],
  },
];

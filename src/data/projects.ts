import type { Project } from "../lib/projects";

export const categoryOrder = ["web apps", "flipper zero", "experiments"];

export const projects: Project[] = [
  {
    name: "EventSplit",
    emoji: "🧾",
    icon: "https://endika.github.io/EventSplit/favicon.ico",
    desc: {
      en: "Split group expenses and settle up, no signup.",
      es: "Reparte gastos de grupo y salda cuentas, sin registro.",
    },
    url: "https://endika.github.io/EventSplit/",
    type: "live",
    tag: "PWA",
    category: "web apps",
  },
  {
    name: "ConvertHub",
    emoji: "🔁",
    desc: {
      en: "Fast file and unit conversions in the browser.",
      es: "Conversiones rápidas de ficheros y unidades en el navegador.",
    },
    url: "https://endika.github.io/converthub/",
    type: "live",
    tag: "PWA",
    category: "web apps",
  },
  {
    name: "Mintza",
    emoji: "💬",
    icon: "https://endika.github.io/mintza/favicon.svg",
    desc: {
      en: "Quick language conversation drills.",
      es: "Ejercicios rápidos de conversación para practicar idiomas.",
    },
    url: "https://endika.github.io/mintza/",
    type: "live",
    tag: "PWA",
    category: "web apps",
  },
  {
    name: "Monete",
    emoji: "💰",
    icon: "https://endika.github.io/Monete/favicon.ico",
    desc: {
      en: "Lightweight personal finance tracking.",
      es: "Seguimiento de finanzas personales, ligero.",
    },
    url: "https://endika.github.io/Monete/",
    type: "live",
    tag: "PWA",
    category: "web apps",
  },
  {
    name: "Kartaak",
    emoji: "🃏",
    icon: "https://endika.github.io/kartaak/favicon.svg",
    desc: {
      en: "Card-based tool for tabletop sessions.",
      es: "Herramienta de cartas para sesiones de mesa.",
    },
    url: "https://endika.github.io/kartaak/",
    type: "live",
    tag: "PWA",
    category: "web apps",
  },
  {
    name: "HyperFocus Calc",
    emoji: "🎯",
    desc: {
      en: "Focus timing app for the Flipper Zero.",
      es: "App de tiempos de concentración para la Flipper Zero.",
    },
    url: "https://github.com/Endika/flipper-hyper-focus-calc",
    type: "repo",
    tag: "Flipper",
    category: "flipper zero",
  },
  {
    name: "Habit Flow",
    emoji: "🔁",
    desc: {
      en: "On-device habit tracker for the Flipper Zero.",
      es: "Seguimiento de hábitos en la propia Flipper Zero.",
    },
    url: "https://github.com/Endika/flipper-habit-flow",
    type: "repo",
    tag: "Flipper",
    category: "flipper zero",
  },
  {
    name: "NFC Stock",
    emoji: "📦",
    desc: {
      en: "Inventory tracking via NFC tags.",
      es: "Control de inventario mediante etiquetas NFC.",
    },
    url: "https://github.com/Endika/flipper-nfc-stock",
    type: "repo",
    tag: "Flipper",
    category: "flipper zero",
  },
  {
    name: "Trivia Zero",
    emoji: "❓",
    desc: {
      en: "Trivia game for the Flipper Zero.",
      es: "Juego de preguntas para la Flipper Zero.",
    },
    url: "https://github.com/Endika/flipper-trivia-zero",
    type: "repo",
    tag: "Flipper",
    category: "flipper zero",
  },
  {
    name: "Influence Sensor",
    emoji: "📡",
    icon: "https://endika.github.io/influence-sensor/favicon.svg",
    desc: {
      en: "Personal data and influence analysis experiments.",
      es: "Experimentos de análisis de datos personales e influencia.",
    },
    url: "https://endika.github.io/influence-sensor/",
    type: "live",
    tag: "tool",
    category: "experiments",
  },
  {
    name: "Loud Noise Detector",
    emoji: "🔊",
    desc: {
      en: "Ambient noise detection and alerting.",
      es: "Detección de ruido ambiente y alertas.",
    },
    url: "https://github.com/Endika/loud-noise-detector",
    type: "repo",
    tag: "tool",
    category: "experiments",
  },
];

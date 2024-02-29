import { meta, kartonmedya, verisoft, okttrailer, ppa } from "../assets/images";
import {
  arcgisenterprise,
  arcgispro,
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  tbc,
  geonode,
  geoserver,
  postgis,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: arcgispro,
    name: "ArcGIS PRO",
    type: "Aplication",
    score: "4.8/5",
  },
  {
    imageUrl: arcgisenterprise,
    name: "ArcGIS Enterprise",
    type: "System Aplication",
    score: "4.5/5",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
    score: "4/5",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
    score: "3/5",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
    score: "4/5",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    score: "3.8/5",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    score: "3.8/5",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    score: "3/5",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
    score: "2/5",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
    score: "2/5",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
    score: "2/5",
  },
  {
    imageUrl: tbc,
    name: "Trimble Businees Center",
    type: "Frontend",
    score: "4/5",
  },
  {
    imageUrl: geonode,
    name: "GeoNode",
    type: "Frontend",
    score: "4.3/5",
  },
  {
    imageUrl: geoserver,
    name: "GeoServer",
    type: "Frontend",
    score: "4.5/5",
  },

  {
    imageUrl: postgis,
    name: "Postgres and PostGIS",
    type: "Frontend",
    score: "3.8/5",
  },
];

export const experiences = [
  {
    title: "Research And Development",
    company_name: "PT.Geonet Infomedia",
    icon: verisoft,
    iconBg: "#accbe1",
    date: "April 2023 - Now",
    points: [
      "Creating and developing geospatial solution to meet consumer needs.",
      "Redesigning and refining existing internal products.",
      "Collaborating with cross-functional teams including developers, GIS Engineer, and other developers to create high-quality solution.",
      "Create and testing prototypes for functionality and longevity.",
      "Skill: ArcGIS Pro, ArcGIS Enterprise, ArcGIS GeoEvent Server, Javascript, NodeJS, ReactJS, ReactNative, SQL/NO-SQL Database , PWA, .",
    ],
  },
  {
    title: "GIS Technician",
    company_name: "Pertamina Hulu Mahakam (Undercontract PT.Geonet Infomedia)",
    icon: okttrailer,
    iconBg: "#c0c0c0",
    date: "January 2021- April 2023",
    points: [
      "Processing and providing data support, drone photos, satellite imagery and LiDAR Data in 2D or 3D to support field activities.",
      "Making geospatial tools with Python programming language.",
      "Data support for ArcGIS enterprise/portal.",
      "Skill : ArcGIS Pro, ArcGIS Enterprise, Phyton, QGIS, JavaScript, Global Mapper",
    ],
  },
  {
    title: " Freelance Geodetic Engineer",
    company_name: "PT. Pratama Persada Airborne",
    icon: ppa,
    iconBg: "#c8a2c8",
    date: "Apr 2017 - Dec 2020",
    points: [
      "Lead and plan strategy to measurement GCP/ICP for LiDAR data acquisition.",
      "Processing and make report GNSS data.",
      "Briefing and evaluation related to activities and drawing conclusions from team discussions.",
      "Skill : GPS Geodetic, Excel, Total Station, Trimble Bussiness Center (TBC)",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/emredkyc",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/burak-emre-dokuyucu",
  },
];

export const projects = [
  {
    iconUrl: geonode,
    theme: "btn-back-pink",
    name: "Geospatial Portal Information (Prototype)",
    description:
      "A web-based application and platform for developing geospatial information systems (GIS) and for deploying spatial data infrastructures (SDI).",
    skill: "Geonode, GeoServer",
    link: "/sorry",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Recomended Restaurant By Umar",
    description:
      "A captivating website equipped with the ability to store and showcase restaurant locations on an interactive map, offering enticing recommendations for exploration.",
    skill: "PHP, CodeIgnater 4, Leaflet, Login",
    link: "/sorry",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "React Native Geolocation",
    description:
      "Build and Deploy a Modern Next.js 14 Application | React, Next JS 14, TypeScript, Tailwind CSS",
    link: "/sorry",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-yellow",
    name: "Personal portfolio website.",
    description: "Personal portfolio website.",
    link: "https://emredkyc.vercel.app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-green",
    name: "Tracking in Progresive Web Application ",
    description:
      "This is a Exercise App that was built using Rapid API and is a PWA web app. It shows different exercises for gym freak as well as videos of each and every exercise with full details of the exercises with great explanation.",
    link: "https://exercise-dev.vercel.app",
  },
];

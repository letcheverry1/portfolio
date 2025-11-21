import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, Linkedin, Mail, Globe, ChevronDown,
  Database, Settings, Code, BarChart3, Cpu, Layers, Phone,
  Award, FileText, Download, Brain, Layout, BookOpen, TrendingUp, X, ExternalLink, Box, PenTool
} from 'lucide-react';
import ProjectShowcase from './components/ProjectShowcase';
import AnomalyDashboard from './components/AnomalyDashboard';

// --- GLOBAL DATA (REAL INFO) ---
const globalData = {
  name: "Lautaro E. Etcheverry",
  role: {
    en: "Industrial Engineer + Data Scientist",
    es: "Ingeniero Industrial + Científico de Datos"
  },
  // Asegúrate de que la foto esté en /public/foto-perfil.jpg
  photoUrl: "/foto-perfil.jpg",
  resume: {
    en: "/cv_etcheverry_en.pdf",
    es: "/cv_etcheverry_es.pdf"
  },
  social: {
    github: "https://github.com/letcheverry1",
    linkedin: "https://www.linkedin.com/in/lautaro-etcheverry/",
    email: "mailto:lautaroeetcheverry@gmail.com",
    phone: "https://wa.me/5491155702759"
  },
  certifications: [
    {
      title: "Oracle Certified Associate",
      issuer: "Oracle + Alura Latam",
      year: "2025",
      desc: "Data Science & Cloud Infrastructure (ONE Program)",
      icon: "Award",
      color: "yellow"
    },
    {
      title: "Data Science & Python Track",
      issuer: "Alura Latam",
      year: "2025",
      desc: "Python, Pandas, NumPy & Programming Logic",
      icon: "Database",
      color: "purple"
    },
    {
      title: "Generative AI Specialist",
      issuer: "Alura Latam",
      year: "2025",
      desc: "Prompt Engineering, ChatGPT & AI Productivity",
      icon: "Brain",
      color: "sky"
    },
    {
      title: "Web Development Foundations",
      issuer: "Alura Latam",
      year: "2024",
      desc: "HTML5, CSS3, JavaScript & Git/GitHub Control",
      icon: "Layout",
      color: "blue"
    },
    {
      title: "Business Intelligence (SAP & PowerBI)",
      issuer: "Udemy",
      year: "In Progress",
      desc: "Advanced Analytics & ERP Integration",
      icon: "TrendingUp",
      color: "green"
    }
  ]
};

// --- TRANSLATIONS (CV ADAPTED) ---
const translations = {
  en: {
    nav: { about: "About", engineering: "Engineering", data: "Data", projects: "Projects", contact: "Contact" },
    hero: { greeting: "Hello, I'm", scroll: "Scroll to explore", download: "Download CV" },
    about: {
      title: "About Me",
      description: "I am an advanced Industrial Engineering student at UTN with a specialized focus on Data Science. My professional value lies in the intersection of operational rigor and digital intelligence. Unlike a traditional developer, I understand the physical processes behind the data. My experience ranges from quality control at Mercedes-Benz to managing operations at 'Entre Dos Copas', allowing me to optimize systems with a holistic perspective."
    },
    engineering: {
      title: "Engineering Hub",
      subtitle: "Process Optimization & IoT",
      desc: "Bridging the gap between physical operations and digital twins. I use CAD tools like Solid Edge and AutoCAD for design, integrated with Python for process validation."
    },
    data: {
      title: "Data Lab",
      subtitle: "Analytics & Decision Making",
      desc: "Transforming raw data into strategic insights. Expertise in ETL processes, anomaly detection, and KPI visualization using the Python ecosystem (Pandas, Matplotlib)."
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "Store Performance Analytics",
          desc: "ETL pipeline and EDA to identify underperforming branches (anomalies) and optimize retail strategy.",
          longDescription: "A comprehensive data analysis solution designed to optimize retail performance. This project involved building a robust ETL pipeline to ingest sales data from multiple sources, cleaning and transforming it for analysis. Using advanced statistical methods, I identified key performance indicators and detected anomalies in store performance, leading to actionable insights for strategic decision-making.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
          tags: ["Python", "Pandas", "Matplotlib", "ETL"],
          details: [
            "Processed over 1M+ transaction records",
            "Reduced data processing time by 40%",
            "Identified 15% underperforming branches"
          ]
        },
        {
          title: "Industrial Design & AI Media",
          desc: "Mechanical prototyping with Solid Edge/AutoCAD combined with AI-generated video content for industrial marketing.",
          longDescription: "Bridging the gap between traditional industrial design and modern digital marketing. This project showcases the integration of precise CAD modeling with cutting-edge generative AI tools to create compelling visual narratives for industrial products. The workflow demonstrates how engineering precision can meet creative storytelling.",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
          tags: ["Solid Edge", "AutoCAD", "GenAI", "Prototyping"],
          details: [
            "3D Modeling with Solid Edge",
            "AI Video Generation for Marketing",
            "Reduced prototyping costs by 25%"
          ]
        },
        {
          title: "Web Dev & Operations",
          desc: "From building the operational site for 'Entre Dos Copas' (HTML/JS) to assisting in React/Magento migrations for fashion retail.",
          longDescription: "A full-stack web development initiative focused on operational efficiency. Starting with a custom HTML/JS solution for 'Entre Dos Copas' to manage daily operations, this project evolved into supporting complex migrations for large-scale fashion retail platforms, ensuring seamless user experiences and robust backend performance.",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
          tags: ["React", "Tailwind", "JS", "Business Logic"],
          details: [
            "Custom Operational Dashboard",
            "React Component Migration",
            "Improved Site Performance by 30%"
          ]
        }
      ]
    },
    contact: { title: "Let's Connect", cta: "Ready to optimize processes and build data-driven solutions." }
  },
  es: {
    nav: { about: "Sobre Mí", engineering: "Ingeniería", data: "Datos", projects: "Proyectos", contact: "Contacto" },
    hero: { greeting: "Hola, soy", scroll: "Desliza para explorar", download: "Descargar CV" },
    about: {
      title: "Sobre Mí",
      description: "Soy estudiante avanzado de Ingeniería Industrial en la UTN con especialización en Data Science. Mi valor diferencial está en la intersección entre la rigurosidad operativa y la inteligencia digital. No solo escribo código; entiendo los procesos físicos detrás de los datos. Mi experiencia va desde el control de calidad en Mercedes-Benz hasta la gestión operativa en 'Entre Dos Copas', permitiéndome optimizar sistemas con una visión integral."
    },
    engineering: {
      title: "Hub de Ingeniería",
      subtitle: "Optimización y Procesos",
      desc: "Uniendo operaciones físicas con gemelos digitales. Utilizo herramientas CAD como Solid Edge y AutoCAD para diseño, integrados con Python para validación de procesos."
    },
    data: {
      title: "Laboratorio de Datos",
      subtitle: "Analítica y Toma de Decisiones",
      desc: "Transformando datos crudos en estrategias. Experiencia en procesos ETL, detección de anomalías y visualización de KPIs usando el ecosistema Python (Pandas, Matplotlib)."
    },
    projects: {
      title: "Proyectos Destacados",
      items: [
        {
          title: "Análisis de Rendimiento Comercial",
          desc: "Pipeline ETL y EDA para identificar sucursales con bajo rendimiento (anomalías) y optimizar la estrategia de ventas.",
          longDescription: "Una solución integral de análisis de datos diseñada para optimizar el rendimiento minorista. Este proyecto implicó la construcción de un pipeline ETL robusto para ingerir datos de ventas de múltiples fuentes, limpiarlos y transformarlos para su análisis. Utilizando métodos estadísticos avanzados, identifiqué indicadores clave de rendimiento y detecté anomalías en el rendimiento de las tiendas, lo que llevó a conocimientos prácticos para la toma de decisiones estratégicas.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
          tags: ["Python", "Pandas", "Matplotlib", "ETL"],
          details: [
            "Procesamiento de más de 1M+ registros",
            "Reducción del tiempo de proceso en 40%",
            "Identificación del 15% de sucursales críticas"
          ]
        },
        {
          title: "Diseño Industrial + AI Media",
          desc: "Prototipado mecánico con Solid Edge/AutoCAD combinado con generación de video con IA para marketing industrial.",
          longDescription: "Uniendo el diseño industrial tradicional con el marketing digital moderno. Este proyecto muestra la integración del modelado CAD preciso con herramientas de IA generativa de vanguardia para crear narrativas visuales convincentes para productos industriales. El flujo de trabajo demuestra cómo la precisión de la ingeniería puede encontrarse con la narración creativa.",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
          tags: ["Solid Edge", "AutoCAD", "GenAI", "Prototipado"],
          details: [
            "Modelado 3D con Solid Edge",
            "Generación de Video con IA",
            "Reducción de costos de prototipado en 25%"
          ]
        },
        {
          title: "Desarrollo Web y Operaciones",
          desc: "Desde el sitio operativo para 'Entre Dos Copas' (HTML/JS) hasta migraciones complejas en React/Magento.",
          longDescription: "Una iniciativa de desarrollo web full-stack centrada en la eficiencia operativa. Comenzando con una solución HTML/JS personalizada para 'Entre Dos Copas' para gestionar las operaciones diarias, este proyecto evolucionó para apoyar migraciones complejas para plataformas minoristas de moda a gran escala, asegurando experiencias de usuario fluidas y un rendimiento backend robusto.",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
          tags: ["React", "Tailwind", "JS", "Lógica de Negocio"],
          details: [
            "Dashboard Operativo Personalizado",
            "Migración de Componentes React",
            "Mejora del rendimiento del sitio en 30%"
          ]
        }
      ]
    },
    contact: { title: "Conectemos", cta: "Listo para optimizar procesos y construir soluciones basadas en datos." }
  }
};

// --- ANIMATION COMPONENTS ---
const FadeInUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// --- UI COMPONENTS ---
function TechMarquee() {
  // Definition of the tech stack with logos and icons
  const techStack = [
    { name: "Python", type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Pandas", type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "React", type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "SQL", type: "icon", icon: Database, color: "text-blue-400" }, // SQL usually generic or Azure
    { name: "Solid Edge", type: "icon", icon: Box, color: "text-red-500" }, // Engineering Tool
    { name: "AutoCAD", type: "icon", icon: PenTool, color: "text-red-600" }, // Engineering Tool
    { name: "Data Science", type: "icon", icon: BarChart3, color: "text-purple-400" },
    { name: "IoT", type: "icon", icon: Cpu, color: "text-sky-400" },
    { name: "Git", type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
  ];

  return (
    <div className="w-full bg-gray-950 py-10 overflow-hidden border-t border-b border-gray-800 relative z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-transparent to-gray-950 z-10 pointer-events-none"></div>
      <div className="flex w-max animate-infinite-scroll gap-16 group">
        {[...techStack, ...techStack].map((tech, index) => (
          <div key={index} className="flex items-center gap-3 cursor-default transition-all duration-300 hover:scale-110">

            {/* Icon / Logo Logic */}
            <div className="w-8 h-8 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-500">
              {tech.type === 'img' ? (
                <img src={tech.src} alt={tech.name} className="w-full h-full object-contain" />
              ) : (
                <tech.icon size={28} className={`${tech.color}`} />
              )}
            </div>
            {/* Text */}
            <span className="text-slate-500 font-mono text-sm font-bold uppercase tracking-wider whitespace-nowrap group-hover:text-slate-200 transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Navbar({ lang, setLang }) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/90 backdrop-blur-md py-4 shadow-lg border-b border-sky-500/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <span className="text-xl font-bold text-sky-400">LE.</span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {['about', 'engineering', 'data', 'projects', 'contact'].map((key) => (
            <a key={key} href={`#${key}`} className="hover:text-sky-400 transition-colors relative group">
              {t[key]}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <button
          onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
          className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 hover:border-sky-400 text-xs font-mono transition-colors hover:bg-sky-500/10 text-sky-400"
        >
          <Globe size={14} />
          {lang.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}

function Hero({ lang }) {
  const t = translations[lang].hero;
  const nameGradient = "bg-gradient-to-r from-sky-500 to-blue-600 text-transparent bg-clip-text bg-300% animate-gradient";

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative pt-24 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      {/* Spotlights */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-sky-500 opacity-20 blur-[100px]"></div>
      <div className="absolute right-10 bottom-10 -z-10 h-[200px] w-[200px] rounded-full bg-purple-500 opacity-20 blur-[80px]"></div>

      <div className="text-center space-y-8 max-w-4xl relative z-10">
        {/* Photo with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative inline-block group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-gray-800/50 shadow-2xl mx-auto">
            <img
              src={globalData.photoUrl}
              alt={globalData.name}
              className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
            />
          </div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
          >
            <span className="bg-gray-950 text-sky-400 text-xs font-bold px-4 py-1.5 rounded-full border border-sky-500/30 shadow-[0_0_15px_rgba(20,184,166,0.3)] flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
              OPENTOWORK
            </span>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sky-400/80 font-bold text-lg tracking-wider"
          >
            {t.greeting}
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-4xl md:text-7xl font-bold tracking-tight ${nameGradient} pb-2`}
          >
            {globalData.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center items-center gap-2 md:gap-3 text-lg md:text-2xl text-gray-300 font-light"
          >
            <span className="hidden md:inline text-slate-600">{"<"}</span>
            <span className="text-center">{globalData.role[lang]}</span>
            <span className="hidden md:inline text-slate-600">{"/>"}</span>
          </motion.div>
        </div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center pt-4 pb-2"
        >
          <a
            href={globalData.resume[lang]}
            download
            className="group flex items-center gap-3 px-6 py-3 bg-gray-800/50 hover:bg-sky-500/10 border border-gray-700 hover:border-sky-500/50 rounded-full transition-all hover:-translate-y-1"
          >
            <FileText size={18} className="text-gray-400 group-hover:text-sky-400 transition-colors" />
            <span className="text-gray-300 group-hover:text-sky-400 font-mono text-sm font-mono transition-colors">{t.download}</span>
            <Download size={16} className="text-gray-500 group-hover:text-sky-400 transition-colors" />
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-5 pt-2"
        >
          <SocialLink icon={<Github />} href={globalData.social.github} />
          <SocialLink icon={<Linkedin />} href={globalData.social.linkedin} />
          <SocialLink icon={<Mail />} href={globalData.social.email} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-gray-500 flex flex-col items-center gap-2 cursor-pointer hover:text-sky-400 transition-colors"
        onClick={() => window.location.href = '#about'}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">{t.scroll}</span>
        <ChevronDown className="animate-bounce" />
      </motion.div>
    </section>
  );
}

function SocialLink({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-gray-800/50 rounded-full hover:bg-sky-500/20 hover:text-sky-400 transition-all border border-gray-700 hover:border-sky-500/50 hover:-translate-y-1"
    >
      {React.cloneElement(icon, { size: 20 })}
    </a>
  );
}

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-gray-950/80 backdrop-blur-md"
        onClick={onClose}
      ></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-gray-800 border border-gray-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-700/50 hover:bg-slate-700 rounded-full text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="h-48 bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-sky-400 font-mono text-xs mb-2 flex items-center gap-2">
              <Code size={12} /> FEATURED PROJECT
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.longDescription || project.desc}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Settings size={14} /> Key Features
              </h4>
              <ul className="space-y-2">
                {project.details && project.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-sky-500 mt-1">▹</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers size={14} /> Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-slate-700/50 px-3 py-1 rounded-full text-xs font-mono text-sky-300 border border-sky-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-700 flex gap-4">
            <button className="flex-1 bg-sky-500 hover:bg-sky-600 text-slate-900 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
              View Live Demo <ExternalLink size={18} />
            </button>
            <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
              Source Code <Github size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [selectedProject, setSelectedProject] = useState(null);
  const t = translations[lang];

  return (
    <div className="bg-gray-950 min-h-screen text-gray-50 selection:bg-sky-500/30 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />

      <Section id="about" className="bg-gray-950 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInUp>
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl relative overflow-hidden group hover:border-sky-500/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Settings size={100} className="text-sky-400" />
              </div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 relative z-10">
                <span className="text-sky-400 font-mono text-xl">01.</span> {t.about.title}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 text-pretty relative z-10">
                {t.about.description}
              </p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 relative z-10">
                {['Python', 'Pandas/NumPy', 'SQL', 'Solid Edge', 'AutoCAD', 'Process Optimization'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                    <span className="text-sky-500">▹</span> {skill}
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            {/* RIGHT COLUMN: Code Card + Certifications */}
            <div className="relative flex flex-col gap-10 mx-auto md:mx-0 max-w-md">

              {/* 1. The Code Card (Kept exactly as is, just ensuring container safety) */}
              <div className="relative group z-10">
                <div className="absolute inset-0 bg-sky-500/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-sky-500/50 transition-colors shadow-xl">
                  <Code size={48} className="text-sky-400 mb-6" />
                  <div className="space-y-2 font-mono text-sm text-gray-400 leading-relaxed">
                    <p><span className="text-purple-400">class</span> <span className="text-yellow-200">IndustrialEng</span>(<span className="text-yellow-200">DataScientist</span>):</p>
                    <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-300">__init__</span>(self):</p>
                    <p className="pl-8">self.education = <span className="text-green-300">"UTN + Alura"</span></p>
                    <p className="pl-8">self.focus = [<span className="text-green-300">"Validation"</span>, <span className="text-green-300">"Efficiency"</span>]</p>
                    <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-300">optimize</span>(self, process):</p>
                    <p className="pl-8"><span className="text-purple-400">return</span> process.apply(data_analysis)</p>
                  </div>
                </div>
              </div>

              {/* 2. Dynamic Certifications List (Fixed spacing with mt-4) */}

              {globalData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="p-4 bg-gray-800/50 border border-gray-700/50 hover:border-sky-500/30 rounded-xl flex items-center gap-4 transition-all hover:bg-gray-800"
                >
                  <div className={`p-2 rounded-full bg-${cert.color}-500/10 text-${cert.color}-400`}>
                    {cert.icon === 'Award' && <Award size={20} />}
                    {cert.icon === 'Database' && <Database size={20} />}
                    {cert.icon === 'Brain' && <Brain size={20} />}
                    {cert.icon === 'Layout' && <Layout size={20} />}
                    {cert.icon === 'TrendingUp' && <TrendingUp size={20} />}
                    {cert.icon === 'Globe' && <Globe size={20} />}
                  </div>
                  <div>
                    <div className="text-gray-200 font-bold text-sm flex justify-between w-full gap-4">
                      {cert.title}
                      <span className="text-gray-500 font-mono text-xs">{cert.year}</span>
                    </div>
                    <div className="text-gray-400 text-xs font-mono mt-1">{cert.issuer}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* --- ENGINEERING SECTION (MOBILE FIX APPLIED) --- */}
      <Section id="engineering" className="relative bg-gray-950 overflow-hidden py-12 md:py-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">

          {/* Column 1: 3D Viewer */}
          <div className="order-2 md:order-1 w-full mt-4 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[340px] md:max-w-full mx-auto overflow-hidden rounded-xl"
            >
              <div className="absolute -inset-1 border border-blue-500/20 rounded-xl z-0"></div>
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400 rounded-tl-lg z-20"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-400 rounded-tr-lg z-20"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-400 rounded-bl-lg z-20"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400 rounded-br-lg z-20"></div>
              <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[9px] font-mono text-blue-300 tracking-widest">SYSTEM_ONLINE</span>
              </div>
              <div className="h-[280px] md:h-[450px]">
                <ProjectShowcase />
              </div>
            </motion.div>
          </div>

          {/* Column 2: Info (Compact for Mobile) */}
          <FadeInUp delay={0.2}>
            <div className="order-1 md:order-2 relative pl-3 md:pl-0">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0 md:hidden rounded-full"></div>
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] md:text-xs font-bold mb-4 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <Settings size={12} className="animate-spin-slow" /> ENGINEERING HUB
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-100 leading-tight">
                {t.engineering.title}
              </h3>
              <h4 className="text-base md:text-lg text-blue-400/80 mb-4 font-bold tracking-wide">
                {t.engineering.subtitle}
              </h4>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base w-full max-w-[340px] md:max-w-none break-words">
                {t.engineering.desc}
              </p>

              <div className="grid gap-3">
                <div className="group p-3 bg-gray-800/40 rounded-lg border border-gray-700 hover:border-blue-400/50 transition-all flex items-center gap-3 hover:bg-gray-800/60 backdrop-blur-sm cursor-default">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-transform">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base text-gray-200">IoT & CAD Integration</div>
                    <div className="text-[10px] md:text-xs text-gray-500 font-mono">Solid Edge / AutoCAD</div>
                  </div>
                </div>
                <div className="group p-3 bg-gray-800/40 rounded-lg border border-gray-700 hover:border-blue-400/50 transition-all flex items-center gap-3 hover:bg-gray-800/60 backdrop-blur-sm cursor-default">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-transform">
                    <Layers size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base text-gray-200">Digital Validation</div>
                    <div className="text-[10px] md:text-xs text-gray-500 font-mono">Process Simulation</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      <Section id="data">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInUp>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold mb-4 border border-purple-500/20">
                <Database size={14} /> DATA SCIENCE
              </div>
              <h3 className="text-3xl font-bold mb-2">{t.data.title}</h3>
              <h4 className="text-xl text-gray-400 mb-6 font-bold">{t.data.subtitle}</h4>
              <p className="text-gray-400 leading-relaxed mb-8">
                {t.data.desc}
              </p>
              <ul className="space-y-4 text-gray-400">
                {[
                  { text: "Predictive Maintenance Models", icon: BarChart3 },
                  { text: "Supply Chain Analytics", icon: Layers },
                  { text: "Commercial KPI Dashboards", icon: Database }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <item.icon size={18} className="text-purple-400" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnomalyDashboard />
          </motion.div>
        </div>
      </Section>

      <Section id="projects" className="bg-gray-800/30">
        <FadeInUp>
          <h3 className="text-3xl font-bold mb-12 text-center">
            <span className="text-sky-400 font-mono text-xl">02.</span> {t.projects.title}
          </h3>
        </FadeInUp>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {t.projects.items.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all shadow-lg hover:shadow-sky-500/20 flex flex-col h-full cursor-pointer"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>
                {/* Badge */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="text-sky-400 font-mono text-xs mb-1 flex items-center gap-2">
                    <Code size={12} /> PROJECT 0{i + 1}
                  </div>
                  <h3 className="font-bold text-xl text-slate-100 leading-tight group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-slate-900">
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex gap-2 text-xs font-mono text-sky-500/80 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-sky-950/30 px-2 py-1 rounded border border-sky-800/30 group-hover:border-sky-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <Section id="contact">
        <FadeInUp>
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-sky-400 font-mono mb-4">03. What's Next?</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">{t.contact.title}</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              {t.contact.cta}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href={globalData.social.email}
                className="inline-block px-8 py-4 rounded-lg border border-sky-400 text-sky-400 hover:bg-sky-400/10 transition-all hover:-translate-y-1 shadow-lg hover:shadow-sky-500/20 font-mono text-sm font-mono tracking-wide"
              >
                Email Me
              </a>
              <a
                href={globalData.social.phone}
                className="inline-block px-8 py-4 rounded-lg border border-slate-600 text-gray-300 hover:border-sky-400 hover:text-sky-400 transition-all hover:-translate-y-1 font-mono text-sm font-mono tracking-wide flex items-center gap-2"
              >
                <Phone size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </FadeInUp>
      </Section>

      <TechMarquee />
      <footer className="py-8 text-center text-gray-500 text-xs font-mono bg-gray-950 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Lautaro E. Etcheverry. All Rights Reserved.</p>
        <p className="mt-2 opacity-50">v1.0.0 • React + Tailwind + Motion</p>
      </footer>
    </div>
  );
}
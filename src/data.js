import {
    Github, Linkedin, Mail, Globe, ChevronDown,
    Database, Settings, Code, BarChart3, Cpu, Layers, Phone,
    Award, FileText, Download, Brain, Layout, BookOpen, TrendingUp, X, ExternalLink, Box, PenTool
} from 'lucide-react';

// --- GLOBAL DATA (REAL INFO) ---
export const globalData = {
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
    ],
    blogPosts: [
        {
            id: 1,
            category: "Data Science",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            date: "2025-11-20",
            readTime: { en: "5 min read", es: "5 min lectura" },
            title: {
                en: "Optimizing Production Lines with Python",
                es: "Optimizando Líneas de Producción con Python"
            },
            excerpt: {
                en: "How I used Pandas to detect bottlenecks in an industrial plant simulation.",
                es: "Cómo utilicé Pandas para detectar cuellos de botella en una simulación de planta industrial."
            },
            content: {
                en: "In this project, I analyzed a dataset containing 50,000 production cycles. Using Python's Pandas library, I identified that Machine #4 was operating at 60% efficiency due to micro-stoppages. Visualizing this with Matplotlib allowed the engineering team to adjust the maintenance schedule, resulting in a 15% increase in overall throughput.",
                es: "En este proyecto, analicé un dataset de 50,000 ciclos de producción. Usando la librería Pandas de Python, identifiqué que la Máquina #4 operaba al 60% de eficiencia debido a micro-paradas. Visualizar esto con Matplotlib permitió al equipo de ingeniería ajustar el cronograma de mantenimiento, resultando en un aumento del 15% en el rendimiento general."
            }
        },
        {
            id: 2,
            category: "Engineering",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
            date: "2025-11-15",
            readTime: { en: "4 min read", es: "4 min lectura" },
            title: {
                en: "IoT Integration & Digital Twins",
                es: "Integración de IoT y Gemelos Digitales"
            },
            excerpt: {
                en: "Analyzing the importance of real-time sensors for predictive maintenance.",
                es: "Analizando la importancia de los sensores en tiempo real para el mantenimiento predictivo."
            },
            content: {
                en: "Digital Twins are revolutionizing industry. By connecting physical sensors (IoT) to a virtual replica in Solid Edge, we can predict fatigue failures before they happen. This article explores the architecture of such a system and how data flows from the sensor to the cloud dashboard.",
                es: "Los Gemelos Digitales están revolucionando la industria. Al conectar sensores físicos (IoT) a una réplica virtual en Solid Edge, podemos predecir fallas por fatiga antes de que ocurran. Este artículo explora la arquitectura de dicho sistema y cómo fluyen los datos desde el sensor hasta el dashboard en la nube."
            }
        }
    ]
};

// --- TRANSLATIONS (CV ADAPTED) ---
export const translations = {
    en: {
        nav: { about: "About", engineering: "Engineering", data: "Data", projects: "Projects", blog: "Blog", contact: "Contact" },
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
        nav: { about: "Sobre Mí", engineering: "Ingeniería", data: "Datos", projects: "Proyectos", blog: "Blog", contact: "Contacto" },
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

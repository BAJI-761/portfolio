export const projectsData = [
  {
    id: "agritrade",
    title: "AgriTrade",
    description: "An AI-powered agricultural marketplace connecting farmers directly to retailers. Features voice-powered ordering, full escrow trade lifecycle, and Google Gemini AI crop recommendations.",
    longDescription: "AgriTrade is a full-stack platform built to eliminate middleman exploitation in Indian agriculture. It features a Flutter-based cross-platform app backed by FastAPI and Firebase. Key innovations include native speech-to-text for illiterate farmers to list produce via voice commands, a 5-phase escrow payment system managed via Firebase Cloud Functions, and an AI-driven smart crop engine.",
    tags: ["Flutter", "FastAPI", "Firebase", "Gemini AI", "Python"],
    image: "/images/ui_agritrade.png",
    link: "https://github.com/BAJI-761/Agri-trade-app",
    featured: true,
    year: "2026"
  },
  {
    id: "gig-guard",
    title: "Gig-Guard",
    description: "A financial command center for gig workers. Tracks irregular income, simulates DeFi yields, and generates a dynamic financial health score.",
    longDescription: "India's gig economy has 15M+ workers with zero financial safety nets. Gig-Guard solves this by providing a comprehensive financial dashboard. Built with React and Firebase, it features a custom cash flow smoothing engine, a DeFi vault simulator, smart risk-based insurance, and gamified financial health scoring in a premium, custom-designed dark mode UI.",
    tags: ["React 18", "Firebase", "Vite", "FinTech", "Recharts"],
    image: "/images/ui_gigguard.png",
    link: "https://gig-gaurd.onrender.com/",
    featured: true,
    year: "2026"
  },
  {
    id: "smart-parking",
    title: "Smart Parking System",
    description: "An IoT hardware-software integration using ESP32 and React to visualize, book, and route vehicles in a parking lot using graph algorithms.",
    longDescription: "This IoT system addresses urban parking congestion. It uses ESP32 microcontrollers, RFID tags, and IR sensors to detect vehicle presence. The Node.js backend calculates the optimal route to the nearest free slot using Dijkstra's algorithm on a 14-node graph, visualizing everything in real-time on a React web dashboard.",
    tags: ["React", "Node.js", "ESP32", "IoT", "Algorithms"],
    image: "/images/ui_smartparking.png",
    link: "https://github.com/tellapallyakhil/DEMO_SMARTPARKING#",
    featured: true,
    year: "2026"
  },
  {
    id: "crop-yield-prediction",
    title: "Crop Yield & Price Prediction",
    description: "An end-to-end Machine Learning pipeline analyzing soil, weather, and season to predict agricultural yield and market prices.",
    longDescription: "A comprehensive ML project featuring a synthetic data generator mimicking Indian agricultural statistics. The pipeline includes preprocessing, extensive EDA (14 visual models), and comparison of 3 algorithms. The winning Random Forest model (R²=0.94) is deployed via an interactive Streamlit web application to help farmers estimate revenue.",
    tags: ["Python", "Scikit-Learn", "Streamlit", "XGBoost", "Data Science"],
    image: "/images/ui_cropyield.png",
    link: "https://crop-yield-price-prediction-system-i7msacluahos4utw7bzkrc.streamlit.app",
    featured: false,
    year: "2026"
  },
  {
    id: "vehicle-classification",
    title: "Vehicle Object Classification",
    description: "A Computer Vision system using MobileNetV2 transfer learning to classify 10 vehicle types with ~90% accuracy, deployed to Streamlit Cloud.",
    longDescription: "A deep learning classification system comparing a custom-built CNN from scratch against a fine-tuned MobileNetV2. Utilizing a two-phase fine-tuning strategy to prevent catastrophic forgetting, the transfer learning model achieved ~90% accuracy. The project is fully documented, containerized, and deployed publicly via Streamlit.",
    tags: ["TensorFlow", "Keras", "MobileNetV2", "Computer Vision"],
    image: "/images/ui_vehicleclass.png", 
    link: "https://vehicle-object-classification-system-9esmif9wvwzmcphjnhd9tu.streamlit.app",
    featured: false,
    year: "2026"
  },
  {
    id: "proctoriq",
    title: "ProctorIQ",
    description: "An AI-powered exam monitoring system utilizing computer vision for automated behavioral analysis and academic integrity validation.",
    longDescription: "ProctorIQ leverages modern computer vision techniques to analyze student behavior during online assessments. Features include eye-tracking, multiple-person detection, tab-switching alerts, and a comprehensive dashboard for educators to review flagged anomalies.",
    tags: ["Python", "OpenCV", "React", "AI/ML"],
    image: "/images/ui_proctoriq.png",
    link: "https://github.com/BAJI-761/ProctorIQ",
    featured: false,
    year: "2026"
  },
  {
    id: "swasthyasetu",
    title: "SwasthyaSetu",
    description: "A rural tele-consultation platform bridging the healthcare gap with low-bandwidth video calling and digital medical records.",
    longDescription: "SwasthyaSetu provides accessible healthcare to rural populations through optimized web-RTC video consultations and a localized UX. It includes an integrated EHR system, multilingual support, and a decentralized medicine inventory tracker.",
    tags: ["React Native", "WebRTC", "Node.js", "MongoDB"],
    image: "/images/ui_swasthyasetu.png",
    link: "https://github.com/BAJI-761/swastya-situ",
    featured: false,
    year: "2026"
  },
  {
    id: "aegisintel",
    title: "AegisIntel",
    description: "A comprehensive threat intelligence dashboard aggregating global security alerts, vulnerability metrics, and system anomalies in real-time.",
    longDescription: "AegisIntel serves as a central hub for cybersecurity operations. It ingests data from multiple threat feeds, utilizes anomaly detection to prioritize critical alerts, and visualizes global attack vectors through an interactive, dark-mode geospatial dashboard.",
    tags: ["React", "D3.js", "Python", "Cybersecurity"],
    image: "/images/ui_aegisintel.png",
    link: "https://github.com/BAJI-761/AegisIntel",
    featured: false,
    year: "2026"
  }
];

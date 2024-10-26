import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    research,
    dna,
    laboratory,
    chemistry,
    coding,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Cancer Researcher",
      icon: mobile,
    },
    {
      title: "Biomedical Technologist",
      icon: backend,
    },
    {
      title: "Dog trainer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Research assistant",
      company_name: "Chang-Gung Memorial Hospital, Lab of Hematology and Oncology",
      icon: dna,
      iconBg: "#E6DEDD",
      date: "August 2010 - May 2012",
      points: [
        "Mutational analysis of RUNX1 in Myelodysplastic Syndrome.",
        "Publication: Transcription Activities of RUNX1 Mutants Predict sAML Transformation in Patients with High Risk De Novo Myelodysplastic Syndrome / Journal: Blood (2011) 118 (21) : 2785."
      ],
    },
    {
      title: "Biomedical Technologist",
      company_name: "Cathay General Hospital, Division of Rheumatology and Immunology",
      icon: chemistry,
      iconBg: "#383E56",
      date: "May 2012 - February 2018",
      points: [
        "Analyzing HLA typing/tissue matching in transplantation.",
        "Researching IL-28 cell signaling with autoimmune diseases.",
      ],
    },
    {
      title: "Wissenschaftliche*r Mitarbeiter*in/Biomedical Technologist",
      company_name: "Stadtspital Triemli, Institut für Labormedizin",
      icon: laboratory,
      iconBg: "#E6DEDD",
      date: "November 2018 - December 2021",
      points: [
        "Analysing FECH enzymatic activity of Erythropoietic Protoporpyria cell model by HPLC and clinical immunological/pathogenic test.",
        "Wide RNA-Seq of Congenital erythropoietic porphyria (CEP) with Transcriptome analysis.",
        "Studying protoporphyrin accumulation and gene expression in EPP cell model.",
        "Publication: Repurposing of glycine transport inhibitors for the treatment of erythropoietic protoporphyria / Journal: Cell Chemical Biology"
      ],
    },
    {
      title: "Learning JavaScript, TypeScript, HTML, CSS, React, Frontend Design",
      company_name: "Online",
      icon: coding,
      iconBg: "#383E56",
      date: "2022 - ",
      points: [
        "Modern React with Redux (Udemy)/ React Testing Library and Jest (Udemy)",
        "Javascript (Javascript.info/W3schools/Udemy)",
        "HTML and CSS (W3schools/Udemy)",
        "Python (W3schools/Udemy)",
        "Bioinformatics for beginners (UC San Diego via Coursera)"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
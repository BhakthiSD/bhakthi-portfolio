export const profile = {
  name: "Bhakthi S",
  role: "Software Engineer",
  email: import.meta.env.VITE_EMAIL as string | undefined,
  linkedin:
    (import.meta.env.VITE_LINKEDIN_URL as string | undefined) ||
    "https://www.linkedin.com/in/bhakthi-s-993144277/",
  github:
    (import.meta.env.VITE_GITHUB_URL as string | undefined) ||
    "https://github.com/BhakthiSD",
  resume:
    (import.meta.env.VITE_RESUME_URL as string | undefined) ||
    "/resume/Bhakthi-S-Resume.pdf",
  resumeConfigured: Boolean(import.meta.env.VITE_RESUME_URL),
};

export const skills = [
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "Vert.x", "REST APIs", "Microservices"],
  },
  {
    label: "Frontend",
    items: ["JavaScript", "Vue.js", "PrimeVue", "HTML", "CSS"],
  },
  { label: "Data", items: ["PostgreSQL", "SQL", "Flyway"] },
  { label: "Messaging & observability", items: ["RabbitMQ", "Jaeger"] },
  { label: "Testing", items: ["JMeter", "JUnit", "Mockito"] },
  { label: "Delivery", items: ["Docker", "Jenkins", "Git"] },
];

export const challenges = [
  {
    number: "01",
    title: "Financial schedule generation",
    body: "Lease schedules bring together timing, broken periods, residual value guarantees and term changes. The calculation needs to stay coherent as contract assumptions evolve.",
    tags: ["Payment timing", "Lease changes", "Financial calculations"],
  },
  {
    number: "02",
    title: "Database evolution",
    body: "Supporting evolving financial workflows means changing schemas carefully, with migration history and tenant-aware data constraints in mind.",
    tags: ["Flyway", "PostgreSQL", "Tenant-aware constraints"],
  },
  {
    number: "03",
    title: "Performance testing",
    body: "Used JMeter to exercise API workloads, examine read and write behavior, and understand throughput under load.",
    tags: ["JMeter", "API workloads", "Throughput"],
  },
  {
    number: "04",
    title: "Request observability",
    body: "Distributed tracing with Jaeger helps follow requests across services and gives useful context when diagnosing behavior.",
    tags: ["Jaeger", "Distributed tracing", "Diagnostics"],
  },
];

export const otherProjects = [
  {
    name: "Momento",
    kind: "Event management",
    description:
      "An event management application built with Java and JSP, with a Bootstrap interface.",
    stack: ["Java", "JSP", "Bootstrap"],
  },
  {
    name: "E-commerce application",
    kind: "Web application",
    description:
      "A J2EE application exploring core e-commerce flows and SQL-backed data handling.",
    stack: ["J2EE", "Java", "SQL"],
  },
  {
    name: "Employee service",
    kind: "Backend service",
    description: "A Spring Boot REST API backed by PostgreSQL.",
    stack: ["Spring Boot", "REST API", "PostgreSQL"],
  },
];

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Network,
  Activity,
  Layers3,
  BriefcaseBusiness,
} from "lucide-vue-next";
import { profile, skills, challenges, otherProjects } from "./data";

const menuOpen = ref(false);
const scrolled = ref(false);
const resumeAvailable = ref(false);
let revealObserver: IntersectionObserver | undefined;
const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function updateScroll() {
  scrolled.value = window.scrollY > 24;
}
function closeMenu() {
  menuOpen.value = false;
}
onMounted(() => {
  updateScroll();
  window.addEventListener("scroll", updateScroll, { passive: true });
  if (profile.resumeConfigured) {
    resumeAvailable.value = true;
  } else {
    fetch(profile.resume, { method: "HEAD" })
      .then((response) => {
        resumeAvailable.value = response.ok;
      })
      .catch(() => {
        resumeAvailable.value = false;
      });
  }
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObserver?.observe(el));
});
onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
  revealObserver?.disconnect();
});

const initials = "BS";
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="nav-shell wrap">
      <a
        class="wordmark"
        href="#top"
        aria-label="Bhakthi S home"
        @click="closeMenu"
        ><span class="wordmark-mark">B<span>.</span></span
        ><span class="wordmark-name">Bhakthi S</span></a
      >
      <nav class="desktop-nav" aria-label="Main navigation">
        <a v-for="item in nav" :key="item.label" :href="item.href">{{
          item.label
        }}</a>
      </nav>
      <a
        v-if="resumeAvailable"
        class="nav-resume"
        :href="profile.resume"
        download
        >Resume <ArrowUpRight :size="15"
      /></a>
      <a v-else class="nav-resume nav-resume-muted" href="#resume"
        >Resume <ArrowUpRight :size="15"
      /></a>
      <button
        class="menu-toggle"
        :aria-expanded="menuOpen"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" :size="21" /><Menu v-else :size="21" />
      </button>
    </div>
    <nav v-if="menuOpen" class="mobile-nav" aria-label="Mobile navigation">
      <a
        v-for="item in nav"
        :key="item.label"
        :href="item.href"
        @click="closeMenu"
        >{{ item.label }} <ArrowUpRight :size="16"
      /></a>
      <a href="#resume" @click="closeMenu"
        >Resume <ArrowUpRight :size="16"
      /></a>
    </nav>
  </header>

  <main id="top">
    <section class="hero wrap">
      <div class="hero-content">
        <div class="eyebrow">
          <span class="status-dot"></span> SOFTWARE ENGINEER
          <span class="eyebrow-line"></span> INDIA
        </div>
        <h1>
          Building systems<br />that
          <span class="serif-accent">make sense.</span>
        </h1>
        <p class="hero-role">
          Software Engineer <span>/</span> Full Stack Java Developer
        </p>
        <p class="hero-copy">
          I build backend-focused, full-stack applications with Java, Spring
          Boot, Vert.x, PostgreSQL and modern frontend technologies.
        </p>
        <div class="hero-actions">
          <a class="button button-dark" href="#projects"
            >View my work <ArrowDownRight :size="16"
          /></a>
          <a
            v-if="resumeAvailable"
            class="button button-outline"
            :href="profile.resume"
            download
            >Download resume <ArrowUpRight :size="15"
          /></a>
          <a v-else class="button button-outline" href="#resume"
            >Resume details <ArrowUpRight :size="15"
          /></a>
        </div>
        <div class="hero-bottom">
          <div class="social-row">
            <a
              v-if="profile.linkedin"
              :href="profile.linkedin"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              ><Linkedin :size="17"
            /></a>
            <a
              v-if="profile.github"
              :href="profile.github"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              ><Github :size="17"
            /></a>
            <a
              v-if="profile.email"
              :href="`mailto:${profile.email}`"
              aria-label="Email"
              ><Mail :size="17"
            /></a>
            <span
              v-if="!profile.linkedin && !profile.github && !profile.email"
              class="social-config"
              >Social links are configurable in <code>.env</code></span
            >
          </div>
          <span class="hero-note">Backend minded. Full-stack capable.</span>
        </div>
      </div>
      <div
        class="hero-art"
        aria-label="Abstract architectural line illustration"
        role="img"
      >
        <div class="art-index">FIG. 01 <span>— SYSTEMS IN MOTION</span></div>
        <div class="art-grid"></div>
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <div class="orbit orbit-three"></div>
        <div class="art-core">
          <span>{{ initials }}</span
          ><i></i>
        </div>
        <div class="art-label label-top">
          <span class="label-dot"></span> RELIABLE SYSTEMS
        </div>
        <div class="art-label label-right">DATA <span>→</span> INSIGHT</div>
        <div class="art-coordinate">12°58' N<br />77°35' E</div>
        <div class="art-caption">
          Thoughtful engineering<br />for complex workflows.
        </div>
        <div class="art-axis"></div>
      </div>
      <div class="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div></div>
      </div>
    </section>

    <section id="about" class="section about-section">
      <div class="wrap about-grid">
        <div class="section-label reveal">
          <span>01 / ABOUT</span><span class="label-rule"></span>
        </div>
        <div class="about-main reveal">
          <p class="section-kicker">A little about me</p>
          <h2>
            Practical engineering.<br /><span class="serif-accent"
              >Thoughtful by design.</span
            >
          </h2>
          <p class="about-lede">
            I’m a Software Engineer with around 1.7 years of professional
            experience, working across backend services and full-stack features
            for enterprise applications.
          </p>
          <div class="about-lower">
            <p>
              My work has touched Java, Spring Boot, Vert.x and PostgreSQL, with
              Vue.js on the frontend. In financial and lease-management
              workflows, I enjoy the details: how data moves, how calculations
              behave, and how a system stays understandable as it grows.
            </p>
            <p>
              I’m continuing to deepen my backend and cloud engineering
              practice, and exploring where AI-assisted tools can make
              day-to-day development more effective.
            </p>
          </div>
        </div>
        <aside class="about-aside reveal">
          <span class="aside-number">~1.7</span
          ><span class="aside-unit">YEARS PROFESSIONAL<br />EXPERIENCE</span>
          <div class="aside-divider"></div>
          <span class="aside-focus">Current focus</span
          ><strong>Backend systems<br />& full-stack delivery</strong>
        </aside>
      </div>
    </section>

    <section id="experience" class="section experience-section">
      <div class="wrap experience-layout">
        <div class="section-label reveal">
          <span>02 / EXPERIENCE</span><span class="label-rule"></span>
        </div>
        <div class="experience-content reveal">
          <p class="section-kicker">Where I’ve been building</p>
          <div class="experience-card">
            <div class="experience-top">
              <div class="company-mark"><BriefcaseBusiness :size="20" /></div>
              <span class="experience-date">MAR 2025 — PRESENT</span>
            </div>
            <h2>Software Engineer <span>— Full Stack Developer</span></h2>
            <p class="company-name">Finoli Technologies Private Limited</p>
            <p class="experience-desc">
              Building and supporting enterprise lease-management workflows
              across backend services, APIs and application interfaces.
            </p>
            <div class="experience-points">
              <div>
                <span class="point-mark">↗</span>
                <p>
                  Developing Java services and REST APIs with Spring Boot and
                  Vert.x, connected to PostgreSQL-backed workflows.
                </p>
              </div>
              <div>
                <span class="point-mark">↗</span>
                <p>
                  Contributing across Vue.js features, database migrations, and
                  service integrations in a microservices environment.
                </p>
              </div>
              <div>
                <span class="point-mark">↗</span>
                <p>
                  Working with RabbitMQ, Jaeger, Docker, Jenkins and JMeter for
                  messaging, diagnostics, delivery and performance testing.
                </p>
              </div>
            </div>
            <div class="tag-row">
              <span
                v-for="tag in [
                  'Java',
                  'Spring Boot',
                  'Vert.x',
                  'PostgreSQL',
                  'Vue.js',
                  'RabbitMQ',
                  'Docker',
                ]"
                :key="tag"
                class="tag"
                >{{ tag }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section project-section">
      <div class="wrap">
        <div class="section-heading reveal">
          <div>
            <div class="section-label">
              <span>03 / SELECTED WORK</span><span class="label-rule"></span>
            </div>
            <p class="section-kicker">A closer look</p>
            <h2>Engineering in <span class="serif-accent">context.</span></h2>
          </div>
          <span class="heading-note">01 FEATURED<br />PROJECT</span>
        </div>
        <article class="featured-card reveal">
          <div class="featured-top">
            <span class="featured-badge"
              ><span></span> PROFESSIONAL PROJECT</span
            ><span class="featured-private">PRIVATE / PROFESSIONAL</span>
          </div>
          <div class="featured-grid">
            <div class="featured-copy">
              <p class="project-overline">ENTERPRISE PLATFORM</p>
              <h3>
                Lease management,<br /><span class="serif-accent"
                  >built for the details.</span
                >
              </h3>
              <p class="featured-description">
                Enterprise lease-management software supporting accounting
                workflows aligned with IFRS 16 and ASC 842. My work spans
                services, data and application features across a complex
                financial domain.
              </p>
              <a class="text-link" href="#engineering"
                >Explore the engineering <ArrowRight :size="16"
              /></a>
            </div>
            <div
              class="system-visual"
              aria-label="Simplified lease platform architecture diagram"
            >
              <div class="system-head">
                <span>PLATFORM OVERVIEW</span><span>01 — 04</span>
              </div>
              <div class="system-flow">
                <div class="flow-node">
                  <span class="flow-icon"><Layers3 :size="17" /></span
                  ><span>Lease<br />workflows</span>
                </div>
                <div class="flow-connector"><i></i><i></i><i></i></div>
                <div class="flow-node flow-node-center">
                  <span class="flow-icon"><Code2 :size="17" /></span
                  ><span>Service<br />layer</span>
                </div>
                <div class="flow-connector"><i></i><i></i><i></i></div>
                <div class="flow-node">
                  <span class="flow-icon"><Database :size="17" /></span
                  ><span>Financial<br />data</span>
                </div>
              </div>
              <div class="system-footer">
                <span><b class="legend-green"></b> APPLICATION FLOW</span
                ><span><b class="legend-orange"></b> DATA LAYER</span>
              </div>
              <div class="system-index">FIG 02.1</div>
            </div>
          </div>
          <div class="feature-capabilities">
            <div>
              <span class="cap-icon"><Activity :size="17" /></span>
              <h4>Lease accounting</h4>
              <p>
                Liability and payment schedules, ROU depreciation, cost
                amortization and deferred tax workflows.
              </p>
            </div>
            <div>
              <span class="cap-icon"><Code2 :size="17" /></span>
              <h4>Financial calculations</h4>
              <p>
                NPV, XNPV, IRR, XIRR, PMT and effective interest calculations.
              </p>
            </div>
            <div>
              <span class="cap-icon"><Network :size="17" /></span>
              <h4>Distributed systems</h4>
              <p>
                REST APIs, microservices, tenant-aware data, messaging and
                request tracing.
              </p>
            </div>
          </div>
          <div class="featured-stack">
            <span>TECHNOLOGY</span>
            <div class="tag-row">
              <span
                v-for="tag in [
                  'Java',
                  'Spring Boot',
                  'Vert.x',
                  'PostgreSQL',
                  'Vue.js',
                  'RabbitMQ',
                  'JMeter',
                  'Jaeger',
                  'Docker',
                  'Flyway',
                ]"
                :key="tag"
                class="tag"
                >{{ tag }}</span
              >
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="engineering" class="section engineering-section">
      <div class="wrap">
        <div class="section-heading reveal">
          <div>
            <div class="section-label">
              <span>04 / ENGINEERING NOTES</span
              ><span class="label-rule"></span>
            </div>
            <p class="section-kicker">What the work involves</p>
            <h2>
              Problems worth <span class="serif-accent">thinking through.</span>
            </h2>
          </div>
          <p class="heading-description">
            A few areas I’ve worked with in enterprise financial software,
            described at the level I can stand behind.
          </p>
        </div>
        <div class="challenge-grid">
          <article
            v-for="item in challenges"
            :key="item.number"
            class="challenge-card reveal"
          >
            <div class="challenge-top">
              <span>{{ item.number }}</span
              ><ArrowUpRight :size="17" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
            <div class="challenge-tags">
              <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="skills" class="section skills-section">
      <div class="wrap skills-layout">
        <div class="skills-intro reveal">
          <div class="section-label">
            <span>05 / TOOLKIT</span><span class="label-rule"></span>
          </div>
          <p class="section-kicker">Tools I work with</p>
          <h2>
            A toolkit for<br /><span class="serif-accent"
              >shipping software.</span
            >
          </h2>
          <p>
            Technologies I’ve used across application development, data, testing
            and delivery.
          </p>
        </div>
        <div class="skill-groups reveal">
          <div v-for="group in skills" :key="group.label" class="skill-group">
            <h3>{{ group.label }}</h3>
            <div class="skill-chips">
              <span v-for="item in group.items" :key="item">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section other-projects-section">
      <div class="wrap">
        <div class="section-heading reveal">
          <div>
            <div class="section-label">
              <span>06 / OTHER PROJECTS</span><span class="label-rule"></span>
            </div>
            <p class="section-kicker">More from the journey</p>
            <h2>Projects that <span class="serif-accent">taught me.</span></h2>
          </div>
        </div>
        <div class="other-projects-grid">
          <article
            v-for="(project, index) in otherProjects"
            :key="project.name"
            class="other-project reveal"
          >
            <div class="other-project-top">
              <span>0{{ index + 1 }} / {{ project.kind.toUpperCase() }}</span
              ><ArrowUpRight :size="17" />
            </div>
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <div class="tag-row">
              <span v-for="tag in project.stack" :key="tag" class="tag">{{
                tag
              }}</span>
            </div>
            <div class="project-privacy">PRIVATE / NO PUBLIC DEMO</div>
          </article>
        </div>
      </div>
    </section>

    <section class="section education-section">
      <div class="wrap education-row reveal">
        <div class="section-label">
          <span>07 / EDUCATION</span><span class="label-rule"></span>
        </div>
        <div class="education-content">
          <p class="section-kicker">Foundation</p>
          <h2>Learning that <span class="serif-accent">keeps going.</span></h2>
          <p>
            Education details can be added here when you’re ready to share the
            institution, qualification and dates.
          </p>
        </div>
        <span class="education-note">DETAILS TO ADD</span>
      </div>
    </section>

    <section id="resume" class="resume-section">
      <div class="wrap resume-inner reveal">
        <div class="resume-mark">BS<span>.</span></div>
        <div class="resume-copy">
          <p class="section-kicker">The complete picture</p>
          <h2>Want the complete profile?</h2>
          <p>My resume has the full details on my experience and background.</p>
        </div>
        <a
          v-if="resumeAvailable"
          class="button button-light"
          :href="profile.resume"
          download
          >Download my resume <ArrowUpRight :size="16" /></a
        ><span v-else class="resume-missing"
          >Resume PDF will be available here soon</span
        >
      </div>
    </section>

    <section id="contact" class="section contact-section">
      <div class="wrap contact-grid">
        <div class="section-label reveal">
          <span>08 / SAY HELLO</span><span class="label-rule"></span>
        </div>
        <div class="contact-main reveal">
          <p class="section-kicker">Open to opportunities</p>
          <h2>
            Let’s build something<br /><span class="serif-accent"
              >considered.</span
            >
          </h2>
          <p class="contact-text">
            Interested in software engineering opportunities focused on backend
            systems and full-stack product work? I’d be glad to connect.
          </p>
          <div class="contact-links">
            <a
              v-if="profile.email"
              class="contact-link"
              :href="`mailto:${profile.email}`"
              ><span><Mail :size="17" /> Email me</span
              ><ArrowUpRight :size="17" /></a
            ><a
              v-if="profile.linkedin"
              class="contact-link"
              :href="profile.linkedin"
              target="_blank"
              rel="noreferrer"
              ><span><Linkedin :size="17" /> LinkedIn</span
              ><ArrowUpRight :size="17" /></a
            ><a
              v-if="profile.github"
              class="contact-link"
              :href="profile.github"
              target="_blank"
              rel="noreferrer"
              ><span><Github :size="17" /> GitHub</span
              ><ArrowUpRight :size="17"
            /></a>
            <p
              v-if="!profile.email && !profile.linkedin && !profile.github"
              class="contact-config"
            >
              Add your email and profile URLs in <code>.env</code> to activate
              contact links.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="wrap footer-inner">
      <a class="wordmark footer-wordmark" href="#top"
        ><span class="wordmark-mark">B<span>.</span></span
        ><span class="wordmark-name">Bhakthi S</span></a
      ><span class="footer-note">SOFTWARE ENGINEER <span>·</span> INDIA</span
      ><a class="back-top" href="#top"
        >BACK TO TOP <ArrowUpRight :size="14" /></a
      ><span class="copyright">© {{ new Date().getFullYear() }} Bhakthi S</span>
    </div>
  </footer>
</template>

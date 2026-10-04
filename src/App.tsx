import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Instagram, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroDevices from "./assets/hero-devices.svg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { number: "01", title: "Websites & applications", description: "Clear, effective websites and fast web products built around the way your people work.", tags: "Business websites · SaaS · Customer portals" },
  { number: "02", title: "Mobile applications", description: "Thoughtful iOS and Android experiences, from first tap to lasting habit.", tags: "iOS · Android · Cross-platform" },
  { number: "03", title: "Business systems", description: "Connect your operations with tools tailored to your organization.", tags: "ERP · School systems · User management" },
  { number: "04", title: "Commerce & payments", description: "Make buying, billing, and getting paid feel effortless.", tags: "E-commerce · Invoicing · Payments" },
  { number: "05", title: "Data & dashboards", description: "Turn complex data into clear decisions your team can act on.", tags: "Analytics · Admin · Reporting" },
  { number: "06", title: "APIs & backend", description: "Reliable foundations that keep your product and services connected.", tags: "API development · Integrations · Databases" },
  { number: "07", title: "Cloud & modernization", description: "Move forward with secure deployment and software that keeps improving.", tags: "Cloud · Maintenance · Modernization" },
  { number: "08", title: "AI & automation", description: "Take repetitive work off your team's plate with useful AI.", tags: "AI features · Integrations · Workflows" },
];

const process = [
  { number: "01", title: "Listen & define", copy: "We learn how your business works, who the product serves, and what is getting in the way. Then we agree on goals, priorities, and a clear first scope." },
  { number: "02", title: "Design & validate", copy: "We shape the user journeys and interface, then share a clickable prototype so you can react to the experience before development begins." },
  { number: "03", title: "Build & refine", copy: "We develop in visible increments, share regular progress, and test the important paths with you as the product takes shape." },
  { number: "04", title: "Launch & grow", copy: "We prepare deployment, documentation, and a handover. Ongoing support and future improvements can be planned around your needs." },
];

const projectIdeas = [
  { number: "01", label: "FOR EDUCATION", title: "A school operations hub", copy: "Bring student records, attendance, timetables, fees, and parent updates into one well-organized system.", style: "school" },
  { number: "02", label: "FOR COMMERCE", title: "An easier way to sell", copy: "Give customers a smooth way to browse, order, pay, and keep track of what happens next.", style: "commerce" },
  { number: "03", label: "FOR SERVICE TEAMS", title: "A client self-service portal", copy: "Let customers check progress, share files, manage requests, and find the answers they need.", style: "portal" },
  { number: "04", label: "FOR BUSY BUSINESSES", title: "Less repetitive admin", copy: "Connect your tools and automate routine tasks, with people still in control of important decisions.", style: "automation" },
];

const deliverables = [
  { number: "A", title: "A clear plan", copy: "Shared goals, prioritized features, practical milestones, and a scope that fits your needs." },
  { number: "B", title: "A thoughtful experience", copy: "User journeys and interface design shaped around the people who will actually use the product." },
  { number: "C", title: "Working software", copy: "A tested application, with the integrations, access controls, and infrastructure the agreed scope calls for." },
  { number: "D", title: "A confident handover", copy: "Deployment support, useful documentation, and a conversation about what comes next." },
];

const questions = [
  { question: "What kinds of projects do you take on?", answer: "We work on web and mobile applications, internal business systems, commerce and payment experiences, dashboards, APIs, cloud deployments, and AI-enabled workflows. The best first step is a conversation about the problem you want to solve." },
  { question: "How much will my project cost?", answer: "It depends on the scope, integrations, and delivery needs. After an initial conversation, we can help shape a practical first release and provide a proposal based on the agreed work—rather than guessing from a feature list." },
  { question: "How long does a project take?", answer: "Timelines vary with the size and complexity of the product, how quickly decisions can be made, and any third-party dependencies. We’ll map milestones and assumptions together before work begins." },
  { question: "Can you improve software we already have?", answer: "Yes. We can help assess an existing product, modernize parts of it, add features, improve reliability, or plan a gradual migration. We start by understanding what is working and what needs to change." },
  { question: "What happens after launch?", answer: "We can help with handover, maintenance, monitoring, fixes, and future improvements. Support arrangements are discussed and agreed based on what your product and team need." },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { name: "X", href: "https://x.com/", icon: "x" },
  { name: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { name: "WhatsApp", href: "https://wa.me/", icon: "whatsapp" },
  { name: "GitHub", href: "https://github.com/", icon: "github" },
] as const;

type SocialIconName = (typeof socialLinks)[number]["icon"];

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "instagram") {
    return <Instagram size={20} aria-hidden="true" />;
  }

  if (name === "github") {
    return <Github size={20} aria-hidden="true" />;
  }

  if (name === "whatsapp") {
    return <svg className="social-whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.2 11.7a8.2 8.2 0 0 1-12.3 7.1L4 20l1.2-3.7a8.2 8.2 0 1 1 15-4.6Z" />
      <path d="M8.2 7.9c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.3.6-.1.6-.4 1.2-.9 1.5-.5.4-1.2.6-1.9.4-1.1-.3-2.5-1-3.8-2.2-1.1-1-2.1-2.5-2.4-3.6-.3-.9 0-1.7.5-2.2.2-.2.4-.2.6-.2Z" />
    </svg>;
  }

  if (name === "facebook") {
    return <svg className="social-icon-filled" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H7.7v3h2.7v8z" /></svg>;
  }

  if (name === "linkedin") {
    return <svg className="social-icon-filled" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.7H2V22h3.2V8.7ZM3.6 2a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM22 14.4c0-4-2.1-5.9-4.9-5.9a4.2 4.2 0 0 0-3.7 2v-1.8h-3.2V22h3.2v-7.3c0-1.9.4-3.7 2.7-3.7s2.4 2.1 2.4 3.8V22H22v-7.6Z" /></svg>;
  }

  return <svg className="social-icon-filled" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.5L5.5 22H2.4l7.3-8.4L1.8 2h6.5l4.4 6.9L18.9 2Zm-1.1 17.8h1.7L7.3 4.1H5.5l12.3 15.7Z" /></svg>;
}

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Veltrix Labs home">
      <span className="brand-symbol"><span /><span /><span /></span>
      <span>VELTRIX<span className="brand-light"> LABS</span></span>
    </a>
  );
}

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = `faq-answer-${index}`;

  return (
    <article className="faq-item">
      <h3 className="faq-question">
        <button
          className="faq-trigger"
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="faq-index">0{index + 1}</span>
          <span>{question}</span>
          <span className="faq-toggle" aria-hidden="true">+</span>
        </button>
      </h3>
      <div className={`faq-answer${isOpen ? " is-open" : ""}`} id={answerId} aria-hidden={!isOpen}>
        <div className="faq-answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const introTimers = useRef<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [introPhase, setIntroPhase] = useState<"showing" | "leaving" | "hidden">("showing");
  const [introStep, setIntroStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIntroPhase("hidden");
      return;
    }

    introTimers.current = [
      window.setTimeout(() => setIntroStep(1), 1300),
      window.setTimeout(() => setIntroStep(2), 2600),
      window.setTimeout(() => setIntroPhase("leaving"), 3700),
    ];

    return () => {
      introTimers.current.forEach(window.clearTimeout);
    };
  }, []);

  const skipIntro = () => {
    introTimers.current.forEach(window.clearTimeout);
    setIntroPhase("leaving");
  };

  useEffect(() => {
    if (introPhase !== "leaving" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".nav-inner", { y: -18, opacity: 0, duration: 0.8 })
        .from(".hero-kicker, .hero-title, .hero-copy, .hero-actions, .hero-meta", {
          y: 24,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
        }, "-=0.35")
        .from(".hero-art", { opacity: 0, scale: 0.94, duration: 1.15 }, "-=0.7");
    }, pageRef);

    return () => context.revert();
  }, [introPhase]);

  useEffect(() => {
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 86%", once: true },
          },
        );
      });

    }, pageRef);

    return () => context.revert();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={pageRef}>
      {introPhase !== "hidden" && (
        <div
          className={`site-intro${introPhase === "leaving" ? " is-leaving" : ""}`}
          role="status"
          aria-live="polite"
          onTransitionEnd={(event) => {
            if (event.target === event.currentTarget && introPhase === "leaving") setIntroPhase("hidden");
          }}
        >
          <span className="site-intro-index" aria-hidden="true">0{introStep + 1} <span>/ 03</span></span>
          <button className="site-intro-skip" type="button" onClick={skipIntro}>SKIP INTRO <ArrowUpRight size={13} /></button>
          <div className="site-intro-content">
            <div className="site-intro-brand"><span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span> VELTRIX LABS</div>
            <div className="site-intro-showcase" key={introStep}>
              <div className={`site-intro-art site-intro-art-${introStep + 1}`} aria-hidden="true">
                <span className="intro-art-ring intro-art-ring-outer" />
                <span className="intro-art-ring intro-art-ring-inner" />
                <span className="intro-art-card intro-art-card-back" />
                <span className="intro-art-card intro-art-card-front"><span /><span /><span /></span>
                <span className="intro-art-spark">✳</span>
              </div>
              <p className="site-intro-eyebrow">{["01 / FIND THE POSSIBILITY", "02 / DESIGN THE MOMENT", "03 / BUILD WHAT'S NEXT"][introStep]}</p>
              <h1 className="site-intro-title">
                {introStep === 0 && <>Start with<br />a <span>bold idea.</span></>}
                {introStep === 1 && <>Make it<br /><span>make sense.</span></>}
                {introStep === 2 && <>Build what<br /><span>moves you.</span></>}
              </h1>
              <p className="site-intro-caption">Veltrix Labs <span>—</span> Digital ideas, made real.</p>
            </div>
            <div className="site-intro-progress" aria-label={`Introduction ${introStep + 1} of 3`}>
              {[0, 1, 2].map((step) => <span key={step} className={step <= introStep ? "is-active" : ""} />)}
            </div>
          </div>
        </div>
      )}
      <header className="site-header">
        <div className="nav-inner container">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#project-ideas" onClick={closeMenu}>Project ideas</a>
            <a href="#approach" onClick={closeMenu}>Process</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <p className="eyebrow hero-kicker"><span className="status-dot" /> YOUR IDEAS, ENGINEERED</p>
            <h1 className="hero-title">Big ideas.<br />Real <span>software.</span></h1>
            <p className="hero-copy">
              Custom websites, apps, and digital systems for businesses worldwide. Let’s build something that gets you where you want to go.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Let’s build it <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#services">See what we make <ArrowDown size={15} /></a>
            </div>
            <div className="hero-meta"><span>INDEPENDENT DIGITAL STUDIO</span><span className="meta-line" /><span>GOOD IDEAS, BUILT RIGHT</span></div>
          </div>
          <div className="hero-art">
            <img className="hero-devices" src={heroDevices} alt="Line illustration of a laptop and mobile phone" />
          </div>
          <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><span className="scroll-rule" /></div>
        </section>

        <section className="intro-band">
          <div className="container intro-inner" data-reveal>
            <p className="eyebrow">SOFTWARE SHOULD MOVE YOU FORWARD</p>
            <p className="intro-statement">From the first sketch to the next thousand users, <span>we turn complex ideas into clear, capable digital products.</span></p>
          </div>
        </section>

        <section className="section services-section container" id="services">
          <div className="section-heading" data-reveal>
            <div><p className="eyebrow">01 — WHAT WE DO</p><h2>Built around your<br />next big move.</h2></div>
            <p className="section-summary">From a focused first release to a connected digital system, we bring product thinking and engineering together around your goals.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" data-reveal key={service.number}>
                <div className="service-top"><span>{service.number}</span><ArrowUpRight size={17} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-tags">{service.tags}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="ideas-section" id="project-ideas">
          <div className="container">
            <div className="section-heading ideas-heading" data-reveal>
              <div><p className="eyebrow">02 — A FEW WAYS TO START</p><h2>What could we<br />make together?</h2></div>
              <p className="section-summary">These are example project directions, not client case studies. Your solution should fit your people, process, and priorities.</p>
            </div>
            <div className="ideas-grid">
              {projectIdeas.map((idea) => (
                <article className={`idea-card idea-${idea.style}`} data-reveal key={idea.number}>
                  <div className="idea-art" aria-hidden="true">
                    <span className="idea-number">{idea.number}</span>
                    <div className="idea-visual">
                      <span className="idea-visual-top" />
                      <span className="idea-visual-row" />
                      <span className="idea-visual-row" />
                      <span className="idea-visual-row" />
                      <span className="idea-visual-accent" />
                    </div>
                    <span className="idea-stamp">A<br />GOOD<br />IDEA</span>
                  </div>
                  <div className="idea-copy">
                    <p className="eyebrow">{idea.label}</p>
                    <h3>{idea.title}</h3>
                    <p>{idea.copy}</p>
                    <a href="#contact" className="text-link">Talk through an idea <ArrowRight size={15} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="deliverables-section">
          <div className="container deliverables-inner">
            <div className="deliverables-intro" data-reveal>
              <p className="eyebrow">THE WORK, MADE CLEAR</p>
              <h2>More than<br />just code.</h2>
              <p>A good project gives your team clarity at every step—and a product you can confidently take forward.</p>
            </div>
            <div className="deliverables-list">
              {deliverables.map((item) => (
                <article className="deliverable" data-reveal key={item.number}>
                  <span className="deliverable-number">{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                  <ArrowUpRight size={16} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="container approach-inner">
            <div className="approach-copy" data-reveal>
              <p className="eyebrow">03 — HOW WE WORK</p>
              <h2>Small team.<br /><span>Serious momentum.</span></h2>
              <p>Good software is a team sport. Work directly with the people shaping and building your product—no handoffs, no black boxes, just steady progress and a partner who cares.</p>
              <a className="text-link" href="#contact">Meet your next tech partner <ArrowRight size={16} /></a>
            </div>
            <div className="process-list">
              {process.map((step) => (
                <article className="process-step" data-reveal key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.copy}</p></div>
                  <span className="step-mark">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="capabilities container" data-reveal>
          <p className="eyebrow">THE RIGHT TOOLS FOR THE JOB</p>
          <div className="capability-row">
            <span>WEB & MOBILE</span><span>PRODUCT DESIGN</span><span>BACKEND & APIs</span><span>CLOUD & DEVOPS</span><span>AI & AUTOMATION</span>
          </div>
        </section>

        <section className="faq-section">
          <div className="container faq-inner">
            <div className="faq-heading" data-reveal>
              <p className="eyebrow">GOOD QUESTIONS</p>
              <h2>Before we<br />get building.</h2>
              <p>Don’t see your question here? Send us a note and we’ll get back to you.</p>
              <a className="text-link" href="mailto:hello@veltrixlabs.com">Ask us directly <ArrowRight size={15} /></a>
            </div>
            <div className="faq-list">
              {questions.map((item, index) => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="social-section" aria-labelledby="social-title">
          <div className="container social-inner" data-reveal>
            <div>
              <p className="eyebrow">FIND US ONLINE</p>
              <h2 id="social-title">Let’s connect.</h2>
            </div>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a key={social.name} className="social-link" href={social.href} target="_blank" rel="noreferrer" aria-label={`Visit Veltrix Labs on ${social.name}`}>
                  <SocialIcon name={social.icon} />
                  <span>{social.name}</span>
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div className="contact-card" data-reveal>
            <div className="contact-copy">
              <p className="eyebrow"><span className="status-dot" /> 04 — YOUR NEXT CHAPTER</p>
              <h2>Have a big idea?<br /><span>Let’s make it real.</span></h2>
              <p>Tell us what you’re thinking. We’ll bring curiosity, honest advice, and a plan to get moving.</p>
              <a className="button button-primary" href="mailto:hello@veltrixlabs.com?subject=Let%27s%20build%20something">Tell us about your project <ArrowUpRight size={16} /></a>
            </div>
            <div className="contact-index"><span>VELTRIX LABS</span><span>INDEPENDENT BY DESIGN<br />BUILT TO MOVE YOU FORWARD.</span><span>VL — 026</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner"><Brand /><span>© {new Date().getFullYear()} VELTRIX LABS</span><a href="mailto:hello@veltrixlabs.com">LET’S BUILD SOMETHING <ArrowUpRight size={13} /></a></div>
      </footer>
    </div>
  );
}

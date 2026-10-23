import { useEffect, useRef, useState } from 'react';
import photo from './assets/profile.jpg';
import {
  profile, stats, experience, education, research, books, projects,
  projectCategories, channels, otherMade, skills, certifications, languages,
} from './data.js';
import { caseStudies } from './caseStudies.js';

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const allProjects = projects.map((p) => ({ ...p, slug: slugify(p.name), study: caseStudies[p.name] }));
const studied = allProjects.filter((p) => p.study);
const projectPath = (p) => `#/projects/${p.slug}`;
const DEFAULT_TITLE = document.title;

function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash;
}

const NAV = [
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['research', 'Research'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || null);
  const toggle = () => {
    const current = theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
    setTheme(next);
  };
  return toggle;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

const Ext = ({ href, children, className }) => (
  <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>
);

function Section({ id, index, title, children }) {
  return (
    <section id={id} className="section">
      <header className="section-head reveal">
        <span className="section-index">{index}</span>
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  );
}

function Nav({ onToggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">Kai Yi Ji</a>
        <button className="menu-btn" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <button className="theme-btn" onClick={onToggleTheme} aria-label="Toggle colour theme">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-text reveal">
        <p className="eyebrow">{profile.role}</p>
        <h1>
          Engineering software,<br />
          <em>modelling health.</em>
        </h1>
        <p className="lede">{profile.intro}</p>
        <div className="hero-meta">
          <span>{profile.location}</span>
          <span>{profile.rightToWork}</span>
        </div>
        <div className="hero-cta">
          <a className="btn primary" href={`mailto:${profile.email}`}>Get in touch</a>
          <Ext className="btn" href={profile.links.github}>GitHub</Ext>
          <Ext className="btn" href={profile.links.linkedin}>LinkedIn</Ext>
        </div>
      </div>
      <figure className="hero-photo reveal">
        <img src={photo} alt="Portrait of Kai Yi Ji" />
        <figcaption>
          <span className="dot" /> MSc, University of Oxford · 2026
        </figcaption>
      </figure>
      <dl className="stats reveal">
        {stats.map((s) => (
          <div key={s.label}>
            <dt>{s.value}</dt>
            <dd>{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Experience() {
  return (
    <Section id="experience" index="01" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company + job.role} className="job reveal">
            <div className="job-when">
              <span>{job.period}</span>
              {job.place && <span className="muted">{job.place}</span>}
            </div>
            <div className="job-body">
              <h3>{job.role} <span className="at">· {job.company}</span></h3>
              {job.summary && <p className="job-summary">{job.summary}</p>}
              <ul className="bullets">
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              {job.impact && (
                <div className="impact">
                  <h4>Client work highlights</h4>
                  <ul>{job.impact.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              )}
              {job.clients && (
                <div className="chips">
                  {job.clients.map((c) => <span key={c} className="chip">{c}</span>)}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" index="02" title="Education">
      <div className="edu-grid">
        {education.map((e, i) => (
          <article key={e.school} className={`card edu reveal ${i === 0 ? 'featured' : ''}`}>
            <p className="muted mono">{e.period}</p>
            <h3>{e.school}</h3>
            <p className="edu-degree">{e.degree}</p>
            <p className="accent">{e.detail}</p>
            {e.modules && (
              <ul className="modules">
                {e.modules.map((m) => <li key={m}>{m}</li>)}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

function Research() {
  return (
    <Section id="research" index="03" title="Research & writing">
      <div className="research-list">
        {research.map((r) => (
          <article key={r.title} className="research reveal">
            <p className="mono muted">{r.kind}</p>
            <h3><Ext href={r.href}>{r.title} <span className="arrow">↗</span></Ext></h3>
            <p>{r.text}</p>
            {r.extra && <Ext className="link" href={r.extra.href}>{r.extra.label} ↗</Ext>}
          </article>
        ))}
      </div>
      <div className="books reveal">
        <h4>Books</h4>
        <ul>
          {books.map((b) => (
            <li key={b.title}><strong>{b.title}</strong><span className="muted">{b.note}</span></li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

// Remembered so the filter survives a trip to a case study and back.
let lastCategory = 'all';

function Projects() {
  const [cat, setCatState] = useState(lastCategory);
  const setCat = (c) => { lastCategory = c; setCatState(c); };
  const shown = cat === 'all' ? allProjects : allProjects.filter((p) => p.cat === cat);
  return (
    <Section id="projects" index="04" title="Projects">
      <p className="section-note reveal">
        Projects marked <span className="accent">Case study</span> have a full write-up: the problem, the approach and the outcome.
      </p>
      <div className="filters reveal" role="tablist">
        {projectCategories.map((c) => {
          const count = c.id === 'all' ? allProjects.length : allProjects.filter((p) => p.cat === c.id).length;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={cat === c.id}
              className={cat === c.id ? 'active' : ''}
              onClick={() => setCat(c.id)}
            >
              {c.label} <span className="count">{count}</span>
            </button>
          );
        })}
      </div>
      <div className="project-grid">
        {shown.map((p) => (
          <article key={p.name} className={`card project ${p.study ? 'has-study' : ''}`}>
            {p.study && <span className="study-badge">Case study</span>}
            <h3>
              {p.study
                ? <a className="stretched" href={projectPath(p)}>{p.name}</a>
                : p.href ? <Ext href={p.href}>{p.name} <span className="arrow">↗</span></Ext> : p.name}
            </h3>
            <p>{p.text}</p>
            <div className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
            {p.study
              ? <span className="link">Read case study →</span>
              : p.extra && <Ext className="link" href={p.extra.href}>{p.extra.label} ↗</Ext>}
          </article>
        ))}
      </div>
      <div className="creative reveal">
        <div>
          <h4>YouTube channels</h4>
          <ul className="inline-list">
            {channels.map((c) => (
              <li key={c.name}>
                {c.href ? <Ext href={c.href}>{c.name} ↗</Ext> : <span>{c.name}</span>}
                {c.note && <span className="muted"> — {c.note}</span>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Also made</h4>
          <ul className="inline-list">
            {otherMade.map((o) => <li key={o}>{o}</li>)}
            <li><Ext href={profile.links.itch}>Games on itch.io ↗</Ext></li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function ProjectPage({ project: p }) {
  const s = p.study;
  const category = projectCategories.find((c) => c.id === p.cat)?.label;
  const links = [
    ...(s.links || (p.href ? [{ label: 'View project', href: p.href }] : [])),
    ...(p.extra ? [p.extra] : []),
  ];
  const i = studied.indexOf(p);
  const prev = studied[(i - 1 + studied.length) % studied.length];
  const next = studied[(i + 1) % studied.length];

  return (
    <article className="case">
      <a href="#projects" className="back">← All projects</a>
      <header className="case-head">
        <p className="eyebrow">{category}</p>
        <h1>{p.name}<span className="accent">.</span></h1>
        <p className="lede">{s.subtitle}</p>
        <div className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
        {(s.role || links.length > 0) && (
          <div className="case-meta">
            {s.role && <span>{s.role}</span>}
            {links.map((l) => <Ext key={l.href} className="btn" href={l.href}>{l.label} ↗</Ext>)}
          </div>
        )}
      </header>

      <section className="case-section">
        <h2>The problem</h2>
        <p>{s.problem}</p>
      </section>
      <section className="case-section">
        <h2>The approach</h2>
        <ul className="bullets">{s.approach.map((a) => <li key={a}>{a}</li>)}</ul>
      </section>
      <section className="case-section">
        <h2>The outcome</h2>
        <ul className="bullets">{s.outcome.map((o) => <li key={o}>{o}</li>)}</ul>
      </section>

      <nav className="case-nav" aria-label="More case studies">
        <a href={projectPath(prev)}><span className="muted mono">← Previous</span>{prev.name}</a>
        <a href={projectPath(next)} className="next"><span className="muted mono">Next →</span>{next.name}</a>
      </nav>
    </article>
  );
}

function Skills() {
  return (
    <Section id="skills" index="05" title="Skills & credentials">
      <div className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skill-row reveal">
            <h4>{s.group}</h4>
            <div className="chips">{s.items.map((i) => <span key={i} className="chip">{i}</span>)}</div>
          </div>
        ))}
      </div>
      <div className="two-col">
        <div className="card reveal">
          <h4>Certifications</h4>
          <ul className="bullets compact">{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
        <div className="card reveal">
          <h4>Languages</h4>
          {languages.map((l) => (
            <p key={l.level} className="lang">
              <span className="muted mono">{l.level}</span>
              <span>{l.items.join(' · ')}</span>
            </p>
          ))}
          <h4 className="spaced">Community</h4>
          <p>Member, University of Birmingham Computer Science Society (2020 – 2023)</p>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="reveal">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something useful.</h2>
        <p className="lede">
          Open to software engineering, health modelling and data roles, plus freelance work.
        </p>
        <div className="emails">
          <a className="email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="email" href={`mailto:${profile.altEmail}`}>{profile.altEmail}</a>
        </div>
        <div className="hero-cta">
          <Ext className="btn" href={profile.links.github}>GitHub</Ext>
          <Ext className="btn" href={profile.links.linkedin}>LinkedIn</Ext>
          <Ext className="btn" href={profile.links.upwork}>Upwork</Ext>
          <Ext className="btn" href={profile.links.itch}>itch.io</Ext>
        </div>
      </div>
      <p className="muted small">© {new Date().getFullYear()} Kai Yi Ji</p>
    </footer>
  );
}

export default function App() {
  const toggleTheme = useTheme();
  const hash = useHash();
  const slug = hash.match(/^#\/projects\/([\w-]+)/)?.[1];
  const project = slug && studied.find((p) => p.slug === slug);
  const wasDetail = useRef(false);
  useReveal();

  // Opening a case study starts at the top; leaving one jumps to the section in the link.
  useEffect(() => {
    if (project) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.title = `${project.name} — Kai Yi Ji`;
    } else {
      document.title = DEFAULT_TITLE;
      if (wasDetail.current) {
        const el = hash.length > 1 && document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'instant' });
        else window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
    wasDetail.current = Boolean(project);
  }, [hash]);

  return (
    <>
      <Nav onToggleTheme={toggleTheme} />
      <main>
        {project ? <ProjectPage key={project.slug} project={project} /> : (
          <>
            <Hero />
            <Experience />
            <Education />
            <Research />
            <Projects />
            <Skills />
          </>
        )}
      </main>
      <Contact />
    </>
  );
}

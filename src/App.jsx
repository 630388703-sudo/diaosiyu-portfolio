import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  MoveDown,
  Sparkles
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { projects } from "./data/projects";

const contacts = ["Behance", "Instagram", "Xiaohongshu"];

function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  if (hash.startsWith("project/")) {
    return { name: "project", slug: hash.slice("project/".length) };
  }
  return { name: "home" };
}

function VisualBlock({ project, size = "large", index = 0 }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className={"visual-block visual-" + project.visual + " tone-" + project.palette + " " + size}>
      <div className="visual-noise" />
      <div className="visual-grid" />
      <div className="visual-orbit one" />
      <div className="visual-orbit two" />
      <div className="visual-mark" aria-hidden="true">
        <span>{project.title.slice(0, 1)}</span>
      </div>
      <div className="visual-index">{number}</div>
      <div className="visual-label">
        <span>{project.type}</span>
        <strong>{project.year}</strong>
      </div>
    </div>
  );
}

function Header({ navigateHome }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <header className="site-header">
      <button className="brand" onClick={() => navigateHome()}>
        <span className="brand-mark">DSY</span>
        <span className="brand-name">刁思予 <small>Portfolio</small></span>
      </button>
      <nav aria-label="主导航">
        <button onClick={() => navigateHome("about")}>About</button>
        <button onClick={() => navigateHome("projects")}>Projects</button>
        <button onClick={() => navigateHome("contact")}>Contact</button>
      </nav>
      <span className="header-year">© 2026</span>
      <div className="scroll-progress" style={{ width: progress + "%" }} />
    </header>
  );
}

function HomePage({ openProject }) {
  return (
    <main>
      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="hero-topline">
            <p className="eyebrow">Digital Media Artist · Kunming</p>
            <span>Available for collaboration</span>
          </div>
          <h1>
            <span>刁思予</span>
            <em>Visual stories for</em>
            <em>digital experiences.</em>
          </h1>
          <div className="hero-bottom">
            <p className="hero-text">
              关注视觉叙事、交互体验、游戏场景与数字艺术创作，在影像、界面和空间之间寻找可以被感知的故事。
            </p>
            <a className="round-link" href="#projects" aria-label="向下查看项目">
              <MoveDown size={22} />
            </a>
          </div>
        </div>

        <div className="hero-stage" aria-label="作品集视觉封面">
          <div className="stage-caption">Selected practice / 2025—2026</div>
          <div className="stage-card stage-a">
            <span>01</span><strong>Visual<br />Narrative</strong>
          </div>
          <div className="stage-card stage-b">
            <span>02</span><strong>Interaction<br />Design</strong>
          </div>
          <div className="stage-card stage-c">
            <span>03</span><strong>Game<br />Worlds</strong>
          </div>
          <div className="stage-sphere" />
          <div className="stage-cross">+</div>
        </div>
      </section>

      <section className="marquee" aria-hidden="true">
        <div>
          Visual Narrative <i>✦</i> Interaction Design <i>✦</i> Game Art <i>✦</i>
          Visual Narrative <i>✦</i> Interaction Design <i>✦</i> Game Art <i>✦</i>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-number">01 / About</div>
        <div className="about-grid">
          <h2>用叙事组织体验，<br />用界面捕捉情绪。</h2>
          <div className="about-copy">
            <p>
              我的创作方向集中在数字媒体艺术、交互设计、视觉小说、游戏场景概念和实验影像。作品常从个人经验或社会议题出发，通过故事、交互和图像系统建立观众的参与感。
            </p>
            <div className="skill-lines">
              <span><b>Tools</b> Figma / Photoshop / Illustrator / Premiere / Unity</span>
              <span><b>Methods</b> Storyboard / User Journey / Prototype / Visual Research</span>
              <span><b>Fields</b> Narrative Design / Interface / Game Art / AI Video</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects section-shell" id="projects">
        <div className="section-heading">
          <div>
            <div className="section-number">02 / Selected projects</div>
            <h2>Selected Works</h2>
          </div>
          <p>四个方向，共享同一种关注：人在系统、空间和关系中的感受。</p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.slug}>
              <button onClick={() => openProject(project.slug)} aria-label={"查看" + project.title + "详情"}>
                <VisualBlock project={project} index={index} />
                <div className="project-card-body">
                  <div className="project-title-row">
                    <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.subtitle}</p>
                    </div>
                    <span className="project-arrow"><ArrowUpRight size={22} /></span>
                  </div>
                  <div className="project-card-footer">
                    <span>{project.type}</span>
                    <div className="tags">
                      {project.keywords.slice(0, 3).map((keyword) => <span key={keyword}>{keyword}</span>)}
                    </div>
                    <span>{project.year}</span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="section-number">03 / Contact</div>
        <div className="contact-main">
          <h2>Let’s make something<br /><em>worth feeling.</em></h2>
          <a className="contact-circle" href="mailto:hello@example.com" aria-label="发送邮件">
            <Mail size={30} />
          </a>
        </div>
        <div className="contact-panel">
          <a href="mailto:hello@example.com"><Mail size={17} /> hello@example.com</a>
          <div className="contact-links">
            {contacts.map((item) => <a href="#" key={item}>{item}<ArrowUpRight size={14} /></a>)}
          </div>
          <a className="download" href="#" aria-label="下载作品集">
            <Download size={17} /> Portfolio PDF
          </a>
        </div>
      </section>

      <footer className="footer section-shell">
        <span>刁思予 · Digital Media Art</span>
        <span>Designed with curiosity</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}

function ProjectPage({ slug, onHome, openProject }) {
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug]);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!project) {
    return (
      <main className="section-shell not-found">
        <p className="eyebrow">404 / Project not found</p>
        <h1>项目不存在</h1>
        <button className="ghost-action" onClick={onHome}>返回首页</button>
      </main>
    );
  }

  const sections = [
    ["01", "项目简介", project.summary],
    ["02", "设计背景", project.background],
    ["03", "设计过程", project.process],
    ["04", "最终效果", project.outcome]
  ];

  return (
    <main className="detail">
      <section className="detail-hero section-shell">
        <button className="back-link" onClick={onHome}><ArrowLeft size={17} /> All projects</button>
        <div className="detail-head">
          <div>
            <p className="eyebrow">{String(projectIndex + 1).padStart(2, "0")} / {project.type} / {project.year}</p>
            <h1>{project.title}</h1>
          </div>
          <div className="detail-intro">
            <p>{project.subtitle}</p>
            <div className="tags">
              {project.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
            </div>
          </div>
        </div>
        <VisualBlock project={project} size="wide" index={projectIndex} />
      </section>

      <section className="detail-content section-shell">
        {sections.map(([number, title, copy]) => (
          <article className="detail-text" key={title}>
            <span className="detail-number">{number}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="gallery section-shell">
        <div className="section-heading compact">
          <div>
            <div className="section-number">Project archive</div>
            <h2>Visual Process</h2>
          </div>
          <p>概念推导、界面实验与最终呈现。</p>
        </div>
        <div className="gallery-grid">
          {["Research / 01", "Process / 02", "Outcome / 03"].map((label, index) => (
            <div className={"gallery-item tone-" + project.palette + " item-" + (index + 1)} key={label}>
              <Sparkles size={18} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="next-project section-shell">
        <span>Next project</span>
        <button onClick={() => openProject(nextProject.slug)}>
          <strong>{nextProject.title}</strong>
          <ArrowRight size={34} />
        </button>
      </section>
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const syncRoute = () => setRoute(getRoute());
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  const openHome = (section) => {
    window.location.hash = section || "home";
    setRoute({ name: "home" });
    window.requestAnimationFrame(() => {
      if (section) document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const openProject = (slug) => {
    window.location.hash = "project/" + slug;
    setRoute({ name: "project", slug });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <Header navigateHome={openHome} />
      {route.name === "project"
        ? <ProjectPage slug={route.slug} onHome={() => openHome("projects")} openProject={openProject} />
        : <HomePage openProject={openProject} />}
    </div>
  );
}

import { ArrowLeft, ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { projects } from "./data/projects";

const contacts = ["Email", "Behance", "Instagram", "Xiaohongshu"];

function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  if (!hash || hash === "home") return { name: "home" };
  const [, slug] = hash.split("/");
  return { name: "project", slug };
}

function VisualBlock({ project, size = "large" }) {
  return (
    <div className={`visual-block visual-${project.visual} tone-${project.palette} ${size}`}>
      <div className="visual-grid" />
      <div className="visual-orbit one" />
      <div className="visual-orbit two" />
      <div className="visual-label">
        <span>{project.type}</span>
        <strong>{project.year}</strong>
      </div>
    </div>
  );
}

function Header({ onHome }) {
  return (
    <header className="site-header">
      <button className="brand" onClick={onHome} aria-label="返回首页">
        <span>刁思予</span>
        <small>Portfolio</small>
      </button>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function HomePage({ openProject }) {
  return (
    <>
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Digital Media Art / Interaction Design</p>
          <h1>刁思予</h1>
          <p className="hero-text">
            关注视觉叙事、交互体验、游戏场景与数字艺术创作，在影像、界面和空间之间寻找可以被感知的故事。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              查看项目 <ArrowRight size={18} />
            </a>
            <a className="ghost-action" href="#contact">
              联系我
            </a>
          </div>
        </div>
        <div className="hero-stage" aria-label="作品集视觉封面">
          <div className="stage-card stage-a">Visual Narrative</div>
          <div className="stage-card stage-b">Interaction</div>
          <div className="stage-card stage-c">Game Scene</div>
          <div className="stage-line" />
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-kicker">About</div>
        <div className="about-grid">
          <h2>用叙事组织体验，用界面捕捉情绪。</h2>
          <div className="about-copy">
            <p>
              我的创作方向集中在数字媒体艺术、交互设计、视觉小说、游戏场景概念和实验影像。作品常从个人经验或社会议题出发，通过故事、交互和图像系统建立观众的参与感。
            </p>
            <div className="skill-lines">
              <span>Tools: Figma / Photoshop / Illustrator / Premiere / Unity</span>
              <span>Methods: Storyboard / User Journey / Prototype / Visual Research</span>
              <span>Fields: Narrative Design / Interface / Game Art / AI Video</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects section-shell" id="projects">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Projects</div>
            <h2>Selected Works</h2>
          </div>
          <p>四个方向不同但共享同一种关注：人在系统、空间和关系中的感受。</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <button onClick={() => openProject(project.slug)} aria-label={`查看${project.title}详情`}>
                <VisualBlock project={project} />
                <div className="project-card-body">
                  <div className="project-meta">
                    <span>{project.year}</span>
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <div className="tags">
                    {project.keywords.slice(0, 3).map((keyword) => (
                      <span key={keyword}>{keyword}</span>
                    ))}
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div>
          <div className="section-kicker">Contact</div>
          <h2>期待一起完成有感知力的数字作品。</h2>
        </div>
        <div className="contact-panel">
          <a href="mailto:hello@example.com">
            <Mail size={18} /> hello@example.com
          </a>
          <div className="contact-links">
            {contacts.slice(1).map((item) => (
              <a href="#" key={item}>{item}</a>
            ))}
          </div>
          <a className="download" href="#" aria-label="下载作品集">
            <Download size={18} /> 作品集下载
          </a>
        </div>
      </section>
    </>
  );
}

function ProjectPage({ slug, onHome }) {
  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug]);

  if (!project) {
    return (
      <main className="section-shell not-found">
        <h1>项目不存在</h1>
        <button className="ghost-action" onClick={onHome}>返回首页</button>
      </main>
    );
  }

  return (
    <main className="detail">
      <section className="detail-hero section-shell">
        <button className="back-link" onClick={onHome}>
          <ArrowLeft size={18} /> 返回首页
        </button>
        <div className="detail-head">
          <div>
            <p className="eyebrow">{project.type} / {project.year}</p>
            <h1>{project.title}</h1>
            <p>{project.subtitle}</p>
          </div>
          <div className="tags detail-tags">
            {project.keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </div>
        <VisualBlock project={project} size="wide" />
      </section>

      <section className="detail-content section-shell">
        {[
          ["项目简介", project.summary],
          ["设计背景", project.background],
          ["设计过程", project.process],
          ["最终效果", project.outcome]
        ].map(([title, text]) => (
          <article className="detail-text" key={title}>
            <span>{title}</span>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="gallery section-shell">
        <div className="section-kicker">Image Area</div>
        <div className="gallery-grid">
          {[1, 2, 3].map((item) => (
            <div className={`gallery-item tone-${project.palette}`} key={item}>
              <Sparkles size={20} />
              <span>Project Image Placeholder {item}</span>
            </div>
          ))}
        </div>
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

  const openHome = () => {
    window.location.hash = "home";
    setRoute({ name: "home" });
  };

  const openProject = (slug) => {
    window.location.hash = `project/${slug}`;
    setRoute({ name: "project", slug });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app min-h-screen">
      <Header onHome={openHome} />
      {route.name === "project" ? (
        <ProjectPage slug={route.slug} onHome={openHome} />
      ) : (
        <HomePage openProject={openProject} />
      )}
    </div>
  );
}

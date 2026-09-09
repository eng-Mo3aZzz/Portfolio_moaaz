(() => {
  "use strict";

  const EMAIL = "moaaz.aiengineer@gmail.com";

  const certifications = [
    {
      title: "HCIA-Big Data V3.5 Course",
      issuer: "Huawei ICT Academy",
      date: "2026-08-25",
      credentialId: "EBG20260825000529",
      image: "assets/images/certifications/hcia-big-data.jpg",
      description:
        "Certificate of Completion for the HCIA-Big Data V3.5 course. This verifies course study and exam completion and is distinct from the official Huawei Certification exam.",
      certificateUrl: "assets/images/certifications/hcia-big-data.jpg",
      verificationUrl: "",
      category: "Big Data",
    },
    {
      title: "CCNA (Cisco Certified Network Associate)",
      issuer: "IT Gate",
      date: "",
      credentialId: "",
      image: "",
      description: "Completed the CCNA program covering core networking fundamentals.",
      certificateUrl: "",
      verificationUrl: "",
      category: "Networking",
      status: "Completed",
    },
    {
      title: "MCSA (Microsoft Certified Solutions Associate)",
      issuer: "IT Gate",
      date: "",
      credentialId: "",
      image: "",
      description: "Completed the MCSA program covering Microsoft systems administration.",
      certificateUrl: "",
      verificationUrl: "",
      category: "Systems",
      status: "Completed",
    },
  ];

  const skillGroups = [
    {
      name: "Programming",
      items: [
        { name: "Python", note: "Primary language" },
        { name: "C++", note: "Core programming" },
      ],
    },
    {
      name: "Data Analysis",
      items: [
        { name: "SQL", note: "Querying data" },
        { name: "Pandas", note: "Data wrangling" },
        { name: "NumPy", note: "Numerical computing" },
        { name: "Data Analysis", note: "Exploration & insight" },
        { name: "Power BI", note: "Dashboards" },
      ],
    },
    {
      name: "Machine Learning",
      items: [
        { name: "Machine Learning", note: "Prediction & classification" },
        { name: "Scikit-learn", note: "Modeling toolkit" },
      ],
    },
    {
      name: "AI",
      items: [
        { name: "Artificial Intelligence", note: "Intelligent systems" },
        { name: "NLP", note: "Text & language" },
      ],
    },
    {
      name: "Big Data",
      items: [
        { name: "Hadoop", note: "Distributed processing" },
        { name: "Big Data", note: "Large-scale data" },
      ],
    },
  ];

  const projects = [
    {
      id: "covid-mortality",
      title: "COVID-19 Mortality Prediction",
      category: "Machine Learning",
      image: "assets/images/project-covid.jpg",
      summary:
        "A machine learning project predicting whether a COVID-19 patient is likely to die based on their clinical and demographic data. The project includes data cleaning and exploratory analysis using Pandas, handling class imbalance with SMOTENC, and training a Random Forest classifier optimized with GridSearchCV and stratified group cross-validation.",
      problem:
        "Estimate mortality risk for COVID-19 patients from clinical and demographic features so that risk can be assessed from structured patient data.",
      approach:
        "Build a supervised classification pipeline: clean and explore the dataset, address class imbalance, then train and tune a Random Forest model with grouped, stratified validation.",
      dataProcessing:
        "Data cleaning and exploratory analysis with Pandas. Class imbalance handled with SMOTENC so categorical and numeric features are treated appropriately.",
      model:
        "Random Forest classifier optimized with GridSearchCV and stratified group cross-validation.",
      evaluation: ["Accuracy", "Precision", "Recall", "F1-Score", "ROC-AUC"],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "SMOTENC",
        "Random Forest",
        "GridSearchCV",
        "Machine Learning",
        "Streamlit",
      ],
      github: "https://github.com/eng-Mo3aZzz/covid-19-ai-project/tree/main",
      demo: "https://covid-19-mortality-predictor.streamlit.app/",
    },
  ];

  const EFFECT = {
    strong: { rot: 5, scale: 1.035, z: 18 },
    medium: { rot: 3, scale: 1.02, z: 12 },
    light: { rot: 2.6, scale: 1.02, z: 8 },
    subtle: { rot: 1.4, scale: 1.01, z: 4 },
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const interactive = finePointer && !reduceMotion;

  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  const qs = (sel, root = document) => root.querySelector(sel);
  const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];

  const iconSvg = `
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="currentColor" d="M12 2 3 7v2h18V7L12 2Zm-6 9v7h2v-7H6Zm5 0v7h2v-7h-2Zm5 0v7h2v-7h-2ZM4 20v2h16v-2H4Z"/>
    </svg>`;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderCertifications() {
    const grid = qs("#certGrid");
    if (!grid) return;
    if (!certifications.length) {
      grid.innerHTML = `<div class="empty-state"><p class="empty-state__title">Certifications will appear here</p><p>Real certificates will be added as they are earned.</p></div>`;
      return;
    }
    grid.innerHTML = certifications
      .map((cert, index) => {
        const fields = [];
        if (cert.status) fields.push(`<span>${escapeHtml(cert.status)}</span>`);
        if (cert.date) fields.push(`<span>Issued ${escapeHtml(cert.date)}</span>`);
        if (cert.credentialId) fields.push(`<span>ID ${escapeHtml(cert.credentialId)}</span>`);
        const verify = cert.verificationUrl
          ? `<a class="btn btn--ghost btn--sm" href="${escapeHtml(cert.verificationUrl)}" target="_blank" rel="noopener noreferrer">Verify Credential</a>`
          : "";
        const hasImage = Boolean(cert.image);
        const media = hasImage
          ? `<div class="media-frame"><img src="${escapeHtml(cert.image)}" alt="${escapeHtml(cert.title)} certificate preview" loading="lazy"></div>`
          : `<div class="media-frame"><div class="project-placeholder"><span>${escapeHtml(cert.title)}</span></div></div>`;
        const viewBtn = hasImage
          ? `<button class="btn btn--primary btn--sm" type="button" data-open-cert="${index}">View Certificate</button>`
          : "";
        return `
        <article class="cert-card interactive-card reveal" data-mouse-effect="medium" ${hasImage ? 'data-cursor="View"' : ""} data-cert-index="${index}">
          ${media}
          <div class="card-body">
            <h3>${escapeHtml(cert.title)}</h3>
            <p>${escapeHtml(cert.issuer)}</p>
            <div class="meta-row">${fields.join("")}</div>
            <div class="card-actions">
              ${viewBtn}
              ${verify}
            </div>
          </div>
        </article>`;
      })
      .join("");
  }

  function renderSkills() {
    const root = qs("#skillsRoot");
    if (!root) return;
    root.innerHTML = skillGroups
      .map(
        (group) => `
      <div class="skill-group">
        <h3>${escapeHtml(group.name)}</h3>
        <div class="skill-grid">
          ${group.items
            .map(
              (item) => `
            <article class="skill-card interactive-card reveal" data-mouse-effect="strong">
              <span class="skill-card__icon">${iconSvg}</span>
              <h4>${escapeHtml(item.name)}</h4>
              ${item.note ? `<p>${escapeHtml(item.note)}</p>` : ""}
            </article>`
            )
            .join("")}
        </div>
      </div>`
      )
      .join("");
  }

  function projectImage(project) {
    return `<div class="media-frame" data-project-media>
      <div class="project-placeholder">
        <span>${escapeHtml(project.title)}</span>
      </div>
    </div>`;
  }

  function renderProjects() {
    const grid = qs("#projectGrid");
    const filters = qs("#projectFilters");
    if (!grid) return;

    const categories = [...new Set(projects.map((p) => p.category))];
    if (filters && categories.length) {
      filters.hidden = false;
      filters.innerHTML = ["All", ...categories]
        .map(
          (cat, i) =>
            `<button class="filter-btn${i === 0 ? " is-active" : ""}" type="button" data-filter="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`
        )
        .join("");
    }

    grid.innerHTML = projects
      .map((project, index) => {
        const badges = project.technologies
          .map((t) => `<span>${escapeHtml(t)}</span>`)
          .join("");
        return `
        <article class="project-card interactive-card reveal" data-mouse-effect="strong" data-cursor="View" data-category="${escapeHtml(project.category)}" data-project-index="${index}">
          ${projectImage(project)}
          <div class="card-body">
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.summary)}</p>
            <div class="badges">${badges}</div>
            <div class="card-actions">
              <a class="btn btn--ghost btn--sm" href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a class="btn btn--ghost btn--sm" href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <button class="btn btn--primary btn--sm" type="button" data-open-project="${index}">View Details</button>
            </div>
          </div>
        </article>`;
      })
      .join("");

    tryProjectCover();
  }

  function tryProjectCover() {
    qsa("[data-project-index]").forEach((card) => {
      const index = Number(card.dataset.projectIndex);
      const project = projects[index];
      if (!project?.image) return;
      const img = new Image();
      img.onload = () => {
        const frame = qs("[data-project-media]", card);
        if (!frame) return;
        frame.innerHTML = `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} project preview" loading="lazy">`;
      };
      img.onerror = () => {};
      img.src = project.image;
    });
  }

  const modal = qs("#modal");
  const modalBody = qs("#modalBody");
  const modalDialog = qs(".modal__dialog", modal);
  let lastFocus = null;

  function openModal(html) {
    if (!modal || !modalBody) return;
    lastFocus = document.activeElement;
    modalBody.innerHTML = html;
    modal.hidden = false;
    document.body.classList.add("is-locked");
    modalDialog?.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    modalBody.innerHTML = "";
    document.body.classList.remove("is-locked");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function certHtml(cert) {
    const id = cert.credentialId ? `<p class="modal-meta">Credential ID: ${escapeHtml(cert.credentialId)}</p>` : "";
    const verify = cert.verificationUrl
      ? `<a class="btn btn--primary" href="${escapeHtml(cert.verificationUrl)}" target="_blank" rel="noopener noreferrer">Verify Credential</a>`
      : "";
    return `
      <div class="modal__media">
        <img src="${escapeHtml(cert.image)}" alt="${escapeHtml(cert.title)} certificate">
      </div>
      <h2 id="modalTitle">${escapeHtml(cert.title)}</h2>
      <p class="modal-meta">${escapeHtml(cert.issuer)}${cert.date ? ` · ${escapeHtml(cert.date)}` : ""}</p>
      ${id}
      ${cert.description ? `<p>${escapeHtml(cert.description)}</p>` : ""}
      ${verify}`;
  }

  function projectHtml(project) {
    const metrics = project.evaluation.map((m) => `<span>${escapeHtml(m)}</span>`).join("");
    const tech = project.technologies.map((t) => `<span>${escapeHtml(t)}</span>`).join("");
    return `
      <h2 id="modalTitle">${escapeHtml(project.title)}</h2>
      <div class="modal__media">
        <div class="project-placeholder">${escapeHtml(project.title)}</div>
      </div>
      <p><strong>Problem.</strong> ${escapeHtml(project.problem)}</p>
      <p><strong>Approach.</strong> ${escapeHtml(project.approach)}</p>
      <p><strong>Data processing.</strong> ${escapeHtml(project.dataProcessing)}</p>
      <p><strong>Machine learning model.</strong> ${escapeHtml(project.model)}</p>
      <p><strong>Evaluation metrics</strong></p>
      <div class="badges">${metrics}</div>
      <p><strong>Technologies</strong></p>
      <div class="badges">${tech}</div>
      <div class="card-actions" style="margin-top:1rem">
        <a class="btn btn--ghost" href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a class="btn btn--primary" href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>`;
  }

  function bindDelegatedClicks() {
    document.addEventListener("click", (event) => {
      const certBtn = event.target.closest("[data-open-cert]");
      if (certBtn) {
        const cert = certifications[Number(certBtn.dataset.openCert)];
        if (cert) openModal(certHtml(cert));
        return;
      }
      const projectBtn = event.target.closest("[data-open-project]");
      if (projectBtn) {
        const project = projects[Number(projectBtn.dataset.openProject)];
        if (project) openModal(projectHtml(project));
        return;
      }
      if (event.target.closest("[data-modal-close]")) closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (!modal.hidden) closeModal();
        closeMenu();
      }
    });
  }

  function initFilters() {
    const filters = qs("#projectFilters");
    if (!filters) return;
    filters.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-filter]");
      if (!btn) return;
      qsa(".filter-btn", filters).forEach((el) => el.classList.toggle("is-active", el === btn));
      const value = btn.dataset.filter;
      qsa(".project-card").forEach((card) => {
        const show = value === "All" || card.dataset.category === value;
        card.classList.add("is-hiding");
        window.setTimeout(() => {
          card.style.display = show ? "" : "none";
          if (show) {
            requestAnimationFrame(() => card.classList.remove("is-hiding"));
          }
        }, 180);
      });
    });
  }

  function initLoader() {
    const loader = qs("#loader");
    const fill = qs("#loaderFill");
    const status = qs("#loaderStatus");
    if (!loader) return;
    if (reduceMotion) {
      loader.classList.add("is-done");
      return;
    }
    let p = 0;
    const tick = () => {
      p = Math.min(100, p + 8);
      if (fill) fill.style.width = `${p}%`;
      if (status) status.textContent = p >= 100 ? "Ready" : "Initializing...";
      if (p < 100) requestAnimationFrame(tick);
      else window.setTimeout(() => loader.classList.add("is-done"), 180);
    };
    requestAnimationFrame(tick);
    window.addEventListener("load", () => {
      p = Math.max(p, 92);
    });
  }

  function initNav() {
    const header = qs("#header");
    const toggle = qs("#menuToggle");
    const nav = qs("#nav");
    const links = qsa(".nav__link");

    const onScroll = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    toggle?.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("is-locked", open);
    });

    links.forEach((link) =>
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 1280px)").matches) closeMenu();
      })
    );

    const sections = qsa("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          links.forEach((link) => {
            const active = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("is-active", active);
          });
          document.body.dataset.theme = id;
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  function closeMenu() {
    const toggle = qs("#menuToggle");
    const nav = qs("#nav");
    nav?.classList.remove("is-open");
    toggle?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    if (modal?.hidden) document.body.classList.remove("is-locked");
  }

  function initProgress() {
    const bar = qs("#scrollProgress");
    const toTop = qs("#toTop");
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
      if (bar) bar.style.transform = `scaleX(${clamp(ratio, 0, 1)})`;
      toTop?.classList.toggle("is-visible", window.scrollY > 480);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  }

  function initReveal() {
    const items = qsa(".reveal");
    // Even with reduced motion, still fade items in as they scroll into
    // view (no translate/scale/blur) instead of showing everything at once.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const parent = entry.target.parentElement;
          const siblings = parent ? qsa(":scope > .reveal", parent) : [entry.target];
          const index = Math.max(0, siblings.indexOf(entry.target));
          entry.target.style.transitionDelay = `${index * 80}ms`;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => observer.observe(el));
  }

  function initTimelines() {
    qsa("[data-timeline]").forEach((timeline) => {
      const progress = qs(".timeline__progress", timeline);
      const items = qsa(".timeline__item", timeline);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("is-active");
          });
        },
        { threshold: 0.45 }
      );
      items.forEach((item) => observer.observe(item));

      const updateLine = () => {
        if (!progress) return;
        const rect = timeline.getBoundingClientRect();
        const start = window.innerHeight * 0.75;
        const traveled = start - rect.top;
        const ratio = clamp(traveled / rect.height, 0, 1);
        progress.style.height = `${ratio * 100}%`;
      };
      window.addEventListener("scroll", updateLine, { passive: true });
      updateLine();
    });
  }

  function spawnParticles() {
    const layer = qs("#heroParticles");
    if (!layer || reduceMotion) return;
    const count = window.innerWidth < 768 ? 8 : 16;
    for (let i = 0; i < count; i += 1) {
      const dot = document.createElement("span");
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.animationDelay = `${Math.random() * 4}s`;
      layer.appendChild(dot);
    }
  }

  const pointer = { x: innerWidth / 2, y: innerHeight / 2, nx: 0, ny: 0 };
  const cursorState = { x: pointer.x, y: pointer.y, tx: pointer.x, ty: pointer.y };
  const magnetState = new WeakMap();
  const cardState = new WeakMap();

  function initPointer() {
    window.addEventListener(
      "mousemove",
      (event) => {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        pointer.nx = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.ny = (event.clientY / window.innerHeight) * 2 - 1;
      },
      { passive: true }
    );
  }

  function initCursorGlow() {
    const glow = qs("#cursorGlow");
    if (!glow || !finePointer) return;
    window.addEventListener(
      "mousemove",
      (event) => {
        document.body.classList.add("has-glow");
        glow.style.setProperty("--glow-x", `${event.clientX}px`);
        glow.style.setProperty("--glow-y", `${event.clientY}px`);
      },
      { passive: true }
    );
    window.addEventListener("mouseleave", () => document.body.classList.remove("has-glow"));
  }

  function applyParallax() {
    qsa("[data-parallax]").forEach((el) => {
      const speed = Number(el.dataset.speed || 0.04);
      const x = pointer.nx * 50 * speed;
      const y = pointer.ny * 36 * speed;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    const about = qs("#about");
    if (!about) return;
    const rect = about.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    qsa("[data-about-layer]").forEach((el) => {
      const layer = el.dataset.aboutLayer;
      const map = { bg: 0.012, deco: 0.03, profile: 0.045, text: 0.008 };
      const speed = map[layer] || 0.02;
      const x = pointer.nx * 50 * speed;
      const y = pointer.ny * 50 * speed;
      const rot = layer === "profile" ? pointer.nx * 1.5 : 0;
      el.style.transform = `translate3d(${clamp(x, -8, 8)}px, ${clamp(y, -8, 8)}px, 0) rotate(${rot}deg)`;
    });
  }

  function initCards() {
    qsa("[data-mouse-effect]").forEach((card) => {
      cardState.set(card, { rx: 0, ry: 0, scale: 1, z: 0, tx: 0, ty: 0, hot: false });
      card.addEventListener("pointerenter", () => {
        const state = cardState.get(card);
        if (state) state.hot = true;
        card.classList.add("is-hot");
      });
      card.addEventListener("pointerleave", () => {
        const state = cardState.get(card);
        if (!state) return;
        state.hot = false;
        state.tx = 0;
        state.ty = 0;
        card.classList.remove("is-hot");
      });
      card.addEventListener(
        "pointermove",
        (event) => {
          const state = cardState.get(card);
          if (!state) return;
          const rect = card.getBoundingClientRect();
          const px = ((event.clientX - rect.left) / rect.width) * 100;
          const py = ((event.clientY - rect.top) / rect.height) * 100;
          state.tx = px;
          state.ty = py;
          card.style.setProperty("--mouse-x", `${px}%`);
          card.style.setProperty("--mouse-y", `${py}%`);
        },
        { passive: true }
      );
    });
  }

  function tickCards() {
    qsa("[data-mouse-effect]").forEach((card) => {
      const level = EFFECT[card.dataset.mouseEffect] || EFFECT.light;
      const state = cardState.get(card);
      if (!state) return;
      const nx = (state.tx || 50) / 50 - 1;
      const ny = (state.ty || 50) / 50 - 1;
      const targetRx = state.hot ? clamp(-ny * level.rot, -level.rot, level.rot) : 0;
      const targetRy = state.hot ? clamp(nx * level.rot, -level.rot, level.rot) : 0;
      const targetScale = state.hot ? level.scale : 1;
      const targetZ = state.hot ? level.z : 0;
      state.rx = lerp(state.rx, targetRx, 0.12);
      state.ry = lerp(state.ry, targetRy, 0.12);
      state.scale = lerp(state.scale, targetScale, 0.12);
      state.z = lerp(state.z, targetZ, 0.12);
      card.classList.toggle("is-hot", state.hot);
      card.style.transform = `perspective(1000px) rotateX(${state.rx.toFixed(3)}deg) rotateY(${state.ry.toFixed(3)}deg) translateZ(${state.z.toFixed(2)}px) scale(${state.scale.toFixed(4)})`;
    });
  }

  function initMagnetic() {
    qsa(".magnetic").forEach((btn) => {
      magnetState.set(btn, { x: 0, y: 0, tx: 0, ty: 0 });
      btn.addEventListener(
        "pointermove",
        (event) => {
          const rect = btn.getBoundingClientRect();
          const dx = event.clientX - (rect.left + rect.width / 2);
          const dy = event.clientY - (rect.top + rect.height / 2);
          const state = magnetState.get(btn);
          state.tx = clamp(dx * 0.18, -8, 8);
          state.ty = clamp(dy * 0.18, -8, 8);
        },
        { passive: true }
      );
      btn.addEventListener("pointerleave", () => {
        const state = magnetState.get(btn);
        state.tx = 0;
        state.ty = 0;
      });
    });
  }

  function tickMagnetic() {
    qsa(".magnetic").forEach((btn) => {
      const state = magnetState.get(btn);
      if (!state) return;
      state.x = lerp(state.x, state.tx, 0.16);
      state.y = lerp(state.y, state.ty, 0.16);
      btn.style.transform = `translate3d(${state.x.toFixed(2)}px, ${state.y.toFixed(2)}px, 0)`;
    });
  }

  function initCursor() {
    const cursor = qs("#cursor");
    const label = qs("#cursorLabel");
    if (!cursor || !interactive) return;
    cursor.hidden = false;
    document.body.classList.add("cursor-on");

    document.addEventListener(
      "pointerover",
      (event) => {
        const hot = event.target.closest("a, button, .interactive-card, .filter-btn");
        cursor.classList.toggle("is-expand", Boolean(hot));
        const view = event.target.closest("[data-cursor]");
        if (view && label) {
          label.textContent = view.dataset.cursor;
          cursor.classList.add("has-label");
        } else {
          cursor.classList.remove("has-label");
          if (label) label.textContent = "";
        }
      },
      { passive: true }
    );
  }

  function tickCursor() {
    const cursor = qs("#cursor");
    if (!cursor || cursor.hidden) return;
    cursorState.x = lerp(cursorState.x, pointer.x, 0.22);
    cursorState.y = lerp(cursorState.y, pointer.y, 0.22);
    cursor.style.transform = `translate3d(${cursorState.x}px, ${cursorState.y}px, 0)`;
  }

  let rafId = 0;
  function loop() {
    if (interactive) {
      applyParallax();
      tickCards();
      tickMagnetic();
      tickCursor();
    }
    rafId = requestAnimationFrame(loop);
  }

  function initTypewriter() {
    const el = qs("#typewriter");
    if (!el) return;
    const roles = (el.dataset.roles || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (!roles.length) return;

    // Typing is core content presentation (one role at a time), not
    // decorative motion, so it still runs under reduced motion.
    const TYPE_MS = 45;
    const DELETE_MS = 26;
    const HOLD_MS = 1500;
    const GAP_MS = 400;
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex += 1;
        el.textContent = current.slice(0, charIndex);
        if (charIndex >= current.length) {
          deleting = true;
          setTimeout(tick, HOLD_MS);
          return;
        }
        setTimeout(tick, TYPE_MS);
      } else {
        charIndex -= 1;
        el.textContent = current.slice(0, charIndex);
        if (charIndex <= 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(tick, GAP_MS);
          return;
        }
        setTimeout(tick, DELETE_MS);
      }
    }

    tick();
  }

  function initForm() {
    const form = qs("#contactForm");
    const status = qs("#formStatus");
    if (!form) return;

    const validators = {
      name: (v) => (v.trim().length < 2 ? "Please enter your name." : ""),
      email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Please enter a valid email."),
      subject: (v) => (v.trim().length < 3 ? "Please enter a subject." : ""),
      message: (v) => (v.trim().length < 10 ? "Please write a slightly longer message." : ""),
    };

    const showError = (field, message) => {
      const wrap = field.closest(".field");
      const error = qs(`[data-error-for="${field.id}"]`);
      wrap?.classList.toggle("is-invalid", Boolean(message));
      if (error) error.textContent = message;
      field.setAttribute("aria-invalid", message ? "true" : "false");
    };

    form.addEventListener("input", (event) => {
      const field = event.target;
      if (!validators[field.name]) return;
      showError(field, validators[field.name](field.value));
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let valid = true;
      Object.keys(validators).forEach((name) => {
        const field = form.elements[name];
        const message = validators[name](field.value);
        showError(field, message);
        if (message) valid = false;
      });
      if (!valid) {
        if (status) status.textContent = "Please fix the highlighted fields.";
        return;
      }
      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const subject = form.elements.subject.value.trim();
      const message = form.elements.message.value.trim();
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      if (status) status.textContent = "Opening your email client…";
      window.location.href = url;
    });
  }

  renderCertifications();
  renderSkills();
  renderProjects();
  bindDelegatedClicks();
  initFilters();
  initLoader();
  initNav();
  initProgress();
  initReveal();
  initTimelines();
  spawnParticles();
  initPointer();
  initForm();
  initTypewriter();

  // Ambient cursor glow and card-glow tracking work on any fine pointer,
  // independent of the reduced-motion setting.
  initCursorGlow();
  if (finePointer) initCards();

  if (interactive) {
    initMagnetic();
    initCursor();
    loop();
  } else {
    qs("#cursor")?.setAttribute("hidden", "");
  }

  window.addEventListener("beforeunload", () => cancelAnimationFrame(rafId));
})();

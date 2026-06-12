(function () {
  const content = window.PAGE_CONTENT;
  const app = document.querySelector(".app-shell");

  if (!content || !app) return;

  const iconPaths = {
    spark: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z",
    arrow: "M5 12h14M13 6l6 6-6 6",
    file: "M7 3h7l5 5v13H7V3zM14 3v6h5",
    shield: "M12 3l7 3v5c0 5-3.4 8.4-7 10-3.6-1.6-7-5-7-10V6l7-3z",
    link: "M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1",
    check: "M20 6 9 17l-5-5"
  };

  function icon(name) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.classList.add("icon");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", iconPaths[name] || iconPaths.spark);
    svg.append(path);
    return svg;
  }

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (typeof text === "string") element.textContent = text;
    return element;
  }

  function linkNode(item, className) {
    const link = node("a", className, item.label);
    link.href = item.url || item.href;
    if (item.url) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    return link;
  }

  function sectionShell(id, marker, title, text) {
    const section = node("section", "section");
    section.id = id;
    const head = node("div", "section-head");
    head.append(node("p", "section-marker", marker));
    head.append(node("h2", "", title));
    if (text) head.append(node("p", "section-intro", text));
    section.append(head);
    return { section, head };
  }

  function renderNav() {
    const nav = node("nav", "site-nav");
    nav.setAttribute("aria-label", "Навигация по странице");

    const brand = node("a", "brand");
    brand.href = "#top";
    brand.setAttribute("aria-label", "К началу страницы");
    brand.append(node("span", "brand-mark", "A"));
    brand.append(node("span", "brand-text", "Agent Systems"));

    const links = node("div", "nav-links");
    content.nav.forEach((item) => {
      const a = node("a", "nav-link", item.label);
      a.href = item.href;
      links.append(a);
    });

    const cta = node("a", "nav-cta", "Telegram");
    cta.href = "https://t.me/dmitry_kozyura";
    cta.target = "_blank";
    cta.rel = "noreferrer";
    links.append(cta);

    nav.append(brand, links);
    return nav;
  }

  function renderHero() {
    const hero = node("header", "hero");
    hero.id = "top";

    const copy = node("div", "hero-copy");
    copy.append(node("p", "author-note", content.hero.note));
    copy.append(node("h1", "", content.hero.title));
    copy.append(node("p", "hero-lead", content.hero.lead));
    copy.append(node("p", "hero-explanation", content.hero.explanation));

    const actions = node("div", "hero-actions");
    const primary = node("a", "button primary", "Смотреть систему");
    primary.href = "#system";
    primary.append(icon("arrow"));
    const secondary = node("a", "button ghost", "С чего продолжить");
    secondary.href = "#resources";
    actions.append(primary, secondary);
    copy.append(actions);

    const visual = node("div", "hero-visual");
    visual.setAttribute("aria-label", "Схема перехода от чата к рабочей системе");
    const lanes = [
      ["Сообщение", "цель и вопросы"],
      ["Контекст", "решения и ограничения"],
      ["Рабочая область", "файлы и инструменты"],
      ["Артефакт", "результат, который можно править"]
    ];
    lanes.forEach((lane, index) => {
      const row = node("div", "signal-row");
      row.style.setProperty("--row", index + 1);
      row.append(node("span", "signal-index", String(index + 1).padStart(2, "0")));
      const text = node("span", "signal-text");
      text.append(node("strong", "", lane[0]));
      text.append(node("small", "", lane[1]));
      row.append(text);
      visual.append(row);
    });

    hero.append(copy, visual);
    return hero;
  }

  function renderSystem() {
    const { section } = sectionShell(content.system.id, "главный интерактив", content.system.title, content.system.intro);
    section.classList.add("system-section");

    const hint = node("p", "system-hint", content.system.hint);
    hint.prepend(icon("spark"));

    const board = node("div", "system-board");
    const canvas = node("div", "system-canvas");
    canvas.setAttribute("aria-label", "Интерактивная карта агентной системы");

    const lineLayer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    lineLayer.setAttribute("class", "connection-layer");
    lineLayer.setAttribute("viewBox", "0 0 760 620");
    lineLayer.setAttribute("aria-hidden", "true");
    content.system.items.forEach((item) => {
      if (item.key === "agent") return;
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.dataset.line = item.key;
      line.setAttribute("x1", "380");
      line.setAttribute("y1", "310");
      const points = {
        sandbox: [380, 82],
        project: [600, 145],
        artifacts: [635, 310],
        skills: [535, 505],
        tools: [225, 505],
        automations: [125, 310],
        control: [160, 145]
      };
      line.setAttribute("x2", points[item.key][0]);
      line.setAttribute("y2", points[item.key][1]);
      lineLayer.append(line);
    });
    canvas.append(lineLayer);

    const buttons = [];
    content.system.items.forEach((item) => {
      const button = node("button", item.key === "agent" ? "system-node system-core" : `system-node pos-${item.key}`);
      button.type = "button";
      button.dataset.topic = item.key;
      button.style.setProperty("--accent", item.accent);
      button.setAttribute("aria-pressed", item.key === "agent" ? "true" : "false");
      button.setAttribute("aria-label", `${item.title}. ${item.mapDescription}`);
      button.append(node("span", "node-label", item.label));
      button.append(node("span", "node-title", item.title));
      button.append(node("span", "node-copy", item.mapDescription));
      buttons.push(button);
      canvas.append(button);
    });

    const detail = node("aside", "system-detail");
    detail.setAttribute("aria-live", "polite");
    detail.setAttribute("aria-label", "Подробности выбранного элемента системы");
    detail.setAttribute("tabindex", "-1");

    canvas.append(detail);
    board.append(canvas);
    section.append(hint, board);

    function positionDetail(activeButton) {
      if (!activeButton || !detail.isConnected) return;
      const canvasRect = canvas.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      const detailWidth = Math.min(360, canvasRect.width - 32);
      const below = buttonRect.bottom - canvasRect.top + 12;
      const above = buttonRect.top - canvasRect.top - detail.offsetHeight - 12;
      let left = buttonRect.left - canvasRect.left + buttonRect.width / 2 - detailWidth / 2;
      let top = below;

      left = Math.max(16, Math.min(left, canvasRect.width - detailWidth - 16));
      if (top + detail.offsetHeight > canvasRect.height - 16 && above > 16) {
        top = above;
      }

      detail.style.width = `${detailWidth}px`;
      detail.style.left = `${left}px`;
      detail.style.top = `${Math.max(16, top)}px`;
    }

    let currentButton = buttons[0];

    function setActive(key, shouldFocusDetail = false) {
      const item = content.system.items.find((entry) => entry.key === key) || content.system.items[0];
      section.style.setProperty("--active", item.accent);
      board.style.setProperty("--active", item.accent);
      buttons.forEach((button) => {
        const isActive = button.dataset.topic === item.key;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
        if (isActive) currentButton = button;
      });
      canvas.querySelectorAll("[data-line]").forEach((line) => {
        line.classList.toggle("is-active", line.dataset.line === item.key);
      });

      detail.innerHTML = "";
      detail.style.setProperty("--accent", item.accent);
      detail.append(node("p", "detail-kicker", item.detailKicker));
      detail.append(node("h3", "", item.title));
      detail.append(node("p", "detail-summary", item.summary));
      const stack = node("div", "detail-stack");
      stack.append(labeledText("Проще", item.simple));
      stack.append(labeledText("Технически", item.technical));
      detail.append(stack);
      const terms = node("div", "term-cloud");
      item.terms.forEach((term) => terms.append(node("span", "term", term)));
      detail.append(terms);
      const source = linkNode(item.source, "source-link");
      source.prepend(icon("link"));
      detail.append(source);
      requestAnimationFrame(() => positionDetail(currentButton));
      if (shouldFocusDetail) {
        requestAnimationFrame(() => detail.focus({ preventScroll: true }));
      }
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => setActive(button.dataset.topic, true));
    });

    window.addEventListener("resize", () => positionDetail(currentButton));
    setActive("agent");
    return section;
  }

  function labeledText(label, text) {
    const box = node("p", "labeled-text");
    box.append(node("span", "", label));
    box.append(document.createTextNode(text));
    return box;
  }

  function renderChat() {
    const { section } = sectionShell(content.chat.id, "разница", content.chat.title, content.chat.text);
    const wrap = node("div", "chat-workspace");

    const compare = node("div", "compare-strip");
    content.chat.comparison.forEach((item, index) => {
      const card = node("article", index === 0 ? "compare-item muted" : "compare-item active");
      card.append(node("p", "compare-number", index === 0 ? "чат" : "система"));
      card.append(node("h3", "", item.title));
      card.append(node("p", "", item.text));
      compare.append(card);
    });

    const tree = node("pre", "workspace-tree");
    tree.textContent = content.chat.tree.join("\n");
    wrap.append(compare, tree);
    section.append(wrap);
    return section;
  }

  function renderArtifacts() {
    const { section } = sectionShell(content.artifacts.id, "результат", content.artifacts.title, content.artifacts.text);
    const dock = node("div", "artifact-dock");
    content.artifacts.formats.forEach((format) => {
      const item = node("span", "artifact-format");
      item.append(node("strong", "", format));
      item.append(icon("file"));
      dock.append(item);
    });

    const example = node("article", "experience-panel");
    example.append(node("p", "panel-kicker", content.artifacts.exampleTitle));
    content.artifacts.example.forEach((paragraph) => example.append(node("p", "", paragraph)));
    example.append(linkNode(content.artifacts.link, "text-link"));

    section.append(dock, example);
    return section;
  }

  function renderNonProgrammersAndFlow() {
    const group = node("div", "paired-sections");

    const non = node("section", "section compact-section");
    non.id = content.nonProgrammers.id;
    non.append(node("p", "section-marker", "барьер"));
    non.append(node("h2", "", content.nonProgrammers.title));
    non.append(node("p", "large-copy", content.nonProgrammers.text));
    non.append(node("p", "support-copy", content.nonProgrammers.addition));

    const flow = node("section", "section compact-section");
    flow.id = content.flow.id;
    flow.append(node("p", "section-marker", "путь"));
    flow.append(node("h2", "", content.flow.title));
    flow.append(node("p", "section-intro", content.flow.intro));
    const timeline = node("div", "timeline");
    content.flow.steps.forEach((step, index) => {
      const item = node("article", "timeline-step");
      item.append(node("span", "timeline-index", String(index + 1)));
      item.append(node("h3", "", step.title));
      item.append(node("p", "", step.text));
      timeline.append(item);
    });
    flow.append(timeline);

    group.append(non, flow);
    return group;
  }

  function renderSafety() {
    const section = node("section", "section safety-section");
    section.id = content.safety.id;
    const copy = node("div", "safety-copy");
    copy.append(node("p", "section-marker", "контроль"));
    copy.append(node("h2", "", content.safety.title));
    copy.append(node("p", "", content.safety.text));
    const accent = node("p", "safety-accent", content.safety.accent);
    accent.prepend(icon("shield"));
    section.append(copy, accent);
    return section;
  }

  function renderResources() {
    const { section } = sectionShell(content.resources.id, "маршрут", content.resources.title, content.resources.intro);
    const route = node("div", "resource-route");
    content.resources.items.forEach((item) => {
      const article = node("article", "resource-item");
      article.append(node("p", "resource-step", item.step));
      article.append(node("h3", "", item.title));
      article.append(node("p", "", item.text));
      const takeaway = node("p", "takeaway");
      takeaway.append(node("strong", "", "Что вынести: "));
      takeaway.append(document.createTextNode(item.takeaway));
      article.append(takeaway);
      const links = node("div", "resource-links");
      item.links.forEach((entry) => links.append(linkNode(entry, "resource-link")));
      article.append(links);
      route.append(article);
    });
    section.append(route);
    return section;
  }

  function renderOutro() {
    const footer = node("footer", "outro");
    footer.id = content.outro.id;
    footer.append(node("h2", "", content.outro.title));
    content.outro.text.forEach((paragraph) => footer.append(node("p", "", paragraph)));
    const links = node("div", "outro-links");
    content.outro.links.forEach((entry) => links.append(linkNode(entry, entry.primary ? "button primary" : "button ghost")));
    footer.append(links);
    return footer;
  }

  app.innerHTML = "";
  app.append(
    renderNav(),
    renderHero(),
    renderSystem(),
    renderChat(),
    renderArtifacts(),
    renderNonProgrammersAndFlow(),
    renderSafety(),
    renderResources(),
    renderOutro()
  );
})();

gsap.registerPlugin(ScrollTrigger);

gsap.from(".title", {
  y: 80,
  opacity: 0,
  duration: 1
});

document.querySelectorAll(".light").forEach(panel => {
  gsap.from(panel.children, {
    scrollTrigger: panel,
    y: 40,
    opacity: 0,
    stagger: .15
  });
});

new Typed("#terminal", {
  strings: [
    "> booting agentic profile...\n> loading llm...\n> connecting tools...\n> system ready."
  ],
  typeSpeed: 30,
  showCursor: false
});

new Typed("#terminal2", {
  strings: [
    "> parsing experience\n> building reasoning loops\n> deploying autonomous agents"
  ],
  typeSpeed: 30,
  showCursor: false
});

new Typed("#terminal3", {
  strings: [
    "> python\n> fastapi\n> langchain\n> aws\n> docker\n> postgres"
  ],
  typeSpeed: 30,
  showCursor: false
});

new Typed("#terminal4", {
  strings: [
    "> loading projects...\n> agentic-engine.py\n> rag-system.py\n> semantic-search.py\n> done."
  ],
  typeSpeed: 30,
  showCursor: false
});

new Typed("#terminal5", {
  strings: [
    "> loading experience...\n> ripplinks_agent.py\n> rag_pipeline.ipynb\n> deployment_successful"
  ],
  typeSpeed: 30,
  showCursor: false
});

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translate(0,0)";
  });
});
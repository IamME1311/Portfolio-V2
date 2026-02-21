//  Enable ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

gsap.from(".title", {
  y: 40,
  opacity: 0,
  duration: 2,
});

gsap.from(".tech-item", {
  scrollTrigger: {
    trigger: ".tech",
    start: "top 80%",
  },
  y: 30,
  opacity: 0,
  stagger: 0.2,
  delay: 0.5,
});

document.querySelectorAll(".tech-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(item, { y: -6, duration: 0.4 });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(item, { y: 0, duration: 0.4 });
  });
});

document.querySelectorAll(".light").forEach((panel) => {
  if (panel.querySelector(".title")) return;
  gsap.from(panel.children, {
    scrollTrigger: {
      trigger: panel,
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    stagger: 0.15,
  });
});

new Typed("#terminal", {
  strings: [
    "> booting agentic profile...\n> loading llm...\n> connecting tools...\n> system ready.",
  ],
  typeSpeed: 30,
  showCursor: true,
});

new Typed("#terminal2", {
  strings: [
    "> parsing experience\n> building reasoning loops\n> deploying autonomous agents",
  ],
  typeSpeed: 30,
  showCursor: true,
});

new Typed("#terminal3", {
  strings: ["> python\n> fastapi\n> langchain\n> aws\n> docker\n> postgres"],
  typeSpeed: 30,
  showCursor: true,
});

new Typed("#terminal4", {
  strings: [
    "> loading projects...\n> agentic-engine.py\n> rag-system.py\n> semantic-search.py\n> done.",
  ],
  typeSpeed: 30,
  showCursor: true,
});

new Typed("#terminal5", {
  strings: [
    "> loading experience...\n> ripplinks_agent.py\n> rag_pipeline.ipynb\n> deployment_successful",
  ],
  typeSpeed: 30,
  showCursor: true,
});

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translate(0,0)";
  });
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const percent = (scrollTop / height) * 100;

  const progress = document.getElementById("progress");
  if (progress) progress.style.width = percent + "%";
});

const email = "sarthak.agrawal1311@gmail.com";

const emailBtn = document.getElementById("emailBtn");
const modal = document.getElementById("emailModal");
const openMail = document.getElementById("openMail");
const copyMail = document.getElementById("copyMail");
const closeModal = document.getElementById("closeModal");

emailBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

openMail.addEventListener("click", () => {
  window.location.href = `mailto:${email}`;
});

copyMail.addEventListener("click", async () => {
  await navigator.clipboard.writeText(email);
  copyMail.innerText = "Copied!";
  setTimeout(() => (copyMail.innerHTML='<img src="./copy.png" alt="copy-icon"><span>Copy Email</span>'), 1200);
});

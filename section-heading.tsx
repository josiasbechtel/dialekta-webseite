:root {
  --brand: #003e5a;
  --brand-2: #006f7b;
  --teal: #00c8c8;
  --teal-soft: #d9fbfa;
  --ink: #073247;
  --muted: #587383;
  --line: #d9e7ec;
  --surface: #f4f8fa;
  --white: #ffffff;
  --shadow: 0 18px 45px rgba(0, 62, 90, 0.14);
  --radius: 18px;
  --container: 1180px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--white);
  color: var(--ink);
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

.container {
  width: min(100% - 40px, var(--container));
  margin-inline: auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  border-bottom: 1px solid rgba(0, 62, 90, 0.1);
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
}

.nav {
  display: flex;
  min-height: 74px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
}

.brand-mark {
  display: inline-grid;
  min-width: 118px;
  min-height: 34px;
  place-items: center;
  border-radius: 6px;
  background: linear-gradient(135deg, var(--brand), var(--teal));
  color: var(--white);
  font-size: 1.08rem;
  letter-spacing: 0;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--brand);
  font-size: 0.93rem;
  font-weight: 750;
}

.nav-links a {
  border-bottom: 2px solid transparent;
  padding-block: 8px;
}

.nav-links a:hover {
  border-color: var(--teal);
}

.mobile-cta {
  display: none;
}

.button {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  padding: 0 22px;
  cursor: pointer;
  font-weight: 850;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button.primary {
  background: linear-gradient(135deg, var(--brand), var(--teal));
  color: var(--white);
  box-shadow: 0 12px 28px rgba(0, 200, 200, 0.25);
}

.button.light {
  background: var(--white);
  color: var(--brand);
  box-shadow: var(--shadow);
}

.button.ghost {
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.12);
  color: var(--white);
}

.button.secondary {
  border: 1px solid var(--line);
  background: var(--white);
  color: var(--brand);
}

.hero,
.page-hero,
.cta-band {
  overflow: hidden;
  background:
    radial-gradient(circle at 82% 22%, rgba(0, 200, 200, 0.35), transparent 28%),
    linear-gradient(155deg, var(--brand) 0%, #007f89 68%, var(--teal) 100%);
  color: var(--white);
}

.hero-grid {
  display: grid;
  min-height: 650px;
  grid-template-columns: minmax(0, 1.02fr) minmax(340px, 0.78fr);
  align-items: center;
  gap: 54px;
  padding: 82px 0 74px;
}

.eyebrow {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  padding: 8px 13px;
  color: inherit;
  font-size: 0.86rem;
  font-weight: 800;
}

.eyebrow.dark {
  background: var(--teal-soft);
  color: var(--brand);
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1,
h2,
h3 {
  letter-spacing: 0;
}

h1 {
  max-width: 880px;
  margin-bottom: 22px;
  font-size: clamp(2.55rem, 6vw, 5.45rem);
  line-height: 0.98;
  font-weight: 950;
}

.page-hero h1 {
  font-size: clamp(2.35rem, 5vw, 4.8rem);
}

h2 {
  margin-bottom: 14px;
  color: var(--brand);
  font-size: clamp(2rem, 4vw, 3.65rem);
  line-height: 1.05;
  font-weight: 950;
}

h3 {
  margin-bottom: 10px;
  color: var(--brand);
  font-size: 1.23rem;
  line-height: 1.18;
  font-weight: 900;
}

.lead {
  max-width: 720px;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.08rem, 2vw, 1.28rem);
  font-weight: 600;
}

.section-lead {
  max-width: 720px;
  color: var(--muted);
  font-size: 1.08rem;
}

.hero-actions,
.section-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.quick-points {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
  padding: 0;
  list-style: none;
}

.quick-points li {
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 999px;
  padding: 8px 13px;
  background: rgba(255, 255, 255, 0.1);
  font-weight: 800;
}

.hero-panel {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 26px;
  padding: 26px;
  background: rgba(255, 255, 255, 0.13);
  box-shadow: 0 28px 70px rgba(0, 34, 48, 0.26);
}

.phone-card {
  display: grid;
  min-height: 430px;
  place-items: center;
  border-radius: 28px;
  background: var(--white);
  color: var(--brand);
  text-align: center;
  transform: rotate(5deg);
  box-shadow: 0 24px 45px rgba(0, 34, 48, 0.35);
}

.phone-card strong {
  display: block;
  max-width: 220px;
  font-size: 2rem;
  line-height: 1.05;
}

.stats-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 22px;
}

.stat {
  border-radius: 15px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--brand);
  font-weight: 850;
}

.stat span {
  display: block;
  color: var(--muted);
  font-size: 0.86rem;
  font-weight: 650;
}

.section {
  padding: clamp(72px, 10vw, 116px) 0;
}

.section.surface {
  background: var(--surface);
}

.section.dark {
  background: linear-gradient(180deg, #007f89 0%, var(--brand) 100%);
  color: var(--white);
}

.section.dark h2,
.section.dark h3,
.section.dark .section-lead {
  color: var(--white);
}

.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 28px;
  margin-bottom: 34px;
}

.section-head.center {
  display: block;
  text-align: center;
}

.section-head.center .section-lead {
  margin-inline: auto;
}

.grid {
  display: grid;
  gap: 20px;
}

.grid.three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid.two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid.four {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.card {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 26px;
  background: var(--white);
  box-shadow: 0 10px 26px rgba(0, 62, 90, 0.06);
}

.card.teal {
  border: 0;
  background: linear-gradient(135deg, var(--brand), var(--teal));
  color: var(--white);
}

.card.teal h3,
.card.teal p {
  color: var(--white);
}

.card p {
  color: var(--muted);
}

.icon {
  display: inline-grid;
  width: 48px;
  height: 48px;
  margin-bottom: 18px;
  place-items: center;
  border: 3px solid var(--teal);
  border-radius: 999px;
  color: var(--brand);
  font-weight: 950;
}

.card.teal .icon,
.section.dark .icon {
  border-color: var(--white);
  color: var(--white);
}

.check-list {
  display: grid;
  gap: 9px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
}

.check-list li {
  position: relative;
  padding-left: 26px;
  color: var(--ink);
  font-weight: 700;
}

.section.dark .check-list li,
.card.teal .check-list li {
  color: var(--white);
}

.check-list li::before {
  position: absolute;
  left: 0;
  color: var(--teal);
  content: "✓";
  font-weight: 950;
}

.split {
  display: grid;
  grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
  align-items: center;
  gap: 48px;
}

.steps {
  counter-reset: step;
}

.step {
  position: relative;
  padding-left: 78px;
}

.step::before {
  position: absolute;
  left: 0;
  top: 4px;
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--brand), var(--teal));
  color: var(--white);
  counter-increment: step;
  content: counter(step);
  font-weight: 950;
}

.price {
  display: flex;
  min-height: 100%;
  flex-direction: column;
}

.price-value {
  margin: 8px 0 16px;
  color: var(--brand);
  font-size: 2rem;
  font-weight: 950;
}

.faq-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

details {
  border-radius: 14px;
  background: linear-gradient(135deg, var(--brand), var(--teal));
  color: var(--white);
}

summary {
  cursor: pointer;
  padding: 18px 20px;
  font-weight: 850;
}

details p {
  margin: 0;
  padding: 0 20px 20px;
  color: rgba(255, 255, 255, 0.88);
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 34px;
}

.form {
  display: grid;
  gap: 14px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

label {
  display: grid;
  gap: 6px;
  color: var(--brand);
  font-weight: 850;
}

input,
select,
textarea {
  width: 100%;
  border: 2px solid var(--brand);
  border-radius: 10px;
  padding: 13px 14px;
  background: var(--white);
  color: var(--ink);
}

textarea {
  min-height: 140px;
  resize: vertical;
}

.page-hero-inner {
  padding: 86px 0 72px;
}

.legal-content {
  max-width: 840px;
}

.site-footer {
  background: var(--brand);
  color: var(--white);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 0;
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

@media (max-width: 980px) {
  .nav {
    align-items: flex-start;
    flex-direction: column;
    padding: 14px 0;
  }

  .nav-links {
    width: 100%;
    flex-wrap: wrap;
    gap: 10px 18px;
  }

  .desktop-cta {
    display: none;
  }

  .mobile-cta {
    display: inline-flex;
  }

  .hero-grid,
  .split,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .hero-grid {
    min-height: auto;
    padding-top: 54px;
  }

  .hero-panel {
    max-width: 520px;
  }

  .grid.three,
  .grid.four,
  .faq-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .container {
    width: min(100% - 28px, var(--container));
  }

  .nav-links {
    font-size: 0.88rem;
  }

  .hero-grid {
    gap: 32px;
    padding-bottom: 50px;
  }

  .hero-actions,
  .section-actions,
  .stats-strip,
  .form-row {
    grid-template-columns: 1fr;
  }

  .hero-actions .button,
  .section-actions .button,
  .form .button {
    width: 100%;
  }

  .stats-strip,
  .grid.two,
  .grid.three,
  .grid.four,
  .faq-list {
    display: grid;
    grid-template-columns: 1fr;
  }

  .section-head {
    display: block;
  }

  .phone-card {
    min-height: 310px;
    transform: rotate(2deg);
  }

  .footer-inner {
    align-items: flex-start;
    flex-direction: column;
  }
}

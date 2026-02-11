export default function Home() {
  return (
    <>
      {/* NAV */}
      <div className="nav">
        <div className="container navInner">
          <div className="brand">
            <div className="logo" aria-label="CultureEd logo">
              {/* Put your logo at /public/logo.png. If missing, it will show “CE”. */}
              <img
                src="/logo.png"
                alt="CultureEd"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.textContent = "CE";
                }}
              />
            </div>
            <div>CultureEd</div>
          </div>

          <div className="navLinks">
            <a href="#how">How it works</a>
            <a href="#tracks">Tracks</a>
            <a href="#cohort">Founding cohort</a>
            <a href="#faq">FAQ</a>
            <a href="#waitlist">Waitlist</a>
          </div>

          <div className="navCta">
            <a className="btn btnSecondary" href="#tracks">
              Explore
            </a>
            <a className="btn btnPrimary" href="#waitlist">
              Join waitlist
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="heroGrid">
            <div>
              <span className="pill">
                <span className="pillDot" />
                Launching soon • Founding cohort
              </span>

              <h1 className="h1">Industry literacy, not creator fluff.</h1>

              <p className="sub">
                CultureEd is a premium learning experience built for people who want
                real industry frameworks—short lessons, serious insight, and clear
                tasks that turn knowledge into output.
              </p>

              <div className="heroCtas">
                <a className="btn btnPrimary" href="#waitlist">
                  Join the waitlist
                </a>
                <a className="btn btnGhost" href="#how">
                  See how it works
                </a>
              </div>

              <div className="kpis">
                <div className="kpi">
                  <div className="kpiBig">10–25</div>
                  <div className="kpiSmall">minute lessons</div>
                </div>
                <div className="kpi">
                  <div className="kpiBig">1</div>
                  <div className="kpiSmall">applied task each</div>
                </div>
                <div className="kpi">
                  <div className="kpiBig">Founder-level</div>
                  <div className="kpiSmall">signal &gt; vibes</div>
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panelTitle">What you’ll get</div>
              <ul className="checks">
                <li>✓ <span>Professional frameworks (not motivation)</span></li>
                <li>✓ <span>Applied assignments you can show</span></li>
                <li>✓ <span>Track-based learning (music, law, biz affairs…)</span></li>
                <li>✓ <span>Short lessons built for busy people</span></li>
              </ul>

              <div
                style={{
                  marginTop: 16,
                  padding: 14,
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.18)",
                }}
              >
                <div style={{ fontWeight: 900 }}>Founder note</div>
                <div style={{ marginTop: 6, color: "rgba(255,255,255,0.68)", lineHeight: 1.65 }}>
                  Culture industries reward clarity. CultureEd is where you build it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section">
        <div className="container">
          <h2 className="sectionTitle">How it works</h2>
          <p className="sectionSub">
            A simple structure designed for outcomes: learn fast, apply immediately, build proof.
          </p>

          <div className="grid3">
            <div className="card">
              <div className="cardTitle">1) Watch</div>
              <div className="cardText">
                Short, focused lessons taught by working professionals—no filler.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">2) Do</div>
              <div className="cardText">
                One applied task per lesson. The goal is output, not consumption.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">3) Build</div>
              <div className="cardText">
                Stack tasks into a portfolio and earn completion certificates by track.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="section">
        <div className="container">
          <h2 className="sectionTitle">Tracks</h2>
          <p className="sectionSub">
            Start with the track that matches your path. Expand later.
          </p>

          <div className="grid2">
            <div className="card">
              <div className="cardTitle">Music Industry</div>
              <div className="cardText">
                A&amp;R thinking, release strategy, royalties, publishing—what actually matters.
              </div>
              <ul className="bullets">
                <li>Release planning + distribution reality</li>
                <li>Royalties, splits, and publishing fundamentals</li>
                <li>Label/distro deals: what to look for</li>
              </ul>
            </div>

            <div className="card">
              <div className="cardTitle">Entertainment Law</div>
              <div className="cardText">
                Contract literacy and rights thinking for modern culture work.
              </div>
              <ul className="bullets">
                <li>Deal structure basics</li>
                <li>Rights, clearances, and ownership</li>
                <li>Negotiation fundamentals</li>
              </ul>
            </div>

            <div className="card">
              <div className="cardTitle">Business Affairs</div>
              <div className="cardText">
                Professional decision-making: risk, value, leverage, negotiation.
              </div>
              <ul className="bullets">
                <li>Negotiation mindset</li>
                <li>Risk management for creatives</li>
                <li>Reading what matters in agreements</li>
              </ul>
            </div>

            <div className="card">
              <div className="cardTitle">Culture Criticism</div>
              <div className="cardText">
                Authority in writing: research, framing, and editorial discipline.
              </div>
              <ul className="bullets">
                <li>Critical frameworks</li>
                <li>Research + argument structure</li>
                <li>Publishing discipline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDING COHORT */}
      <section id="cohort" className="section">
        <div className="container">
          <h2 className="sectionTitle">Founding cohort</h2>
          <p className="sectionSub">
            The first cohort is intentionally tight: higher touch, stronger feedback loops, and early influence on the product.
          </p>

          <div className="grid3">
            <div className="card">
              <div className="cardTitle">Who it’s for</div>
              <div className="cardText">
                Serious learners: creators, managers, lawyers, operators, and culture professionals.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">Format</div>
              <div className="cardText">
                Short lessons + applied tasks + optional community review.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">Priority access</div>
              <div className="cardText">
                Waitlist members get first access + early pricing when we open.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="section">
        <div className="container">
          <div className="ctaBand">
            <div>
              <h2 className="sectionTitle" style={{ margin: 0 }}>
                Join the waitlist
              </h2>
              <p className="sectionSub" style={{ marginBottom: 0 }}>
                Get launch updates, founding cohort access, and early pricing.
              </p>
            </div>

            {/* Preview-mode form (doesn't submit anywhere yet). */}
            <form className="formRow" onSubmit={(e) => e.preventDefault()}>
              <input className="input" type="email" placeholder="Email address" required />
              <button className="btn btnPrimary" type="submit">
                Join
              </button>
            </form>

            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, lineHeight: 1.6 }}>
              This form is currently “preview mode.” When you’re ready, I’ll connect it to Formspree or Mailchimp so it collects emails.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <h2 className="sectionTitle">FAQ</h2>
          <p className="sectionSub">Clear answers. No marketing fog.</p>

          <div className="grid2">
            <div className="card">
              <div className="cardTitle">What is CultureEd?</div>
              <div className="cardText">
                Premium, short-form learning from working professionals across culture industries, built around real tasks.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">How long are lessons?</div>
              <div className="cardText">
                Typically 10–25 minutes, designed to fit real schedules.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">Will you offer certificates?</div>
              <div className="cardText">
                Yes—completion certificates by track (signals applied learning, not a license).
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">When are you launching?</div>
              <div className="cardText">
                Soon. Join the waitlist and you’ll be notified when the founding cohort opens.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <div>© {new Date().getFullYear()} CultureEd</div>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.70)" }}>
              Privacy
            </a>
            <a href="#" style={{ color: "rgba(255,255,255,0.70)" }}>
              Terms
            </a>
            <a href="#" style={{ color: "rgba(255,255,255,0.70)" }}>
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

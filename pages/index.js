export default function Home() {
  return (
    <>
      {/* NAV */}
      <div className="nav">
        <div className="container navInner">
          <div className="brand">
            <div className="logo" aria-label="CultureEd logo">
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
            <a href="#tracks">Tracks</a>
            <a href="#cohort">Founding cohort</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="navCta">
            <a className="btn btnSecondary" href="#tracks">Explore</a>
            <a className="btn btnPrimary" href="#waitlist">Join waitlist</a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="heroWrap">
            <span className="kicker">
              <span className="dot" />
              Launching soon • Founding cohort
            </span>

            <h1 className="h1">Industry literacy, not creator fluff.</h1>

            <p className="sub">
              CultureEd is a luxury-minimal learning experience for people who want
              clear frameworks, short lessons, and applied tasks that create real output.
            </p>

            <div className="heroCtas">
              <a className="btn btnPrimary" href="#waitlist">Join the waitlist</a>
              <a className="btn btnGhost" href="#how">How it works</a>
            </div>

            <div className="kpiRow">
              <div className="kpi">
                <div className="kpiBig">10–25 minutes</div>
                <div className="kpiSmall">high-signal lessons</div>
              </div>
              <div className="kpi">
                <div className="kpiBig">Applied tasks</div>
                <div className="kpiSmall">proof, not vibes</div>
              </div>
              <div className="kpi">
                <div className="kpiBig">Track-based</div>
                <div className="kpiSmall">focused skill paths</div>
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
            Start with one track. Build a portfolio of outputs as you go.
          </p>

          <div className="grid grid2" style={{ marginTop: 18 }}>
            <div className="card">
              <div className="cardTitle">Music Industry</div>
              <div className="cardText">
                Strategy, distribution reality, royalties & publishing—what actually matters.
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Entertainment Law</div>
              <div className="cardText">
                Contract literacy, rights thinking, and practical deal awareness.
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Business Affairs</div>
              <div className="cardText">
                Negotiation mindset, value, leverage, and risk management for culture work.
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Culture Criticism</div>
              <div className="cardText">
                Research discipline, framing, and authoritative writing structure.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDING COHORT */}
      <section id="cohort" className="section">
        <div className="container">
          <h2 className="sectionTitle">Founding cohort</h2>
          <p className="sectionSub">
            Limited seats. Higher touch. Early influence on what CultureEd becomes.
          </p>

          <div className="split">
            <div className="card">
              <div className="cardTitle">What members get</div>
              <div className="cardText">
                • Early access to the platform<br />
                • Priority for new tracks & lessons<br />
                • Feedback loops to shape the product<br />
                • Founding cohort pricing when we open
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Who it’s for</div>
              <div className="cardText">
                Serious learners: creators, managers, operators, and professionals who value
                clarity and real industry frameworks.
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
            Simple structure. Premium signal. Designed for outcomes.
          </p>

          <div className="grid grid3" style={{ marginTop: 18 }}>
            <div className="card">
              <div className="cardTitle">1) Watch</div>
              <div className="cardText">
                Short, focused lessons from working professionals—no filler.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">2) Do</div>
              <div className="cardText">
                One applied task per lesson. Output is the point.
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

      {/* WAITLIST */}
      <section id="waitlist" className="section">
        <div className="container">
          <h2 className="sectionTitle">Join the waitlist</h2>
          <p className="sectionSub">
            Get launch updates + founding cohort access + early pricing.
          </p>

          <div className="ctaBand">
            <form className="formRow" onSubmit={(e) => e.preventDefault()}>
              <input className="input" type="email" placeholder="Email address" required />
              <button className="btn btnPrimary" type="submit">Join</button>
            </form>

            <div style={{ color: "rgba(255,255,255,0.46)", fontSize: 12, lineHeight: 1.6 }}>
              Preview mode — when you’re ready, I’ll connect this to Formspree or Mailchimp so it collects emails.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <h2 className="sectionTitle">FAQ</h2>
          <p className="sectionSub">Clear answers. Minimal marketing.</p>

          <div className="grid grid2" style={{ marginTop: 18 }}>
            <div className="card">
              <div className="cardTitle">What is CultureEd?</div>
              <div className="cardText">
                Premium short-form learning with real frameworks and applied tasks.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">How long are lessons?</div>
              <div className="cardText">
                Typically 10–25 minutes.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">Certificates?</div>
              <div className="cardText">
                Yes—completion certificates by track (signal of applied learning, not a license).
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">When is launch?</div>
              <div className="cardText">
                Soon. Waitlist members get first access.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
          <div>© {new Date().getFullYear()} CultureEd</div>
          <div style={{ display: "flex", gap: 14 }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.55)" }}>Privacy</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.55)" }}>Terms</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.55)" }}>Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

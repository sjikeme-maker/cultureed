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
              CultureEd is a luxury-minimal learning experience built for serious people:
              clear frameworks, short lessons, and applied tasks that turn knowledge into output.
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
                <div className="kpiSmall">focused paths</div>
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
              <d…

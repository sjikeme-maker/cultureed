export default function Home() {
  return (
    <>
      <div className="nav">
        <div className="container navInner">
          <div className="brand">CultureEd</div>
          <div className="navLinks">
            <a href="#tracks">Tracks</a>
            <a href="#cohort">Cohort</a>
            <a href="#how">How</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href="#waitlist" className="btn btnPrimary">Join</a>
        </div>
      </div>

      <section className="hero">
        <div className="container">
          <div className="kicker">Founding Cohort • Cultural Literacy</div>
          <h1 className="h1">Industry literacy.<br/>Cultural authority.</h1>
          <p className="sub">
            CultureEd is where creative ambition meets real frameworks. 
            Less influencer noise. More industry signal.
          </p>
          <div className="heroCtas">
            <a href="#waitlist" className="btn btnPrimary">Join Waitlist</a>
            <a href="#tracks" className="btn btnSecondary">Explore Tracks</a>
          </div>
        </div>
      </section>

      <section id="tracks" className="section">
        <div className="container">
          <div className="sectionTitle">Tracks</div>
          <div className="sectionSub">
            Learn deeply. Build publicly. Operate intelligently.
          </div>

          <div className="grid grid3">
            <div className="card">
              <div className="cardTitle">Music Industry</div>
              <div className="cardText">
                A&R thinking, royalties, distribution systems, publishing realities.
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Entertainment Law</div>
              <div className="cardText">
                Rights literacy, negotiation strategy, deal structure clarity.
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Business Affairs</div>
              <div className="cardText">
                Risk, leverage, ownership, strategic positioning.
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Culture Criticism</div>
              <div className="cardText">
                Research discipline, narrative framing, intellectual rigor.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cohort" className="section">
        <div className="container">
          <div className="sectionTitle">Founding Cohort</div>
          <div className="sectionSub">
            Early access. Smaller room. Bigger impact.
          </div>

          <div className="grid grid3">
            <div className="card">
              <div className="cardTitle">Direct Access</div>
              <div className="cardText">
                Engage with frameworks before public release.
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Influence Product</div>
              <div className="cardText">
                Shape curriculum direction and expansion.
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Founding Status</div>
              <div className="cardText">
                Permanent recognition as early architect.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="section">
        <div className="container">
          <div className="sectionTitle">How It Works</div>
          <div className="sectionSub">
            Watch. Apply. Build.
          </div>

          <div className="grid grid3">
            <div className="card">
              <div className="cardTitle">1. Watch</div>
              <div className="cardText">
                10–25 minute high-signal lessons.
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">2. Apply</div>
              <div className="cardText">
                One applied task per lesson.
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">3. Build</div>
              <div className="cardText">
                Stack output into professional proof.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="section">
        <div className="container">
          <div className="ctaBand">
            <div className="sectionTitle">Join the Waitlist</div>
            <p className="sectionSub">
              Founding access opens soon.
            </p>

            <input type="email" placeholder="Email address" className="input"/>
            <div style={{marginTop:20}}>
              <button className="btn btnPrimary">Join</button>
            </div>
          </div>
        </div>
      </section>

      <div className="footer">
        © {new Date().getFullYear()} CultureEd
      </div>
    </>
  );
}

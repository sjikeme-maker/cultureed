export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>CultureEd</h1>
      <p><strong>Industry literacy, not creator fluff.</strong></p>
      <p>Short, serious, actionable learning from working professionals.</p>

      <h2>Join the Waitlist</h2>
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          required
          style={{ padding: "10px", width: "60%", marginRight: "10px" }}
        />
        <button style={{ padding: "10px 20px" }}>Join</button>
      </form>

      <hr style={{ margin: "40px 0" }} />
      <p>© 2026 CultureEd</p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#1E2A24", color: "#B8C2BB" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "56px 40px 40px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 40,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                background: "#F4F5F3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{ width: 14, height: 14, border: "3px solid #C9622B" }}
              />
            </div>
            <div
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              Van Sluijs
            </div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 280 }}>
            Verbouw en renovatie voor particuliere klanten in heel Zeeland.
            Vakmanschap sinds 1998.
          </p>
        </div>

        <div>
          <div style={colHeadStyle}>Diensten</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
            <span>Badkamerrenovatie</span>
            <span>Keukenverbouw</span>
            <span>Aanbouw &amp; dakkapel</span>
            <span>Algehele verbouw</span>
          </div>
        </div>

        <div>
          <div style={colHeadStyle}>Werkgebied</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
            <span>Middelburg</span>
            <span>Vlissingen</span>
            <span>Goes</span>
            <span>Terneuzen</span>
          </div>
        </div>

        <div>
          <div style={colHeadStyle}>Contact</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
            <span>0118 – 45 67 89</span>
            <span>info@vansluijsbouw.nl</span>
            <span>Nijverheidsweg 14, Goes</span>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #2E3C34" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "20px 40px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 13,
            color: "#94A39A",
          }}
        >
          <span>
            © 2026 Van Sluijs Bouw &amp; Techniek
          </span>
          <span>KvK 12345678 — BTW NL123456789B01</span>
        </div>
      </div>
    </footer>
  );
}

const colHeadStyle: React.CSSProperties = {
  fontFamily: "var(--font-archivo), sans-serif",
  fontWeight: 700,
  fontSize: 14,
  color: "#fff",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: 16,
};

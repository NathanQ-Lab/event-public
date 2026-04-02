"use client";

import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

/* ================= FLOURISH (PURE CODE) ================= */
const Flourish = () => (
  <div
    style={{
      width: "140px",
      height: "14px",
      margin: "10px auto 22px",
      position: "relative",
      opacity: 0.9,
    }}
  >
    {/* Left line */}
    <span
      style={{
        position: "absolute",
        left: 0,
        top: "50%",
        width: "55px",
        height: "1.5px",
        background: "#b08d57",
      }}
    />

    {/* Center curl */}
    <span
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: "14px",
        height: "14px",
        border: "1.5px solid #b08d57",
        borderRadius: "50%",
        transform: "translate(-50%, -50%) rotate(45deg)",
      }}
    />

    {/* Right line */}
    <span
      style={{
        position: "absolute",
        right: 0,
        top: "50%",
        width: "55px",
        height: "1.5px",
        background: "#b08d57",
      }}
    />
  </div>
);

export default function Home() {
  return (
    <>
      <main style={{ fontFamily: "Georgia, serif" }}>

        {/* ================= HERO ================= */}
        <section
          style={{
            background: "#0a0a0a",
            color: "white",
            textAlign: "center",
            padding: "140px 20px",
          }}
        >
          <p style={{ color: "#c9c9c9", marginBottom: "50px" }}>
            Welcome to Naydine’s 21st Birthday Celebration
          </p>

          <div
            style={{
              position: "relative",
              height: "280px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "70px",
                background: "linear-gradient(90deg, #5a0000, #cc0000, #5a0000)",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />

            <div
              style={{
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #cc0000",
                position: "relative",
                zIndex: 2,
                boxShadow: "0 0 12px rgba(204,0,0,0.4)",
              }}
            >
              <Image
                src="/images/img1.jpg"
                alt="Naydine"
                width={520}
                height={520}
                quality={100}
                priority
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <h1 style={{ color: "#ff4d4d", fontSize: "38px", marginTop: "25px" }}>
            Celebrating 21 Years of Naydine
          </h1>
        </section>

       {/* ================= SPLIT ================= */}
<section style={{ background: "#f8f8f8", padding: "80px 20px" }}>
  <div
    style={{
      maxWidth: "1000px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "40px",
    }}
  >
    {/* IMAGE SIDE */}
    <div style={{ flex: "1", minWidth: "280px" }}>
      <Image
        src="/images/img3.jpg"   // 👈 choose the image you want
        alt="Share the moment"
        width={1200}
        height={800}
        quality={100}
        sizes="(max-width: 768px) 100vw, 500px"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "16px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* TEXT SIDE */}
    <div style={{ flex: "1", minWidth: "280px" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>
        Share the Moment
      </h2>

      <p style={{ marginBottom: "25px", color: "#444" }}>
        Please share moments captured at the party and help create unforgettable
        memories.
      </p>

      <Link href="/gallery" style={{ textDecoration: "none" }}>
        <button style={btnPrimary}>Upload & View Gallery</button>
      </Link>
    </div>
  </div>
</section>

       {/* ================= PROGRAM ================= */}
<section
  style={{
    background: "#f4f4f4",
    padding: "120px 20px",
    display: "flex",
    justifyContent: "center",
  }}
>
  <div
    style={{
      maxWidth: "600px",
      width: "100%",
      background: "#fff",
      padding: "70px 40px",
      borderRadius: "20px",
      textAlign: "center",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    }}
  >
    <h2
      style={{
        color: "#8b0000",
        fontSize: "32px",
        marginBottom: "40px",
      }}
    >
      Itinerary
    </h2>

    {[
  { title: "Opening", names: ["Laurica"] },
  { title: "Welcoming", names: ["Austin"] },
  { title: "Speeches", names: ["Audine", "Nathan", "Neville", "Friends"] },
  { title: "Presentation of the 21st Key", names: ["Quade"] },
  { title: "Key handover ceremony", names: ["Stacey", "Neville"] },
  { title: "Toast", names: [] },
  { title: "Party", names: [] },
].map((item, i) => (
  <div key={i} style={{ marginBottom: "30px" }}>
    {/* TITLE */}
    <p
      style={{
        fontSize: "20px",
        color: "#333",
        fontWeight: "600",
        marginBottom: "6px",
      }}
    >
      {item.title}
    </p>

    {/* NAMES (only if they exist) */}
    {item.names.length > 0 && (
      <p
        style={{
          fontSize: "17px",
          color: "#555",
          marginBottom: "10px",
        }}
      >
        {item.names.join(" · ")}
      </p>
    )}

    {/* DIVIDER */}
    {i !== 6 && <Flourish />}
  </div>
))}
  </div>
</section>
            {/* ================= PERSONAL MESSAGE ================= */}
<section
  style={{
    background: "#fff",
    padding: "90px 20px",
    textAlign: "center",
    borderTop: "1px solid #eee",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    {/* LEFT LINE */}
    <div
      style={{
        flex: 1,
        height: "1px",
        background: "#ccc",
      }}
    />

    {/* TEXT */}
    <p
      style={{
        color: "#8b0000",
        fontStyle: "italic",
        fontSize: "18px",
        letterSpacing: "1px",
        whiteSpace: "nowrap",
      }}
    >
      "Dag se ou”
    </p>

    {/* RIGHT LINE */}
    <div
      style={{
        flex: 1,
        height: "1px",
        background: "#ccc",
      }}
    />
  </div>
</section>

        {/* ================= FOOTER ================= */}
        <footer style={footerStyle}>
          <p>Thank you for celebrating with me ❤️</p>
          <p style={{ color: "#aaa" }}>Naydine’s 21st Birthday</p>
          <div style={dividerRed} />
          <p style={{ fontSize: "12px", color: "#777" }}>Made with love 🎉</p>
        </footer>
      </main>
    </>
  );
}

/* ================= STYLES ================= */

const btnPrimary: CSSProperties = {
  background: "#8b0000",
  color: "#fff",
  padding: "14px",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
};

const footerStyle: CSSProperties = {
  background: "#000",
  color: "#fff",
  padding: "60px 20px",
  textAlign: "center",
};

const dividerRed: CSSProperties = {
  width: "60px",
  height: "2px",
  background: "#8b0000",
  margin: "20px auto",
};
"use client";

import Image from "next/image";
import Link from "next/link";

type ImageType = {
  public_id: string;
};

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
            {/* RED STRIP */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "70px",
                background:
                  "linear-gradient(90deg, #5a0000, #cc0000, #5a0000)",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />

            {/* IMAGE */}
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
                fill
                sizes="260px"
                quality={100}
                priority
                unoptimized
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <h1 style={{ color: "#ff4d4d", fontSize: "38px", marginTop: "25px" }}>
            Naydine’s 21st
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
            {/* COLLAGE */}
            <div
              style={{
                flex: "1",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {["img1.jpg", "img1.jpg", "img1.jpg", "img1.jpg"].map(
                (img, i) => (
                  <img
                    key={i}
                    src={`/images/${img}`}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                )
              )}
            </div>

            {/* TEXT */}
            <div style={{ flex: "1", minWidth: "280px" }}>
              <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>
                Share the Moment
              </h2>

              <p style={{ marginBottom: "25px", color: "#444" }}>
                Please share moments captured at the party and help create
                unforgettable memories.
              </p>

              {/* ✅ WORKING BUTTONS */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                
                <Link href="/upload" style={{ textDecoration: "none" }}>
                  <button style={btnPrimary}>Upload</button>
                </Link>

                <Link href="/gallery" style={{ textDecoration: "none" }}>
                  <button style={btnSecondary}>View Gallery</button>
                </Link>

              </div>
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
          <div style={programCard}>
            <h2 style={programTitle}>Program</h2>

            <div style={{ position: "relative" }}>
              <div style={timelineLine} />

              {[
                { time: "18:00", title: "Arrival" },
                { time: "19:00", title: "Speeches" },
                { time: "20:00", title: "Cake Cutting" },
                { time: "21:00", title: "Party 🎉" },
              ].map((item, i) => (
                <div key={i} style={timelineRow}>
                  <div style={timeStyle}>{item.time}</div>
                  <div style={dotWrapper}>
                    <div style={dotStyle} />
                  </div>
                  <div style={textStyle}>{item.title}</div>
                </div>
              ))}
            </div>
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

const btnPrimary = {
  background: "#8b0000",
  color: "#fff",
  padding: "14px",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
};

const btnSecondary = {
  border: "1px solid #8b0000",
  padding: "14px",
  borderRadius: "999px",
  background: "#fff",
  color: "#8b0000",
  cursor: "pointer",
};

const programCard = {
  width: "100%",
  maxWidth: "600px",
  background: "#fff",
  padding: "70px 40px",
  borderRadius: "20px",
};

const programTitle = {
  textAlign: "center",
  color: "#8b0000",
  fontSize: "32px",
  marginBottom: "60px",
};

const timelineLine = {
  position: "absolute",
  left: "50%",
  top: 0,
  bottom: 0,
  width: "2px",
  background: "#ccc",
  transform: "translateX(-50%)",
};

const timelineRow = {
  display: "flex",
  alignItems: "center",
  marginBottom: "45px",
};

const timeStyle = {
  width: "45%",
  textAlign: "right",
  paddingRight: "20px",
  color: "#8b0000",
};

const dotWrapper = {
  width: "10%",
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  width: "14px",
  height: "14px",
  background: "#8b0000",
  borderRadius: "50%",
};

const textStyle = {
  width: "45%",
  paddingLeft: "20px",
};

const footerStyle = {
  background: "#000",
  color: "#fff",
  padding: "60px 20px",
  textAlign: "center",
};

const dividerRed = {
  width: "60px",
  height: "2px",
  background: "#8b0000",
  margin: "20px auto",
};
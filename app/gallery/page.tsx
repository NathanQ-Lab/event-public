"use client";

import { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch("/api/images");
      const data = await res.json();
      setImages(data.images || []);
    } catch (err) {
      console.error("Failed to load images");
    }
    setLoading(false);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#ff4d4d", marginBottom: "10px" }}>
        Gallery 📸
      </h1>

      <p style={{ color: "#aaa", marginBottom: "30px" }}>
        Refresh to see new photos
      </p>

      {/* Refresh button */}
      <button
        onClick={fetchImages}
        style={{
          background: "#8b0000",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "999px",
          border: "none",
          marginBottom: "30px",
          cursor: "pointer",
        }}
      >
        Refresh 🔄
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : images.length === 0 ? (
        <p style={{ color: "#777" }}>No photos yet</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          ))}
        </div>
      )}
    </main>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  // Load existing images
  useEffect(() => {
    fetch("/api/images")
      .then(res => res.json())
      .then(data => setImages(data.images || []))
      .catch(console.error);
  }, []);

  // Shared upload handler
  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      setImages(prev => [data.url, ...prev]);
    }

    setUploading(false);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Georgia, serif" }}>
      {/* ================= UPLOAD BOX ================= */}
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto 40px",
        }}
      >
        <h2 style={{ fontSize: "26px", marginBottom: "10px", color: "#8b0000" }}>
          Upload Your Photos
        </h2>

        <p style={{ color: "#555", marginBottom: "25px" }}>
          Choose from your device or take a picture
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            style={btnPrimary}
          >
            📁 From Device
          </button>

          <button
            onClick={() => cameraInputRef.current?.click()}
            disabled={uploading}
            style={btnSecondary}
          >
            📷 Take Picture
          </button>
        </div>

        {uploading && <p style={{ marginTop: "15px" }}>Uploading...</p>}

        {/* Hidden inputs */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={e => {
            const file = e.target.files?.[0];
            if (file) uploadFile(file);
          }}
        />

        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          hidden
          onChange={e => {
            const file = e.target.files?.[0];
            if (file) uploadFile(file);
          }}
        />
      </div>

      {/* ================= GALLERY GRID ================= */}
      <div
  style={{
    columnCount: 2,
    columnGap: "14px",
  }}
>
        {images.map((src, i) => (
          <img
  key={i}
  src={src}
  alt="uploaded"
  style={{
    width: "100%",
    height: "auto",
    borderRadius: "12px",
    marginBottom: "14px",
    display: "block",
  }}
/>
        ))}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const btnPrimary = {
  background: "#8b0000",
  color: "#fff",
  padding: "14px 20px",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

const btnSecondary = {
  border: "1px solid #8b0000",
  padding: "14px 20px",
  borderRadius: "999px",
  background: "#fff",
  color: "#8b0000",
  cursor: "pointer",
  fontWeight: "bold",
};
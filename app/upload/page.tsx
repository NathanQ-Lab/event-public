"use client";

import { useState } from "react";

export default function Upload() {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setImageUrl(data.secure_url);
      alert("Upload successful 🎉");
    } catch (error: any) {
      console.error("Upload failed:", error.message);
      alert("Upload failed ❌: " + error.message);
    }

    setUploading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0a0a0a",
        color: "#fff",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1 style={{ color: "#ff4d4d" }}>Upload Photos</h1>

      <input
        type="file"
        onChange={handleUpload}
        disabled={uploading}
        style={{
          padding: "10px",
          background: "#fff",
          color: "#000",
          borderRadius: "6px",
        }}
      />

      {uploading && <p>Uploading...</p>}

      {imageUrl && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ color: "#ccc" }}>Uploaded Image:</p>
          <img
            src={imageUrl}
            style={{
              width: "200px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
}
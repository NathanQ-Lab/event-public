"use client";

import { useState } from "react";

export default function Upload() {
  const [uploading, setUploading] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      const uploadedImages: string[] = [];

      for (const file of Array.from(files)) {
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

        uploadedImages.push(data.secure_url);
      }

      setImageUrls((prev) => [...prev, ...uploadedImages]);
      alert("Images uploaded successfully 🎉");
    } catch (error: any) {
      console.error("Upload failed:", error.message);
      alert("Upload failed ❌: " + error.message);
    }

    setUploading(false);
    e.target.value = ""; // reset input
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background: "#0a0a0a",
        color: "#fff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ff4d4d",
          marginBottom: "30px",
        }}
      >
        Upload Party Photos
      </h1>

      {/* Upload Input */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading}
          style={{
            padding: "12px",
            background: "#fff",
            color: "#000",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        />
        {uploading && <p style={{ marginTop: "10px" }}>Uploading...</p>}
      </div>

      {/* Gallery */}
      {imageUrls.length > 0 && (
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {imageUrls.map((url, i) => (
            <div
              key={i}
              style={{
                background: "#111",
                padding: "10px",
                borderRadius: "12px",
              }}
            >
              <img
                src={url}
                alt={`Uploaded ${i}`}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover", // 🔥 prevents blur
                  borderRadius: "10px",
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
"use client";

import { useState } from "react";

export default function Upload() {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "nadine-21st"); // your Cloudinary preset

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dfb5fwm4/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      console.log("Uploaded:", data);

      alert("Upload successful 🎉");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed ❌");
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
    </div>
  );
}
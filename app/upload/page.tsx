"use client";
import { useState } from "react";

export default function Upload() {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "nadine_uploads");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dfb5fwm4/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      console.log(data);

      alert("Uploaded 🎉");
    } catch (err) {
      console.error(err);
      alert("Upload failed ❌");
    }

    setUploading(false);
  };

  return (
    <div className="uploadBox">
      <h2>Share your moments 📸</h2>

      <input type="file" onChange={handleUpload} />

      {uploading && <p>Uploading...</p>}
    </div>
  );
}
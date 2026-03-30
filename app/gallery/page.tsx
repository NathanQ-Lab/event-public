"use client";
import { useEffect, useState } from "react";

type ImageType = {
  public_id: string;
  [key: string]: any;
};

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      "https://res.cloudinary.com/dfb5fwm4/image/list/nadine-21st.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data.resources || []);
      })
      .catch((err) => console.log("Error loading gallery", err));
  }, []);

  return (
    <div className="gallery">
      {images.map((img) => (
        <img
          key={img.public_id}
          src={`https://res.cloudinary.com/dfb5fwm4/image/upload/${img.public_id}.jpg`}
          alt=""
        />
      ))}
    </div>
  );
}
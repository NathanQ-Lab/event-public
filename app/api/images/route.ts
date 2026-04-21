import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// 🔐 Your Cloudinary config
cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: ""
});

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression("")
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute();

    const images = result.resources.map((file: any) => file.secure_url);

    return NextResponse.json({ images });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

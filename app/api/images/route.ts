import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// 🔐 Your Cloudinary config
cloudinary.config({
  cloud_name: "dffb5fwm4",
  api_key: "887853347394579",
  api_secret: "XSiL2utCVMIbSf1q146YJm_4pj0"
});

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression("folder:nadine-21st")
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute();

    const images = result.resources.map((file: any) => file.secure_url);

    return NextResponse.json({ images });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
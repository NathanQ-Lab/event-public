import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// 🔐 Your Cloudinary config
cloudinary.config({
  cloud_name: "dffb5fwm4",
  api_key: "887853347394579",
  api_secret: "XSiL2utCVMIbSf1q146YJm_4pj0"
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "nadine-21st", // optional folder
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    return NextResponse.json({ secure_url: result.secure_url });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Upload failed" },
      { status: 500 }
    );
  }
}
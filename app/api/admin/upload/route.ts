// app/api/admin/upload/route.ts
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    const bucket = (form.get("bucket") as string) || "uploads";
    if (!file) return NextResponse.json({ error: "file required" }, { status: 400 });

    // Validate type (only images)
    const allowed = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowed.includes(file.type)) return NextResponse.json({ error: "invalid file type" }, { status: 400 });

    const filename = `${Date.now()}-${file.name}`;
    // convert File to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { data, error } = await supabaseAdmin.storage.from(bucket).upload(filename, buffer, {
      contentType: file.type,
      upsert: false,
    });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    // Make public (if bucket is public), get public URL
    const publicURL = supabaseAdmin.storage.from(bucket).getPublicUrl(data.path).publicUrl;
    return NextResponse.json({ path: data.path, publicURL });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// app/api/admin/records/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer";

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, payload } = body;
    if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

    const { data, error } = await supabaseAdmin
      .from("contacts")
      .update(payload)
      .eq("id", id);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;
    if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

    const { data, error } = await supabaseAdmin
      .from("contacts")
      .delete()
      .eq("id", id);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

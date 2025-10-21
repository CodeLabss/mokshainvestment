// app/api/admin/content/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer";

const allowedTables = ["upcoming_nfo", "bonds_fd", "bonds_ncd"];

export async function POST(req: NextRequest) {
  try {
    const { table, payload } = await req.json();
    if (!allowedTables.includes(table)) return NextResponse.json({ error: "table not allowed" }, { status: 400 });
    const { data, error } = await supabaseAdmin.from(table).insert([payload]).select().single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    await supabaseAdmin.from("audit_logs").insert([{ action: "create", object_type: table, object_id: String(data.id), payload: { data } }]);
    return NextResponse.json({ data });
  } catch (err: any) { return NextResponse.json({ error: err.message }, { status: 500 }); }
}

export async function PATCH(req: NextRequest) {
  try {
    const { table, id, payload } = await req.json();
    if (!allowedTables.includes(table)) return NextResponse.json({ error: "table not allowed" }, { status: 400 });
    const { data, error } = await supabaseAdmin.from(table).update(payload).eq("id", id).select().single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    await supabaseAdmin.from("audit_logs").insert([{ action: "update", object_type: table, object_id: String(id), payload: { payload } }]);
    return NextResponse.json({ data });
  } catch (err: any) { return NextResponse.json({ error: err.message }, { status: 500 }); }
}

export async function DELETE(req: NextRequest) {
  try {
    const { table, id } = await req.json();
    if (!allowedTables.includes(table)) return NextResponse.json({ error: "table not allowed" }, { status: 400 });
    const { data, error } = await supabaseAdmin.from(table).delete().eq("id", id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    await supabaseAdmin.from("audit_logs").insert([{ action: "delete", object_type: table, object_id: String(id) }]);
    return NextResponse.json({ data });
  } catch (err: any) { return NextResponse.json({ error: err.message }, { status: 500 }); }
}

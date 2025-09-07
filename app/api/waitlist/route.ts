import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

import { z } from "zod";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE!,
  { auth: { persistSession: false } }
);

const Payload = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  handle: z.string().max(64).optional().nullable(),
  game: z.string().optional(),
  ts: z.string().optional(),
});

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = Payload.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { ok: false, issues: parsed.error.flatten() },
      { status: 400 }
    );

  const { name, email, handle, game, ts } = parsed.data;
  const { data, error } = await supabase
    .from("waitlist")
    .upsert(
      {
        name,
        email: email.toLowerCase(),
        handle: handle ?? null,
        game: game ?? null,
        meta: { ts, ua: req.headers.get("user-agent") },
      },
      { onConflict: "email" }
    )
    .select()
    .single();

  if (error)
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  return NextResponse.json({ ok: true, data });
}

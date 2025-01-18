import { getAIResponseStats } from "@/lib/stats";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("auth-token");
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const responseStats = await getAIResponseStats({ token: token.value });
  return NextResponse.json(responseStats);
}

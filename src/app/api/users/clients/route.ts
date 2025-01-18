import { getClients } from "@/lib/users";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("auth-token");
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const page = req.nextUrl.searchParams.get("page");
  const res = await getClients({ page: page ? parseInt(page) : 1, token: token.value });
  return NextResponse.json(res);
}

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { login } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;
    const loginRes = await login({ email, password });
    if (loginRes?.token && loginRes?.user?.role === "admin") {
      const cookieStore = await cookies();
      cookieStore.set("auth-token", loginRes.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
      });
      return NextResponse.json({ success: true });
    } else if (typeof loginRes?.message === "string") {
      return NextResponse.json({ error: loginRes.message }, { status: 401 });
    } else if (Array.isArray(loginRes?.message)) {
      return NextResponse.json({ error: loginRes.message.join(", ") }, { status: 401 });
    }
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    console.error("Login failed:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

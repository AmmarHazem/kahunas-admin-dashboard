import { register } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, firstName, lastName, role } = body;
    if (!email || !password || !firstName || !lastName || !role) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
    }
    const registerRes = await register({ email, password, firstName, lastName, role });
    if (registerRes?.token && registerRes.user?.role === "admin") {
      const cookieStore = await cookies();
      cookieStore.set("auth-token", registerRes.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
      });
      return NextResponse.json({ success: true });
    } else if (typeof registerRes?.message === "string") {
      return NextResponse.json({ error: registerRes.message }, { status: 401 });
    } else if (Array.isArray(registerRes?.message)) {
      return NextResponse.json({ error: registerRes.message.join(", ") }, { status: 401 });
    }
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ message: "Error creating user" }, { status: 500 });
  }
}

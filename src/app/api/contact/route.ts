import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  console.log("[CONTACT_SUBMISSION]", body);

  return NextResponse.json({
    success: true,
    message: "Message submitted successfully",
  });
}

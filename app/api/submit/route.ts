import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Insignia Alto da Lapa!A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.data,
            body.nome,
            body.telefone,
            body.email,
            body.origem,
            body.produto,
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("ERRO API:", error);
    return NextResponse.json(
      { error: error.message || "Internal Error" },
      { status: 500 }
    );
  }
}

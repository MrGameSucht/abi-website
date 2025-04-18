"use server";

import { NextRequest, NextResponse } from "next/server";
import { validToken, getUsername } from "@/app/lib/getAuth";

const serverUrl = process.env.SERVER_URL as string;
const apiKey = process.env.API_KEY as string;

async function POST(req: NextRequest) {
    try {
        const token = new URL(req.url).searchParams.get('token')
        if (token === "") {
            return NextResponse.json({ error: "No token given" }, { status: 400 });
        }

        if (await validToken(token!)) {
            const user = (await getUsername(token!) as string)
            
            const formData = await req.formData();
            const res = await fetch(`${serverUrl}/upload`, {
                method: 'POST',
                body: formData,
                headers: {
                    'x-api-key': apiKey,
                    'folder-name': user,
                }
            });

            return NextResponse.json({ message: "Files uploaded successfully" });
        }
        return NextResponse.json({ error: "Access Denied" }, { status: 403 });

        
    } catch (error) {
        console.error("Error handling file upload:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export { POST };
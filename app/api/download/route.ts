"use server";

import { unstable_noStore as noStore } from "next/cache";
import {NextResponse } from "next/server";

async function GET() {
  noStore()
    const res = await fetch(`blacklisted/download`, {
      method: 'GET',
      headers: {
        'x-api-key': 'blacklisted',
      }
    });
  
    const contentType = res.headers.get('Content-Type') || 'application/zip';
    const body = res.body;
    
    try {
      return new NextResponse(body, {
        status: 200,
        headers: {
          'Content-Type': contentType,
        }
      }
      );
    } catch (error: any) {
      return NextResponse.json(
        { error: error.message },
        { status: 500, }
      );
    }
  }
  
  export { GET };
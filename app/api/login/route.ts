// app/api/login/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.formData();
  const username = body.get('username');
  const password = body.get('password');

  if (username === 'admin' && password === 'admin123') {
    return NextResponse.redirect(new URL('/landing', req.url));
  } else {
    return NextResponse.redirect(new URL('/login?error=Invalid username or password', req.url));
  }
}

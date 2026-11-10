import { NextRequest, NextResponse } from 'next/server';
export function middleware(request: NextRequest) {
 const url=request.nextUrl.clone();
 if(url.pathname!=='/') return NextResponse.next();
 const host=request.headers.get('host')?.split(':')[0]?.toLowerCase();
 url.pathname=host==='geburtsfest.li'||host==='www.geburtsfest.li'?'/de':'/en';
 return NextResponse.redirect(url);
}
export const config={matcher:['/']};

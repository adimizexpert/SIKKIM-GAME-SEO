import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'sikkimgamelogin.com'
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`

/**
 * 301 redirects for canonicalization:
 * (1) http://sikkimgamelogin.com → https://sikkimgamelogin.com
 * (2) http://www.sikkimgamelogin.com → https://sikkimgamelogin.com
 * (3) https://www.sikkimgamelogin.com → https://sikkimgamelogin.com
 * (2) and (3) are also in next.config.js; middleware runs first and handles (1).
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const host = request.headers.get('host') || ''
  const proto = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '')

  // Force HTTPS (when behind a proxy that sets x-forwarded-proto)
  if (proto === 'http') {
    url.protocol = 'https:'
    url.host = host
    return NextResponse.redirect(url, 301)
  }

  // Force non-www
  if (host.startsWith('www.')) {
    url.host = CANONICAL_HOST
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except static files and Next.js internals.
     * Skip _next, favicon, images, etc.
     */
    '/((?!_next/static|_next/image|favicon|Images/|.*\\.(?:webp|png|jpg|jpeg|gif|ico|svg|woff2?)$).*)',
  ],
}

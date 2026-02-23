import { GetServerSideProps } from 'next'
import { SITE_BASE_URL } from '@/lib/site-urls'

/** All public-facing pages. No /k/ (redirected), no sitemap.xml or robots.txt. */
const PUBLIC_PAGES: Array<{ path: string; changefreq: string; priority: string }> = [
  { path: '', changefreq: 'daily', priority: '1.0' },
  { path: '/login', changefreq: 'weekly', priority: '0.8' },
  { path: '/register', changefreq: 'weekly', priority: '0.8' },
  { path: '/guide', changefreq: 'weekly', priority: '0.9' },
  { path: '/sikkim-game-register-bonus-guide', changefreq: 'monthly', priority: '0.7' },
  { path: '/sikkim-game-login-guide', changefreq: 'monthly', priority: '0.7' },
  { path: '/bonus', changefreq: 'monthly', priority: '0.7' },
  { path: '/download', changefreq: 'monthly', priority: '0.7' },
  { path: '/blogs', changefreq: 'weekly', priority: '0.8' },
  { path: '/faqs', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.6' },
  { path: '/about-sikkim-game', changefreq: 'monthly', priority: '0.7' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.5' },
  { path: '/gift-code', changefreq: 'monthly', priority: '0.6' },
  { path: '/invite-code', changefreq: 'monthly', priority: '0.6' },
  { path: '/referral', changefreq: 'monthly', priority: '0.6' },
  { path: '/customer-support', changefreq: 'monthly', priority: '0.6' },
  { path: '/withdrawal', changefreq: 'monthly', priority: '0.6' },
  { path: '/kyc', changefreq: 'monthly', priority: '0.6' },
  { path: '/real-or-fake', changefreq: 'monthly', priority: '0.6' },
  { path: '/safe-or-not', changefreq: 'monthly', priority: '0.6' },
]

function generateSiteMap() {
  const currentDate = new Date().toISOString().split('T')[0]

  const urlEntries = PUBLIC_PAGES.map(
    ({ path, changefreq = 'monthly', priority = '0.6' }) => `
     <url>
       <loc>${SITE_BASE_URL}${path || '/'}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>${changefreq}</changefreq>
       <priority>${priority}</priority>
     </url>`
  ).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
   </urlset>
`
}

function SiteMap() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap()
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
  return { props: {} }
}

export default SiteMap

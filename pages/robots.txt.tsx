import { GetServerSideProps } from 'next'

function generateRobotsTxt() {
  return `# Global Settings
User-agent: *
Allow: /
Allow: /guide
Allow: /Images/
Disallow: /cgi-bin/
Disallow: /wp-admin/
Disallow: /account/settings
Disallow: /api/

# Targeted GEO & Search Bots (Allowing for faster local indexing)
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /Images/

User-agent: Bingbot
Allow: /

User-agent: Baiduspider
Disallow: / 

User-agent: Yandex
Disallow: /

# Block Aggressive Scrapers (Saves server bandwidth and prevents content theft)
User-agent: AhrefsBot
Disallow: /

User-agent: SEMrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Link to your Sitemap
Sitemap: https://sikkimgamelogin.com/sitemap.xml
`
}

function RobotsTxt() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // We generate the robots.txt with the content
  const robotsTxt = generateRobotsTxt()

  res.setHeader('Content-Type', 'text/plain')
  // we send the robots.txt to the browser
  res.write(robotsTxt)
  res.end()

  return {
    props: {},
  }
}

export default RobotsTxt


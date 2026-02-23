import { GetServerSideProps } from 'next'

function generateRobotsTxt() {
  return `# Allow all public content pages. No block on /feed/ (that URL does not exist).
User-agent: *
Allow: /
Allow: /login
Allow: /register
Allow: /guide
Allow: /bonus
Allow: /download
Allow: /blogs
Allow: /faqs
Allow: /contact
Allow: /about-sikkim-game
Allow: /privacy
Allow: /gift-code
Allow: /invite-code
Allow: /referral
Allow: /customer-support
Allow: /withdrawal
Allow: /kyc
Allow: /real-or-fake
Allow: /safe-or-not
Allow: /sitemap.xml

# Block only truly private paths (if they exist)
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

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


import Link from 'next/link'

interface InternalLinksProps {
  currentPath?: string
}

// Main content pages (no /k/ doorway pages — those redirect to these)
const moreHelpfulPages = [
  { path: '/guide', title: 'Sikkim Game Guide' },
  { path: '/login', title: 'Sikkim Game Login' },
  { path: '/register', title: 'Sikkim Game Register' },
  { path: '/download', title: 'Download & APK' },
  { path: '/bonus', title: 'Bonus & Gift Codes' },
  { path: '/invite-code', title: 'Invite Code' },
  { path: '/referral', title: 'Referral Program' },
  { path: '/about-sikkim-game', title: 'About Sikkim Game' },
]

export default function InternalLinks({ currentPath }: InternalLinksProps) {
  return (
    <section className="internal-links-section">
      <div className="related-pages-widget">
        <h3 className="widget-title">Related Pages</h3>
        <ul className="related-links">
          <li><Link href="/download">Download</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/register">Register</Link></li>
          <li><Link href="/withdrawal">Withdrawal</Link></li>
          <li><Link href="/customer-support">Customer Support</Link></li>
          <li><Link href="/kyc">KYC</Link></li>
          <li><Link href="/invite-code">Invite Code</Link></li>
          <li><Link href="/bonus">Bonus</Link></li>
        </ul>
      </div>
      <div className="popular-keywords-widget">
        <h3 className="widget-title">More helpful pages</h3>
        <ul className="keyword-links">
          {moreHelpfulPages.map((page, index) => {
            if (currentPath === page.path) return null
            return (
              <li key={index}>
                <Link href={page.path}>{page.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <style jsx>{`
        .internal-links-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin: 3rem 0;
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 12px;
        }
        .related-pages-widget,
        .popular-keywords-widget {
          background: #ffffff;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #e5e5e5;
        }
        .widget-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #425fef;
        }
        .related-links,
        .keyword-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .related-links li,
        .keyword-links li {
          padding: 0.5rem 0;
        }
        .related-links a,
        .keyword-links a {
          color: #425fef;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s, padding-left 0.3s;
          display: block;
          padding-left: 0.5rem;
          border-left: 3px solid transparent;
        }
        .related-links a:hover,
        .keyword-links a:hover {
          color: #3245cc;
          padding-left: 1rem;
          border-left-color: #425fef;
        }
        @media (max-width: 768px) {
          .internal-links-section {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1.5rem;
            margin: 2rem 0;
          }
          .related-pages-widget,
          .popular-keywords-widget {
            padding: 1.25rem;
          }
          .widget-title {
            font-size: 1.1rem;
          }
          .related-links a,
          .keyword-links a {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  )
}


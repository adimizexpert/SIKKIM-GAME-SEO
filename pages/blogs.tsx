import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const blogs = [
  {
    slug: 'sikkim-game-register-bonus-guide',
    title: 'How to Register on Sikkim Game: Step-by-Step Guide to ₹500 Bonus',
    description: 'Join Sikkim Game today! Complete your Sikkim Game login or register to claim a ₹500 first bonus. Download the official Sikkim Game APK for WinGo & Aviator.',
    thumbnail: '/Images/register-blogs-thumbnail.webp',
    date: '2025-01-15',
  },
  {
    slug: 'sikkim-game-login-guide',
    title: 'Sikkim Game Login Guide: Access Your Account Safely',
    description: 'Access your Sikkim Game account safely. Follow our Sikkim Game login guide to use the official app, check bonuses, and request withdrawals on the dashboard.',
    thumbnail: '/Images/login-blogs-thumbnail.webp',
    date: '2025-01-20',
  },
]

export default function Blogs() {
  return (
    <>
      <NextSeo
        title="Blogs - Sikkim Game Login & Registration Guides"
        description="Read our comprehensive guides on Sikkim Game login, registration, bonuses, and gaming tips."
        canonical="https://sikkimgamelogin.com/blogs"
      />
      <Head>
        <link rel="canonical" href="https://sikkimgamelogin.com/blogs" />
      </Head>

      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo-container">
              <Link href="/">
                <Image
                  src="/Images/logo.webp"
                  alt="Sikkim Game Logo"
                  width={150}
                  height={50}
                  priority
                  style={{ width: 'auto', height: '40px', objectFit: 'contain' }}
                />
              </Link>
            </div>
            <div className="nav-links-center">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/guide" className="nav-link">Sikkim Game Guide</Link>
              <Link href="/about-sikkim-game" className="nav-link">About</Link>
              <Link href="/blogs" className="nav-link">Blog</Link>
              <Link href="/faqs" className="nav-link">FAQ</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
            <div className="nav-right">
              <Link href="/login" className="btn-login">Login</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="page-header">
            <h1>Sikkim Game Blogs</h1>
            <p>Comprehensive guides, tips, and latest updates about Sikkim Game</p>
          </div>

          <div className="blogs-grid">
            {blogs.map((blog) => (
              <article key={blog.slug} className="blog-card">
                <Link href={`/${blog.slug}`}>
                  <div className="blog-thumbnail">
                    <Image
                      src={blog.thumbnail}
                      alt={blog.title}
                      width={600}
                      height={400}
                      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                  </div>
                  <div className="blog-content">
                    <h2>{blog.title}</h2>
                    <p className="blog-description">{blog.description}</p>
                    <div className="blog-meta">
                      <span className="blog-date">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h3 className="footer-title">Sikkim Game</h3>
              <p className="footer-description">
                Your official source for Sikkim Game login, download, and ₹500 signup bonus. Play responsibly and enjoy the best gaming experience.
              </p>
              <a 
                href="https://www.sikkimgg.cc/#/register?invitationCode=384636381064" 
                className="footer-register-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </div>
            <div className="footer-right">
              <div className="footer-column">
                <h4 className="footer-column-title">Quick Links</h4>
                <nav className="footer-links">
                  <Link href="/">Home</Link>
                  <Link href="/about-sikkim-game">About</Link>
                  <Link href="/blogs">Blog</Link>
                  <Link href="/faqs">FAQ</Link>
                </nav>
              </div>
              <div className="footer-column">
                <h4 className="footer-column-title">Legal</h4>
                <nav className="footer-links">
                  <Link href="/privacy">Privacy Policy</Link>
                  <Link href="/contact">Contact</Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <p className="footer-copyright">&copy; 2025 Sikkim Game. All rights reserved.</p>
            <p className="footer-disclaimer">Disclaimer: This is an affiliate website. We may earn commission from qualifying purchases.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .header {
          background: #425fef;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }
        .logo-container {
          display: flex;
          align-items: center;
        }
        .nav-links-center {
          display: flex;
          gap: 2rem;
          align-items: center;
          justify-content: center;
          flex: 1;
        }
        .nav-link {
          color: #ffffff;
          font-weight: 500;
          font-size: 1rem;
          transition: opacity 0.3s ease;
          padding: 0.5rem 0;
          white-space: nowrap;
        }
        .nav-link:hover {
          opacity: 0.8;
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .btn-login {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #425fef;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          white-space: nowrap;
          text-align: center;
          cursor: pointer;
          text-decoration: none;
          border: none;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          isolation: isolate;
        }
        .main {
          min-height: calc(100vh - 200px);
          background: #ffffff;
          padding: 3rem 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .page-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .page-header p {
          font-size: 1.25rem;
          color: #666;
        }
        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .blog-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }
        .blog-card a {
          text-decoration: none;
          color: inherit;
        }
        .blog-thumbnail {
          width: 100%;
          overflow: hidden;
        }
        .blog-content {
          padding: 1.5rem;
        }
        .blog-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .blog-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #666;
          margin-bottom: 1rem;
        }
        .blog-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .blog-date {
          font-size: 0.9rem;
          color: #999;
        }
        .footer {
          background: #ffffff;
          color: #333;
          padding: 3rem 0 1.5rem 0;
          border-top: 1px solid #e5e5e5;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        .footer-left {
          max-width: 500px;
        }
        .footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .footer-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #666;
          margin-bottom: 1.5rem;
        }
        .footer-register-btn {
          display: inline-block;
          background: #425fef;
          color: #ffffff;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .footer-register-btn:hover {
          background: #3245cc;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(66, 95, 239, 0.3);
        }
        .footer-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .footer-column {
          display: flex;
          flex-direction: column;
        }
        .footer-column-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          color: #666;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: #425fef;
        }
        .footer-divider {
          height: 1px;
          background: #e5e5e5;
          margin: 2rem 0 1.5rem 0;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-copyright {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
        }
        .footer-disclaimer {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
        }
        @media (max-width: 768px) {
          .nav-links-center {
            display: none;
          }
          .blogs-grid {
            grid-template-columns: 1fr;
          }
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-right {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            gap: 1rem;
          }
        }
        @media (max-width: 480px) {
          .page-header h1 {
            font-size: 2rem;
          }
          .footer-right {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </>
  )
}


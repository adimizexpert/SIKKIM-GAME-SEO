import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Privacy() {
  return (
    <>
      <NextSeo
        title="Privacy Policy - Sikkim Game"
        description="Read our privacy policy to understand how Sikkim Game collects, uses, and protects your personal information."
        canonical="https://sikkimgamelogin.com/privacy"
      />
      <Head>
        <link rel="canonical" href="https://sikkimgamelogin.com/privacy" />
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
          <div className="page-content">
            <header className="page-header">
              <h1>Privacy Policy</h1>
              <p className="last-updated">Last Updated: January 2025</p>
            </header>

            <section className="content-section">
              <p>
                At Sikkim Game, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="content-section">
              <h2>1. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
              <ul className="content-list">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when registering or contacting us.</li>
                <li><strong>Account Information:</strong> Username, password, and other credentials used to access your account.</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, device information, and pages visited.</li>
                <li><strong>Transaction Information:</strong> Details about transactions you carry out through our platform.</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul className="content-list">
                <li>To provide, maintain, and improve our services</li>
                <li>To process your registrations and transactions</li>
                <li>To send you updates, promotional materials, and other communications</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To comply with legal obligations and enforce our terms of service</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>3. Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="content-list">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
                <li><strong>With Your Consent:</strong> We may share your information with your explicit consent.</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="content-section">
              <h2>5. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section className="content-section">
              <h2>6. Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="content-list">
                <li>The right to access and receive a copy of your personal data</li>
                <li>The right to rectify inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal data</li>
                <li>The right to object to processing of your personal data</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>7. Data Retention</h2>
              <p>
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="content-section">
              <h2>8. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section className="content-section">
              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="content-section">
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our <Link href="/contact">contact page</Link> or email us at support@sikkimgame.com.
              </p>
            </section>
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
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .page-content {
          max-width: 100%;
        }
        .page-header {
          margin-bottom: 3rem;
          text-align: center;
        }
        .page-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        .last-updated {
          font-size: 1rem;
          color: #666;
          font-style: italic;
        }
        .content-section {
          margin-bottom: 3rem;
        }
        .content-section h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .content-section p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
          margin-bottom: 1rem;
        }
        .content-list {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }
        .content-list li {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
          margin-bottom: 1rem;
        }
        .content-list li:last-child {
          margin-bottom: 0;
        }
        .content-list strong {
          color: #425fef;
          font-weight: 600;
        }
        .content-section a {
          color: #425fef;
          text-decoration: none;
          font-weight: 500;
        }
        .content-section a:hover {
          text-decoration: underline;
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
          .page-header h1 {
            font-size: 2rem;
          }
          .content-section h2 {
            font-size: 1.5rem;
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
            font-size: 1.75rem;
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


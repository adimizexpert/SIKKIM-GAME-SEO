import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', mobile: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <NextSeo
        title="Contact Sikkim Game: 24/7 Customer Care & Support Number"
        description="Get 24/7 assistance for Sikkim game online login, ₹500 bonuses, and fast withdrawals. Contact our official team via WhatsApp or Telegram."
        canonical="https://sikkimgamelogin.com/contact"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://sikkimgamelogin.com/contact',
          siteName: 'Sikkim Game',
          title: 'Contact Sikkim Game: 24/7 Customer Care & Support Number',
          description: 'Get 24/7 assistance for Sikkim game online login, ₹500 bonuses, and fast withdrawals. Contact our official team via WhatsApp or Telegram.',
        }}
      />
      <Head>
        <link rel="canonical" href="https://sikkimgamelogin.com/contact" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ContactPage',
              name: 'Contact Sikkim Game',
              description: 'Get 24/7 assistance for Sikkim game online login, ₹500 bonuses, and fast withdrawals.',
              url: 'https://sikkimgamelogin.com/contact',
              mainEntity: {
                '@type': 'Organization',
                name: 'Sikkim Game',
                email: 'support@sikkimgame.com',
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'Customer Support',
                  availableLanguage: ['English', 'Hindi'],
                  areaServed: 'IN',
                },
              },
            }),
          }}
        />
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
          <header className="page-header">
            <h1>Contact Sikkim Game Official Support</h1>
            <p className="subheading">
              Need help? Our support team is available 24/7 to assist you with any questions about your Sikkim game login, withdrawals, or bonuses.
            </p>
          </header>

          <div className="contact-layout">
            <div className="contact-left">
              <section className="contact-section">
                <h2>Get in Touch</h2>

                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div className="contact-info">
                    <h3>Email Support</h3>
                    <p className="contact-detail">
                      <strong>Address:</strong> <a href="mailto:support@sikkimgame.com">support@sikkimgame.com</a>
                    </p>
                    <p className="contact-note">Expectation: Response within 2–4 hours.</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">💬</div>
                  <div className="contact-info">
                    <h3>Live Chat Support</h3>
                    <p className="contact-detail">
                      <strong>Status:</strong> Available 24/7 on our platform.
                    </p>
                    <p className="contact-note">Benefit: Get instant responses to your Sikkim game app queries.</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📱</div>
                  <div className="contact-info">
                    <h3>WhatsApp Support</h3>
                    <p className="contact-detail">
                      <strong>Number:</strong> <a href="tel:+91-XXXXXXXXXX">+91-XXXXXXXXXX</a>
                    </p>
                    <p className="contact-note">Quick assistance for Sikkim game recharge and withdrawal issues.</p>
                  </div>
                </div>
              </section>

              <section className="common-issues">
                <h2>Common Issues</h2>
                <p className="issues-intro">Add a small self-service area to reduce support tickets.</p>

                <div className="issue-item">
                  <h3>Login Problems</h3>
                  <p>Can't access your Sikkim game login lottery account? <Link href="/sikkim-game-login-guide">Check our login guide</Link> or contact support.</p>
                </div>

                <div className="issue-item">
                  <h3>Withdrawal Issues</h3>
                  <p>Having trouble with your Sikkim game withdrawal? Our team will help resolve it quickly.</p>
                </div>

                <div className="issue-item">
                  <h3>Bonus Questions</h3>
                  <p>Need help claiming your ₹500 bonus? We're here to assist.</p>
                </div>
              </section>
            </div>

            <div className="contact-right">
              <section className="contact-form-section">
                <h2>Send us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your Sikkim game login number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="deposit-not-received">Deposit Not Received</option>
                      <option value="withdrawal-processing">Withdrawal Processing Problem</option>
                      <option value="gift-code-query">Sikkim Game Gift Code Query</option>
                      <option value="technical-support">Technical App Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your issue or question..."
                      rows={6}
                      required
                    />
                  </div>

                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </form>
              </section>
            </div>
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
        .subheading {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #666;
          max-width: 800px;
          margin: 0 auto;
        }
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 2rem;
        }
        .contact-section {
          margin-bottom: 3rem;
        }
        .contact-section h2,
        .contact-form-section h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }
        .contact-method {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: #f9f9f9;
          border-radius: 8px;
        }
        .contact-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        .contact-info h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a237e;
          margin-bottom: 0.5rem;
        }
        .contact-detail {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 0.5rem;
        }
        .contact-detail a {
          color: #425fef;
          text-decoration: none;
        }
        .contact-detail a:hover {
          text-decoration: underline;
        }
        .contact-note {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #666;
          margin: 0;
        }
        .common-issues {
          margin-top: 3rem;
        }
        .common-issues h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .issues-intro {
          font-size: 1rem;
          color: #666;
          margin-bottom: 1.5rem;
        }
        .issue-item {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: #f0f8ff;
          border-left: 4px solid #425fef;
          border-radius: 4px;
        }
        .issue-item h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a237e;
          margin-bottom: 0.5rem;
        }
        .issue-item p {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin: 0;
        }
        .issue-item a {
          color: #425fef;
          text-decoration: none;
          font-weight: 500;
        }
        .issue-item a:hover {
          text-decoration: underline;
        }
        .contact-form-section {
          background: #f9f9f9;
          padding: 2rem;
          border-radius: 12px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-weight: 600;
          color: #333;
          font-size: 1rem;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #425fef;
          box-shadow: 0 0 0 3px rgba(66, 95, 239, 0.1);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        .submit-button {
          background: #425fef;
          color: #ffffff;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .submit-button:hover {
          background: #3245cc;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(66, 95, 239, 0.4);
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
        @media (max-width: 968px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 768px) {
          .nav-links-center {
            display: none;
          }
          .page-header h1 {
            font-size: 2rem;
          }
          .subheading {
            font-size: 1.1rem;
          }
          .contact-form-section {
            padding: 1.5rem;
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
          .contact-method {
            flex-direction: column;
            padding: 1rem;
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


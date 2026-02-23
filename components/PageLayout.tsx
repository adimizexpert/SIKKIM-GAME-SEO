import { ReactNode } from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_BASE_URL } from '@/lib/site-urls'
import Breadcrumbs from './Breadcrumbs'
import FAQAccordion from './FAQAccordion'
import InternalLinks from './InternalLinks'
import ResponsibleUseNotice from './ResponsibleUseNotice'

interface FAQ {
  question: string
  answer: string
}

interface PageLayoutProps {
  title: string
  description: string
  canonical: string
  ogImage?: string
  h1: string
  introText: string
  breadcrumbItems?: Array<{ name: string; item: string }>
  currentPath: string
  faqs?: FAQ[]
  children: ReactNode
  quickAnswersBox?: {
    title: string
    purpose: string
    steps?: string
    commonIssue?: string
  }
  showHowTo?: boolean
  howToSteps?: Array<{ name: string; text: string; imagePlaceholder?: string }>
  howToTitle?: string
  howToDescription?: string
}

export default function PageLayout({
  title,
  description,
  canonical,
  ogImage = `${SITE_BASE_URL}/main.webp`,
  h1,
  introText,
  breadcrumbItems = [],
  currentPath,
  faqs = [],
  children,
  quickAnswersBox,
  showHowTo = false,
  howToSteps = [],
  howToTitle,
  howToDescription,
}: PageLayoutProps) {
  const pageName = h1 || title

  // Generate HowTo schema if applicable
  const howToSchema = showHowTo && howToSteps.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howToTitle || h1,
    "description": howToDescription || description,
    "totalTime": "PT5M",
    "step": howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.imagePlaceholder && {
        "image": `${SITE_BASE_URL}/main.webp`
      })
    }))
  } : null

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: canonical,
          siteName: 'Sikkim Game',
          title: title,
          description: description,
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'robots',
            content: 'index, follow',
          },
        ]}
      />
      <Head>
        <link rel="canonical" href={canonical} />
        {howToSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
          />
        )}
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
              <Link href="/download" className="nav-link">Download</Link>
              <Link href="/login" className="nav-link">Login</Link>
              <Link href="/register" className="nav-link">Register</Link>
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
          <Breadcrumbs items={breadcrumbItems} currentPage={pageName} currentPath={currentPath} />

          <div className="hero-section">
            <h1 className="hero-h1">{h1}</h1>
            <p className="hero-intro">{introText}</p>
            <div className="hero-image-placeholder">
            </div>
            <div className="cta-buttons">
              <a
                href="https://www.sikkimgg.cc/#/register?invitationCode=384636381064"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login Now
              </a>
              <a
                href="https://www.sikkimgg.cc/#/register?invitationCode=384636381064"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download App / APK
              </a>
            </div>
          </div>

          {quickAnswersBox && (
            <div className="quick-answers-box">
              <h2 className="quick-answers-title">{quickAnswersBox.title}</h2>
              <div className="quick-answers-content">
                <p><strong>Official Page Purpose:</strong> {quickAnswersBox.purpose}</p>
                {quickAnswersBox.steps && <p><strong>Required Steps:</strong> {quickAnswersBox.steps}</p>}
                {quickAnswersBox.commonIssue && <p><strong>Common Issue:</strong> {quickAnswersBox.commonIssue}</p>}
              </div>
            </div>
          )}

          <div className="content-sections">
            {children}
          </div>

          {showHowTo && howToSteps.length > 0 && (
            <section className="howto-section">
              <h2 className="section-title">Step-by-Step Guide</h2>
              <div className="howto-steps">
                {howToSteps.map((step, index) => (
                  <div key={index} className="howto-step">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">
                      <h3>{step.name}</h3>
                      <p>{step.text}</p>
                      {step.imagePlaceholder && (
                        <div className="step-image-placeholder">
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <ResponsibleUseNotice />

          {faqs.length > 0 && (
            <FAQAccordion faqs={faqs} />
          )}

          <InternalLinks currentPath={currentPath} />

          <div className="final-cta">
            <h2>Need Help? Contact Support</h2>
            <p>Play responsibly. For assistance, visit our <Link href="/customer-support">customer support page</Link>.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h3 className="footer-title">Sikkim Game</h3>
              <p className="footer-description">
                Your official source for Sikkim Game login, download, and registration. Play responsibly.
              </p>
            </div>
            <div className="footer-right">
              <div className="footer-column">
                <h4 className="footer-column-title">Quick Links</h4>
                <nav className="footer-links">
                  <Link href="/">Home</Link>
                  <Link href="/download">Download</Link>
                  <Link href="/login">Login</Link>
                  <Link href="/register">Register</Link>
                  <Link href="/faqs">FAQ</Link>
                  <Link href="/contact">Contact</Link>
                </nav>
              </div>
              <div className="footer-column">
                <h4 className="footer-column-title">Legal</h4>
                <nav className="footer-links">
                  <Link href="/privacy">Privacy Policy</Link>
                  <Link href="/customer-support">Support</Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <p className="footer-copyright">&copy; 2025 Sikkim Game. All rights reserved.</p>
            <p className="footer-disclaimer">Play responsibly. This is an informational website.</p>
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
          flex: 1;
          justify-content: center;
        }
        .nav-link {
          color: #ffffff;
          font-weight: 500;
          text-decoration: none;
          transition: opacity 0.3s;
          white-space: nowrap;
        }
        .nav-link:hover {
          opacity: 0.8;
        }
        .nav-right {
          display: flex;
          align-items: center;
        }
        .btn-login {
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.95);
          color: #425fef;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
        }
        .btn-login:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
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
        .hero-section {
          text-align: center;
          margin: 2rem 0 3rem;
          padding: 2rem 0;
        }
        .hero-h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }
        .hero-intro {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #333;
          margin-bottom: 2rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-image-placeholder {
          margin: 2rem 0;
          border-radius: 12px;
          min-height: 300px;
        }
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        .cta-button {
          padding: 1rem 2rem;
          background: #425fef;
          color: #ffffff;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          display: inline-block;
        }
        .cta-button:hover {
          background: #3245cc;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(66, 95, 239, 0.3);
        }
        .quick-answers-box {
          background: #f0f8ff;
          border-left: 4px solid #425fef;
          padding: 2rem;
          border-radius: 8px;
          margin: 2rem 0;
        }
        .quick-answers-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
        }
        .quick-answers-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
          margin-bottom: 0.75rem;
        }
        .quick-answers-content strong {
          color: #425fef;
        }
        .content-sections {
          margin: 3rem 0;
        }
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1a237e;
          margin: 2rem 0 1.5rem;
        }
        .howto-section {
          margin: 3rem 0;
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 12px;
        }
        .howto-steps {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .howto-step {
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem;
          background: #ffffff;
          border-radius: 8px;
          border-left: 4px solid #425fef;
        }
        .step-number {
          width: 50px;
          height: 50px;
          background: #425fef;
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
          flex-shrink: 0;
        }
        .step-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 0.75rem;
        }
        .step-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
          margin-bottom: 1rem;
        }
        .step-image-placeholder {
          margin-top: 1rem;
          border-radius: 8px;
          min-height: 200px;
        }
        .final-cta {
          text-align: center;
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 12px;
          margin: 3rem 0;
        }
        .final-cta h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
        }
        .final-cta p {
          font-size: 1.1rem;
          color: #333;
        }
        .final-cta a {
          color: #425fef;
          text-decoration: none;
          font-weight: 600;
        }
        .final-cta a:hover {
          text-decoration: underline;
        }
        .footer {
          background: #ffffff;
          color: #333;
          padding: 3rem 0 1.5rem;
          border-top: 1px solid #e5e5e5;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        .footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
        }
        .footer-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #666;
          margin-bottom: 1.5rem;
        }
        .footer-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .footer-column-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
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
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: #425fef;
        }
        .footer-divider {
          height: 1px;
          background: #e5e5e5;
          margin: 2rem 0 1.5rem;
        }
        .footer-bottom {
          text-align: center;
        }
        .footer-copyright,
        .footer-disclaimer {
          color: #666;
          font-size: 0.9rem;
          margin: 0.5rem 0;
        }
        @media (max-width: 768px) {
          .nav-links-center {
            display: none;
          }
          .hero-h1 {
            font-size: 1.8rem;
          }
          .hero-intro {
            font-size: 1.1rem;
          }
          .cta-buttons {
            flex-direction: column;
          }
          .cta-button {
            width: 100%;
          }
          .howto-step {
            flex-direction: column;
          }
          .step-number {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
          .footer-content {
            grid-template-columns: 1fr;
          }
          .footer-right {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}


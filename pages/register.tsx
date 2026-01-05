import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { registerPageSEO } from '@/lib/seo-config'

export default function Register() {
  return (
    <>
      <NextSeo
        title={registerPageSEO.title}
        description={registerPageSEO.description}
        canonical={registerPageSEO.canonical}
        openGraph={registerPageSEO.openGraph}
        additionalMetaTags={registerPageSEO.additionalMetaTags}
      />
      <Head>
        <link rel="canonical" href="https://sikkimgamelogin.com/register" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sikkim Game Registration",
            "description": "Register for Sikkim Game and create your account. Easy registration process.",
            "url": "https://sikkimgamelogin.com/register",
            "mainEntity": {
              "@type": "HowTo",
              "name": "How to Register for Sikkim Game",
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Fill in your information",
                  "text": "Enter your username, email, and password in the registration form."
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Verify your details",
                  "text": "Review your information and accept the terms and conditions."
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Complete registration",
                  "text": "Click the Register button to create your account."
                }
              ]
            }
          })}
        </script>
      </Head>

      <header className="header">
        <div className="container">
          <nav className="nav">
            <Link href="/" className="logo">
              <h1>Sikkim Game</h1>
            </Link>
            <div className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/login" className="nav-link">Login</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="page-header">
            <h1>Sikkim Game Registration</h1>
            <p>Create your account to start playing Sikkim Game</p>
          </div>

          <div className="content-wrapper">
            <div className="register-section">
              <div className="register-card">
                <h2>Create Your Account</h2>
                <form className="register-form">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Choose a username"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Create a strong password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span>I agree to the terms and conditions</span>
                    </label>
                  </div>
                  <button type="submit" className="button button-full">
                    Register
                  </button>
                </form>
                <div className="form-footer">
                  <p>
                    Already have an account? <Link href="/login">Login here</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="guide-section">
              <h2>How to Register for Sikkim Game</h2>
              <div className="guide-steps">
                <div className="guide-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Enter Your Information</h3>
                    <p>Fill in your username, email address, and password in the registration form.</p>
                    <Image
                      src="/Images/howtoregister1.png"
                      alt="Step 1: Enter your information"
                      title="Sikkim Game Registration Step 1: Enter Your Information"
                      width={600}
                      height={400}
                      style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
                    />
                  </div>
                </div>
                <div className="guide-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Verify Your Details</h3>
                    <p>Review all the information you've entered and ensure everything is correct.</p>
                    <Image
                      src="/Images/howtoregister2.png"
                      alt="Step 2: Verify your details"
                      title="Sikkim Game Registration Step 2: Verify Your Details"
                      width={600}
                      height={400}
                      style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
                    />
                  </div>
                </div>
                <div className="guide-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Complete Registration</h3>
                    <p>Click the Register button to create your account and start playing.</p>
                    <Image
                      src="/Images/howtoregister3.png"
                      alt="Step 3: Complete registration"
                      title="Sikkim Game Registration Step 3: Complete Registration"
                      width={600}
                      height={400}
                      style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sikkim Game. All rights reserved.</p>
          <nav className="footer-nav">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </nav>
        </div>
      </footer>

      <style jsx>{`
        .header {
          background: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 1rem 0;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo h1 {
          font-size: 1.5rem;
          color: #0070f3;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-link {
          color: #333;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: #0070f3;
        }
        .main {
          min-height: calc(100vh - 200px);
          padding: 3rem 0;
        }
        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .page-header h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #333;
        }
        .page-header p {
          font-size: 1.25rem;
          color: #666;
        }
        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 2rem;
        }
        .register-card {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .register-card h2 {
          margin-bottom: 2rem;
          color: #333;
        }
        .register-form {
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
        }
        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group input[type="password"] {
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        .form-group input:focus {
          outline: none;
          border-color: #0070f3;
        }
        .checkbox-label {
          flex-direction: row;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        .checkbox-label input {
          width: auto;
        }
        .button-full {
          width: 100%;
        }
        .form-footer {
          margin-top: 1.5rem;
          text-align: center;
          color: #666;
        }
        .form-footer a {
          color: #0070f3;
          font-weight: 600;
        }
        .guide-section {
          background: #f9f9f9;
          padding: 2rem;
          border-radius: 8px;
        }
        .guide-section h2 {
          margin-bottom: 2rem;
          color: #333;
        }
        .guide-steps {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .guide-step {
          display: flex;
          gap: 1.5rem;
        }
        .step-number {
          width: 40px;
          height: 40px;
          background: #0070f3;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }
        .step-content h3 {
          margin-bottom: 0.5rem;
          color: #333;
        }
        .step-content p {
          color: #666;
          line-height: 1.6;
        }
        .footer {
          background: #333;
          color: #fff;
          padding: 2rem 0;
          text-align: center;
        }
        .footer-nav {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-top: 1rem;
        }
        .footer-nav a {
          color: #fff;
          opacity: 0.8;
          transition: opacity 0.3s;
        }
        .footer-nav a:hover {
          opacity: 1;
        }
        @media (max-width: 968px) {
          .content-wrapper {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2rem;
          }
          .guide-step {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}


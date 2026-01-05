import { useState } from 'react'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { defaultSEO } from '@/lib/seo-config'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <NextSeo
        title={defaultSEO.title}
        description={defaultSEO.description}
        canonical={defaultSEO.canonical}
        openGraph={defaultSEO.openGraph}
        twitter={defaultSEO.twitter}
        additionalMetaTags={defaultSEO.additionalMetaTags}
      />
      <Head>
        <link rel="canonical" href="https://sikkimgamelogin.com" />
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
            <div className={`nav-links-center ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/guide" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Sikkim Game Guide</Link>
              <Link href="/about-sikkim-game" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/blogs" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
              <Link href="/faqs" className="nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              <Link href="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>
            <div className="nav-right">
              <Link href="/login" className="btn-login">Login</Link>
              <button 
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <h1 className="main-title">
            Sikkim Game : Download, Login APK & Free Gift Code Today
          </h1>
          
          <div className="hero-image-container">
            <Image
              src="/Images/main.webp"
              alt="Sikkim Game - Download, Login APK & Free Gift Code"
              width={1200}
              height={800}
              priority
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <section className="description-section">
            <div className="description-content">
              <p>
                The Sikkim Game has become a household name in the Indian online gaming scene. Whether you are looking for the sikkim game login, curious about the sikkim game lottery, or hunting for a sikkim game gift code today, this complete guide provides every detail you need.
              </p>

              <h1>What is the Sikkim Game?</h1>
              
              <p>
                Commonly searched as sikkim game kya hai, this platform is an online prediction-based arena. While the name suggests a connection to the state, many users ask if it is the state game of sikkim. Legally, the Sikkim Online Gaming (Regulation) Act 2008 governs gaming in the state, but this specific app is a private platform for sikkim game colour trading and sikkim game big small predictions.
              </p>

              <div className="cta-buttons">
                <a 
                  href="https://www.sikkimgg.cc/#/register?invitationCode=384636381064" 
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sikkim game login
                </a>
                <a 
                  href="https://www.sikkimgg.cc/#/register?invitationCode=384636381064" 
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sikkim game Free Gift Code
                </a>
              </div>

              <p>
                Let's take a look at how to download the Sikkim Game, complete registration, log in, and understand how the platform works.
              </p>

              <h2>How to Download the Sikkim Game App (Latest APK)</h2>

              <p>
                Follow these steps to complete the sikkim game apk download safely and ensure you are using the sikkim game official version:
              </p>

              <div className="download-cta">
                <a 
                  href="https://www.sikkimgg.cc/#/register?invitationCode=384636381064" 
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to visit the Sikkim Game Official Website
                </a>
              </div>

              <ol className="download-steps">
                <li>
                  <strong>Start the Download:</strong> Locate and tap on the sikkim game download app button. This will initiate the sikkim game apk file transfer to your device.
                </li>
                <li>
                  <strong>Enable Unknown Sources:</strong> Because this is a sikkim game online gaming file, your phone may block the installation. Go to Settings &gt; Security and enable "Install from Unknown Sources."
                </li>
                <li>
                  <strong>Install the App:</strong> Open your "Downloads" folder and tap on the file to complete the sikkim game install process.
                </li>
                <li>
                  <strong>Launch & Register:</strong> Open the app and click on sikkim game register. Enter your mobile number and the sikkim game invite code to claim your sikkim game sign up bonus.
                </li>
              </ol>

              <div className="pro-tip">
                <p>
                  <strong>Pro Tip:</strong> Always look for the sikkim game apk latest version to enjoy features like sikkim game aviator and faster sikkim game withdrawal. Avoid using a sikkim game app download old version as it may have security vulnerabilities.
                </p>
              </div>

              <h2>Why Download the Official Sikkim Game App?</h2>

              <p>
                Downloading the sikkim game app directly from the Our link
              </p>

              <ul className="benefits-list">
                <li>
                  <strong>Exclusive Bonuses:</strong> Get access to the sikkim game 58 bonus and sikkim game gift code today free.
                </li>
                <li>
                  <strong>Secure Transactions:</strong> Protect your sikkim game recharge and ensure your sikkim game withdrawal proof is valid.
                </li>
                <li>
                  <strong>Real-Time Predictions:</strong> Access the sikkim game colour prediction and sikkim game wingo games with zero lag.
                </li>
                <li>
                  <strong>Customer Support:</strong> Get direct access to the sikkim game customer care number if you face any issues.
                </li>
              </ul>

              <h2>Avoid Fake Versions</h2>

              <p>
                Many users search for the sikkim game hack app download or sikkim game mod apk. We strongly recommend avoiding these, as they are often used to steal your sikkim game login password. Stick to the sikkim game original app for a safe experience.
              </p>

              <h2>How to Register on Sikkim Game</h2>

              <p>
                The Sikkim Game register process is simple and quick.
              </p>

              <p>
                Open the Sikkim Game or registration page using this link:
              </p>

              <div className="download-cta">
                <a 
                  href="https://www.sikkimgg.cc/#/register?invitationCode=384636381064" 
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register on Sikkim Game
                </a>
              </div>

              <div className="registration-steps">
                <div className="registration-step">
                  <h3>Step 1: Enter Your Mobile Number</h3>
                  <p>Enter your mobile number to begin Sikkim Game registration.</p>
                  <div className="step-image">
                    <Image
                      src="/Images/howtoregister1.png"
                      alt="Sikkim Game registration - Enter mobile number"
                      title="Sikkim Game Registration Step 1: Enter Mobile Number"
                      width={600}
                      height={400}
                      style={{ width: '100%', height: 'auto', marginTop: '1rem', borderRadius: '8px' }}
                    />
                  </div>
                </div>

                <div className="registration-step">
                  <h3>Step 2: Create a Password</h3>
                  <p>Create a password and confirm it.</p>
                  <div className="step-image">
                    <Image
                      src="/Images/howtoregister2.png"
                      alt="Sikkim Game registration - Set and confirm password"
                      title="Sikkim Game Registration Step 2: Create Secure Password"
                      width={600}
                      height={400}
                      style={{ width: '100%', height: 'auto', marginTop: '1rem', borderRadius: '8px' }}
                    />
                  </div>
                </div>

                <div className="registration-step">
                  <h3>Step 3: Enter the Invitation Code</h3>
                  <p>Enter the Invitation Code: <strong>384636381064</strong> (important).</p>
                  <div className="step-image">
                    <Image
                      src="/Images/howtoregister3.png"
                      alt="Sikkim Game registration - Enter invitation code"
                      title="Sikkim Game Registration Step 3: Enter Invitation Code 384636381064"
                      width={600}
                      height={400}
                      style={{ width: '100%', height: 'auto', marginTop: '1rem', borderRadius: '8px' }}
                    />
                  </div>
                </div>

                <div className="registration-step">
                  <h3>Step 4: Complete Registration</h3>
                  <p>Tap Register / Sign Up.</p>
                  <p className="success-note">
                    After successful registration, your Sikkim Game account is created and ready to use.
                  </p>
                </div>
              </div>

              <h2>Sikkim Game Login Guide</h2>

              <p>
                Use the Sikkim Game login app to access your account anytime.
              </p>

              <div className="login-steps">
                <div className="login-step">
                  <h3>Step 1: Open the Sikkim Game App or Official Website</h3>
                  <p>Open the Sikkim Game app or official website.</p>
                  <div className="step-image">
                    <Image
                      src="/Images/howtologin1.png"
                      alt="Sikkim Game login - Enter mobile number"
                      title="Sikkim Game Login Step 1: Enter Registered Mobile Number"
                      width={600}
                      height={400}
                      style={{ width: '100%', height: 'auto', marginTop: '1rem', borderRadius: '8px' }}
                    />
                  </div>
                  <p className="step-description">Enter your registered mobile number.</p>
                </div>

                <div className="login-step">
                  <h3>Step 2: Enter Password and Complete Verification</h3>
                  <p>Enter your password and complete verification.</p>
                  <div className="step-image">
                    <Image
                      src="/Images/howtologin2.png"
                      alt="Sikkim Game login - Enter password and verify"
                      title="Sikkim Game Login Step 2: Enter Password and Complete Verification"
                      width={600}
                      height={400}
                      style={{ width: '100%', height: 'auto', marginTop: '1rem', borderRadius: '8px' }}
                    />
                  </div>
                </div>

                <div className="login-step">
                  <h3>Step 3: Access Your Dashboard</h3>
                  <p className="success-note">
                    After login, you are redirected to the Sikkim Game dashboard, where you can play games, check bonuses, deposit money, and request withdrawals.
                  </p>
                </div>
              </div>

              <h2>Sikkim Game Gift Code & Bonus Information</h2>

              <p>
                Many users search for the sikkim game gift code, sikkim game free gift code today, or the latest sikkim game redeem code. These rewards are a great way to boost your balance and explore different games.
              </p>

              <h2>How to Get Your Sikkim Game Bonus</h2>

              <p>
                When you use a verified sikkim game register link, your applicable sikkim game register bonus is often credited automatically to your wallet.
              </p>

              <ul className="benefits-list">
                <li>
                  <strong>Sikkim Game 500 Bonus:</strong> Most new users receive a ₹500 sign-up reward.
                </li>
                <li>
                  <strong>Sikkim Game 5000 Bonus:</strong> Large first-time deposits can unlock massive sikkim game first deposit bonus rewards.
                </li>
                <li>
                  <strong>No Manual Code Needed:</strong> In many cases, if you use the correct sikkim game invite code during sign-up, there is no need to manually enter a sikkim game bonus code.
                </li>
              </ul>

              <div className="security-warning">
                <p>
                  <strong>Security Warning:</strong> Be extremely cautious of unofficial sources or random sikkim game gift code telegram channels. Only trust the sikkim game official telegram channel for a valid sikkim game free gift code today.
                </p>
              </div>

              <h2>Top Features of the Sikkim Game App</h2>

              <p>
                The sikkim game app download remains popular for several key reasons:
              </p>

              <ul className="benefits-list">
                <li>
                  <strong>Smooth Interface:</strong> The sikkim game app is lightweight and optimized for both old and new Android versions.
                </li>
                <li>
                  <strong>Game Variety:</strong> Includes sikkim game colour prediction, sikkim game wingo, and the popular sikkim game aviator.
                </li>
                <li>
                  <strong>Fast Transactions:</strong> Quick sikkim game withdrawal time and easy deposits via UPI.
                </li>
                <li>
                  <strong>Reward Systems:</strong> Features an active sikkim game agent and VIP reward system for high-volume players.
                </li>
                <li>
                  <strong>Reliable Support:</strong> Access to the sikkim game customer care number and sikkim game teacher for 24/7 guidance.
                </li>
              </ul>

              <h2>Tips to Play Sikkim Game Responsibly</h2>

              <p>
                To improve your experience and stay safe while playing the sikkim game online:
              </p>

              <ul className="benefits-list">
                <li>
                  <strong>Start Small:</strong> Learn the mechanics of the sikkim game big small or colour trading with small amounts first.
                </li>
                <li>
                  <strong>Avoid "Hacks":</strong> Stay away from searches like sikkim game hack app, sikkim game bot, or sikkim game big small hack. These are usually scams.
                </li>
                <li>
                  <strong>Analyze Patterns:</strong> Instead of bots, use the sikkim game number chart or sikkim game chart pdf to understand game trends.
                </li>
                <li>
                  <strong>Bankroll Management:</strong> Manage your sikkim game money carefully and never bet more than you can afford to lose.
                </li>
              </ul>

              <h2>Is Sikkim Game Safe, Real, or Legal?</h2>

              <p>
                Common questions include sikkim game real or fake and is online gambling legal in sikkim.
              </p>

              <ul className="benefits-list">
                <li>
                  <strong>Legality:</strong> The Sikkim Online Gaming (Regulation) Act 2008 governs gaming in the state. However, the legality of the sikkim game app depends on your specific regional and state laws in India.
                </li>
                <li>
                  <strong>Safety:</strong> To ensure the sikkim game is safe or not, always look for sikkim game withdrawal proof from trusted users and use the sikkim game original platform.
                </li>
              </ul>

              <h2>Why Register Through the Official Sikkim Game Link?</h2>

              <p>
                Using the sikkim game official website or a verified sikkim game link ensures you:
              </p>

              <ul className="benefits-list">
                <li>Avoid fake or cloned sikkim game.xyz sites.</li>
                <li>Download the sikkim game apk latest version.</li>
                <li>Successfully claim your sikkim game sign up bonus.</li>
                <li>Have access to the real sikkim game customer care telegram.</li>
              </ul>

              <div className="download-cta">
                <a 
                  href="https://www.sikkimgg.cc/#/register?invitationCode=384636381064" 
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Registration Link: Register on Sikkim Game
                </a>
              </div>

              <div className="disclaimer">
                <h3>Disclaimer</h3>
                <p>
                  This page is for informational purposes only. The sikkim game involves financial risk. Users should check sikkim gaming law and local regulations before participating. Play responsibly.
                </p>
              </div>
            </div>
          </section>
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
            <Link href="/blog">Blog</Link>
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

      <div className="floating-cta-button">
        <a 
          href="https://www.sikkimgg.cc/#/register?invitationCode=384636381064" 
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn"
        >
          <span className="btn-text">₹500 SIGN UP BONUS</span>
          <span className="btn-shimmer"></span>
        </a>
      </div>

      <style jsx>{`
        @keyframes spin-border {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
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
          position: relative;
        }
        .logo-container {
          display: flex;
          align-items: center;
          z-index: 101;
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
          z-index: 101;
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
        .btn-login::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 14px;
          background: conic-gradient(
            from 0deg,
            #425fef,
            #6378ff,
            #8b9aff,
            #6378ff,
            #425fef
          );
          animation: spin-border 3s linear infinite;
          z-index: -2;
          opacity: 0.9;
        }
        .btn-login::after {
          content: '';
          position: absolute;
          inset: 2px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: -1;
        }
        .btn-login:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 10px 25px rgba(66, 95, 239, 0.4);
        }
        .btn-login:hover::before {
          opacity: 1;
          animation: spin-border 1.5s linear infinite;
        }
        .btn-login:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgba(66, 95, 239, 0.3), 0 10px 25px rgba(66, 95, 239, 0.4);
        }
        .btn-login:active {
          transform: scale(0.98);
        }
        .mobile-menu-btn {
          display: none;
          background: #ffffff;
          border: none;
          border-radius: 8px;
          width: 44px;
          height: 44px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 24px;
          height: 18px;
        }
        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: #425fef;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
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
        .main-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a237e;
          text-align: center;
          margin-bottom: 3rem;
          line-height: 1.3;
        }
        .hero-image-container {
          width: 100%;
          margin-bottom: 3rem;
        }
        .description-section {
          padding: 2rem 0;
        }
        .description-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .description-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
          text-align: justify;
          margin-bottom: 1.5rem;
        }
        .description-content p:last-child {
          margin-bottom: 0;
        }
        .description-content h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a237e;
          margin: 2rem 0 1.5rem 0;
          line-height: 1.3;
        }
        .description-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a237e;
          margin: 3rem 0 1.5rem 0;
          line-height: 1.3;
        }
        .download-cta {
          text-align: center;
          margin: 2rem 0;
        }
        .download-steps {
          margin: 2rem 0;
          padding-left: 2rem;
        }
        .download-steps li {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
          margin-bottom: 1.5rem;
          text-align: justify;
        }
        .download-steps li:last-child {
          margin-bottom: 0;
        }
        .download-steps strong {
          color: #425fef;
          font-weight: 600;
        }
        .pro-tip {
          background: #f0f8ff;
          border-left: 4px solid #425fef;
          padding: 1.5rem;
          margin: 2rem 0;
          border-radius: 8px;
        }
        .pro-tip p {
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
        }
        .pro-tip strong {
          color: #425fef;
          font-weight: 600;
        }
        .benefits-list {
          margin: 2rem 0;
          padding-left: 2rem;
        }
        .benefits-list li {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
          margin-bottom: 1.5rem;
          text-align: justify;
        }
        .benefits-list li:last-child {
          margin-bottom: 0;
        }
        .benefits-list strong {
          color: #425fef;
          font-weight: 600;
        }
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          margin: 2.5rem 0;
          flex-wrap: wrap;
          justify-content: center;
        }
        .cta-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2rem;
          background: rgba(66, 95, 239, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #ffffff;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          border: none;
          cursor: pointer;
          text-align: center;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          isolation: isolate;
        }
        .cta-button::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 14px;
          background: conic-gradient(
            from 0deg,
            #425fef,
            #6378ff,
            #8b9aff,
            #6378ff,
            #425fef
          );
          animation: spin-border 3s linear infinite;
          z-index: -2;
          opacity: 0.9;
        }
        .cta-button::after {
          content: '';
          position: absolute;
          inset: 2px;
          border-radius: 10px;
          background: rgba(66, 95, 239, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: -1;
        }
        .cta-button:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 10px 25px rgba(66, 95, 239, 0.4);
        }
        .cta-button:hover::before {
          opacity: 1;
          animation: spin-border 1.5s linear infinite;
        }
        .cta-button:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgba(66, 95, 239, 0.3), 0 10px 25px rgba(66, 95, 239, 0.4);
        }
        .cta-button:active {
          transform: scale(0.98);
        }
        .registration-steps {
          margin: 3rem 0;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .registration-step {
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 12px;
          border-left: 4px solid #425fef;
        }
        .registration-step h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .registration-step p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
          margin-bottom: 0.5rem;
        }
        .registration-step p:last-of-type {
          margin-bottom: 0;
        }
        .registration-step strong {
          color: #425fef;
          font-weight: 600;
        }
        .step-image {
          margin-top: 1.5rem;
          width: 100%;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .success-note {
          background: #f0f8ff;
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem !important;
          border-left: 3px solid #425fef;
          font-weight: 500;
          color: #1a237e;
        }
        .security-warning {
          background: #fff3cd;
          border-left: 4px solid #ffc107;
          padding: 1.5rem;
          margin: 2rem 0;
          border-radius: 8px;
        }
        .security-warning p {
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #856404;
        }
        .security-warning strong {
          color: #856404;
          font-weight: 700;
        }
        .disclaimer {
          background: #f8f9fa;
          border: 2px solid #dee2e6;
          padding: 2rem;
          margin: 3rem 0;
          border-radius: 12px;
        }
        .disclaimer h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #495057;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .disclaimer p {
          font-size: 1rem;
          line-height: 1.8;
          color: #6c757d;
          margin: 0;
        }
        .login-steps {
          margin: 3rem 0;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .login-step {
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 12px;
          border-left: 4px solid #425fef;
        }
        .login-step h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .login-step p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
          margin-bottom: 0.5rem;
        }
        .login-step p:last-of-type {
          margin-bottom: 0;
        }
        .step-description {
          margin-top: 1rem;
          font-weight: 500;
          color: #425fef;
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
        @media (max-width: 1024px) {
          .nav-links-center {
            gap: 1.5rem;
          }
          .nav-link {
            font-size: 0.95rem;
          }
        }
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }
          .nav-links-center {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #425fef;
            flex-direction: column;
            gap: 0;
            padding: 1rem 0;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
          }
          .nav-links-center.mobile-open {
            max-height: 500px;
            opacity: 1;
            padding: 1rem 0;
          }
          .nav-link {
            width: 100%;
            padding: 1rem 2rem;
            text-align: left;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          .nav-link:last-child {
            border-bottom: none;
          }
          .main-title {
            font-size: 1.8rem;
            margin-bottom: 2rem;
          }
          .description-content p {
            font-size: 1rem;
            text-align: left;
          }
          .description-content h1 {
            font-size: 1.5rem;
            margin: 1.5rem 0 1rem 0;
          }
          .description-content h2 {
            font-size: 1.5rem;
            margin: 2rem 0 1rem 0;
          }
          .cta-buttons {
            flex-direction: column;
            gap: 1rem;
            margin: 2rem 0;
          }
          .cta-button {
            width: 100%;
            padding: 0.9rem 1.5rem;
            font-size: 1rem;
          }
          .download-cta {
            margin: 1.5rem 0;
          }
          .download-steps,
          .benefits-list {
            padding-left: 1.5rem;
          }
          .download-steps li,
          .benefits-list li {
            font-size: 1rem;
            margin-bottom: 1.25rem;
          }
          .pro-tip {
            padding: 1.25rem;
            margin: 1.5rem 0;
          }
          .pro-tip p {
            font-size: 1rem;
          }
          .registration-steps {
            gap: 2rem;
            margin: 2rem 0;
          }
          .registration-step {
            padding: 1.5rem;
          }
          .registration-step h3 {
            font-size: 1.25rem;
          }
          .registration-step p {
            font-size: 1rem;
          }
          .login-steps {
            gap: 2rem;
            margin: 2rem 0;
          }
          .login-step {
            padding: 1.5rem;
          }
          .login-step h3 {
            font-size: 1.25rem;
          }
          .login-step p {
            font-size: 1rem;
          }
          .step-image {
            margin-top: 1rem;
          }
          .security-warning {
            padding: 1.25rem;
            margin: 1.5rem 0;
          }
          .security-warning p {
            font-size: 1rem;
          }
          .disclaimer {
            padding: 1.5rem;
            margin: 2rem 0;
          }
          .disclaimer h3 {
            font-size: 1.25rem;
          }
          .disclaimer p {
            font-size: 0.95rem;
          }
          .main {
            padding: 2rem 0;
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
          .main-title {
            font-size: 1.5rem;
          }
          .btn-login {
            padding: 0.6rem 1rem;
            font-size: 0.9rem;
          }
          .mobile-menu-btn {
            width: 40px;
            height: 40px;
          }
          .container {
            padding: 0 15px;
          }
          .footer-right {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer {
            padding: 2rem 0 1rem 0;
          }
          .footer-content {
            gap: 1.5rem;
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes breathe {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 69, 0, 0.5), 0 0 40px rgba(255, 140, 0, 0.3), 0 0 60px rgba(255, 69, 0, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 69, 0, 0.7), 0 0 60px rgba(255, 140, 0, 0.5), 0 0 90px rgba(255, 69, 0, 0.3);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .floating-cta-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          animation: pulse 2s ease-in-out infinite;
        }
        .floating-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #ff4500 0%, #ff8c00 50%, #ff6347 100%);
          color: #ffffff;
          font-weight: 800;
          font-size: 1rem;
          text-decoration: none;
          border-radius: 50px;
          box-shadow: 0 0 20px rgba(255, 69, 0, 0.5), 0 0 40px rgba(255, 140, 0, 0.3), 0 0 60px rgba(255, 69, 0, 0.2);
          overflow: hidden;
          transition: all 0.3s ease;
          animation: breathe 3s ease-in-out infinite;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        .floating-btn:hover {
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 0 40px rgba(255, 69, 0, 0.8), 0 0 80px rgba(255, 140, 0, 0.6), 0 0 120px rgba(255, 69, 0, 0.4);
          animation: breathe 1.5s ease-in-out infinite;
        }
        .btn-text {
          position: relative;
          z-index: 2;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .btn-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmer 3s infinite;
          z-index: 1;
        }
        @media (max-width: 768px) {
          .floating-cta-button {
            bottom: 20px;
            right: 20px;
          }
          .floating-btn {
            padding: 0.85rem 1.5rem;
            font-size: 0.9rem;
          }
        }
        @media (max-width: 480px) {
          .floating-cta-button {
            bottom: 15px;
            right: 15px;
            left: auto;
          }
          .floating-btn {
            padding: 0.75rem 1.25rem;
            font-size: 0.85rem;
            width: 100%;
            max-width: calc(100vw - 30px);
          }
        }
      `}</style>

      <div className="floating-cta-button">
        <a 
          href="https://www.sikkimgg.cc/#/register?invitationCode=384636381064" 
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn"
        >
          <span className="btn-text">₹500 SIGN UP BONUS</span>
          <span className="btn-shimmer"></span>
        </a>
      </div>
    </>
  )
}

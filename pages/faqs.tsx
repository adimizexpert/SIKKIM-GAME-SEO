import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import FAQAccordion from '@/components/FAQAccordion'

const faqCategories = [
  {
    title: 'General & Technical FAQs',
    faqs: [
      {
        question: 'What is the Sikkim Game and how does it work?',
        answer: 'Sikkim Game is an online prediction-based gaming platform where users can play various games like Wingo, Aviator, and Big Small. It operates on a color and number prediction model where players use their intuition and charts to win rewards.',
      },
      {
        question: 'How can I complete the Sikkim Game login?',
        answer: 'To login, visit the sikkim game official website, enter your registered mobile number and your sikkim game login password. Ensure you are using the official sikkim game link to keep your account secure.',
      },
      {
        question: 'Where can I find the Sikkim Game app download link?',
        answer: 'You can find the sikkim game app download button on the official homepage. For Android users, the sikkim game apk download is available directly. Always download the sikkim game apk latest version for the best performance.',
      },
      {
        question: 'Can I play Sikkim Game on PC?',
        answer: 'Yes, you can sikkim game download pc versions using an Android emulator like BlueStacks, or simply play the sikkim game online through any desktop web browser.',
      },
      {
        question: 'How do I register on Sikkim Game?',
        answer: 'To sikkim game register, click the "Sign Up" button on the app or site, enter your phone number, and create a password. Don\'t forget to enter a valid sikkim game invite code to claim your welcome bonus.',
      },
    ],
  },
  {
    title: 'Bonus & Reward FAQs',
    faqs: [
      {
        question: 'How do I get a Sikkim Game gift code today?',
        answer: 'The latest sikkim game gift code today free is typically released on the sikkim game official telegram channel. You can also check with a verified sikkim game agent for exclusive codes.',
      },
      {
        question: 'What is the Sikkim Game sign up bonus?',
        answer: 'New users who register via the sikkim game register link are eligible for a sikkim game 58 bonus or even a sikkim game 30 bonus upon their first successful deposit.',
      },
      {
        question: 'How does the Sikkim Game referral code work?',
        answer: 'By sharing your sikkim game referral code with friends, you can earn commissions every time they play. This is part of the sikkim game agent program.',
      },
      {
        question: 'Is there a Sikkim Game free recharge code?',
        answer: 'Occasionally, the platform offers a sikkim game free recharge code during promotional events. Keep an eye on the sikkim game gift code telegram link for updates.',
      },
    ],
  },
  {
    title: 'Gameplay & Strategy FAQs',
    faqs: [
      {
        question: 'What is the Sikkim Game big small trick?',
        answer: 'The sikkim game big small trick involves analyzing the sikkim game big small chart to identify recurring patterns. Most experts recommend the 3-tier or 5-tier investment method for better results.',
      },
      {
        question: 'How do I use the Sikkim Game aviator predictor online?',
        answer: 'While many search for a sikkim game aviator predictor, it is important to know that the game uses a Random Number Generator (RNG). It is safer to follow the multiplier trends in the app rather than external "predictor bots."',
      },
      {
        question: 'What is the Sikkim Game colour prediction algorithm?',
        answer: 'The sikkim game colour prediction is based on 1-minute, 3-minute, and 5-minute intervals. Players use the sikkim game number chart to guess whether the result will be Red, Green, or Violet.',
      },
      {
        question: 'Is there a Sikkim Game hack app download?',
        answer: 'No. Be careful of sites offering a sikkim game hack app or sikkim game bot. These are often scams intended to steal your sikkim game login details. There is no legitimate "hack" for the platform.',
      },
    ],
  },
  {
    title: 'Withdrawal & Support FAQs',
    faqs: [
      {
        question: 'Why is my Sikkim Game withdrawal problem occurring?',
        answer: 'A sikkim game withdrawal problem or "processing" status usually occurs due to incorrect bank details or pending KYC. Ensure your sikkim game uid matches your bank account name.',
      },
      {
        question: 'What is the Sikkim Game customer care number?',
        answer: 'For immediate help, look for the sikkim game customer care number whatsapp number inside the "Help Center" section of the app. They offer sikkim game customer service 24x7.',
      },
      {
        question: 'How can I contact a Sikkim Game teacher?',
        answer: 'You can find the sikkim game teacher telegram link on the official platform. These mentors provide prediction tips and help with sikkim game agent contact number queries.',
      },
      {
        question: 'What is the minimum deposit for Sikkim Game?',
        answer: 'The sikkim game minimum deposit is usually ₹100. Once deposited, you can take a sikkim game 100 deposit screenshot to claim any applicable first-deposit bonuses.',
      },
    ],
  },
  {
    title: 'Safety & Legal FAQs',
    faqs: [
      {
        question: 'Is Sikkim Game real or fake?',
        answer: 'Sikkim Game is a widely used platform with many users sharing sikkim game withdrawal proof. However, as with any online prediction game, it involves financial risk. Always play responsibly.',
      },
      {
        question: 'Is gambling legal in Sikkim?',
        answer: 'Yes, under the Sikkim Online Gaming (Regulation) Act 2008, online gaming and sports betting are regulated within the state. However, players outside of Sikkim should check their own state laws.',
      },
      {
        question: 'Is Sikkim Game safe or not?',
        answer: 'The sikkim game original app uses encryption to protect user data. However, you should never share your sikkim game login password or sikkim game otp with anyone.',
      },
    ],
  },
  {
    title: 'Specific Search Queries (Long-Tail)',
    faqs: [
      {
        question: 'Where can I find the Sikkim Game chart PDF?',
        answer: 'The sikkim game chart pdf is often shared in the sikkim game prediction telegram channel. It helps users study the long-term history of numbers and colors.',
      },
      {
        question: 'How do I solve a "Sikkim Game deposit not received" issue?',
        answer: 'If your deposit is missing, send your sikkim game uid and the transaction UTR number to the sikkim game customer care telegram.',
      },
      {
        question: 'What is the Sikkim Game 999 login?',
        answer: 'Sikkim 999 or sikkim game 777 are often sub-servers or specific versions of the game. You can use your same sikkim game login credentials for these versions.',
      },
      {
        question: 'Can I get a Sikkim Game demo account free?',
        answer: 'Yes, some versions of the app offer a sikkim game demo account login where you can practice predictions using virtual currency before using real sikkim game money.',
      },
      {
        question: 'Who is the Sikkim Game owner?',
        answer: 'The sikkim game owner details are private, as is common with many international gaming platforms. The app is managed by a network of official sikkim game agents and support staff.',
      },
    ],
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<{ [key: string]: number | null }>({})

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`
    setOpenIndex((prev) => ({
      ...prev,
      [key]: prev[key] === faqIndex ? null : faqIndex,
    }))
  }

  return (
    <>
      <NextSeo
        title="Sikkim Game FAQs: Common Questions & Answers"
        description="Find answers to frequently asked questions about Sikkim Game login, registration, bonuses, withdrawals, and gameplay. Get help with your queries."
        canonical="https://sikkimgamelogin.com/faqs"
      />
      <Head>
        <link rel="canonical" href="https://sikkimgamelogin.com/faqs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqCategories.flatMap(category =>
                category.faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              )
            })
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
            <h1>Frequently Asked Questions</h1>
            <p className="subheading">
              Find answers to the most common questions about Sikkim Game login, registration, bonuses, and more.
            </p>
          </header>

          <div className="cta-section">
            <a 
              href="https://www.sikkimgg.cc/#/register?invitationCode=384636381064" 
              className="register-cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now & Claim ₹500 Bonus
            </a>
          </div>

          <div className="faq-container">
            {faqCategories.map((category, categoryIndex) => (
              <section key={categoryIndex} className="faq-category">
                <h2 className="category-title">{category.title}</h2>
                <div className="faq-list">
                  {category.faqs.map((faq, faqIndex) => {
                    const key = `${categoryIndex}-${faqIndex}`
                    const isOpen = openIndex[key] === faqIndex
                    return (
                      <div key={faqIndex} className="faq-item">
                        <button
                          className={`faq-question ${isOpen ? 'open' : ''}`}
                          onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                          aria-expanded={isOpen}
                        >
                          <span>{faq.question}</span>
                          <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                        </button>
                        <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>

          <div className="cta-section-bottom">
            <p className="cta-text">Ready to get started?</p>
            <a 
              href="https://www.sikkimgg.cc/#/register?invitationCode=384636381064" 
              className="register-cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now & Claim ₹500 Bonus
            </a>
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
        }
        .cta-section {
          text-align: center;
          margin: 3rem 0;
        }
        .cta-section-bottom {
          text-align: center;
          margin: 4rem 0 2rem 0;
          padding: 2rem;
          background: #f0f8ff;
          border-radius: 12px;
          border-left: 4px solid #425fef;
        }
        .cta-text {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a237e;
          margin-bottom: 1.5rem;
        }
        .register-cta-button {
          display: inline-block;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #425fef 0%, #3245cc 100%);
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px rgba(66, 95, 239, 0.3);
        }
        .register-cta-button:hover {
          background: linear-gradient(135deg, #3245cc 0%, #1a237e 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(66, 95, 239, 0.4);
        }
        .faq-container {
          margin-top: 3rem;
        }
        .faq-category {
          margin-bottom: 3rem;
        }
        .category-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 3px solid #425fef;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-item:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .faq-question {
          width: 100%;
          padding: 1.25rem 1.5rem;
          background: #f9f9f9;
          border: none;
          text-align: left;
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a237e;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }
        .faq-question:hover {
          background: #f0f8ff;
        }
        .faq-question.open {
          background: #f0f8ff;
          color: #425fef;
        }
        .faq-question span:first-child {
          flex: 1;
        }
        .faq-icon {
          font-size: 1.5rem;
          font-weight: 700;
          color: #425fef;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .faq-question.open .faq-icon {
          transform: rotate(180deg);
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          padding: 0 1.5rem;
        }
        .faq-answer.open {
          max-height: 500px;
          padding: 1.25rem 1.5rem;
        }
        .faq-answer p {
          font-size: 1rem;
          line-height: 1.8;
          color: #333;
          margin: 0;
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
          .subheading {
            font-size: 1.1rem;
          }
          .category-title {
            font-size: 1.5rem;
          }
          .faq-question {
            font-size: 1rem;
            padding: 1rem 1.25rem;
          }
          .faq-answer {
            padding: 0 1.25rem;
          }
          .faq-answer.open {
            padding: 1rem 1.25rem;
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
          .register-cta-button {
            padding: 0.9rem 1.5rem;
            font-size: 1rem;
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


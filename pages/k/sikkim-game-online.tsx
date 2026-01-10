import PageLayout from '@/components/PageLayout'
import { getPageSEO } from '@/lib/seo-config'
import Link from 'next/link'

export default function SikkimGameOnline() {
  const seo = getPageSEO(
    '/k/sikkim-game-online/',
    'Sikkim Game Online - Play Sikkim Game Online | 2025',
    'Play Sikkim Game online through website or app. Access games including WinGo, Aviator, Big-Small. Online gaming platform guide.',
    'Sikkim Game Online, Play Sikkim Game Online, Sikkim Game Online Platform, Online Sikkim Game'
  )

  return (
    <PageLayout
      title={seo.title}
      description={seo.description}
      canonical={seo.canonical}
      h1="Sikkim Game Online - Play Games Online Platform 2025"
      introText="Play Sikkim Game online through official website or mobile app. Access multiple games including WinGo, Aviator, Big-Small predictions. Complete guide to online gaming platform."
      breadcrumbItems={[{ name: 'Keyword Pages', item: 'https://sikkimgamelogin.com/k/' }]}
      currentPath="/k/sikkim-game-online/"
      quickAnswersBox={{
        title: 'Quick Online Access',
        purpose: 'Access Sikkim Game online platform through website or app.',
        steps: 'Visit official website or download app, Register account, Login, Deposit funds, Play games, Request withdrawals',
        commonIssue: 'Access issues - Solution: Use official website/app, check internet connection, verify account credentials'
      }}
    >
      <section>
        <h2>Play Sikkim Game Online</h2>
        <p>
          Sikkim Game can be accessed online through the official website or mobile app. Register an account, login, deposit funds, 
          and play various games including WinGo, Aviator, Big-Small predictions, colour trading, and lottery games. Request withdrawals 
          after completing KYC verification. The platform is accessible 24/7 for online gameplay.
        </p>
      </section>
      <section>
        <h2>Online Access Methods</h2>
        <h3>Website Access</h3>
        <p>Access Sikkim Game through the official website on your computer or mobile browser. No app installation required for website access.</p>
        <h3>Mobile App</h3>
        <p>Download and install the Sikkim Game app for Android devices. App provides better performance and features for mobile gaming.</p>
      </section>
      <section>
        <h2>Online Games Available</h2>
        <ul>
          <li>WinGo - Fast-paced prediction game</li>
          <li>Aviator - Popular multiplier game</li>
          <li>Big-Small - Prediction-based game</li>
          <li>Colour Trading - Colour prediction game</li>
          <li>Lottery Games - Various lottery-style games</li>
        </ul>
      </section>
      <section>
        <h2>Related Pages</h2>
        <ul>
          <li><Link href="/download">Download App</Link></li>
          <li><Link href="/register">Register Account</Link></li>
          <li><Link href="/login">Login Guide</Link></li>
          <li><Link href="/bonus">Bonuses</Link></li>
        </ul>
      </section>
    </PageLayout>
  )
}


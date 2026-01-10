import PageLayout from '@/components/PageLayout'
import { getPageSEO } from '@/lib/seo-config'
import Link from 'next/link'

export default function SikkimGameDownloadApp() {
  const seo = getPageSEO(
    '/k/sikkim-game-download-app/',
    'Sikkim Game Download App - Download Android App | 2025',
    'Download Sikkim Game app for Android. Official app download guide with APK installation steps. Get the latest app version safely.',
    'Sikkim Game Download App, Sikkim Game App, Download Sikkim Game App, Sikkim Game Android App'
  )

  return (
    <PageLayout
      title={seo.title}
      description={seo.description}
      canonical={seo.canonical}
      h1="Sikkim Game Download App - Android App Download Guide 2025"
      introText="Download Sikkim Game app for Android devices. Official app download guide with APK installation steps. Get the latest app version safely from official sources."
      breadcrumbItems={[{ name: 'Keyword Pages', item: 'https://sikkimgamelogin.com/k/' }]}
      currentPath="/k/sikkim-game-download-app/"
      quickAnswersBox={{
        title: 'Quick App Download',
        purpose: 'Download and install Sikkim Game Android app from official sources.',
        steps: 'Visit official website, Download APK, Enable Unknown Sources, Install APK, Open app and register',
        commonIssue: 'Installation blocked - Solution: Enable Install from Unknown Sources for browser or file manager'
      }}
    >
      <section>
        <h2>Sikkim Game App Download</h2>
        <p>
          The Sikkim Game app is available as an APK file for Android devices. Download the app from the official website, 
          enable "Install from Unknown Sources" in your device settings, then install the APK file. After installation, 
          open the app and register with invitation code 384636381064 to start playing.
        </p>
        <p><Link href="/download">Complete app download and installation guide</Link></p>
      </section>
      <section>
        <h2>App Features</h2>
        <ul>
          <li>Multiple games: WinGo, Aviator, Big-Small predictions</li>
          <li>Secure login with OTP verification</li>
          <li>Easy deposits and withdrawals</li>
          <li>24/7 customer support access</li>
          <li>Referral program for earning rewards</li>
        </ul>
      </section>
      <section>
        <h2>Related Pages</h2>
        <ul>
          <li><Link href="/download">Download Guide</Link></li>
          <li><Link href="/register">Registration Guide</Link></li>
          <li><Link href="/login">Login Guide</Link></li>
        </ul>
      </section>
    </PageLayout>
  )
}


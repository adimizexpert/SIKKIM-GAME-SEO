import PageLayout from '@/components/PageLayout'
import { getPageSEO } from '@/lib/seo-config'
import { loginPageFAQs } from '@/lib/faq-data'

export default function Login() {
  const seo = getPageSEO(
    '/login',
    'Sikkim Game Login - Sign In to Your Account | 2025',
    'Login to your Sikkim Game account quickly and securely. Step-by-step login guide with troubleshooting tips. Access your account, check balance, and continue playing.',
    'Sikkim Game Login, Login Sikkim Game, Sikkim Game Sign In, Sikkim Game Login Page, How to Login Sikkim Game'
  )

  const howToSteps = [
    {
      name: 'Open Sikkim Game App or Website',
      text: 'Launch the Sikkim Game app on your device or visit the official website. Ensure you have the latest version installed for best performance.',
      imagePlaceholder: 'Screenshot of Sikkim Game app launch screen or website homepage'
    },
    {
      name: 'Enter Your Mobile Number',
      text: 'On the login page, enter your registered mobile number exactly as you used during registration. Include country code if required.',
      imagePlaceholder: 'Screenshot of login form showing mobile number input field'
    },
    {
      name: 'Enter Your Password',
      text: 'Enter your account password. Use the "Show Password" option if needed to verify you are entering it correctly. Ensure caps lock is off.',
      imagePlaceholder: 'Screenshot of login form showing password input field'
    },
    {
      name: 'Complete OTP Verification (if prompted)',
      text: 'If OTP verification is required for security, enter the OTP code sent to your registered mobile number. OTP is typically valid for 5-10 minutes.',
      imagePlaceholder: 'Screenshot of OTP verification screen'
    },
    {
      name: 'Click Login Button',
      text: 'Review your entered information, then click the Login or Sign In button. Wait for authentication to complete. Do not click multiple times.',
      imagePlaceholder: 'Screenshot of login form with Login button highlighted'
    },
    {
      name: 'Access Your Dashboard',
      text: 'After successful login, you will be redirected to your account dashboard showing your balance, game options, transaction history, and account menu.',
      imagePlaceholder: 'Screenshot of Sikkim Game dashboard after successful login'
    }
  ]

  return (
    <PageLayout
      title={seo.title}
      description={seo.description}
      canonical={seo.canonical}
      h1="Sikkim Game Login - Complete Sign In Guide 2025"
      introText="Learn how to login to your Sikkim Game account quickly and securely. Step-by-step login instructions with troubleshooting tips for common login issues."
      breadcrumbItems={[]}
      currentPath="/login"
      faqs={loginPageFAQs}
      quickAnswersBox={{
        title: 'Quick Login Steps',
        purpose: 'Access your Sikkim Game account securely using mobile number and password.',
        steps: '6 steps: Open app/website, Enter mobile number, Enter password, Complete OTP (if required), Click login, Access dashboard',
        commonIssue: 'Invalid user error - Solution: Verify mobile number is registered, complete registration if not done, or contact support'
      }}
      showHowTo={true}
      howToSteps={howToSteps}
      howToTitle="How to Login to Sikkim Game Account"
      howToDescription="Complete guide to login to your Sikkim Game account using mobile number and password with OTP verification when required."
    >
      <section>
        <h2>What is Sikkim Game Login?</h2>
        <p>
          Sikkim Game login is the process of accessing your registered account using your mobile number and password. 
          Once logged in, you can check your balance, play games, request withdrawals, manage your profile, and access all account features. 
          Login is required every time you want to access your account, unless you use persistent login features.
        </p>
      </section>

      <section>
        <h2>Login Requirements</h2>
        <p>Before logging in, ensure you have:</p>
        <ul>
          <li>Registered mobile number used during registration</li>
          <li>Account password (set during registration)</li>
          <li>Stable internet connection</li>
          <li>Latest version of Sikkim Game app (if using mobile app)</li>
          <li>Access to your registered mobile number for OTP (if required)</li>
        </ul>
      </section>

      <section>
        <h2>Troubleshooting Login Issues</h2>
        <h3>Forgot Password</h3>
        <p>
          If you forgot your password, click "Forgot Password" on the login page. Enter your registered mobile number, 
          verify with OTP sent to your phone, then create a new password. Make sure to remember or securely store your new password.
        </p>
        <h3>Invalid User Error</h3>
        <p>
          This error means your mobile number is not registered. Ensure you're entering the correct registered mobile number. 
          If you haven't registered yet, complete registration first. If you believe your account exists but can't login, contact customer support.
        </p>
        <h3>OTP Not Received</h3>
        <p>
          If OTP is not received, check your mobile number is correct, ensure good network signal, wait a few minutes as delivery can be delayed, 
          check if OTP messages are blocked by your carrier, or try requesting OTP again. Contact support if issues persist.
        </p>
        <h3>Account Locked</h3>
        <p>
          Account locks occur due to multiple failed login attempts, security concerns, or policy violations. 
          Contact customer support immediately with your registered mobile number and account details to unlock your account.
        </p>
        <h3>Slow Login or Timeout</h3>
        <p>
          Slow login can be due to poor internet connection, server issues, app cache problems, or outdated app version. 
          Check your internet, clear app cache, update to latest app version, or try again later. Contact support if issues persist.
        </p>
      </section>

      <section>
        <h2>Security Tips for Safe Login</h2>
        <ul>
          <li>Never share your password or OTP with anyone</li>
          <li>Use a strong unique password not used elsewhere</li>
          <li>Enable two-factor authentication (2FA) if available</li>
          <li>Avoid logging in from public or shared devices</li>
          <li>Always logout when using shared devices</li>
          <li>Check for phishing websites - always use official domain</li>
          <li>Keep your app updated to latest version</li>
          <li>Monitor your account for suspicious activity</li>
        </ul>
      </section>

      <section>
        <h2>Alternative Login Methods</h2>
        <h3>Biometric Login</h3>
        <p>
          If your device and app version support biometric login (fingerprint or face recognition), you can enable it in Account Settings > Security Settings. 
          This allows quick and secure login using your fingerprint or face scan without entering password each time.
        </p>
        <h3>Remember Me Option</h3>
        <p>
          The "Remember Me" option allows persistent login so you don't need to enter credentials every time. 
          Only use this on your personal, secure device. Never enable this on shared or public devices.
        </p>
      </section>

      <section>
        <h2>What to Do After Login</h2>
        <p>
          After successful login, you can check your account balance, browse available games, review transaction history, 
          request withdrawals (after KYC verification), update profile information, contact customer support, and manage account settings.
        </p>
      </section>
    </PageLayout>
  )
}

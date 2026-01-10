import PageLayout from '@/components/PageLayout'
import { getPageSEO } from '@/lib/seo-config'

export default function CustomerSupport() {
  const seo = getPageSEO(
    '/customer-support',
    'Sikkim Game Customer Support - Contact Support | 2025',
    'Contact Sikkim Game customer support for account issues, withdrawals, KYC verification, and technical support. 24/7 support available via chat, Telegram, and email.',
    'Sikkim Game Customer Support, Sikkim Game Customer Care, Sikkim Game Support, Contact Sikkim Game'
  )

  return (
    <PageLayout
      title={seo.title}
      description={seo.description}
      canonical={seo.canonical}
      h1="Sikkim Game Customer Support - Complete Support Guide 2025"
      introText="Contact Sikkim Game customer support for assistance with account issues, withdrawals, KYC verification, technical support, and more. Multiple support channels available 24/7."
      breadcrumbItems={[]}
      currentPath="/customer-support"
      quickAnswersBox={{
        title: 'Quick Support Information',
        purpose: 'Get help with Sikkim Game account issues, withdrawals, KYC, and technical support.',
        steps: 'Contact support via in-app chat, official Telegram channel, or customer support page on website. Response times vary.',
        commonIssue: 'Support not responding - Solution: Check official support channels, wait for response (typically 24-48 hours), or try alternative contact methods'
      }}
    >
      <section>
        <h2>What is Sikkim Game Customer Support?</h2>
        <p>
          Sikkim Game customer support provides assistance with account issues, withdrawals, KYC verification, technical support, 
          and general queries. Support is typically available 24/7 through multiple channels including in-app chat, official Telegram channel, 
          email, and customer support page on the website. Response times vary but support aims to resolve issues promptly.
        </p>
      </section>

      <section>
        <h2>How to Contact Customer Support</h2>
        <h3>In-App Chat</h3>
        <p>
          Login to your Sikkim Game account, go to your dashboard, navigate to "Support" or "Help" section, 
          and start a chat conversation with support agents. In-app chat is typically the fastest way to get support for account-specific issues.
        </p>
        <h3>Official Telegram Channel</h3>
        <p>
          Contact support through the official Sikkim Game Telegram channel. Search for the official channel, 
          join it, and send your query or issue description. Support agents typically respond within 24-48 hours.
        </p>
        <h3>Customer Support Page</h3>
        <p>
          Visit the customer support page on the official Sikkim Game website, fill out the support form with your issue description, 
          mobile number, account details, and submit your query. Support will contact you via SMS or email.
        </p>
        <h3>Email Support</h3>
        <p>
          Send an email to the official Sikkim Game customer support email address with your issue description, 
          mobile number, account details, and relevant screenshots. Response times may be longer than chat or Telegram.
        </p>
      </section>

      <section>
        <h2>Common Support Issues</h2>
        <h3>Account Issues</h3>
        <ul>
          <li>Login problems (forgot password, invalid user, account locked)</li>
          <li>Registration issues (mobile number already registered, OTP not received)</li>
          <li>Account access problems (suspended account, restricted features)</li>
          <li>Profile update requests (change mobile number, update details)</li>
        </ul>
        <h3>Withdrawal Issues</h3>
        <ul>
          <li>Pending withdrawals (delayed processing, status updates)</li>
          <li>Withdrawal rejections (bank details mismatch, KYC issues)</li>
          <li>Failed transactions (bank errors, processing failures)</li>
          <li>Withdrawal limits (increase requests, limit information)</li>
        </ul>
        <h3>KYC Verification</h3>
        <ul>
          <li>KYC submission (document upload, verification process)</li>
          <li>KYC approval delays (status updates, rejection reasons)</li>
          <li>Document issues (invalid documents, rejection appeals)</li>
          <li>KYC re-verification (account updates, document changes)</li>
        </ul>
        <h3>Technical Support</h3>
        <ul>
          <li>App issues (crashes, errors, performance problems)</li>
          <li>Download problems (APK issues, installation errors)</li>
          <li>Website access (loading issues, errors, compatibility)</li>
          <li>Payment issues (deposit failures, transaction errors)</li>
        </ul>
      </section>

      <section>
        <h2>Information to Provide When Contacting Support</h2>
        <p>
          When contacting support, provide the following information for faster resolution:
        </p>
        <ul>
          <li>Your registered mobile number</li>
          <li>Account username or ID (if available)</li>
          <li>Detailed description of your issue</li>
          <li>Steps you've already tried to resolve the issue</li>
          <li>Screenshots or images related to the issue</li>
          <li>Transaction IDs (for withdrawal or payment issues)</li>
          <li>Error messages (exact text if available)</li>
          <li>Device information (for technical issues)</li>
          <li>App version (for app-related issues)</li>
          <li>Time and date when the issue occurred</li>
        </ul>
      </section>

      <section>
        <h2>Support Response Times</h2>
        <p>
          Support response times vary based on contact method and issue complexity:
        </p>
        <ul>
          <li>In-app chat: Typically 1-6 hours (fastest)</li>
          <li>Official Telegram channel: Typically 6-24 hours</li>
          <li>Customer support form: Typically 24-48 hours</li>
          <li>Email support: Typically 24-72 hours (longest)</li>
        </ul>
        <p>
          Complex issues may take longer to resolve. For urgent issues, use in-app chat or Telegram channel. 
          Follow up if you don't receive a response within expected timeframes.
        </p>
      </section>

      <section>
        <h2>Tips for Effective Support Communication</h2>
        <ul>
          <li>Be clear and concise when describing your issue</li>
          <li>Provide all relevant information upfront</li>
          <li>Include screenshots or images when helpful</li>
          <li>Be patient and polite with support agents</li>
          <li>Follow support instructions carefully</li>
          <li>Keep records of support conversations</li>
          <li>Follow up if issues are not resolved</li>
          <li>Use official support channels only (avoid third-party support)</li>
        </ul>
      </section>

      <section>
        <h2>Self-Service Support Resources</h2>
        <p>
          Before contacting support, check these self-service resources:
        </p>
        <ul>
          <li>FAQ section on the website (answers to common questions)</li>
          <li>Help articles and guides (detailed instructions for common tasks)</li>
          <li>Account dashboard (check transaction history, status, limits)</li>
          <li>Account settings (update details, change password, manage security)</li>
          <li>Transaction history (check status of withdrawals, deposits, bonuses)</li>
          <li>KYC status page (check verification status and requirements)</li>
        </ul>
        <p>
          Many common issues can be resolved through self-service resources, saving time and allowing faster resolution.
        </p>
      </section>

      <section>
        <h2>Support Security Tips</h2>
        <ul>
          <li>Only contact support through official channels</li>
          <li>Never share your password or OTP with support agents</li>
          <li>Verify you're contacting official support (check official website)</li>
          <li>Be cautious of fake support accounts on Telegram or social media</li>
          <li>Report suspicious support requests or scams</li>
          <li>Official support will never ask for your password or OTP</li>
          <li>Verify support agent identity if unsure</li>
          <li>Contact support only through official website or app channels</li>
        </ul>
      </section>
    </PageLayout>
  )
}


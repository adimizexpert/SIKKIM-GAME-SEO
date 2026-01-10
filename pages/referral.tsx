import PageLayout from '@/components/PageLayout'
import { getPageSEO } from '@/lib/seo-config'

export default function Referral() {
  const seo = getPageSEO(
    '/referral',
    'Sikkim Game Referral - Referral Code and Rewards | 2025',
    'Learn about Sikkim Game referral program. Get your referral code, invite friends, and earn referral rewards including bonuses and commissions.',
    'Sikkim Game Referral, Sikkim Game Referral Code, Sikkim Game Referral Rewards, Referral Sikkim Game'
  )

  return (
    <PageLayout
      title={seo.title}
      description={seo.description}
      canonical={seo.canonical}
      h1="Sikkim Game Referral Program - Complete Referral Guide 2025"
      introText="Learn about Sikkim Game referral program and how to earn rewards by inviting friends. Get your referral code, share it with friends, and earn bonuses and commissions from referrals."
      breadcrumbItems={[]}
      currentPath="/referral"
      quickAnswersBox={{
        title: 'Quick Referral Information',
        purpose: 'Invite friends to Sikkim Game using your referral code and earn rewards.',
        steps: 'Get your referral code from account dashboard, share it with friends, friends register using your code, both you and friend receive bonuses',
        commonIssue: 'Referral rewards not credited - Solution: Verify friend registered with your code, completed registration, made deposit (if required), or contact support'
      }}
    >
      <section>
        <h2>What is Sikkim Game Referral Program?</h2>
        <p>
          Sikkim Game referral program allows you to invite friends and earn rewards when they register using your referral code. 
          When friends register with your referral code, both you and your referred friend receive bonuses. You may also earn commissions 
          from referred users' gameplay and deposits, depending on the referral program structure. Referral rewards help you earn extra 
          income while helping friends join the platform.
        </p>
      </section>

      <section>
        <h2>How to Get Your Referral Code</h2>
        <ol>
          <li>Login to your Sikkim Game account</li>
          <li>Go to your account dashboard</li>
          <li>Navigate to "Referral", "Invite Friends", or "My Code" section</li>
          <li>Find your unique referral/invitation code</li>
          <li>Copy your referral code or use the share feature</li>
          <li>Share your referral code with friends and family</li>
        </ol>
        <p>
          Your referral code is unique to your account and remains the same. You can share it with unlimited users. 
          There's typically no limit to how many people can use your referral code.
        </p>
      </section>

      <section>
        <h2>How to Share Your Referral Code</h2>
        <h3>Direct Sharing</h3>
        <ul>
          <li>Share code via WhatsApp with friends and family</li>
          <li>Send code via SMS or text message</li>
          <li>Share code via email with contacts</li>
          <li>Share code in person or through messaging apps</li>
        </ul>
        <h3>Social Media Sharing</h3>
        <ul>
          <li>Post your referral code on social media (if allowed)</li>
          <li>Share code on Facebook groups or communities</li>
          <li>Share code on Instagram or Twitter (if allowed)</li>
          <li>Use referral sharing features in the app (if available)</li>
        </ul>
        <h3>Built-in Sharing Features</h3>
        <ul>
          <li>Use app's built-in sharing feature to share referral link</li>
          <li>Generate referral link with your code embedded</li>
          <li>Share referral link via WhatsApp, SMS, or email</li>
          <li>Track referrals through the referral dashboard</li>
        </ul>
      </section>

      <section>
        <h2>Referral Rewards</h2>
        <h3>For You (Referrer)</h3>
        <ul>
          <li>Referral bonus when friend registers using your code</li>
          <li>Commission from referred users' deposits (percentage based)</li>
          <li>Commission from referred users' gameplay (percentage based)</li>
          <li>VIP status upgrades based on number of successful referrals</li>
          <li>Cashback rewards for successful referrals</li>
          <li>Special bonuses for reaching referral milestones</li>
        </ul>
        <h3>For Your Friend (Referred User)</h3>
        <ul>
          <li>Sign-up bonus when registering with your referral code</li>
          <li>Access to all platform games and features</li>
          <li>Eligibility for deposit bonuses and promotions</li>
          <li>Full account functionality and withdrawal eligibility (after KYC)</li>
        </ul>
      </section>

      <section>
        <h2>How Referral Program Works</h2>
        <ol>
          <li>You get your unique referral code from your account dashboard</li>
          <li>You share your referral code with friends and family</li>
          <li>Friend visits registration page and enters your referral code</li>
          <li>Friend completes registration using your referral code</li>
          <li>Both you and friend receive sign-up/referral bonuses</li>
          <li>Friend makes deposits and plays games</li>
          <li>You earn commissions from friend's deposits and gameplay</li>
          <li>Rewards are credited automatically to your account</li>
        </ol>
      </section>

      <section>
        <h2>Tracking Your Referrals</h2>
        <p>
          Track your referrals through your account dashboard:
        </p>
        <ul>
          <li>View number of users registered with your referral code</li>
          <li>See referral status (registered, active, deposited, etc.)</li>
          <li>Check referral rewards earned (bonuses, commissions)</li>
          <li>View referral earnings history</li>
          <li>Monitor referral milestones and achievements</li>
          <li>Track commission percentages and amounts</li>
        </ul>
        <p>
          Referral tracking helps you monitor your referral program performance and earnings. 
          Check your referral dashboard regularly to see updates.
        </p>
      </section>

      <section>
        <h2>Troubleshooting Referral Issues</h2>
        <h3>Referral Rewards Not Credited</h3>
        <p>
          If referral rewards are not credited, check: Friend registered with your exact referral code, friend completed registration successfully, 
          friend made required deposit (if applicable), referral tracking shows friend as registered, or contact support with referral code and friend's details.
        </p>
        <h3>Cannot Find Referral Code</h3>
        <p>
          If you cannot find your referral code, check: You're logged into your account, you've navigated to correct section (Referral/Invite Friends), 
          account is in good standing, or contact support to retrieve your referral code.
        </p>
        <h3>Referral Not Counted</h3>
        <p>
          If referral is not counted, check: Friend used your exact referral code during registration, friend completed full registration process, 
          registration was successful, or contact support with referral details for investigation.
        </p>
      </section>

      <section>
        <h2>Maximizing Referral Rewards</h2>
        <ul>
          <li>Share your referral code with friends and family actively</li>
          <li>Explain benefits of using your referral code to potential users</li>
          <li>Share referral code through multiple channels (WhatsApp, SMS, email)</li>
          <li>Follow up with friends who haven't registered yet</li>
          <li>Track your referrals regularly through the dashboard</li>
          <li>Meet referral milestones for special bonuses</li>
          <li>Ensure friends complete full registration and KYC (if required)</li>
          <li>Contact support for referral-related queries or issues</li>
        </ul>
      </section>

      <section>
        <h2>Referral Program Terms and Conditions</h2>
        <p>
          Referral program typically has terms and conditions:
        </p>
        <ul>
          <li>Referral codes must be used during registration (cannot be added later)</li>
          <li>Referred users must complete registration and verification</li>
          <li>Rewards may require referred users to make deposits or meet conditions</li>
          <li>Self-referral or fraudulent referrals are prohibited</li>
          <li>Referral rewards may have expiration dates or usage limits</li>
          <li>Commission rates may vary based on account status or promotions</li>
          <li>Referral program may be modified or discontinued at any time</li>
        </ul>
        <p>
          Always read referral program terms and conditions before participating. 
          Contact support if you have questions about referral program rules.
        </p>
      </section>
    </PageLayout>
  )
}


import PageLayout from '@/components/PageLayout'
import { getPageSEO } from '@/lib/seo-config'
import { withdrawalPageFAQs } from '@/lib/faq-data'

export default function Withdrawal() {
  const seo = getPageSEO(
    '/withdrawal',
    'Sikkim Game Withdrawal - How to Withdraw Money | 2025',
    'Learn how to withdraw money from your Sikkim Game account. Step-by-step withdrawal guide with bank transfer and UPI options. KYC verification required.',
    'Sikkim Game Withdrawal, Withdraw Money Sikkim Game, Sikkim Game Withdrawal Process, How to Withdraw from Sikkim Game'
  )

  const howToSteps = [
    {
      name: 'Complete KYC Verification',
      text: 'Complete KYC (Know Your Customer) verification by submitting government-issued ID proof, address proof, and a clear selfie. Withdrawals require verified KYC.',
      imagePlaceholder: 'Screenshot of KYC verification section in account settings'
    },
    {
      name: 'Navigate to Withdrawal Section',
      text: 'Login to your Sikkim Game account, go to your dashboard, and navigate to the "Withdrawal" or "Cash Out" section in your account menu.',
      imagePlaceholder: 'Screenshot of account dashboard showing withdrawal menu option'
    },
    {
      name: 'Select Withdrawal Method',
      text: 'Choose your withdrawal method: Bank Transfer (NEFT/RTGS/IMPS) or UPI. Available methods depend on your account status and region.',
      imagePlaceholder: 'Screenshot of withdrawal page showing payment method options'
    },
    {
      name: 'Enter Withdrawal Amount',
      text: 'Enter the amount you want to withdraw. Ensure the amount meets minimum withdrawal limits (typically ₹100 or ₹500) and doesn\'t exceed your balance or daily limits.',
      imagePlaceholder: 'Screenshot of withdrawal form showing amount input field'
    },
    {
      name: 'Enter Bank Account Details',
      text: 'Enter your bank account number, IFSC code, and account holder name. Ensure account holder name exactly matches your KYC documents.',
      imagePlaceholder: 'Screenshot of withdrawal form showing bank details input fields'
    },
    {
      name: 'Verify Withdrawal Request',
      text: 'Review all entered information carefully, including withdrawal amount, bank details, and payment method. Ensure all details are correct before submitting.',
      imagePlaceholder: 'Screenshot of withdrawal form with review section'
    },
    {
      name: 'Confirm and Submit',
      text: 'Click the "Submit" or "Confirm Withdrawal" button. You may need to enter OTP or confirm via SMS. After submission, your withdrawal request is processed.',
      imagePlaceholder: 'Screenshot of withdrawal confirmation screen with Submit button'
    },
    {
      name: 'Track Withdrawal Status',
      text: 'Monitor your withdrawal status in the transaction history section. Status will show as Pending, Processing, Completed, or Failed. You\'ll receive notifications when status changes.',
      imagePlaceholder: 'Screenshot of transaction history showing withdrawal status'
    }
  ]

  return (
    <PageLayout
      title={seo.title}
      description={seo.description}
      canonical={seo.canonical}
      h1="Sikkim Game Withdrawal - Complete Money Withdrawal Guide 2025"
      introText="Learn how to withdraw money from your Sikkim Game account safely. Complete step-by-step withdrawal guide with bank transfer and UPI options. KYC verification required for withdrawals."
      breadcrumbItems={[]}
      currentPath="/withdrawal"
      faqs={withdrawalPageFAQs}
      quickAnswersBox={{
        title: 'Quick Withdrawal Steps',
        purpose: 'Withdraw money from your Sikkim Game account to your bank account or UPI.',
        steps: '8 steps: Complete KYC, Navigate to withdrawal, Select method, Enter amount, Enter bank details, Verify, Submit, Track status',
        commonIssue: 'Pending withdrawal - Solution: Check KYC status, verify bank details, wait 24-72 hours, or contact support'
      }}
      showHowTo={true}
      howToSteps={howToSteps}
      howToTitle="How to Withdraw Money from Sikkim Game"
      howToDescription="Complete guide to withdraw money from your Sikkim Game account using bank transfer or UPI with KYC verification requirement."
    >
      <section>
        <h2>What is Sikkim Game Withdrawal?</h2>
        <p>
          Sikkim Game withdrawal is the process of transferring your account balance to your bank account or UPI. 
          Withdrawals require completed KYC verification, correct bank details, and may have minimum/maximum limits. 
          Processing typically takes 24-72 hours after request approval, depending on payment method and bank processing times.
        </p>
      </section>

      <section>
        <h2>Withdrawal Requirements</h2>
        <p>Before requesting withdrawal, ensure you have:</p>
        <ul>
          <li>Completed KYC verification (mandatory for withdrawals)</li>
          <li>Sufficient account balance (meets minimum withdrawal limit)</li>
          <li>Active bank account in your name matching KYC documents</li>
          <li>Correct bank account number and IFSC code</li>
          <li>Valid UPI ID (if using UPI withdrawal method)</li>
          <li>Account in good standing (no restrictions or violations)</li>
        </ul>
      </section>

      <section>
        <h2>Withdrawal Methods</h2>
        <h3>Bank Transfer (NEFT/RTGS/IMPS)</h3>
        <p>
          Bank transfer allows direct transfer to your bank account. IMPS is instant, NEFT processes in batches throughout the day, 
          and RTGS is for large amounts (₹2 lakh+) processed in real-time. Processing times and minimum amounts differ by method.
        </p>
        <h3>UPI Withdrawal</h3>
        <p>
          UPI withdrawal enables instant transfer to your UPI ID (PhonePe, Google Pay, Paytm, etc.). UPI withdrawals are often faster 
          than bank transfers, typically processing within a few hours. Link your UPI ID in account settings before withdrawing.
        </p>
      </section>

      <section>
        <h2>Withdrawal Limits</h2>
        <p>
          Withdrawal limits depend on your account status, KYC verification level, and VIP status:
        </p>
        <ul>
          <li>Minimum withdrawal: ₹100 or ₹500 (varies by account type)</li>
          <li>Maximum daily limit: ₹10,000-50,000 (basic accounts) or ₹1,00,000+ (verified/VIP accounts)</li>
          <li>Daily withdrawal count: 1-3 withdrawals per day (basic) or more (verified/VIP)</li>
          <li>Monthly limits: Based on account status and KYC level</li>
        </ul>
        <p>Check your account dashboard for specific withdrawal limits applicable to your account.</p>
      </section>

      <section>
        <h2>Troubleshooting Withdrawal Issues</h2>
        <h3>Pending Withdrawal</h3>
        <p>
          Withdrawals typically take 24-72 hours to process. If pending longer, check KYC verification status, verify bank details are correct, 
          check for security checks or reviews, or contact support with your withdrawal request ID for updates.
        </p>
        <h3>Bank Details Mismatch</h3>
        <p>
          Ensure account holder name exactly matches your KYC documents, bank account number is correct, IFSC code is valid and correct, 
          and bank account is active. Update bank details in your account if incorrect, or contact support for assistance.
        </p>
        <h3>Withdrawal Rejected</h3>
        <p>
          Withdrawals may be rejected due to incomplete KYC, mismatched bank details, insufficient balance, suspicious activity, 
          policy violations, or incorrect information. Contact support with your withdrawal request ID to understand the specific reason.
        </p>
        <h3>Failed Transaction</h3>
        <p>
          If withdrawal transaction fails, check bank account details are correct, ensure bank account is active, verify KYC status, 
          check for withdrawal limits, contact your bank to ensure no issues on their end, then contact Sikkim Game support with transaction ID.
        </p>
        <h3>Incorrect Withdrawal Amount</h3>
        <p>
          If you received incorrect withdrawal amount, immediately contact customer support with your withdrawal transaction ID, 
          expected amount, and actual amount received. Take screenshots of your withdrawal request and bank statement. Support will investigate.
        </p>
      </section>

      <section>
        <h2>Security Tips for Withdrawals</h2>
        <ul>
          <li>Never share withdrawal OTP or confirmation codes with anyone</li>
          <li>Verify bank details carefully before submitting withdrawal request</li>
          <li>Use secure internet connection when requesting withdrawals</li>
          <li>Enable account security features and two-factor authentication</li>
          <li>Check withdrawal notifications and transaction history regularly</li>
          <li>Immediately report any suspicious withdrawal activity to support</li>
          <li>Only withdraw to bank accounts in your own name matching KYC</li>
          <li>Keep withdrawal transaction IDs for reference and support queries</li>
        </ul>
      </section>

      <section>
        <h2>Withdrawal Processing Times</h2>
        <p>
          Withdrawal processing times vary by method:
        </p>
        <ul>
          <li>UPI withdrawals: 2-24 hours (often faster)</li>
          <li>IMPS transfers: 1-6 hours (instant processing)</li>
          <li>NEFT transfers: 1-24 hours (batch processing)</li>
          <li>RTGS transfers: 1-6 hours (for large amounts)</li>
        </ul>
        <p>
          Processing times are estimates and may vary based on bank processing, weekends, holidays, KYC verification status, 
          and withdrawal amount. Contact support if withdrawals are delayed beyond 72 hours.
        </p>
      </section>

      <section>
        <h2>KYC Verification for Withdrawals</h2>
        <p>
          KYC (Know Your Customer) verification is mandatory for all withdrawals. To complete KYC:
        </p>
        <ul>
          <li>Submit government-issued ID proof (Aadhaar, PAN, Driving License, or Passport)</li>
          <li>Provide address proof (Aadhaar, utility bill, or bank statement)</li>
          <li>Upload a clear selfie photo</li>
          <li>Ensure all documents are clear, valid, and match your registered details</li>
          <li>Wait for KYC verification approval (typically 24-48 hours)</li>
        </ul>
        <p>Withdrawals cannot be processed until KYC is verified and approved. Check KYC status in your account settings.</p>
      </section>
    </PageLayout>
  )
}


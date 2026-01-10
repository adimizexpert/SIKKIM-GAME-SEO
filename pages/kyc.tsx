import PageLayout from '@/components/PageLayout'
import { getPageSEO } from '@/lib/seo-config'

export default function KYC() {
  const seo = getPageSEO(
    '/kyc',
    'Sikkim Game KYC Verification - Complete KYC Guide | 2025',
    'Complete KYC (Know Your Customer) verification for Sikkim Game. Step-by-step guide with required documents for ID proof, address proof, and selfie upload.',
    'Sikkim Game KYC, KYC Verification Sikkim Game, Sikkim Game KYC Documents, KYC Sikkim Game'
  )

  return (
    <PageLayout
      title={seo.title}
      description={seo.description}
      canonical={seo.canonical}
      h1="Sikkim Game KYC Verification - Complete KYC Guide 2025"
      introText="Learn how to complete KYC (Know Your Customer) verification for Sikkim Game. Step-by-step guide with required documents for ID proof, address proof, and selfie upload. KYC is mandatory for withdrawals."
      breadcrumbItems={[]}
      currentPath="/kyc"
      quickAnswersBox={{
        title: 'Quick KYC Information',
        purpose: 'Complete KYC verification to enable withdrawals and full account functionality.',
        steps: 'Required documents: Government ID (Aadhaar/PAN/Passport), Address proof (Aadhaar/utility bill), Clear selfie photo. Upload documents, wait for approval (24-48 hours)',
        commonIssue: 'KYC rejected - Solution: Ensure documents are clear, valid, match registered details, and try resubmitting or contact support'
      }}
    >
      <section>
        <h2>What is KYC Verification?</h2>
        <p>
          KYC (Know Your Customer) verification is the process of verifying your identity and address by submitting government-issued documents. 
          KYC is mandatory for withdrawals and some account features. After KYC verification, you can request withdrawals, access full account functionality, 
          and enjoy higher withdrawal limits. KYC verification typically takes 24-48 hours after document submission.
        </p>
      </section>

      <section>
        <h2>Why is KYC Required?</h2>
        <p>
          KYC verification is required for:
        </p>
        <ul>
          <li>Withdrawals (mandatory - withdrawals cannot be processed without KYC)</li>
          <li>Account security (prevents fraud and unauthorized access)</li>
          <li>Legal compliance (required by regulations)</li>
          <li>Higher withdrawal limits (verified accounts have higher limits)</li>
          <li>VIP status eligibility (KYC verified accounts can access VIP benefits)</li>
          <li>Full account functionality (unlocks all account features)</li>
        </ul>
      </section>

      <section>
        <h2>Required Documents for KYC</h2>
        <h3>ID Proof (Choose One)</h3>
        <ul>
          <li>Aadhaar card (front and back)</li>
          <li>PAN card</li>
          <li>Driving License (front and back)</li>
          <li>Passport (first and last page)</li>
          <li>Voter ID card</li>
        </ul>
        <h3>Address Proof (Choose One)</h3>
        <ul>
          <li>Aadhaar card (showing address)</li>
          <li>Utility bill (electricity, water, gas - not older than 3 months)</li>
          <li>Bank statement (not older than 3 months)</li>
          <li>Passport (address page)</li>
          <li>Driving License (if address matches)</li>
        </ul>
        <h3>Selfie Photo</h3>
        <ul>
          <li>Clear selfie photo showing your face clearly</li>
          <li>Good lighting and clear visibility</li>
          <li>Hold your ID proof next to your face (if required)</li>
          <li>No sunglasses or face coverings</li>
        </ul>
      </section>

      <section>
        <h2>How to Complete KYC Verification</h2>
        <ol>
          <li>Login to your Sikkim Game account</li>
          <li>Navigate to Account Settings > KYC Verification</li>
          <li>Select ID proof type (Aadhaar, PAN, Passport, etc.)</li>
          <li>Upload clear photo of ID proof (front and back if required)</li>
          <li>Select address proof type (Aadhaar, utility bill, etc.)</li>
          <li>Upload clear photo of address proof</li>
          <li>Take or upload a clear selfie photo</li>
          <li>Review all uploaded documents for clarity and accuracy</li>
          <li>Submit KYC verification request</li>
          <li>Wait for verification approval (typically 24-48 hours)</li>
          <li>Check KYC status in account settings</li>
        </ol>
      </section>

      <section>
        <h2>KYC Document Requirements</h2>
        <h3>Document Quality</h3>
        <ul>
          <li>Clear, readable photos (not blurry or unclear)</li>
          <li>All information visible (no cut-off text or edges)</li>
          <li>Good lighting (no shadows or glare)</li>
          <li>Original documents (not photocopies or screenshots if possible)</li>
          <li>Valid documents (not expired)</li>
          <li>Recent address proof (not older than 3 months)</li>
        </ul>
        <h3>Information Matching</h3>
        <ul>
          <li>Name on ID proof matches registered account name</li>
          <li>Address on address proof matches registered address</li>
          <li>Mobile number matches registered mobile number</li>
          <li>Date of birth matches registered information (if required)</li>
        </ul>
      </section>

      <section>
        <h2>Troubleshooting KYC Issues</h2>
        <h3>KYC Rejected</h3>
        <p>
          If KYC is rejected, check: Documents are clear and readable, documents are valid and not expired, 
          name and address match registered details, address proof is recent (not older than 3 months), 
          all required documents are submitted, or selfie photo is clear. Resubmit with corrected documents or contact support.
        </p>
        <h3>KYC Pending Approval</h3>
        <p>
          KYC verification typically takes 24-48 hours after submission. If pending longer, check submission was successful, 
          documents meet quality requirements, no additional documents are required, or contact support with your KYC submission ID.
        </p>
        <h3>Cannot Upload Documents</h3>
        <p>
          If documents cannot be uploaded, check: File size is within limits (typically 5MB per file), 
          file format is supported (JPG, PNG, PDF), internet connection is stable, app/browser is updated, 
          or clear browser/app cache and try again. Contact support if issues persist.
        </p>
        <h3>Documents Not Accepted</h3>
        <p>
          Ensure documents are government-issued (Aadhaar, PAN, Passport, etc.), documents are clear and readable, 
          documents are valid and not expired, or documents match registered account information. Try alternative documents or contact support.
        </p>
      </section>

      <section>
        <h2>KYC Status Check</h2>
        <p>
          Check your KYC status in your account settings:
        </p>
        <ul>
          <li>Login to your Sikkim Game account</li>
          <li>Go to Account Settings > KYC Verification</li>
          <li>Check KYC status (Pending, Processing, Approved, Rejected)</li>
          <li>View rejection reason (if rejected) and resubmit if needed</li>
          <li>Contact support if status doesn't update after 48 hours</li>
        </ul>
      </section>

      <section>
        <h2>After KYC Verification</h2>
        <p>
          After successful KYC verification:
        </p>
        <ul>
          <li>Withdrawals are enabled (you can now request withdrawals)</li>
          <li>Higher withdrawal limits (verified accounts have higher limits)</li>
          <li>VIP status eligibility (can access VIP benefits)</li>
          <li>Full account functionality (unlocks all account features)</li>
          <li>Account security (verified accounts have enhanced security)</li>
        </ul>
      </section>

      <section>
        <h2>KYC Security Tips</h2>
        <ul>
          <li>Only submit KYC documents through official app/website</li>
          <li>Never share KYC documents with third parties</li>
          <li>Ensure documents are clear and accurate before submission</li>
          <li>Verify KYC status only through official channels</li>
          <li>Report suspicious KYC requests or scams</li>
          <li>Keep copies of submitted documents for reference</li>
          <li>Contact support only through official channels for KYC queries</li>
          <li>Be cautious of fake KYC verification pages or requests</li>
        </ul>
      </section>
    </PageLayout>
  )
}


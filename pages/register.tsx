import PageLayout from '@/components/PageLayout'
import { getPageSEO } from '@/lib/seo-config'

export default function Register() {
  const seo = getPageSEO(
    '/register',
    'Sikkim Game Registration - Create New Account | 2025',
    'Register for Sikkim Game and create your account. Easy registration process with invitation code to start playing. Get sign-up bonus and access all games.',
    'Sikkim Game Registration, Register Sikkim Game, Sikkim Game Sign Up, Create Sikkim Game Account, Sikkim Game Registration Page'
  )

  const howToSteps = [
    {
      name: 'Open Registration Page',
      text: 'Visit the official Sikkim Game website or open the app, then click on the Register or Sign Up button to access the registration page.',
      imagePlaceholder: 'Screenshot of Sikkim Game registration page'
    },
    {
      name: 'Enter Mobile Number',
      text: 'Enter your active mobile number in the registration form. Ensure the number is correct and you have access to it for OTP verification.',
      imagePlaceholder: 'Screenshot of registration form showing mobile number input field'
    },
    {
      name: 'Create Password',
      text: 'Create a strong password with at least 8 characters, including letters and numbers. Confirm your password in the confirmation field.',
      imagePlaceholder: 'Screenshot of registration form showing password creation fields'
    },
    {
      name: 'Enter Invitation Code',
      text: 'Enter the invitation code 384636381064 (or another valid invitation code) in the invitation code field. This is required for registration and bonus eligibility.',
      imagePlaceholder: 'Screenshot of registration form showing invitation code input field with code 384636381064'
    },
    {
      name: 'Verify with OTP',
      text: 'Enter the OTP code sent to your mobile number. Check your SMS messages for the verification code, which is typically valid for 5-10 minutes.',
      imagePlaceholder: 'Screenshot of OTP verification screen'
    },
    {
      name: 'Complete Registration',
      text: 'Review all entered information, accept terms and conditions, then click Register or Sign Up button. Wait for account creation confirmation.',
      imagePlaceholder: 'Screenshot of registration form with Register button highlighted'
    },
    {
      name: 'Login and Access Dashboard',
      text: 'After successful registration, login with your mobile number and password. Your sign-up bonus will be credited automatically to your account.',
      imagePlaceholder: 'Screenshot of Sikkim Game dashboard after registration'
    }
  ]

  return (
    <PageLayout
      title={seo.title}
      description={seo.description}
      canonical={seo.canonical}
      h1="Sikkim Game Registration - Complete Sign Up Guide 2025"
      introText="Learn how to register for Sikkim Game and create your account. Complete step-by-step registration guide with invitation code to get sign-up bonus and access all games."
      breadcrumbItems={[]}
      currentPath="/register"
      quickAnswersBox={{
        title: 'Quick Registration Steps',
        purpose: 'Create a new Sikkim Game account with invitation code to access games and receive sign-up bonus.',
        steps: '7 steps: Open registration page, Enter mobile number, Create password, Enter invitation code, Verify OTP, Complete registration, Login',
        commonIssue: 'Invalid invitation code - Solution: Use code 384636381064, ensure no typos, or contact support'
      }}
      showHowTo={true}
      howToSteps={howToSteps}
      howToTitle="How to Register for Sikkim Game"
      howToDescription="Complete guide to register for Sikkim Game account with mobile number, password, and invitation code to receive sign-up bonus."
    >
      <section>
        <h2>What is Sikkim Game Registration?</h2>
        <p>
          Sikkim Game registration is the process of creating a new account on the platform. During registration, you provide your mobile number, 
          create a password, and enter an invitation code. After successful registration, you receive a sign-up bonus and can access all games, 
          deposit funds, play games, and request withdrawals (after KYC verification).
        </p>
      </section>

      <section>
        <h2>Registration Requirements</h2>
        <p>Before registering, ensure you have:</p>
        <ul>
          <li>Active mobile number with SMS access</li>
          <li>Valid invitation code (use 384636381064)</li>
          <li>Strong password (minimum 8 characters)</li>
          <li>Stable internet connection</li>
          <li>Age 18 years or older</li>
          <li>Valid identification for KYC (for withdrawals)</li>
        </ul>
      </section>

      <section>
        <h2>Registration Process Details</h2>
        <h3>Step 1: Mobile Number Entry</h3>
        <p>
          Enter your active mobile number that you can access for OTP verification. The mobile number will be your login identifier, 
          so ensure it's correct and active. You cannot change this number easily after registration.
        </p>
        <h3>Step 2: Password Creation</h3>
        <p>
          Create a strong password with at least 8 characters including uppercase, lowercase letters, and numbers. 
          Do not share this password with anyone. Store it securely or use a password manager.
        </p>
        <h3>Step 3: Invitation Code</h3>
        <p>
          Enter invitation code 384636381064 during registration. This code is required for account creation and bonus eligibility. 
          Using this code ensures you receive the sign-up bonus and full access to platform features.
        </p>
        <h3>Step 4: OTP Verification</h3>
        <p>
          Verify your mobile number with the OTP code sent to your phone. Check your SMS messages and enter the code within 5-10 minutes. 
          If OTP doesn't arrive, wait a few minutes and request again.
        </p>
        <h3>Step 5: Account Confirmation</h3>
        <p>
          After completing all steps and clicking Register, your account is created. You'll receive confirmation and your sign-up bonus 
          will be credited automatically. You can then login and start playing.
        </p>
      </section>

      <section>
        <h2>After Registration</h2>
        <p>
          Once registered, login with your mobile number and password. Your sign-up bonus (₹58 or ₹500) will be credited automatically. 
          Complete KYC verification when prompted to enable withdrawals. Browse available games, deposit funds, play games, and manage your account.
        </p>
      </section>

      <section>
        <h2>Troubleshooting Registration Issues</h2>
        <h3>Mobile Number Already Registered</h3>
        <p>
          If you see "Mobile number already registered" error, either login with existing credentials or contact support to recover your account. 
          Each mobile number can only be registered once.
        </p>
        <h3>Invalid Invitation Code</h3>
        <p>
          Verify you're entering code 384636381064 correctly without spaces or typos. Ensure the code is from an official source. 
          If issues persist, try the standard code or contact support.
        </p>
        <h3>OTP Not Received</h3>
        <p>
          Check your mobile number is correct, ensure good network signal, wait a few minutes as delivery can be delayed, 
          check if OTP messages are blocked by your carrier, or request OTP again. Contact support if issues persist.
        </p>
        <h3>Registration Button Not Working</h3>
        <p>
          Check all fields are filled correctly, ensure internet connection is stable, clear browser/app cache, update app to latest version, 
          or try registering on the website version. Contact support if issues persist.
        </p>
      </section>

      <section>
        <h2>Security Tips for Registration</h2>
        <ul>
          <li>Use a strong unique password not used elsewhere</li>
          <li>Never share your invitation code with strangers</li>
          <li>Keep your mobile number secure and accessible</li>
          <li>Complete registration only on official website/app</li>
          <li>Avoid fake or cloned registration pages</li>
          <li>Verify you're on the official domain before registering</li>
          <li>Complete KYC verification after registration for security</li>
          <li>Enable two-factor authentication if available</li>
        </ul>
      </section>

      <section>
        <h2>Invitation Code Benefits</h2>
        <p>
          Using invitation code 384636381064 during registration provides:
        </p>
        <ul>
          <li>Sign-up bonus (₹58 or ₹500) credited automatically</li>
          <li>Access to all platform games and features</li>
          <li>Eligibility for deposit bonuses and promotions</li>
          <li>Potential referral rewards for the code provider</li>
          <li>Full account functionality and withdrawal eligibility (after KYC)</li>
        </ul>
      </section>
    </PageLayout>
  )
}

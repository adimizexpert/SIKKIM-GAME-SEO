import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Login() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to external Sikkim Game registration link
    window.location.href = 'https://www.sikkimgg.cc/#/register?invitationCode=384636381064'
  }, [])

  return (
    <>
      <Head>
        <title>Sikkim Game Login - Redirecting...</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <p>Redirecting to Sikkim Game...</p>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          If you are not redirected automatically, <a href="https://www.sikkimgg.cc/#/register?invitationCode=384636381064" style={{ color: '#425fef' }}>click here</a>.
        </p>
      </div>
    </>
  )
}


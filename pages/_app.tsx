import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { defaultSEO } from '@/lib/seo-config'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
    </>
  )
}


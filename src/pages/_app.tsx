import { Header } from '@/components/Header'
import { globalStyles } from '@/styles/global'
import { AppContainer } from '@/styles/pages/app'
import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </AppContainer>
  )
}

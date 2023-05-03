import { QueryClientProvider, Hydrate } from '@tanstack/react-query'
import queryClient from './queryClient'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps}>
      <Component {...pageProps} />
    </Hydrate>
  </QueryClientProvider>
}

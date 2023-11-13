import { AuthProvider } from '@/hooks/auth'
import AppLayout from '@/layout/AppLayout'
import AuthStateChanged from '@/layout/AuthStateChanged'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <AuthProvider>
      <AppLayout>
        <AuthStateChanged>
          <Component {...pageProps} />
        </AuthStateChanged>
      </AppLayout>
    </AuthProvider>
  )
}

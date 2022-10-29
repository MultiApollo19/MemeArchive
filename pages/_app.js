import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import {useState} from 'react'
import Layout from '../components/layout'

function MemeArchive({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
    supabaseClient={supabaseClient}
    initialSession={pageProps.initialSession}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
      
    </SessionContextProvider>
    

  )
}

export default MemeArchive

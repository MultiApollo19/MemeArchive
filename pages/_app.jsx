import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import {useState} from 'react'
import Layout from '../components/layout'
import Head from 'next/head'

function MemeArchive({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
    supabaseClient={supabaseClient}
    initialSession={pageProps.initialSession}>
      <Layout>
      <Head>
      
<title>Meme Archive</title>

<meta name="title" content="Meme Archive"/>
<meta name="description" content="Place for archive your best memes!"/>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://memearchive.vercel.app/"/>
<meta property="og:title" content="Meme Archive"/>
<meta property="og:description" content="Place for archive your best memes!"/>
<meta property="og:image" content="./logo.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://memearchive.vercel.app/"/>
<meta property="twitter:title" content="Meme Archive"/>
<meta property="twitter:description" content="Place for archive your best memes!"/>
<meta property="twitter:image" content="../logo.png"/>

  </Head>
        <Component {...pageProps}/>
      </Layout>
      
    </SessionContextProvider>
    

  )
}

export default MemeArchive

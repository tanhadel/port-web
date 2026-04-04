import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import LinesGrid from '@/components/LinesGrid'
import ClientLayout from '@/components/ClientLayout'
import { client, queries, urlFor } from '@/lib/sanity'
import StyledComponentsRegistry from '@/lib/registry'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'tahataheri.dev',
  description: 'Personal portfolio, Developer & Creator',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Fetch profile data for sidebar logo
  const profile = await client.fetch(queries.profile).catch(() => null)
  const profileWithLogo = profile ? {
    name: profile.name,
    logo: profile.logo ? urlFor(profile.logo).width(200).url() : undefined,
  } : undefined
  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1" />
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={poppins.className} suppressHydrationWarning>
        <StyledComponentsRegistry>
          <Preloader />
          <ClientLayout>
            <div className="wrapper">
              <Sidebar profile={profileWithLogo} />
              <main className="main-content lg:ml-24">
                <LinesGrid />
                  {children}
                
                <Footer />
              </main>
            </div>
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

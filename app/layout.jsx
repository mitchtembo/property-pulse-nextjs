import { Poppins, Roboto_Condensed } from 'next/font/google'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '@/assets/styles/global.css'

// Initialize the fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-condensed',
})

export const metadata = {
    title: 'Property Plug',
    description: 'Property Plug is a real estate platform that connects buyers and sellers of properties',
    keywords: 'real estate, property, buy, sell, rent, mortgage, property management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className={`font-poppins`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
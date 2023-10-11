import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../Component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cuy AnimeList',
  description: 'Aku mah Masih Pemula Ajarin dong puh sepuh....',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}  >
        <Navbar />
        {children}
        </body>
    </html>
  )
}

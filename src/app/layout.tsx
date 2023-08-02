import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { register } from 'swiper/element/bundle';
register();

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Convite Virtual',
  description: 'Empresa especializada em criação de convite virtual.',
  openGraph: {
    images: [
      {
        url: 'logo.png',
        width: 1200, 
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body  className={`${inter.className} m-0 p-0`}>
      
          <Header />

          <main>{children}</main>

          <Footer />
      </body>
    </html>
  )
}

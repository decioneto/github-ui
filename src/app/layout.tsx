import { Roboto } from 'next/font/google'
import './globals.css'
import styles from './page-layout.module.scss'
import { Menu } from '@/components/Menu'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '500', '700', '900'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className={styles.container}>
          <Menu />
          <div className={styles.content}>{children}</div>
        </div>
      </body>
    </html>
  )
}

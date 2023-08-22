import Header from '@/components/Header/Header';
import '../assets/styles/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'LearnHelper',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="wrapper">
          <Header />
          <main>
            <div className="main__container">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

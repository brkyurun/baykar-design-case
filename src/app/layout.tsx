import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import headerMock from '../../shared/mocks/header.mock.json';
import { Header } from './components/Header';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Collers - Baykar Design Case',
  description: 'Demo application for Baykar Design Case',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} overflow-hidden`}>
        <Header {...headerMock} />
        {children}
      </body>
    </html>
  );
}

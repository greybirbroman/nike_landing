import './globals.css';
import type { Metadata } from 'next';
import { Header, Footer } from '@/sections';

export const metadata: Metadata = {
  title: 'Nike Landing Page | by Roman Fedorov',
  description: 'This app created with: Typescript / Next.js / TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

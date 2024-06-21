import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import ReactQueryProvider from '@/lib/reactQuery/providers';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevFest BoilerPlate',
  description: 'A simple project to help you boostrap DevFest websites',
  keywords: 'devfest, devfest lagos, coming soon, date, venue',
  metadataBase: new URL('https://devfest-boilerplate.vercel.app/'), // synonymous to the base URL
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ReactQueryProvider>
          {/* Your layout content, including header, main content, footer, etc goes here. */}
          {children}
        </ReactQueryProvider>
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </html>
  );
}

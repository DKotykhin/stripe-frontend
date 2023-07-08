import { Metadata } from 'next';

import { Roboto } from 'next/font/google';

import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import { generalMetaData } from 'metadata/metadata';

import './globals.scss';

const roboto = Roboto({
    weight: ['300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = generalMetaData;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={roboto.className}>
                <header>
                    <Header />
                </header>
                <main className="main">
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
};

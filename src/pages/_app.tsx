import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Advent_Pro } from 'next/font/google'
const adventPro = Advent_Pro({ subsets: ['latin'] })

import Layout from './components/Layout'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<main className={adventPro.className}>
				<Layout>
					<ThemeProvider attribute="class">
						<Component {...pageProps} />
					</ThemeProvider>
				</Layout>
			</main>
		</>
	);
}
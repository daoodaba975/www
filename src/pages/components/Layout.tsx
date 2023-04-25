import { ReactNode } from 'react'

import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }: { children: ReactNode }) => (
	<>
		<div className="bg-white">
			<Navbar />
				{children}
			<Footer />
		</div>
	</>
);

export default Layout

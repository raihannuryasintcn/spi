import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { Footer } from './components/Footer.jsx';
import {  Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Gallery } from './pages/Gallery.jsx';
import { Products } from './pages/Products.jsx';
import { Clients } from './pages/Clients.jsx';
import { Sewa } from './pages/Sewa.jsx';
import { Contact } from './pages/Contact.jsx';
import { CaraKerjaAC } from './pages/CaraKerjaAC.jsx' ;

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/gallery" component={Gallery} />
					<Route path="/products" component={Products} />
					<Route path="/clients" component={Clients} />
					<Route path="/sewa" component={Sewa} />
					<Route path="/contact" component={Contact} />
					<Route path="/legalitas" component={About} />
					<Route path="/cara-kerja-ac" component={CaraKerjaAC} />

					<Route default component={NotFound} />
				</Router>
			</main>
			<Footer />
		</LocationProvider>
	);
}

	if (typeof window !== 'undefined') {
		hydrate(<App />, document.getElementById('app'));
	}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}

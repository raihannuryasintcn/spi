import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { Footer } from './components/Footer.jsx';
import {  Home } from './pages/Home.jsx';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					{/* <Route path="/about" component={} />
					<Route path="/gallery" component={} />
					<Route path="/services" component={} />
					<Route path="/clients" component={} />
					<Route path="/sewa" component={} />
					<Route path="/contact" component={} /> */}
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

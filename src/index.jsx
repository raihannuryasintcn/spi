import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import { HelmetProvider } from 'react-helmet-async';

import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Analytics } from './components/Analytics.jsx';

import { NotFound } from './pages/_404.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Gallery } from './pages/Gallery.jsx';
import { Products } from './pages/Products.jsx';
import { Clients } from './pages/Clients.jsx';
import { Sewa } from './pages/Sewa.jsx';
import { Contact } from './pages/Contact.jsx';
import { CaraKerjaAC } from './pages/CaraKerjaAC.jsx';

import './style.css';

export function App() {
  return (
    <HelmetProvider>
      <LocationProvider>
        <Analytics />
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
            <Route path="/cara-kerja-ac" component={CaraKerjaAC} />
            <Route path="/legalitas" component={About} />
            <Route default component={NotFound} />
          </Router>
        </main>
        <Footer />
      </LocationProvider>
    </HelmetProvider>
  );
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}

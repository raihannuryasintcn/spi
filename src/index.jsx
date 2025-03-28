import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from "preact-iso";

import { Header } from "./components/Header.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Gallery } from "./pages/Gallery.jsx";
import { Products } from "./pages/Products.jsx";
import { Clients } from "./pages/Clients.jsx";
import { Sewa } from "./pages/Sewa.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Analytics } from "@vercel/analytics/react";
import { BlogDetail } from "./pages/Blog.jsx";
import { GoogleAnalytic } from "./Analytics/googleAnalytic.jsx";

export function App() {
  return (
    <LocationProvider>x
      <div className="bg-[url(/background.png)] bg-contain bg-fixed bg-blend-overlay bg-black/20 font-poppins">
        <div className="max-w-[1200px] w-full mx-auto py-8 px-16">
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
              <Route path="/blog/:id" component={BlogDetail} />

			  

              <Route default component={NotFound} />
            </Router>
          </main>
          <Footer />
        </div>
      </div>
      <Analytics />
      <GoogleAnalytic />
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
	// Penting: Pastikan target elemen ada sebelum hydration
	const appElement = document.getElementById("app");
	if (appElement) {
	  // Periksa apakah elemen sudah memiliki konten (telah di-prerender)
	  if (appElement.firstChild) {
		hydrate(<App />, appElement);
	  } else {
		// Jika tidak ada konten, gunakan render biasa (jarang terjadi)
		import('preact').then(({ render }) => {
		  render(<App />, appElement);
		});
	  }
	}
  }

export async function prerender(data) {
  return await ssr(<App {...data} />);
}

import { useLocation } from 'preact-iso';
import { Carousel } from './Carousel'; // Import the Carousel component


export function Header() {
	const { url } = useLocation();
	
	// Navigation links
	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About Us', path: '/about' },
		{ name: 'Our Gallery', path: '/gallery' },
		{ name: 'Our Services', path: '/services' },
		{ name: 'Our Clients', path: '/clients' },
		{ name: 'Sewa Alat', path: '/sewa' },
		{ name: 'Contact', path: '/contact' }
	];

	return (
		<header className="w-full h-auto bg-gray-500">
			<img src="../src/assets/HeaderBanner.png" alt="" className="object-fill" />

			{/*CAROUSEL HERE*/}
			< Carousel />

			<nav className="flex flex-row bg-gradient-to-t from-red-500 to-red-300 p-4">
				<div className="mx-auto flex justify-center items-center">
					<ul className="flex justify-between space-x-12">
						{navLinks.map(link => (
							<li key={link.path}>
								<a 
									href={link.path} 
									className={`text-gray-100 text-lg font-semibold hover:text-red-700 transition duration-300 ${
										url === link.path ? 'font-bold text-lg border-b-4 border-white hover:border-red-700 transition duration-300' : ''
									}`}
								>
									{link.name}
								</a>
							</li>
						))}
					</ul>
					

				</div>
			</nav>
		</header>
	);
}
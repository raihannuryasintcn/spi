import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<div className="HeaderBanner1"></div>
			<div className="HeaderCarousel"></div>
			<nav></nav>
		</header>
	);
}

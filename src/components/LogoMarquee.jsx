// Import your logos here
import logo1 from '../assets/clients/1.png';
import logo2 from '../assets/clients/2.png';
import logo3 from '../assets/clients/3.png';
import logo4 from '../assets/clients/4.png';
import logo5 from '../assets/clients/5.png';
import logo6 from '../assets/clients/6.png';
import logo7 from '../assets/clients/7.png';
import logo8 from '../assets/clients/8.png';
import logo9 from '../assets/clients/9.png';
import logo10 from '../assets/clients/10.png';
import logo11 from '../assets/clients/11.png';
import logo12 from '../assets/clients/12.png';
import logo13 from '../assets/clients/13.png';
import logo14 from '../assets/clients/14.png';
import logo15 from '../assets/clients/15.png';
import logo16 from '../assets/clients/16.png';
import logo17 from '../assets/clients/17.png';
import logo18 from '../assets/clients/18.png';
import logo19 from '../assets/clients/19.png';
import logo20 from '../assets/clients/20.png';


const LogoMarquee = () => {
  const logos = [
    { src: logo1, alt: 'Logo 1' },
    { src: logo2, alt: 'Logo 2' },
    { src: logo3, alt: 'Logo 3' },
    { src: logo4, alt: 'Logo 4' },
    { src: logo5, alt: 'Logo 5' },
    { src: logo6, alt: 'Logo 6' },
    { src: logo7, alt: 'Logo 7' },
    { src: logo8, alt: 'Logo 8' },
    { src: logo9, alt: 'Logo 9' },
    { src: logo10, alt: 'Logo 10' },
    { src: logo11, alt: 'Logo 11' },
    { src: logo12, alt: 'Logo 12' },
    { src: logo13, alt: 'Logo 13' },
    { src: logo14, alt: 'Logo 14' },
    { src: logo15, alt: 'Logo 15' },
    { src: logo16, alt: 'Logo 16' },
    { src: logo17, alt: 'Logo 17' },
    { src: logo18, alt: 'Logo 18' },
    { src: logo19, alt: 'Logo 19' },
    { src: logo20, alt: 'Logo 20' },




  ];

  return (
    <div className="relative w-full overflow-hidden py-8 group">
      <div className="flex animate-marquee group-hover:animate-pause">
        {/* Double the logos to create seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 px-6 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-28 w-auto object-fill"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
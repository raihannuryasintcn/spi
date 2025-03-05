import React, { useState } from 'react';
import { Heading } from '../components/Heading';
import { Sidebar } from '../components/Sidebar';
import main from '../assets/main.png'


// Import available images
import foto1 from '../assets/gallery/1.jpg';
import foto2 from '../assets/gallery/2.jpg';
import foto3 from '../assets/gallery/3.jpg';
import foto4 from '../assets/gallery/4.jpg';
import foto5 from '../assets/gallery/5.jpg';


export function Gallery() {
    const images = [
        { src: foto1, alt: 'foto1' },
        { src: foto2, alt: 'foto2' },
        { src: foto3, alt: 'foto3' },
        { src: foto4, alt: 'foto4' },
        { src: foto5, alt: 'foto5' },

    ];

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="grid grid-cols-12 w-full h-auto">
            <div className="bg-gray-100 w-full p-4 col-span-9">
            <div className="flex items-center pb-4">
                    <img src={main} alt="" className="object-fill"/>
                </div>
                <Heading title="GALERI"/>
                <div className="relative py-4">
                    <img
                        src={images[currentImage].src}
                        alt={images[currentImage].alt}
                        className="w-full h-96 object-contain"
                    />
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full z-10"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full z-10"
                    >
                        &gt;
                    </button>
                </div>
                <div className="flex flex-wrap justify-center mt-4">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={`w-20 h-20 object-cover m-1 cursor-pointer ${
                                index === currentImage ? 'border-2 border-blue-500' : ''
                            }`}
                            onClick={() => setCurrentImage(index)}
                        />
                    ))}
                </div>
            </div>

            <Sidebar />
        </div>
    );
}
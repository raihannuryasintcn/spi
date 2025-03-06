import { Heading } from "../components/Heading"
import { Sidebar } from "../components/Sidebar"
import main from '../assets/main.png'


export function Contact(){
    return(
        <div className="grid grid-cols-12 w-full h-auto">
            <div className="bg-gray-100 w-full p-4 col-span-9">
                <div className="text-red-500 italic">
                    <marquee behavior="scroll" direction="left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet delectus harum voluptatum excepturi rerum illum cum sint earum perferendis labore.</marquee>
                </div>
                <div className="flex items-center pb-4">
                    <img src={main} alt="" className="object-fill"/>
                </div>
                <Heading title="KONTAK KAMI"/>
                <div className="grid grid-cols-12 justify-center py-4">
                    <div className="flex flex-col col-span-6 text-left justify-center">
                        
                        <h1 className="text-gray-700 text-xl pb-4 font-semibold">PT SCARLET POWER INDONESIA</h1>
                        <h1 className="text-gray-700 text-xl pb-4 font-semibold">OFFICE/WORKSHOP</h1>
                        <p className="text-gray-600 pr-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime placeat animi dignissimos, dolore possimus!</p>
                        <h1 className="text-gray-700 text-xl py-4 font-semibold">CONTACT PERSON</h1>
                        <p className="text-gray-600 pr-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime placeat animi dignissimos, dolore possimus!</p>

                    </div>

                    <div className="flex flex-col justify-center col-span-6">

                        {/* image strangely have 24px margin bottom */}
                        <img src="https://placehold.co/600x400?text=Product+Image" alt="" className="mb-0"/>
                    </div>

                </div>

                <div className="flex justify-center items-center">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.360498726447!2d107.13689237586956!3d-6.347344362101454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699957e671f83d%3A0x9ff34f176e6ff168!2sPT.%20Scarlet%20Power%20Indonesia!5e0!3m2!1sen!2sid!4v1741185518543!5m2!1sen!2sid" 
                        width="750" 
                        height="450" 
                        style="border:0;" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>
            


            <Sidebar /> 
        </div>
    
    )
}
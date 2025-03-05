export function Home(){
    return(
        <div className="grid grid-cols-12 w-full h-auto">
            <div className="bg-gray-100 w-full p-4 col-span-9">
                <h1 className="bg-gray-300 p-4 text-2xl text-gray-700 font-bold text-left">PROFIL SPI AC SPECIALIST</h1>
                <p className="text-gray-600 py-4 text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti laudantium quas animi vel eaque architecto ratione, nisi asperiores fuga in iusto accusantium nemo maiores necessitatibus? Placeat unde saepe odio laudantium?</p>
                <h1 className="text-blue-500 pb-4 text-xl font-semibold">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sapiente repudiandae ducimus doloremque blanditiis, dicta quisquam reiciendis excepturi aut saepe."</h1>
                
                <div className="grid grid-cols-12 justify-center">
                    <div className="flex flex-col col-span-6 text-left justify-center">
                        
                        <h1 className="text-gray-700 text-xl pb-4 font-semibold">LATAR BELAKANG PERUSAHAAN</h1>
                        <p className="text-gray-600 pr-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum obcaecati sint quia temporibus laboriosam, eaque odio maxime reprehenderit placeat voluptas voluptatibus explicabo quo dolorem mollitia fuga, et earum neque. Laudantium, amet, praesentium error earum dicta molestias ad beatae quisquam ab nam obcaecati id consequuntur soluta mollitia voluptatibus, suscipit recusandae?</p>

                    </div>

                    <div className="flex flex-col justify-center col-span-6">

                        {/* image strangely have 24px margin bottom */}
                        <img src="https://placehold.co/600x400?text=Product+Image" alt="" className="mb-0"/>
                    </div>

                </div>

                <div className="text-left py-4">
                        
                        <h1 className="text-gray-700 text-xl font-semibold">VISI</h1>
                        <p className="text-gray-600 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quod facilis ipsam, assumenda rem amet, enim quaerat doloremque quibusdam dolorem esse. Ullam odit impedit, iusto quae consequuntur sequi reiciendis delectus?</p>

                        <h1 className="text-gray-700 text-xl pt-4 font-semibold">MISI</h1>
                        <p className="text-gray-600 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quod facilis ipsam, assumenda rem amet, enim quaerat doloremque quibusdam dolorem esse. Ullam odit impedit, iusto quae consequuntur sequi reiciendis delectus?</p>

                </div>  
                <h1 className="bg-gray-300 p-4 text-2xl text-gray-700 font-bold text-left">OUR CLIENTS</h1>
                
                


            </div>


            <div className="bg-gray-300 w-full p-4 col-span-3 text-center">
                <h1 className="bg-white p-4 text-xl text-gray-700 font-bold">WAKTU SEKARANG</h1>
                <div className="my-4">
                    <h1 className="bg-gradient-to-t from-blue-700 to-blue-500 p-4 text-xl text-gray-200 font-bold">JOIN OUR SOCMED</h1>
                    <div className="h-40 bg-white grid grid-cols-12 place-items-center">
                        <i class="fa-brands fa-facebook fa-2xl col-span-4"></i>                    
                        <i class="fa-brands fa-twitter fa-2xl col-span-4"></i>
                        <i class="fa-brands fa-youtube fa-2xl col-span-4"></i>                    
                    </div>
                </div>

                <div className="my-4">
                    <h1 className="bg-gradient-to-t from-blue-700 to-blue-500  p-4 text-xl text-gray-200 font-bold">TRANSLATE THIS WEBSITE</h1>
                    <div className="h-40 bg-white grid grid-cols-12 place-items-center">
                        <i class="fa-solid fa-flag fa-2xl col-span-6"></i>                    
                        <i class="fa-solid fa-flag-checkered fa-2xl col-span-6"></i>                   
                    </div>
                </div>

            </div>
        </div>
    )
}
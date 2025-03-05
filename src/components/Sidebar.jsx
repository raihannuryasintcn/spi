import { getCurrentDate } from "./Date"

export function Sidebar(){
    return(
        <div className="bg-gray-300 w-full p-4 col-span-3 text-center">
            <h1 className="bg-white p-4 text-xl text-gray-700 font-bold">{getCurrentDate()}</h1>

            <div className="my-4">
                <h1 className="bg-gradient-to-t from-blue-700 to-blue-500 p-4 text-xl text-gray-200 font-bold">JOIN OUR SOCMED</h1>
                <div className="h-40 bg-white grid grid-cols-12 place-items-center text-blue-500">
                    <i class="fa-brands fa-facebook fa-2xl col-span-4"></i>                    
                    <i class="fa-brands fa-twitter fa-2xl col-span-4"></i> 
                    <i class="fa-brands fa-youtube fa-2xl col-span-4"></i>                    
                </div>
            </div>

            <div className="my-4">
                <h1 className="bg-gradient-to-t from-blue-700 to-blue-500  p-4 text-xl text-gray-200 font-bold">TRANSLATE THIS WEBSITE</h1>
                <div className="h-40 bg-white grid grid-cols-12 place-items-center text-blue-500   ">
                    <i class="fa-solid fa-flag fa-2xl col-span-6"></i>                    
                    <i class="fa-solid fa-flag-checkered fa-2xl col-span-6"></i>                   
                </div>
            </div>

        </div>
    )
}
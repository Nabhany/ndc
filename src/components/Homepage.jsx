import React from "react";
// import { FaInfinity } from "react-icons/fa";
import background from "../assets/devops.jpg";


function Homepage() {
  return (
    <div>
     
      <div class="relative bg-cover bg-no-repeat bg-center md:flex"  style={{ backgroundImage: `url(${background})` }}>
            <div class=" py-16 flex flex-col justify-center items-center inset-0 bg-black opacity-90 text-center text-white p-10">
                <h2 class="antialiased tracking-wide font-serif text-2xl sm:text-2xl md:text-3xl  lg:text-8xl">Promoting Collaboration, Innovation, and best practices within the DevOps
  industry in Nairobi.</h2>
                
                <button class="bg-transparent hover:bg-[#0da4d4] text-[#0da4d4] font-bold hover:text-black py-2 px-6 my-4 border border-[#0da4d4] rounded inline-flex items-center">
                    <span>Find out more</span>
                    <svg class="ml-2 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </div>
      
    </div>
    
  );
}

export default Homepage;

<div className="text-center text-6xl font-['Poppins'] font-bold text-white w-full">
  Promoting Collaboration, Innovation, and best practices within the DevOps
  industry in Nairobi.
</div>
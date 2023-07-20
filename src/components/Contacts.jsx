import React from 'react'

function Contacts() {
  return (
   
  <div className="flex flex-row  items-center">

  <div className="bg-[#d9d9d9] flex flex-col ml-8 gap-5 items-start pt-10 pb-20 px-16">
    <div className="whitespace-nowrap text-5xl font-['Poppins'] font-bold mb-10 w-[297px]">
      Get in touch
    </div>
    <div className="text-3xl font-['Poppins'] ml-3 w-24">Name</div>
    <div className="bg-white self-stretch h-20 shrink-0 mb-5 mx-3" />
    <div className="text-3xl font-['Poppins'] ml-3 w-20">Email</div>
    <div className="bg-white self-stretch h-20 shrink-0 mb-5 mx-3" />
    <div className="text-3xl font-['Poppins'] ml-3 w-24">Phone</div>
    <div className="bg-white self-stretch h-20 shrink-0 mb-5 mx-3" />
    <div className="whitespace-nowrap text-3xl font-['Poppins'] ml-3 w-2/5">
      How would you like to partner/sponsour us?
    </div>
    <div className="bg-white self-stretch h-[408px] shrink-0 mb-8 mx-3" />
    <div className="bg-[#111a6d] flex flex-col justify-center ml-3 h-[108px] shrink-0 items-center">
      <div className="text-3xl font-['Poppins'] text-white w-[114px] ml-[108px] mr-[110px]">
        Submit
      </div>
    </div>
    </div>
    </div>
    


   
  )
}

export default Contacts;

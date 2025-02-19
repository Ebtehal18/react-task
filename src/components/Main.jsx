import React from "react";

export default function Main() {
  return <main className="h-screen bg-no-repeat md:bg-contain bg-cover bg-[url('/hero.png')] flex flex-col items-center">
  
<div className="overflow-hidden">
   <div className="flex items-center mt-14 justify-center gap-5 ">
    <img src="./icon.png" alt="icon" />
  <div className="flex flex-col text-[#6D91EE] leading-none">
  <h1 className="md:text-[60px] text-[30px] font-light m-0">Round Rock
    </h1>
        <span className="tracking-[15px] text-[21px] font-extrabold">Trush Hauling</span>
  </div>
   </div>
</div>


<div className="mt-12 text-center text-[#4F4F4F]">
<button className="btn">Experts</button>
<div className="flex flex-col  mt-2  md:text-[96px] text-[40px] leading-none ">
  <h2 className="font-[250] m-0">Lorem</h2>
  <span className="font-[900]"> Lorem lorem</span>
</div>
<p className="max-w-[600px] my-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
<button className="btn md:py-[25px] md:px-[91px] px-[30px] py-[15px] bg-[#5180F6] ">Help Me</button>
</div>
  </main>
  ;
}

import React from "react";

export default function About() {
  return <section className="flex flex-col bg-[#6D91EE]">
  <div className="relative flex flex-col md:flex-row">
     <div className="about md:h-screen px-4 md:px-0">
     <div className="md:w-3/4 flex flex-col items-center text-white ">
     <div className="mt-[43px] ">
        <h2 className="heading-about">About Us</h2>
        <p className="max-w-[550px] my-[30px] text-[18px] line-[24px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
        <img src="./small-about.png" alt="about-img" width={420} className="rounded-[20px]"/>
      </div>
     </div>
  </div>
  <div className="md:absolute right-0 bottom-0 top-0 md:w-[62%] h-full bg-cover md:bg-[url('/colored-rec.png')] bg-[#6D91EE] md:bg-transparent flex justify-center items-center flex-col px-4 md:px-0 py-4 md:py-0">
  <div className=" md:w-3/4 flex flex-col  text-white  items-end  justify-center ">
  <h2 className="heading-about">Where</h2>
  <p className="max-w-[550px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>

    </div>
   
  </div>
      <button className="btn bg-[#EEC04B] text-[#515151] self-center mb-5 ">Help Me</button>
  </section>
}

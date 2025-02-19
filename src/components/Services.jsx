import React from "react";
import ser1 from "../assets/images/ser-1.png";
import ser2 from "../assets/images/ser-2.png";
import ser3 from "../assets/images/ser-3.png";
import { SecCard } from "./SecCard";

const sec = [
  { id: 1, 
    img: ser1 ,
    title:'Lorem Ipsum',
    paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
  },
  { id: 2,
     img: ser2 ,
     title:'Lorem Ipsum',
         paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
  },
  { id: 3, 
    img: ser3,
     title:'Lorem Ipsum',
         paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
   },
];


export default function Services() {
  return <section className=" mt-[60px]">
  <h3 className="heading-page mx-auto text-center w-fit relative p-4 overflow-hidden">Services
  <span className="absolute inset-0 border-2 border-blue-500 rotate-[-185deg] "></span>
  </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] max-w-7xl mx-auto mt-[50px] px-4 md:px-0">
{sec.map(service=><SecCard service={service} key={service.id}/>)}
</div>
<div className=" text-center"><button className="btn text-center mt-[50px] md:py-[25px] md:px-[90px] px-[30px] py-[15px] ">Help Me</button></div>
  </section>;
}

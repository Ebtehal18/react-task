import React from "react";
import test1 from "../assets/images/test-1.png";
import TestCard from "./TestCard";

const test = [
  { 
    id: 1, 
    img: test1, 
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    heading:'Lorem Ipsum',
    rating:5
  },
  { id: 2, 
    img: test1,
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      heading:'Lorem Ipsum',
      rating:5

   },
  { id: 3,
   img: test1,
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      heading:'Lorem Ipsum',
      rating:5

   },
  { id: 4, 
    img: test1 ,
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      heading:'Lorem Ipsum',
      rating:5

  },
];


export default function Testimonials() {
  return (
    <section className="mt-[60px]">
      <h3 className="heading-page mx-auto text-center w-fit relative p-4 overflow-hidden">Testimonials
      <span className="absolute inset-0 border-2 border-blue-500 rotate-[-185deg] "></span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] max-w-7xl mx-auto px-4 md:px-0 mt-[50px]">
        {test.map((service) => (
          <TestCard test={service} key={service.id} />
        ))}
      </div>
    </section>
  );
}

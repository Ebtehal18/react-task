import { MdOutlineStar } from "react-icons/md";

export default function TestCard({ test }) {
    return (
      <div className="rounded-[40px] flex items-start gap-[45px] shadow-md p-[30px] border border-[#6D91EE]">
        <img src={test.img} className="rounded-md " alt="Testimonial" width={80} height={80} />
        <div className=" bg-white ">
          <h4 className="text-[#6D91EE] font-[700]">{test.heading}</h4>
          <p className="text-left text-[#22366A] text-[14px] mt-[13px] ">
        {test.paragraph}
          </p>
        <div className="flex mt-[10px]">
        {Array.from({length:test.rating},()=><span className="text-[#6D91EE]"><MdOutlineStar size={15} />
        </span>)} 
        </div>
        </div>
      </div>
    );
  }
  
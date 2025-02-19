export function SecCard({ service }) {
    return (
      <div className="shadow-md rounded-[20px] overflow-hidden bg-white">
        <img src={service.img} className="rounded-t-[20px] w-full" />
        <div className="p-[30px]">
          <h4 className="text-[#324473] text-[16px] font-[900]">{service.title}</h4>
          <p className="text-left text-[#324473] text-[14px] mt-[10px]">{service.paragraph}</p>
        </div>
      </div>
    );
  }
  
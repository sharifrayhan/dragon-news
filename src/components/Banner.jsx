import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Banner = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("news_data.json")
      .then((result) => result.json())
      .then((data) => setInfo(data));
  }, [info]);
 
  return (
    <div className=" flex items-center gap-3 bg-[#F3F3F3] p-4 mt-3">
      <button className=" bg-[#D72050] font-medium text-white px-4 py-1">Latest</button>
      <div className=" font-semibold">
        <Marquee pauseOnHover={true}>
            {
            
            info.map((set) => set.subtitle).join(" ** ")

            }
            </Marquee>
      </div>
    </div>
  );
};

export default Banner;

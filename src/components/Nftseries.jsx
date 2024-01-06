import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";
import five from "../assets/images/5.png";
import Six from "../assets/images/6.png";
import { FaArrowRightLong } from "react-icons/fa6";
 
const Nftseries = () => {
  const cards = [
    {
      img: one,
      heading: "Diamond Helment #001",
      roundImg: Six,
      create: "Create",
      title: "Hathor Union",
      current: "Current Bid",
      ETH: "4.89 ETH",
      
    },
    {
      img: two,
      heading: "Diamond Helment #001",
      roundImg: five,
      create: "Create",
      title: "Hathor Union",
      current: "Current Bid",
      ETH: "5.29 ETH",
      
    },
    {
      img: three,
      heading: "Diamond Helment #001",
      roundImg: four,
      create: "Create",
      title: "Hathor Union",
      current: "Current Bid",
      ETH: "6.56 ETH",

    },
  ];
  return (
    <div>
      <div className="bg-black flex justify-between">
        <div className="ml-[5rem]">
          <p className="text-[#ccfe01] font-semibold text-6xl text-center">
            NFT <span className="text-white leading-snug">SERIES</span>
          </p>
        </div>
        <div className="text-white mr-[3rem]">
          <FaArrowRightLong className="w-[10rem] h-[3rem]"/>
        </div>
      </div>
      <div className="w-full min-h-screen flex justify-center items-center bg-black p-5 lg:p-20">
        <div className="text-white rounded-3xl lg:flex lg:justify-center lg:items-center gap-4">
          {cards.map((card, item) => (
            <div
              key={item}
              className="flex flex-col gap-4 bg-stone-900 p-5 rounded-3xl mt-5 lg:mt-0"
            >
              <img
                src={card.img}
                alt="four"
                className="w-full h-full object-contain"
              />
              <h1 className="text-left mt-2 font-semibold text-2xl">
                {card.heading}
              </h1>
              <div className="hidden lg:flex justify-center items-center gap-6">
                <img
                  src={card.roundImg}
                  alt=""
                  className="w-[5rem] h-[5rem] rounded-3xl"
                />
                <div>
                  <p className="text-gray-600 font-bold my-2">{card.create}</p>
                  <p>{card.title}</p>
                </div>
 
                <div className="ml-[2.2rem]">
                  <p className="text-gray-600 font-bold my-2">{card.current}</p>
                  <p>{card.ETH}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default Nftseries;
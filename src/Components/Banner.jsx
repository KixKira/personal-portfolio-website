import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import img from '../assets/BannerIMG.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
      AOS.init({
        easing: "ease-out-quart",
        delay: 0,
        duration: 750,
      });    
  }, [1000])
 
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-[#f7f8f9]">
        <h1 data-aos='fade-left' className="text-[52px] font-semibold mb-8 leading-normal uppercase">
          Welcome To <span className="text-[#acbdd3]">My Website</span>
        </h1>
        <p data-aos='fade-right'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis hic
          sit odio quo nihil quasi voluptatem amet numquam nulla eligendi.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="#"
                className="text-[#acbdd3] hover:text-[#cbc6c3] rounded-full glow p-2"
              >
                <AiOutlineGithub className="text-[28px]" />
              </a>
            </div>
            <div className="flex space-x-2">
              <a
                href="#"
                className="text-[#acbdd3] hover:text-[#cbc6c3] rounded-full glow p-2"
              >
                <AiOutlineLinkedin className="text-[28px]" />
              </a>
            </div>
            <div className="flex space-x-2">
              <a
                href="#"
                className="text-[#acbdd3] hover:text-[#cbc6c3] rounded-full glow p-2"
              >
                <AiOutlineTwitter className="text-[28px]" />
              </a>
            </div>
            <div className="flex space-x-2">
              <a
                href="#"
                className="text-[#acbdd3] hover:text-[#cbc6c3] rounded-full glow p-2"
              >
                <AiOutlineInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src={img}
        width={290}
        height={290}
        className="rounded-full border-2 p-1 border-[#acbdd3] img_glow"
        alt=""
        data-aos='fade-up'
      />
    </div>
  );
};

export default Banner;

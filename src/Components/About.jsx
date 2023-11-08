import img from '../assets/AboutIMG.png'

const About = () => {
  return (
    <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <img
        src={img}
        width={290}
        height={290}
        className="rounded border-2 p-1 border-[#acbdd3] img_glow"
        alt=""
        data-aos='fade-down'
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-[#f7f8f9]">
        <h1 data-aos='fade-right' className="text-[52px] font-semibold mb-8 leading-normal uppercase text-[#acbdd3]">
          About Me
        </h1>
        <p data-aos='fade-left'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis hic
          sit odio quo nihil quasi voluptatem amet numquam nulla eligendi.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button className="neno-button shadow-xl hover:shadow-[#5d80b6] text-[#f7f8f9] border-2 hover:bg-[#5d80b6] border-[#5d80b6] rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
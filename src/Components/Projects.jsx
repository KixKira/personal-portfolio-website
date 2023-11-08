import img1 from '../assets/Project1.png'
import img2 from '../assets/Project2.jpg'
import img3 from '../assets/Project3.jpg'
import img4 from '../assets/Project4.jpg'

const Projects = () => {
  return (
    <div id='Projects' className="p-20 flex flex-col items-center justify-center">
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-[#acbdd3]"
      >
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <img
          data-aos="fade-down"
          height={300}
          width={250}
          className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-[#acbdd3] b_glow"
          src={img1}
          alt=""
        />
        <img
          data-aos="fade-up"
          height={300}
          width={250}
          className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-[#acbdd3] b_glow"
          src={img2}
          alt=""
        />
        <img
          data-aos="fade-down"
          height={300}
          width={250}
          className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-[#acbdd3] b_glow"
          src={img3}
          alt=""
        />
        <img
          data-aos="fade-up"
          height={300}
          width={250}
          className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-[#acbdd3] b_glow"
          src={img4}
          alt=""
        />
      </div>
    </div>
  );
}

export default Projects
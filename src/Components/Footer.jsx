import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-[#f7f8f9] lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0 ">
          <span className="text-3xl font-semibold text-[#acbdd3] py-2 uppercase">
            Logo
          </span>
          <p className="text-[16px] my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            consequatur.
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-[#acbdd3] py-2 uppercase">
            Services
          </h2>
          <ul className="text-[16px]">
            <li className="my-3">Web Design</li>
            <li className="my-3">Web Development</li>
            <li className="my-3">SEO</li>
            <li className="my-3">E-commerce</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-[#acbdd3] py-2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] my-4">Email: youremail@mail.com</p>
          <p className="text-[16px] my-4">Phone: +12 345 678-9012</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-[#acbdd3] py-2 uppercase">
            Follow Me
          </h2>
          <div className="flex space-x-4">
            <a className="text-[#f7f8f9] hover:text-[#cbc6c3] transition-all duration-150 ease-in-out" href="#">
              <AiOutlineGithub />
            </a>
            <a className="text-[#f7f8f9] hover:text-[#cbc6c3] transition-all duration-150 ease-in-out" href="#">
              <AiOutlineLinkedin />
            </a>
            <a className="text-[#f7f8f9] hover:text-[#cbc6c3] transition-all duration-150 ease-in-out" href="#">
              <AiOutlineTwitter />
            </a>
            <a className="text-[#f7f8f9] hover:text-[#cbc6c3] transition-all duration-150 ease-in-out" href="#">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
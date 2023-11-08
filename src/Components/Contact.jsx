const Contact = () => {
  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1 data-aos='fade-left' className="text-[52px] font-semibold mb-20 leading-normal uppercase text-[#acbdd3]">
        Contact Me
      </h1>
      <form action="" className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-6">
          <input className="w-full lg:my-3 my-4 rounded-lg bg-[#5d80b6] p-4 border-2 border-[#acbdd3] b_glow text-xl text-[#f7f8f9]" placeholder="Enter your name" type="text" />
          <input className="w-full lg:my-3 my-4 rounded-lg bg-[#5d80b6] p-4 border-2 border-[#acbdd3] b_glow text-xl text-[#f7f8f9]" placeholder="Enter your email" type="email" />
        </div>
        <textarea className="w-full my-3 rounded-lg bg-[#5d80b6] p-4 border-2 border-[#acbdd3] b_glow text-xl text-[#f7f8f9]" placeholder="Write your message..." name="" id="" cols="30" rows="5"></textarea>
        <button className="neno-button shadow-xl hover:shadow-[#5d80b6] text-[#f7f8f9] border-2 border-[#acbdd3] bg-[#5d80b6] hover:bg-[#101e5a] rounded-lg py-4 px-8 uppercase relative overflow-hidden b_glow text-xl text-bold mb-10 my-6" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import About from "./Components/About"
import Services from "./Components/Services"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { useEffect, useState } from "react"
import { MutatingDots } from "react-loader-spinner"

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      {loading ? (
        <div className="bg-[#101e5a] h-[100vh] flex justify-center items-center">
          <MutatingDots
            height="100"
            width="100"
            color="#acbdd3"
            secondaryColor="#acbdd3"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="bg-[#101e5a]">
          <Nav />
          <Banner />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App

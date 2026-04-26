import Hero from "../../components/sections/Hero/Hero"
import NavBar from "../../components/Navbar/NavBar"
import About from "../../components/sections/About/About"
import Projects from "../../components/sections/Projects/Projects"
const Home = () => {

  return (
    <>
      <NavBar/>
      <Hero />
      <About/>
      <Projects/>
    </>
  )
}

export default Home

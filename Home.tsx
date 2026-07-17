import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import About from '../sections/About'
import Videos from '../sections/Videos'
import Services from '../sections/Services'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="bg-[#0a0a12] font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Videos />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

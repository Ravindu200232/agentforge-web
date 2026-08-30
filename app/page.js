import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Problem from '@/components/Problem'
import Steps from '@/components/Steps'
import Gallery from '@/components/Gallery'
import DownloadSection from '@/components/DownloadSection'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Steps />
        <Gallery />
        <DownloadSection />
        <Team />
      </main>
      <Footer />
    </>
  )
}

import Header from '../components/Header'
import Hero from '../components/Hero'
import Project from '../components/Project'
import WorkTogether from '../components/WorkTogether'
import UseAsExtension from '../components/UseAsExtension'
import Customise from '../components/Customise'
import Pricing from '../components/Pricing'
import EveryWhere from '../components/EveryWhere'
import DataSection from '../components/DataSection'
import Sponsors from '../components/Sponsors'
import FavoriteApps from '../components/FavoriteApps'
import Testimonials from '../components/Testimonials'
import WhitepaceToday from '../components/WhitepaceToday'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Project />
      <WorkTogether />
      <UseAsExtension />
      <Customise />
      <Pricing />
      <EveryWhere />
      <DataSection />
      <Sponsors />
      <FavoriteApps />
      <Testimonials />
      <WhitepaceToday />
      <CallToAction />
      <Footer />
      </main>
      )
}
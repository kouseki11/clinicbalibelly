import Header from './components/Header'
import Footer from './components/Footer'
import FloatButton from './components/FloatButton'
import CartOffcanvas from './components/CartOffcanvas'
import HeroSection from './hero'
import FeaturedSection from './featured'
import EffectsSection from './effects'
import ReviewsSection from './reviews'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
        <EffectsSection />
        <ReviewsSection />
      </main>
      <Footer />
      <FloatButton />
      <CartOffcanvas />
    </>
  )
}
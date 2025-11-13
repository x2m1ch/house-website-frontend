import Header from './modules/Header'
import Hero from './modules/Hero'
import Catalog from './modules/Catalog'
import Promo from './modules/Promo'
import OurTeam from './modules/OurTeam'
import Footer from './modules/Footer'

import './reset.css'

const App = () => {
  return (
    <> 
      <Header />

      <main>
        <Hero />
        <Catalog />
        <Promo />
        <OurTeam />
      </main>

      <Footer />
    </>
  )
}

export default App

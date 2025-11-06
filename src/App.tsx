import logo from './assets/favicon/icon.svg'
import birdHero from './assets/sections/main/hero/bird.png'

import './styles/header.css'
import './styles/reset.css'
import './styles/hero.css'

const App = () => {
  return (
    <> 
      <header>
        <a className='logo' href="/">
          <img src={logo} alt="" />
          <h1 className='icon'>Ink. House</h1>
        </a>

        <nav>
          <a className='nav-buttons' href="/">Репродукции</a>
          <a className='nav-buttons' href="/">Новинки</a>
          <a className='nav-buttons' href="/">О нас</a>
          <a className='basket' href="/"></a>
        </nav>
      </header>

      <main>
        <section className='hero'>
          <section className="left-hero">
            <img src={birdHero} alt="" />
          </section>

          <section className='right-hero'>
            <h2 className='hero-content-head'>Реплики картин <br /> от <span style={{color: '#598D66'}}>Ink. House</span></h2>
            <p className='hero-content-body'>Высокое качество отрисовки на плотной бумаге или льняном <br /> холсте. Редкие произведения, доступные цены.</p>
            <a href='/' className='hero-button'>Продукция</a>
          </section>
        </section>
      </main>
    </>
  )
}

export default App

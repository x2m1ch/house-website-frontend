import { useState } from 'react'

import logo from './assets/favicon/icon.svg'

import birdHero from './assets/sections/main/hero/bird.png'

import starPromo from './assets/sections/main/promo/star.svg'

import ourTeamImage from './assets/sections/main/our-team/our-team-img.png'
import personImageOne from './assets/sections/main/our-team/team-persons/person-one.svg'
import personImageTwo from './assets/sections/main/our-team/team-persons/person-two.svg'
import personImageThree from './assets/sections/main/our-team/team-persons/person-three.svg'

import FranceCardSection from './modules/franceCardsSection'
import GermanyCardSection from './modules/germanyCardsSection'
import EnglandCardSection from './modules/englandCardsSection'

import facebook from './assets/sections/footer/facebook.svg'
import youtube from './assets/sections/footer/youtube.svg'
import instagram from './assets/sections/footer/instagram.svg'

import './styles/header.css'
import './styles/reset.css'
import './styles/hero.css'
import './styles/catalog.css'
import './styles/promo.css'
import './styles/our-team.css'
import './styles/footer.css'

const App = () => {
  const [stateButtonSwitchCards, setStateButtonSwitchCard] = useState('france')

  const switchCards = () => {
    if (stateButtonSwitchCards == 'france') {
      return <FranceCardSection />
    }

    if (stateButtonSwitchCards == 'germany') {
      return <GermanyCardSection />
    }

    if (stateButtonSwitchCards == 'england') {
      return <EnglandCardSection />
    }
  }

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

        <section className='catalog'>
          <section className="catalog-header">
            <h2 className='catalog-head'>Репродукции</h2>

            <section className="select-country-buttons">
              <button onClick={() => setStateButtonSwitchCard('france')} className='france cards-switch-buttons'>Франция</button>
              <button onClick={() => setStateButtonSwitchCard('germany')} className='germany cards-switch-buttons'>Германия</button>
              <button onClick={() => setStateButtonSwitchCard('england')} className='england cards-switch-buttons'>Англия</button>
            </section>
          </section>

          {switchCards()}
        </section>

        <section className="promo">
          <section className='promo-header'>
            <img src={starPromo} alt="" />
            <h2 className='heading-promo'>Новая коллекция <br /> французских авторов</h2>
          </section>

          <section className='promo-body'>
            <p className='promo-text-body'>Сложно сказать, почему акционеры крупнейших компаний <br /> призывают нас к новым свершениям, которые, в свою <br /> очередь, должны быть заблокированы в рамках своих <br /> собственных рациональных ограничений. <br /><br /> Принимая во внимание показатели успешности, граница <br /> обучения кадров предопределяет высокую <br /> востребованность направлений прогрессивного развития.</p>
            <button className='show-france-picture'>Ознакомиться</button>
          </section>
        </section>

        <section className='our-team-section'>
          <section className="our-team-left">
            <img src={ourTeamImage} alt="" />
          </section>

          <section className="our-team-right">
            <h2 className='our-team-head'>Наша команда</h2>
            <p className='our-team-body'>Значимость этих проблем настолько очевидна, что базовый вектор <br /> развития позволяет оценить значение экспериментов, поражающих <br /> по своей масштабности и грандиозности. Мы вынуждены отталкиваться <br /> от того, что консультация с широким активом.</p>
            <section className="persons">
              <img src={personImageOne} alt="" />
              <img src={personImageTwo} alt="" />
              <img src={personImageThree} alt="" />
            </section>
          </section>
        </section>
      </main>

      <footer>
        <section className="footer-left">
          <div className="logo">
            <img src={logo} alt="" />
            <h2 className='icon'>Ink. House</h2>
          </div>

          <section className='footer-left-bottom'>
            <p style={{ color: '#2C2D35' }}>+7 (999) 543-54-54</p>
            <p>Мастерская</p>
          </section>
        </section>

        <section className="footer-center">
          <section className='footer-column-one footer-center-columns'>
            <h2>Репродукции</h2>
            <section className='columns-body'>
              <p>Франция</p>
              <p>Германия</p>
              <p>Англия</p>
            </section>
          </section>

          <section className="footer-column-two footer-center-columns">
            <h2>Новинки</h2>
            <section className='columns-body'>
              <p>2021</p>
              <p>2020</p>
            </section>
          </section>

          <section className="footer-column-three footer-center-columns">
            <h2>О нас</h2>
            <section className='columns-body'>
              <p>Художники</p>
              <p>Менеджеры</p>
            </section>
          </section>
        </section>

        <section className="footer-right">
          <section className="messanger-logos">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
          </section>

          <section className='rights'>
            <p>Ink. House ®</p>
            <p>All rights reserved</p>
          </section>
        </section>
      </footer>
    </>
  )
}

export default App

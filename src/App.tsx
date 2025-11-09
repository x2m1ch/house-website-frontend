import logo from './assets/favicon/icon.svg'

import birdHero from './assets/sections/main/hero/bird.png'

import starPromo from './assets/sections/promo/star.svg'

import cardFranceImageOne from './assets/sections/catalog/france/column-1-1.jpg' 
import cardFranceImageTwo from './assets/sections/catalog/france/column-1-2.jpg' 
import cardFranceImageThree from './assets/sections/catalog/france/column-1-3.jpg' 
import cardFranceImageFour from './assets/sections/catalog/france/column-2-1.jpg' 
import cardFranceImageFive from './assets/sections/catalog/france/column-2-2.jpg' 
import cardFranceImageSix from './assets/sections/catalog/france/column-2-3.jpg' 

import AddCard from './components/addCard'

import './styles/header.css'
import './styles/reset.css'
import './styles/hero.css'
import './styles/catalog.css'
import './styles/promo.css'

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

        <section className='catalog'>
          <section className="catalog-header">
            <h2 className='catalog-head'>Репродукции</h2>

            <section className="select-country-buttons">
              <button className='france'>Франция</button>
              <button className='germany'>Германия</button>
              <button className='england'>Англия</button>
            </section>
          </section>

          <section className='catalog-body'>
            <AddCard src={cardFranceImageOne} creator="Марсель Руссо" name="Охота Амура" feature="Холст, масло (50х80)" price="14 500 руб"/>
            <AddCard src={cardFranceImageTwo} creator="Анри Селин" name="Дама с собачкой" feature="Акрил, бумага (50х80)" price="16 500 руб"/>
            <AddCard src={cardFranceImageThree} creator="Франсуа Дюпон" name="Процедура" feature="Цветная литография (40х60)" price="20 000 руб"/>
            <AddCard src={cardFranceImageFour} creator="Луи Детуш" name="Роза" feature="Бумага, акрил (50х80)" price="12 000 руб"/>
            <AddCard src={cardFranceImageFive} creator="Франсуа Дюпон" name="Птичья трапеза" feature="Цветная литография (40х60)" price="22 500 руб"/>
            <AddCard src={cardFranceImageSix} creator="Пьер Моранж" name="Пейзаж с рыбой" feature="Цветная литография (40х60)" price="20 000 руб"/>
          </section>
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
      </main>
    </>
  )
}

export default App

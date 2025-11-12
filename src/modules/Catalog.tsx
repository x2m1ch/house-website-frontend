import { useState } from 'react'

import FranceCardSection from '../modules/franceCardsSection'
import GermanyCardSection from '../modules/germanyCardsSection'
import EnglandCardSection from '../modules/englandCardsSection'

import '../styles/catalog.css'

const Catalog = () => {
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
    )
}

export default Catalog
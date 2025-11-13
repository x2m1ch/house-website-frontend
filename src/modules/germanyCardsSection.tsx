import cardGermanyImageOne from '../assets/sections/main/catalog/germany/column-1-1.jpg' 
import cardGermanyImageTwo from '../assets/sections/main/catalog/germany/column-1-2.jpg' 
import cardGermanyImageThree from '../assets/sections/main/catalog/germany/column-1-3.jpg' 
import cardGermanyImageFour from '../assets/sections/main/catalog/germany/column-2-1.jpg' 
import cardGermanyImageFive from '../assets/sections/main/catalog/germany/column-2-2.jpg' 
import cardGermanyImageSix from '../assets/sections/main/catalog/germany/column-2-3.jpg' 

import AddCard from '../components/addCard'

import './styles/catalog.css'

const FranceCardSection = () => {
    return (
        <section className='catalog-body'>
            <AddCard src={cardGermanyImageOne} creator="Курт Вернер" name="Над городом" feature="Цветная литография (40х60)" price="16 000 руб"/>
            <AddCard src={cardGermanyImageTwo} creator="Макс Рихтер" name="Птенцы" feature="Холст, масло (50х80)" price="14 500 руб"/>
            <AddCard src={cardGermanyImageThree} creator="Мартин Майер" name="Среди листьев" feature="Цветная литография (40х60)" price="20 000 руб"/>
            <AddCard src={cardGermanyImageFour} creator="Герман Беккер" name="Яркая птица" feature="Цветная литография (40х60)" price="13 000 руб"/>
            <AddCard src={cardGermanyImageFive} creator="Вульф Бауэр" name="Дятлы" feature="Бумага, акрил (50х80)" price="20 000 руб"/>
            <AddCard src={cardGermanyImageSix} creator="Вальтер Хартманн" name="Большие воды" feature="Бумага, акрил (50х80)" price="23 000 руб"/>
        </section>
    )
}

export default FranceCardSection
import cardFranceImageOne from '../assets/sections/catalog/france/column-1-1.jpg' 
import cardFranceImageTwo from '../assets/sections/catalog/france/column-1-2.jpg' 
import cardFranceImageThree from '../assets/sections/catalog/france/column-1-3.jpg' 
import cardFranceImageFour from '../assets/sections/catalog/france/column-2-1.jpg' 
import cardFranceImageFive from '../assets/sections/catalog/france/column-2-2.jpg' 
import cardFranceImageSix from '../assets/sections/catalog/france/column-2-3.jpg' 

import AddCard from '../components/addCard'

import '../styles/catalog.css'

const FranceCardSection = () => {
    return (
        <section className='catalog-body'>
            <AddCard src={cardFranceImageOne} creator="Марсель Руссо" name="Охота Амура" feature="Холст, масло (50х80)" price="14 500 руб"/>
            <AddCard src={cardFranceImageTwo} creator="Анри Селин" name="Дама с собачкой" feature="Акрил, бумага (50х80)" price="16 500 руб"/>
            <AddCard src={cardFranceImageThree} creator="Франсуа Дюпон" name="Процедура" feature="Цветная литография (40х60)" price="20 000 руб"/>
            <AddCard src={cardFranceImageFour} creator="Луи Детуш" name="Роза" feature="Бумага, акрил (50х80)" price="12 000 руб"/>
            <AddCard src={cardFranceImageFive} creator="Франсуа Дюпон" name="Птичья трапеза" feature="Цветная литография (40х60)" price="22 500 руб"/>
            <AddCard src={cardFranceImageSix} creator="Пьер Моранж" name="Пейзаж с рыбой" feature="Цветная литография (40х60)" price="20 000 руб"/>
        </section>
    )
}

export default FranceCardSection
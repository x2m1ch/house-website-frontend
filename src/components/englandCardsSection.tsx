import cardEnglandImageOne from '../assets/sections/catalog/england/column-1-1.jpg' 
import cardEnglandImageTwo from '../assets/sections/catalog/england/column-1-2.jpg'
import cardEnglandImageThree from '../assets/sections/catalog/england/column-1-3.jpg'  
import cardEnglandImageFour from '../assets/sections/catalog/england/column-2-1.jpg' 
import cardEnglandImageFive from '../assets/sections/catalog/england/column-2-2.jpg' 
import cardEnglandImageSix from '../assets/sections/catalog/england/column-2-3.jpg' 

import AddCard from './addCard'

import '../styles/catalog.css'

const FranceCardSection = () => {
    return (
        <section className='catalog-body'>
            <AddCard src={cardEnglandImageOne} creator="Пол Смит" name="Дикий зверь" feature="Акварель, бумага (50х80)" price="19 500 руб"/>
            <AddCard src={cardEnglandImageTwo} creator="Джон Уайт" name="Скалистый берег" feature="Цветная литография (40х60)" price="17 500 руб"/>
            <AddCard src={cardEnglandImageThree} creator="Джим Уотсон" name="Река и горы" feature="Акварель, бумага (50х80)" price="20 500 руб"/>
            <AddCard src={cardEnglandImageFour} creator="Юджин Зиллион" name="Белый попугай" feature="Цветная литография (40х60)" price="15 500 руб"/>
            <AddCard src={cardEnglandImageFive} creator="Эрик Гиллман" name="Ночная рыба" feature="Бумага, акрил (50х80)" price="12 500 руб"/>
            <AddCard src={cardEnglandImageSix} creator="Альфред Барр" name="Рыжий кот" feature="Цветная литография (40х60)" price="21 000 руб"/>
        </section>
    )
}

export default FranceCardSection
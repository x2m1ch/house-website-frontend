/* eslint-disable @typescript-eslint/no-explicit-any */

import './styles/addcard.css'

const AddCard = (props: any) => {
    return (
        <article className='card'>
            <section className='card-header'>
                <img className='card-image' src={props.src} alt="" />
                <p className='card-creator'>{props.creator}</p>
                <h3 className='card-name'>{props.name}</h3>
                <p className='card-feature'>{props.feature}</p>
            </section>
            
            <section className='card-bottom'>
                <p className='card-price'>{props.price}</p>
                <button className='add-to-basket'>В корзину</button>
            </section>
        </article>
    )
}

export default AddCard
import PropTypes from 'prop-types'

export function CardsView({cards}) {
    return (
        <div className='shop-items'>
            {cards.map((elem, index) => (
                <div key={index} className='shop-item'>
                    <div className="si-info-block">
                        <h2 className="si-title">{elem.name}</h2>
                        <p className="si-desc">{elem.color}</p>
                    </div>
                        <img className="si-img" src={elem.img} alt={`${elem.color} +  nike metcoin 2 shoes`} />
                    <div className="si-price-block">
                        <p className="si-price">${elem.price}</p>
                        <button className="si-buy">Add to Card</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

CardsView.propTypes = {
    cards: PropTypes.array
}
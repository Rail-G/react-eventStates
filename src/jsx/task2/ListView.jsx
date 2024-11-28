import PropTypes from 'prop-types'

export function ListView({cards}) {
    return (
        <div className='list-shop-items'>
            {cards.map((elem, index) => (
                <div key={index} className="list-shop-item">
                  <img className="list-si-img" src={elem.img} alt={`${elem.color} nike metcoin 2 shoes`} />                  
                  <h2 className="si-title">{elem.name}</h2>
                  <p className="list-si-desc">{elem.color}</p>
                  <p className="list-si-price">{`$ ${elem.price}`}</p>
                  <button className="si-buy">Add to Card</button>
              </div>
            ))}
        </div>
    )
}

ListView.propTypes = {
    cards: PropTypes.array
}
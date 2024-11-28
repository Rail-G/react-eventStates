import PropTypes from 'prop-types'
export function ProjectList({sortedItems}) {
    return (
        <div className="gridItems">
            {sortedItems.map((elem, index) => (
                <img key={index} src={elem.img} alt="" />
            ))}
        </div>
    )
}

ProjectList.propTypes = {
    sortedItems: PropTypes.array
}
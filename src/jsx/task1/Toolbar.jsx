import PropTypes from 'prop-types'
export function ToolBar({filters, onSelectFilter}) {
    return (
        <div className="toolBtns">
            {[...filters].map((elem, index) => (
                <button key={index} className="toolBtn" onClick={() => onSelectFilter(elem)}>{elem}</button>
            ))}
        </div>
    )
}

ToolBar.propTypes = {
    filters: PropTypes.object,
    onSelectFilter: PropTypes.func
}
import PropTypes from 'prop-types'

export function IconSwitch({icon, onSwitch}) {
    const newState = icon === 'view_module' ? 'view_list' : 'view_module'
    return (
        <button className={`view-btn ${icon}`} onClick={() => onSwitch(newState)}></button>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string,
    onSwitch: PropTypes.func
}
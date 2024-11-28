import { useState } from "react"
export function DropDown() {
    const [state, useStat] = useState('')
    const OnSwitch = () => {
        const currState = state === 'down' ? '' : 'down'
        useStat(currState)
    }
    return (
        <div className="drop-down-block">
            <button className="dd-btn" onClick={OnSwitch}>Account Setting</button>
            <ul className={`slide ${state}`}>
                <li><a href="">Profile Information</a></li>
                <li><a href="">Change Password</a></li>
                <li><a href="">Become Pro</a></li>
                <li><a href="">Help</a></li>
                <li><a href="">Log Out</a></li>
            </ul>
        </div>
    )
}
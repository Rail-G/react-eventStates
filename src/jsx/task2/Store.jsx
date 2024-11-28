import { Component } from "react";
import PropTypes from 'prop-types'
import { IconSwitch } from "./IconSwitch";
import { CardsView } from "./CardsView";
import { ListView } from "./ListView";

export class Store extends Component {
    constructor(props) {
        super(props)
        this.products = this.props.products
        this.state = {state: 'view_module'}
        this.onSwitch = this.onSwitch.bind(this)
    }

    onSwitch(newState) {
        this.setState({state: newState})
    }

    render() {
        return (
            <>
                <IconSwitch icon={this.state.state} onSwitch={this.onSwitch}/>
                {this.state.state === 'view_module' ? <CardsView cards={this.products} /> : <ListView cards={this.products} />}
            </>
        )
    }
}

Store.propTypes = {
    products: PropTypes.array
}
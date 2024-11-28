import { Component } from "react";
import { ToolBar } from "./Toolbar";
import { ProjectList } from "./ProjectList";
import PropTypes from 'prop-types'

export class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {selected: 'All'}
        this.filters = new Set(this.props.items.map(({category}) => category)).add('All')
        this.sortedItems = this.props.items;
        this.onSelectFilter = this.onSelectFilter.bind(this)
    }

    onSelectFilter(filter) {
        this.setState({selected: filter})
        this.sortedItems = filter === 'All' ? this.props.items : this.props.items.filter(elem => elem.category == filter)
    }

    render() {
        return(
            <>
            <h1>Selected: {this.state.selected}</h1>
            <ToolBar filters={this.filters} onSelectFilter={this.onSelectFilter} />
            <ProjectList sortedItems={this.sortedItems} />
            </>
        )
    }
}

Portfolio.propTypes = {
    items: PropTypes.array
}
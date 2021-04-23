import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: ''
        }

    }

    handleChange = (input) => {
        this.setState({ userInput: input })
    }

    handleClick = () => {
        this.props.filterBooks(this.state.userInput)
        this.setState({ userInput: '' })
    }

    render() {
        return (
            <div>
                <input value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={this.handleClick}> Search </button>
                <button onClick={this.props.reset}> Clear Search </button>
            </div>
        )
    }
}

export default SearchBar
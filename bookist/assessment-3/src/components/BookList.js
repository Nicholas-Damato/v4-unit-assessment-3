import React, { Component } from 'react'


class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        let mappedBooks = this.props.books.map((e) => {
            return (
                <div>
                    <img onClick={() => this.props.addToShelf(e.title)} src={e.img} alt='book-covers' />
                    <h6> {e.title}</h6>
                    <h6> {e.author}</h6>

                </div>
            )
        })

        return (
            <div>
                {mappedBooks}
            </div>
        )
    }
}

export default BookList
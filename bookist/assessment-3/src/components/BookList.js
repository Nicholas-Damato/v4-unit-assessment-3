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
                <div className='booklist-box'>
                    <img className='images' onClick={() => this.props.addToShelf(e.title)} src={e.img} alt='book-covers' />
                    <h6 className='img-text'> {e.title} <br></br> by {e.author}</h6>
                </div>


            )
        })

        return (
            <div className='allbook-box'>
                {mappedBooks}
            </div>
        )
    }
}

export default BookList
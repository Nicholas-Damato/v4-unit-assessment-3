function Shelf(props) {
    let { shelf } = props
    let mappedTitles = shelf.map((e) => {
        return (
            <div>
                {e}
            </div>
        )
    })
    return (
        <div>
            <button className='clear-shelf' onClick={props.clearShelf}> Clear Shelf </button>
            <br></br>
            <ul className='shelf-list'>
                <li> {mappedTitles} </li>
            </ul >

        </div >
    )

}

export default Shelf
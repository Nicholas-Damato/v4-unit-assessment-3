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
        <div className='clear-shelf'>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={props.clearShelf}> Clear Shelf </button>
            {mappedTitles}

        </div>
    )

}

export default Shelf
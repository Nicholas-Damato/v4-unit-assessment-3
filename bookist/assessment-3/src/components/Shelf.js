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
            <h1> I am here </h1>
            {mappedTitles}
            <button onClick={props.clearShelf}> Clear Shelf </button>
        </div>
    )

}

export default Shelf
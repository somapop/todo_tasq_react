import React from "react"

class ItemCount extends React.Component {
    render() {
        return (
            <p>You have {this.props.count} remaining tasqs.</p>
        )
    }
}

export default ItemCount;
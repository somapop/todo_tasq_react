import React from "react"
class AddItem extends React.Component {
    render() {
        //JSX Extended Javascript
        return (
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" id="newItem" placeholder="Type an item here"></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add to List</button>
            </form>



        )

    }
}






export default AddItem;
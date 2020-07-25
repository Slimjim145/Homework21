import React from "react";

function Form(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group" >
                    <label htmlFor="book-search"> Book </label>
                    <input type="text" className="form-control" id="book-search" name={props.name} onChange={props.handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </div>
    )
};
export default Form;
import React from 'react'
import ReactDOM from 'react-dom'
function Form(props) {

    return (

        <form className="form-inline" onSubmit={props.onSubmit}>
            <input type="text" placeholder="Your Name" name="firstName" className="form-control" />
            <input type="number" placeholder="Your Age" name="age" className="form-control" />
            <button type="submit" className="btn btn-primary">ADD</button>
        </form>


    )

}
export default Form;
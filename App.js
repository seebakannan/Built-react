import React from 'react'
import ReactDOM from 'react-dom'
import Form from "./formcomponents/Form";
import Listcontainer from "./formcomponents/Listcontainer";
import Reset from "./formcomponents/Reset.js";
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }


    addHandle = (event) => {
        event.preventDefault();
        if (event.target.firstName.value && event.target.age.value) {
            let listCopy = this.state.list.slice();
            const { firstName, age } = event.target;

            listCopy.push({
                id: new Date().getTime().toString(),
                name: firstName.value,
                age: age.value
            });

            this.setState({
                list: listCopy
            })
        }
        else {
            alert('Please fill the Details')
        }
    };

    handleReset = (event) => {
        event.preventDefault();
        this.setState({
            list: []
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <br></br>
                <Form onSubmit={this.addHandle} />
                <Listcontainer list={this.state.list} />
                <Reset onClick={this.handleReset} />
            </div>
        )
    }
}
export default App;
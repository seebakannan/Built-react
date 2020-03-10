import React from 'react'
import ReactDOM from 'react-dom'
import Form from "./formcomponents/Form";
import Listcontainer from "./formcomponents/Listcontainer";
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    addHandle = (event) => {
        event.preventDefault();
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

    render() {
        return (
            <div className="container-fluid">
                <br></br>
                <Form onSubmit={this.addHandle} />
                <Listcontainer list={this.state.list} />

            </div>
        )
    }
}
export default App;
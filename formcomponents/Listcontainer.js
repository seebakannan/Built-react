import React from 'react'
import Listitems from "./Listitems";
const listContainer = props => (
    <ul className="list-group mt-5">
        {props.list.map(item =>
            (<Listitems key={item.id} name={item.name} age={item.age} />)
        )}
    </ul>
)
export default listContainer; 
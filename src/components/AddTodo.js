import React, { Component } from 'react';

class AddTodo extends Component {
    state = {  }
    render() { 
        return ( 

            <div>
                  <input type = 'text' ref = 'input' />
				
                <button onClick = {(e) => this.handleClick(e)}>
                   Add
                </button>
            </div>

         );
    }

handleClick()
{
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
}

}
 
export default AddTodo;
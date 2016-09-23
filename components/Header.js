import React, { Component, PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';


class Header extends Component {
  handleSave(text) {
    this.props.addTodo(text);
  }

  render() {
    return (
      <div>
        <h2>TODOS</h2>
        <TodoTextInput 
          placeholder="What needs to be done?"
          onSave={this.handleSave.bind(this)} />      
      </div>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
import React, { Component, PropTypes} from 'react';

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props;
    return (
      <input type="checkbox"
        checked={ completedCount === todos.length }
        onChange={ actions.completeAll } />
    )
  }

  render() {
    const { todos, actions } = this.props;
    const completedCount = todos.reduce((count, todo) => {
      return todo.completed ? count + 1 : count;
    }, 0);

    return(
      <section>
        { this.renderToggleAll(completedCount) }
        <ul className="todo-list">
          
        </ul>
      </section>
    )
  }
}

export default MainSection;
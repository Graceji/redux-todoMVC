import React, { Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

class App extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <Header addTodo={actions.addTodo}/>
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
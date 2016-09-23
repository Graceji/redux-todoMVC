import React, { Component, PropTypes } from 'react';
 
class TodoTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    if (e.which === 13) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input type="text" 
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default TodoTextInput;
import React from 'react';
import axios from 'axios';

class AddComment extends React.Component {
  // function to render input box
  // input text field
  // send button (on click call save fuction)
  // function to render button to click when a user wants
  // function save Grab data and send post request comment
  constructor() {
    super();
    this.state = {
      commeting: false,
    };
  }
  renderForm() {
    return (
      <div>
        <textarea ref="newText" defaultValue="Add Comment Here" />
        <button onClick={this.save}>Submit</button>
      </div>
    );
  }

  renderNormal() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ commeting: true });
          }}
        >
          Add Comment
        </button>
      </div>
    );
  }

  save() {
    // does post add to text add to body?
    // best way to pass username and photoId?
    const val = this.refs.newText.value; // grabs value from text area
    axios
      .post(`/api/${this.props.username}/${this.props.photoId}/comments`, { text: val })
      .then(() => {
        this.setState({ commeting: false });
        console.log('Comment Posted');
      });
  }

  render() {
    if (this.state.commeting) {
      return this.renderForm;
    }
    return this.renderNormal;
  }
}

export default AddComment;

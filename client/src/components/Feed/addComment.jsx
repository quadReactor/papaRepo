import React from 'react';
import axios from 'axios';

class AddComment extends React.Component {
  constructor() {
    super();
    this.state = {
      commenting: false,
      message: '',
    };
  }

  handleCommentChange(e) {
    this.setState({ message: e.target.value });
  }

  renderForm() {
    return (
      <div>
        <textarea
          placeholder="Add Comment Here"
          onChange={this.handleMessageChange.bind(this)}
        />
        <button onClick={this.save}>Submit</button>
      </div>
    );
  }

  renderNormal() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ commenting: true });
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
    // axios
    //   .post(`/api/${this.props.username}/${this.props.photoId}/comments`, { text: val })
    //   .then(() => {
    //     this.setState({ commenting: false });
        console.log(val);
      };
  

  render() {
    return (
    <div>
      {this.state.commenting ?
      this.renderForm() :
      this.renderNormal()}
    </div>
    );
  }
}

export default AddComment;

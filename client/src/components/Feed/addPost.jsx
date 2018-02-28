// url comment
import React from 'react';

class AddPost extends React.Component {
  // function to render input box
  // input text field
  // send button (on click call save fuction)
  // function to render button to click when a user wants
  // function save Grab data and send post request comment
  constructor() {
    super();
    this.state = {
      posting: false,
      val: '',
    };
    this.getInput = this.getInput.bind(this);
  }
  getInput(event) {
    this.setState({ val: event.target.value });
  }

  renderForm() {
    return (
      <div>
        <input type="text" value={this.state.val} onChange={this.getInput} />
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
            this.setState({ posting: true });
          }}
        />
      </div>
    );
  }

  save() {
    // does post add to text add to body?
    // best way to pass username and photoId?
    const val = this.refs.newText.value; // grabs value from text area
    const url = this.state.val;
    axios
      .post(`/api/${this.props.username}/content`, { description: val, photoUrl: url })
      .then((res) => {
        console.log('Content Posted');
        this.setState({ posting: false });
      });
  }

  render() {
    if (this.state.posting) {
      return this.renderForm;
    }
    return this.renderNormal;
  }
}

export default AddPost;

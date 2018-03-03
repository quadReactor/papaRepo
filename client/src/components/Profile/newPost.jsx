import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import actions from '../../actions/feed_actions';

// Implement File Upload here
// Implemented MVP Url submission
class NewPost extends React.Component {
  constructor() {
    super();
    this.state = {
      posting: false,
      val: {
        url: '',
        description: '',
      },
    };
    this.urlInput = this.urlInput.bind(this);
    this.descInput = this.descInput.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderNormal = this.renderNormal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  urlInput(event) {
    const value = this.state.val;
    value.url = event.target.value;
    this.setState({ val: value });
  }
  descInput(event) {
    const value = this.state.val;
    value.description = event.target.value;
    this.setState({ val: value });
  }
  handleSubmit() {
    const value = this.state.val;
    axios
      .post(`/api/${this.props.currentUser.username}/content`, {
        description: value.description,
        photoUrl: value.url,
        displayname: this.props.currentUser.displayname,
      })
      .then((res) => {
        this.setState({ 
          posting: false,
          val: {
            url: '',
            description: '',
          },
        });
      });
  }
  renderForm() {
    return (
      <div>
        <form>
          <label>
            URL:
            <input 
              type="text"
              value={this.state.val.url}
              onChange={this.urlInput}
              placeholder="enter url here"
            />
            Description:
            <input
            type="text"
            value={this.state.val.description}
            onChange={this.descInput}
            placeholder="enter description here"
            />
          </label>
        </form>
        <button onClick={this.handleSubmit}>Submit</button>
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
        >
          Add New Post
        </button>
      </div>
    );
  }
  render() {
    if (this.state.posting) {
      return this.renderForm();
    }
    return this.renderNormal();
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps)(NewPost);

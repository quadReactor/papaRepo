import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import axios from 'axios';
import actions from '../../actions/post_actions';
import style from './profile.css'

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
        displayname: this.props.firebaseUser.displayname,
      })
      .then(() => {
        this.setState({
          posting: false,
          val: {
            url: '',
            description: '',
          },
        });
        this.props.refreshCurrentUser();
      });
  }
  renderForm() {
    return (
      <div>
        <form>
          <label>
            URL:
            <input
              className={style.form}
              type="text"
              value={this.state.val.url}
              onChange={this.urlInput}
              placeholder="enter url here"
            />
            Description:
            <input
            className={style.form}
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
          className={style.form}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    refreshCurrentUser: actions.refreshCurrentUser,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    firebaseUser: state.firebaseUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);

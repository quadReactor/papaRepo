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
        file:null,
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
    this.setState({file:event.target.files[0]})
  }
  descInput(event) {
    const value = this.state.val;
    value.description = event.target.value;
    this.setState({ val: value });
  }
  handleSubmit() {
    const value = this.state.val;
    console.log(this.state.file)
    let file = this.state.file;
    const formData = new FormData();
    formData.append('file',file);
    //formData.append('photoUrl',value.url);
    formData.append('displayname',this.props.firebaseUser.displayname);
    formData.append('description',value.description);

    // {
    //   description: value.description,
    //   photoUrl: value.url,
    //   file: this.state.file,
    //   displayname: this.props.firebaseUser.displayname,
    //   file: this.state.file
    // }
    axios
      .post(`/api/${this.props.currentUser.username}/content`, formData)
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
          Upload:
              <input 
              type="file" 
              onChange={this.urlInput} 
              className={style.form}
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

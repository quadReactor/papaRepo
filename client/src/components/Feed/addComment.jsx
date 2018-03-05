import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './../../actions/feed_actions';
import style from './feed.css';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleCommentChange(e) {
    this.setState({ message: e.target.value });
  }

  handleClick() {
    this.props.addComment(
      this.props.username,
      this.props.photoId,
      this.props.page,
      this.state.message,
      this.props.displayname,
    );
    document.getElementById(this.props.photoId).value = '';
    this.props.getComments();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleClick();
  }

  render() {
    return (
      <div className={style.addcomment}>
        <form onSubmit={this.handleSubmit}>
          <input
            className={style.input}
            id={this.props.photoId}
            type="text"
            placeholder="Add Comment Here"
            value={this.state.message}
            onChange={this.handleCommentChange.bind(this)}
          />
        </form>
        <button
          className={style.button}
          onClick={this.handleClick}
        >Submit
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addComment: actions.addComment,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    page: state.location.type,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);


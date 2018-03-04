import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import actions from './../../actions/feed_actions';

class CommentEntry extends Component {
  timeAgo() {
    return moment(this.props.time).fromNow();
  }

  render() {
    return (
        <div>
          <h3>{this.props.name}</h3>
          <p>{this.props.text}</p>
          <p>{this.timeAgo()}</p>
          {/* <button
            onClick={() => this.props.editComment(
              this.props.username,
              this.props.id,
              this.props.page,
            )}
          >Edit</button> */}
          {
            (this.props.username === this.props.currentUsername) ||
            (this.props.photoUsername === this.props.currentUsername)
            ?
            <button
              onClick={() => {
                this.props.deleteComment(
                  this.props.username,
                  this.props.id,
                  this.props.page,
                );
                this.props.getComments();
              }}
            >Delete Comment</button>
            : null
          }
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    editComment: actions.editComment,
    deleteComment: actions.deleteComment,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    page: state.location.type,
    currentUsername: state.currentUser.username,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentEntry);

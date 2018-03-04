import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import actions from './../../actions/feed_actions';
import style from './feed.css';

class CommentEntry extends Component {
  timeAgo() {
    return moment(this.props.time).fromNow();
  }

  render() {
    return (
        <div className={style.commentbox}>
          <h3 className={style.name}>
            {this.props.name}:
          </h3>
          <p className={style.words}>
            "{this.props.text}"
          </p>
          <p className={style.timeago}>
            {this.timeAgo()}
          </p>
          {/* <button
            onClick={() => this.props.editComment(
              this.props.username,
              this.props.id,
              this.props.page,
            )}
          >Edit</button> */}
          {
            (this.props.username === this.props.firebaseUsername) ||
            (this.props.photoUsername === this.props.firebaseUsername)
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
    firebaseUsername: state.firebaseUser.username,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentEntry);

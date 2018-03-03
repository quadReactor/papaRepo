import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './../../actions/feed_actions';
import style from './feed.css';

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  alreadyLiked() {
    return this.props.likes.includes(this.props.username) ?
      this.setState({ liked: true }) :
      this.setState({ liked: false });
  }

  componentDidMount() {
    this.alreadyLiked();
  }

  render() {
    return (
      <div>
        <div>
          <button
            className={
              this.state.liked ?
              style.likeButtonTrue :
              style.likeButtonFalse
            }
            onClick={() => {
              return this.state.liked ?
              this.props.unlikePhoto(
                this.props.username,
                this.props.photoId,
                this.props.page,
                ) :
              this.props.likePhoto(
                this.props.username,
                this.props.photoId,
                this.props.page,
              );
            }}
          >
          <img
            className={style.heart}
            src="http://clipground.com/images/white-heart-clipart-png-10.png" />
          </button>
        <div className={style.likeS}>'s {this.props.likes.length}</div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    unlikePhoto: actions.unlikePhoto,
    likePhoto: actions.likePhoto,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    username: state.currentUser.username,
    page: state.location.type,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Like);
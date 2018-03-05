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
    if (
      this.props.likes.includes(this.props.username)
      && this.state.liked !== true
    ) {
      this.setState({ liked: true });
    } else if (
      !(this.props.likes.includes(this.props.username))
      && (this.state.liked !== false)
    ) {
      this.setState({ liked: false });
    }
  }
  componentDidMount() {
    this.alreadyLiked();
  }
  componentDidUpdate() {
    this.alreadyLiked();
  }

  likePhoto() {
    this.props.likePhoto(
      this.props.username,
      this.props.photoId,
      this.props.page,
    );
    this.props.refreshCurrentUserWithPage(this.props.page);
  }

  unlikePhoto() {
    this.props.unlikePhoto(
      this.props.username,
      this.props.photoId,
      this.props.page,
    );
    this.props.refreshCurrentUserWithPage(this.props.page);
  }

  render() {
    return (
      <div>
        <div className={style.like}>
          <button
            className={
              this.state.liked ?
              style.likeButtonTrue :
              style.likeButtonFalse
            }
            onClick={() => {
              return this.state.liked
              ? this.unlikePhoto()
              : this.likePhoto();
            }}
          >
          <img
            className={style.heart}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Heart-SG2001-transparent.png/480px-Heart-SG2001-transparent.png" />
          </button>
        <div className={style.likeS}> Like Count: {this.props.likes.length}</div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    unlikePhoto: actions.unlikePhoto,
    likePhoto: actions.likePhoto,
    refreshCurrentUserWithPage: actions.refreshCurrentUserWithPage,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    username: state.firebaseUser.username,
    page: state.location.type,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Like);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Comments from './Comments.jsx';
import style from './feed.css';
import actions from '../../actions/feed_actions';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
    };
    this.getComments = this.getComments.bind(this);
  }
  getComments(user, photoID) {
    this.props.getComments(user, photoID);
  }

  renderPost() {
    return (
      <div className={style.post}>
        <img src={this.props.photo.photoUrl} />
        <div>
          <h3>{this.props.photo.displayname}</h3>
          <p>{this.props.photo.description}</p>
          <p>{this.props.photo.created}</p>
          {/* <Like
            likes={this.props.photo.like}
            username={this.props.username}
            photoId={this.props.photoId}
          /> */}
          <button
            onClick={() => {
              this.getComments(this.props.currentUser.username, this.props.photo.tempId);
              {/* this.getComments(this.props.currentUser.username, this.props.photo._id);  REALCODE*/} 
              this.setState({ showComments: true });
            }}
          >
            View Comments
          </button>
        </div>
      </div>
    );
  }

  renderPostAndComments() {
    return (
      <div>
        <img src={this.props.photo.photoUrl} />>
        <div>
          <h3>{this.props.photo.displayname}</h3>
          <p>{this.props.photo.description}</p>
          <p>{this.props.photo.created}</p>
          {/* <Like
            likes={this.props.post.like}
            username={this.props.username}
            photoId={this.props.photoId}
          /> */}
          <button
            onClick={() => {
              this.getComments();
              this.setState({ showComments: false });
            }}
          >
            Hide Comments
          </button>
        </div>
        <div>
        </div>
      </div>
    );
  }

  render() {
    // dont render coments till clicked
    if (!this.state.showComments) {
      return this.renderPost();
    }
    return this.renderPostAndComments();
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getComments: actions.getComments,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    comments: state.comments,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

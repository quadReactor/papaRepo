import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Comments from '../Feed/comments.jsx';
import Like from '../Feed/like.jsx';
import actions from '../../actions/feed_actions';

class UserPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
    };
    this.getComments = this.getComments.bind(this);
  }
  getComments(user, photoID) {
    // axios.get('/api/user/photoID/comments');
  }

  removePhoto(id) {
    axios.delete(`/api/${id}/content`).then(() => {
      console.log('clicked delete photo', id);
    });
    // rerender page ? get request to update the store current user?
  }

  renderPost() {
    return (
      <div>
        <button onClick={() => this.removePhoto(this.props.photo._id)}>Delete</button> <br />
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
        <img src={this.props.photo.photoUrl} />
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
        <div />
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
  return bindActionCreators(
    {
      getComments: actions.getComments,
    },
    dispatch,
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    comments: state.comments,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPost);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import Comments from './comments.jsx';
import Like from './Like.jsx';
import style from './feed.css';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
      singlePhotoComments: [],
    };
  }
  getComments() {
    // axios.get(`/api/${this.props.firebaseUser.username}/${this.props.photo._id}/comments`)
    axios.get(`/api/${this.props.currentUser.username}/${this.props.photo.tempId}/comments`)
      .then((res) => {
        this.setState({ singlePhotoComments: res.data });
      });
  }

  render() {
    return (
        <div className={style.post}>
          <img src={this.props.photo.photoUrl} />
          <div>
            <h3>{this.props.photo.displayname}</h3>
            <p>{this.props.photo.description}</p>
            <p>{this.props.photo.created}</p>
            <Like
              likes={this.props.photo.like}
              username={this.props.photo.username}
              photoId={this.props.photo.tempId}
            />
            <button
              onClick={() => {
                this.getComments();
                this.setState({ showComments: true });
              }}
            >
              {this.state.showComments ? 'Show Comments' : 'Hide Comments'}
            </button>
            {
              this.state.showComments ?
            <Comments comments={this.props.singlePhotoComments}/> :
              null
            }

          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    // firebaseUser: state.firebaseUser,
    comments: state.comments,
  };
}

export default connect(mapStateToProps)(Post);

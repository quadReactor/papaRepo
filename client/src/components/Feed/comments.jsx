
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import CommentEntry from './CommentEntry.jsx';
import AddComment from './AddComment.jsx';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singlePhotoComments: [],
    };
    this.getComments = this.getComments.bind(this);
  }

  getComments() {
    // axios.get(`/api/${this.props.firebaseUser.username}/${this.props.id}/comments`)
    axios.get(`/api/${this.props.currentUser.username}/${this.props.id}/comments`)
      .then((res) => {
        this.setState({ singlePhotoComments: res.data });
      });
  }

  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <div>
        {this.state.singlePhotoComments.length ?
          this.state.singlePhotoComments
          .map(comment => <CommentEntry
              key={comment._id}
              id={comment._id}
              text={comment.text}
              name={comment.displayname}
              time={comment.created}
              username={comment.username}
              photoID={comment.photoId}
              getComments={this.getComments}
            />) :
          null
        }
        <AddComment
          photoId={this.props.id}
          username={this.props.currentUser.username}
          displayname={this.props.currentUser.displayname}
          getComments={this.getComments}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    // firebaseUser: state.firebaseUser,
  };
}

export default connect(mapStateToProps)(Comments);

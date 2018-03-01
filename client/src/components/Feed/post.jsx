import React from 'react';
import Comments from './comments';
import axios from 'axios';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      showComments: false,
    };
    this.getComments = this.getComments.bind(this);
  }
  getComments(photoID) {
    this.props.getComments(photoID);
  }

  renderPost() {
    return (
      <div>
        <img src={this.props.photo.photoUrl} />>
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
              this.getComments(this.props.photoID);
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
          <Comments />
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
export default Post;

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login: actions.login,
  }, dispatch);
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

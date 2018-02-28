import React from 'react';
import axios from 'axios';
import Comments from './comments.jsx';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      showComments: false,
    };
  }
  getComments() {
    // username photoid passed down in props from feed
    axios.get(`/api/${this.props.username}/${this.props.photoId}/comments`).then(() => {
      // do something here to add comments to the store
    });
  }

  renderPost() {
    return (
      <div>
        <img src={this.props.post.url} />>
        <div>
          <h3>{this.props.post.user}</h3>
          <p>{this.props.post.description}</p>
          <p>{this.props.post.created}</p>
          <Like
            likes={this.props.post.like}
            username={this.props.username}
            photoId={this.props.photoId}
          />
          <button
            OnClick={() => {
              this.getComments();
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
        I'm a Post!
        <img src={this.props.post.url} />>
        <div>
          <h3>{this.props.post.user}</h3>
          <p>{this.props.post.description}</p>
          <p>{this.props.post.created}</p>
          <Like
            likes={this.props.post.like}
            username={this.props.username}
            photoId={this.props.photoId}
          />
        </div>
        <div>
          <Comments />
        </div>
      </div>
    );
  }

  render() {
    // dont render coments till clicked
    if (this.state.showComments) {
      return this.renderPost;
    }
    return this.renderPostAndComments;
  }
}
export default Post;

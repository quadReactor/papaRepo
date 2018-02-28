import React from 'react';

class CommentEntry extends React.Component {
  constructor() {
    super();
  }

  EditComment() {
    //just delete comment and re add?
    //more efficent?
    
  }
  deleteComment() {
    //delete request to remove comment
    //do anthoer get request to rerender comment
    axios
      .delete(`/api/${this.props.username}/${this.props.photoId}/comments`)
  }

  render() {
    return (
      <div>
        I'm a comment!
        <div>
          <h3>{this.comment.user}</h3>
          <p>{this.comment.text}</p>
          <p>{this.comment.created}</p>
        </div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default CommentEntry;

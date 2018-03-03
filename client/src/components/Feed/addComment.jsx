import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './../../actions/feed_actions';

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  handleCommentChange(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <div>
        Add a comment!
        <textarea id={this.props.photoId}
          placeholder="Add Comment Here"
          onChange={this.handleCommentChange.bind(this)}
        />
        <button
          onClick={() => {
            this.props.addComment(
              this.props.username,
              this.props.photoId,
              this.props.page,
              this.state.message,
              this.props.displayname,
            );
            document.getElementById(this.props.photoId).value = '';
            this.props.getComments();
          }}>Submit</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addComment: actions.addComment,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    page: state.location.type,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);


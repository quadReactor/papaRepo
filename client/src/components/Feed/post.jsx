import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import actions from './../../actions/feed_actions';

import Comments from './comments.jsx';
import Like from './like.jsx';
import style from './feed.css';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
    };
  }

  timeAgo() {
    return moment(this.props.photo.created).fromNow();
  }

  render() {
    return (
        <div className={style.post}>
          {this.props.user === this.props.photo.username
            ? <button
              className={style.delete}
              onClick={
                () => this.props.deletePhoto(
                  this.props.photo._id,
                  this.props.page,
              )}
            >Delete</button>
            : null}
          <div className={style.photo}>
            <img className={style.image}
              src={this.props.photo.photoUrl}
            />
          </div>
          <div className={style.leftbox}>
            <p className={style.displayname}>{this.props.photo.displayname} </p>
            <p className={style.description}>{this.props.photo.description}</p>
            <p className={style.created}>{this.timeAgo()}</p>
            <Like
              likes={this.props.photo.likes}
              photoId={this.props.photo._id}
            />
            <button
              className={style.showcomments}
              onClick={() => {
                this.setState({ showComments: !this.state.showComments });
              }}
            >
              {this.state.showComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            {
              this.state.showComments ?
            <Comments
              id={this.props.photo._id}
              photoUsername={this.props.photo.username}
            />
            : null
            }

          </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deletePhoto: actions.deletePhoto,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    page: state.location.type,
    user: state.firebaseUser.username,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
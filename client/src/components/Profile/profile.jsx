import React from 'react';
import { connect } from 'react-redux';

import Post from './../Feed/post.jsx';
import Navbar from './../Navbar/navbar.jsx';
import NewPost from './NewPost.jsx';
import style from './profile.css';

class Profile extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
          <div className={style.body}>
          <div>
            <img src={this.props.currentUser.profilePic} />
            {/* <h2>Bio</h2> */}
            {/* <div>{this.props.currentUser.bio}</div> */}
          </div>
          <h2>{this.props.currentUser.displayname}'s Photos</h2>
          <div>
            <NewPost />
          </div>
          <div>
          {
            this.props.photos.length
            ? this.props.photos
              .map(photo => <Post key={photo._id} photo={photo} />)
            : 'You have no photos. Click "Add New Post"!'
          }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    photos: state.photos,
  };
}

export default connect(mapStateToProps)(Profile);

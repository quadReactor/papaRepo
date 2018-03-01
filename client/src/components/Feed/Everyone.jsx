import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post.jsx';
import Navbar from './../Navbar/navbar.jsx';
import AddPost from './addPost.jsx';

class Everyone extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <AddPost username={firebase}/> */}
        {this.props.photos.map(photo => <Post key={photo._id} photo={photo} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { photos: state.photos };
}

export default connect(mapStateToProps)(Everyone);

{
  /* // photoUrl={photo.photoUrl} desc={photo.description} userName={photo.username} */
}

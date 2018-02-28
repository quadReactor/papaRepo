import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post.jsx';
import Navbar from './../Navbar/navbar.jsx';
import AddPost from './addPost.jsx';

class Feed extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <AddPost username={firebase}/> */}
        {this.props.photos.map((post) => 
           <Post key={post._id} post={post}/>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { photos: state.photos };
}

export default connect(mapStateToProps)(Feed);

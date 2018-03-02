import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post.jsx';
import Navbar from './../Navbar/Navbar.jsx';
import style from './feed.css';

class Feed extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <div className={style.body}>
        {this.props.photos.map(photo => <Post key={photo._id} photo={photo} />)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { photos: state.photos };
}

export default connect(mapStateToProps)(Feed);


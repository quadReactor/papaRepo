import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './post.jsx';
import Navbar from './../Navbar/navbar.jsx';
import style from './feed.css';

class Feed extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <div className={style.body}>
        {this.props.photos.length ?
          this.props.photos.map(photo => <Post key={photo._id} photo={photo} />)
          : 'No Photos to show! Follow other smurfs or switch to "Everyone" Tab'
        }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos,
  };
}

export default connect(mapStateToProps)(Feed);


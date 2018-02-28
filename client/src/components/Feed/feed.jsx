import React from 'react';
import Post from './post.jsx';
import AddPost from './addPost.jsx';

class Feed extends React.Component {
  constructor() {
    super();
  }
  // pass down  username from firebase photoid
  render() {
    return (
      <div>
        <AddPost username={()=>{}} />
        {this.props.posts.map((post) => {
          <Post key={post._id} post={post} photoId={post._id} username={()=>{}} />;
        })}
      </div>
    );
  }
}
// const Feed = () => (
//   <div>
//     I'm the Feed!
//     <Post />
//     <Post />
//     <Post />
//     <Post />
//     <Post />
//     <Post />
//     <Post />
//     <Post />
//     <Post />
//     <Post />
//     <Post />
//     <Post />
//     <Post />
//     <Post />
//     <Post />
//     <Post />
//   </div>
// );

export default Feed;

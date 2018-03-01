import React from 'react';
import CommentEntry from './CommentEntry.jsx';

const Comment = () => (
  <div>
    <CommentEntry />
    <CommentEntry />
    <CommentEntry />
  </div>
);
export default Comment;

// import React, { Component } from 'react';
// import CommentEntry from './commentEntry.jsx';
// import { connect } from 'react-redux';
// class Comment extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     // this.props.comments to be replaced from store data
//     // pass photoId down to add Comment
//     // grap username from firbase token
//     return (
//       <div>
//         {this.props.comments.map((comment) => {
//           <CommentEntry
//             key={comment._id}
//             comment={comment}
//             photoId={comments[0].photoId}
//             username={firebase.username}
//           />;
//         })}
//         <addComment photoId={comments[0].photoId} username={firebase.username} />
//       </div>
//     );
//   }
// }

// function mapDispatchToProps(dispatch) {
//   // return bindActionCreators(
//   //   {
//   //     login: actions.login,
//   //   },
//   //   dispatch,
//   // );
// }

// function mapStateToProps(state) {
//   // return { currentUser: state.currentUser };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Comment);

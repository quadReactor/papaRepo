import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from './../actions/index';
 
//Component: 
class UserList extends Componet {
  render () {
    return (
      <h1> World </h1>
    )
  }
}

//Container:
// takes users from store and adds them as property of this component 
// i.e. this.props.users 
function mapStateToProps(state) {
  return {
    users: state.users
  } 
}

//Action handler:
//passes in an action creator as a prop. Event listeners basically. 
// 'dispatch' is reduxs way of calling the function.
// can now call this action on props
//i.e. this.props.selectUser
function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);

import React from 'react';
import { connect } from 'react-redux';

const PendingRequestPerson = ({
  person, stop, accept, pendingFollowers,
}) => (
  <div>
    {person}
    <input
      type="button"
      value="Deny Following"
      onClick={() => {
        if (pendingFollowers.includes(person)) {
          stop(person);
        }
      }}
    />
    <input
      type="button"
      value="Accept Following"
      onClick={() => {
        if (pendingFollowers.includes(person)) {
          accept(person);
        }
      }}
    />
  </div>
);
function mapStateToProps(state) {
  return {
    pendingFollowers: state.currentUser.pendingFollowers,
  };
}

export default connect(mapStateToProps)(PendingRequestPerson);

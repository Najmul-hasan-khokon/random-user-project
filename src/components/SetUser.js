import React from "react";

const SetUser = ({ userName }) => {
  return (
    <div className="text-center mb-3">
      <h4>Added User : {userName.length}</h4>
    </div>
  );
};

export default SetUser;

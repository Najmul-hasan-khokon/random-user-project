import React from "react";

const SetUser = ({ userName }) => {
  return (
    <div className="text-center mb-3">
      <h4>Added User : {userName.length}</h4>
      <ul>
        {userName.map((user) => (
          <li className="list-unstyled">{`${user.name.first} ${user.name.last}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SetUser;

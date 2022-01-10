import React, { useState } from "react";

const User = ({ user, addUserHandler }) => {
  const { picture, name, phone } = user; // destructure from user.
  const [showNumber, setShowNumber] = useState(""); // number hide and show.

  const showNumberHandler = () => {
    if (showNumber) {
      setShowNumber("");
    } else {
      setShowNumber(phone);
    }
  };

  return (
    <div
      className="card"
      style={{
        width: "18vw",
        marginBottom: "2rem",
        flexGrow: "1",
      }}
    >
      <img src={picture.large} className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">{`${name.first} ${name.last}`}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p>phone: {showNumber}</p>

        {/* hide and show number  */}
        <button onClick={showNumberHandler} className="btn btn-primary">
          {showNumber ? "hide phone" : "show Phone"}
        </button>

        {/* add userName  handler */}
        <button onClick={() => addUserHandler(user)} className="btn btn-danger">
          add user
        </button>
      </div>
    </div>
  );
};

export default User;

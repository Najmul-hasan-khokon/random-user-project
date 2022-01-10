import axios from "axios";
import { useEffect, useState } from "react";
import SetUser from "./components/SetUser";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([]); // get users from api.
  const [userName, setUserName] = useState([]); // set userName

  // fetch from api
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=10";
    axios(url)
      .then((data) => setUsers(data.data.results))
      .catch((err) => console.log(err));
  }, []);

  // get userName
  const addUserHandler = (user) => {
    setUserName([...userName, user]);
  };

  return (
    <div style={{ margin: "2rem" }}>
      <SetUser userName={userName} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user, index) => (
          <User key={index} user={user} addUserHandler={addUserHandler} />
        ))}
      </div>
    </div>
  );
}

export default App;

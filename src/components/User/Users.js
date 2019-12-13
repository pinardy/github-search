import React from "react";
import UserCard from "./UserCard";

function Users(props) {
  const { userData, history } = props;

  return (
    <div style={{ margin: "0 auto", maxWidth: 1020 }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {userData.map((user, id) => (
          <UserCard key={id} user={user} history={history} />
        ))}
      </div>
    </div>
  );
}

export default Users;

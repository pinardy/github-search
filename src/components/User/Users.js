import React from "react";
import UserCard from "./UserCard";

function Users(props) {
  const { userData, history } = props;

  return (
    <div>
      {userData.map((user, id) => (
        <UserCard key={id} user={user} history={history} />
      ))}
    </div>
  );
}

export default Users;

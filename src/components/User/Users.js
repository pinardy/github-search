import React from "react";
import UserCard from "./UserCard";

function Users(props) {
  const { userData } = props;
  return (
    <div>
      {userData.map((user, id) => (
        <UserCard key={id} user={user} />
      ))}
    </div>
  );
}

export default Users;

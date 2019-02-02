import React from "react";

//TODO: Fill up user profile with user info from store

function UserProfile(props) {
  const { userDetails } = props;
  console.log(userDetails);

  //TODO: Create UI for user profile using userDetails
  //   userDetails.login   (displays username string)
  //   userDetails.followers_url  (displays payload of followers)
  //   userDetails.repos_url   (displays payload of repos)
  //   userDetails.html_url  (link to profile page)
  return (
    <div>
      <div>User Profile</div>
      <div>{userDetails.login}</div>
    </div>
  );
}

export default UserProfile;

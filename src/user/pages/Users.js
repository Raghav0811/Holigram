import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Albus Dumbledore",
      img:
        "https://openpsychometrics.org/tests/characters/test-resources/pics/HP/5.jpg",
      places: 7,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;

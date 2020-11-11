import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components'; 

import ClipLoader from "react-spinners/ClipLoader";

const StyledFriendsList = styled.div`

.friends {
    margin: 1%; 
}


`

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:5000/api/friends", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setTimeout(() => {
          setFriends(res.data);
        }, 1000)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const friendsList = friends.map((cur) => {
    return (
      <div key={cur.id} className="friends">
        <h2>Name: {cur.name}</h2>
        <h3>Age: {cur.age}</h3>
        <h3>Email: {cur.email}</h3>
      </div>
    );
  });

  return <StyledFriendsList>{friends.length === 0 ? <div><ClipLoader /> </div> : friendsList }</StyledFriendsList>;
};

export default FriendList;

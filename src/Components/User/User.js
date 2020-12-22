import React from "react";

const User = () => {
  return (
    <div
      style={{
        backgroundColor: "#eee",
        height: "50px",
        paddingTop:"20px",
        width:"50%",
        postion:"absolute",
        margin: "40px auto"
      }}
    >
      <span style={{marginRight:"50px"}} className="topBar">User Name</span>
      <span style={{marginRight:"90px"}} className="topBar">User Role</span>
      <span style={{marginRight:"120px"}} className="topBar">Email</span>
      <span style={{marginRight:"40px"}} className="topBar">Phone Number</span>
      <span className="topBar">Status</span>
    </div>
  );
};

export default User;

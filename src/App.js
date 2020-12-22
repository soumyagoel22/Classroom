import React, { useState } from "react";
import Dropdown from "./Components/Dropdown/Dropdown";
import NewUser from "./Components/User/NewUser";
import User from "./Components/User/User";
import UserShow from "./Components/User/UserShow";
import UserStatus from "./Components/User/UserStatus";
import "./styles.css";

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Jitendra Singh",
      role: "Teacher",
      email: "jitendrasingh@gmail.com",
      phone: 9876509880,
      status: "Active"
    },
    {
      id: 2,
      name: "Payal Sharma",
      role: "Student",
      email: "payalsharma@gmail.com",
      phone: 9235408796,
      status: "Inactive"
    },
    {
      id: 3,
      name: "Mahesh Bhanot",
      role: "Admin",
      email: "maheshbhanot@gmail.com",
      phone: 8980765650,
      status: "Active"
    }
  ]);
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("All");
  const [user, setUser] = useState(false);

  const onSearch = (val) => {
    setSearchText(val.target.value);
  };

  const onKeyHandle = (e) => {
    if (e.key === "Enter") {
      setSearchText(e.target.value);
    }
  };
  const newUser = () => {
    setUser(true);
  };

  return (
    <div className="App">
      <span style={{ marginRight: "10px", fontWeight: "bold" }}>Users</span>
      <Dropdown
        elements={["All", "Active", "Inactive"]}
        value={searchType}
        onClick={(val) => setSearchType(val)}
        setData={setData}
        data={data}
      />
      <input
        className="search-box"
        value={searchText}
        onChange={onSearch}
        onKeyPress={onKeyHandle}
      />
      <button className="dropbtn1" onClick={newUser}>
        Add New User
      </button>
      <NewUser setData={setData} user={user} data={data} setUser={setUser} />
      <User />
      {searchType === "All" ? (
        <UserShow data={data} />
      ) : (
        <UserStatus
          data={data}
          searchType={searchType}
          searchText={searchText}
        />
      )}
    </div>
  );
};

export default App;

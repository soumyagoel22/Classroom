import React from "react";

const NewUser = ({ setUser, setData, user, data }) => {
  let id1 = 3;
  const obj = {
    id: id1 + 1,
    name: "",
    role: "",
    email: "",
    phone: "",
    status: ""
  };
  id1 = obj.id;

  return (
    <>
      {user && (
        <div className="modal">
          <div className="modalInput">
            <span style={{ marginLeft: "20%" }}> User Name: </span>
            <input
              type="text"
              style={{ marginRight: "20%", width: "40%" }}
              onChange={(e) => (obj.name = e.target.value)}
            />
          </div>
          <br />
          <div className="modalInput">
            <span style={{ marginLeft: "20%" }}>User Role: </span>
            <input
              type="text"
              style={{ marginRight: "20%", width: "40%" }}
              onChange={(e) => (obj.role = e.target.value)}
            />
          </div>
          <br />
          <div className="modalInput">
            <span style={{ marginLeft: "20%" }}>Email: </span>
            <input
              type="text"
              style={{ marginRight: "20%", width: "40%" }}
              onChange={(e) => (obj.email = e.target.value)}
            />
          </div>
          <br />
          <div className="modalInput">
            <span style={{ marginLeft: "20%" }}>Phone Number: </span>
            <input
              type="number"
              style={{ marginRight: "20%", width: "40%" }}
              onChange={(e) => (obj.phone = e.target.value)}
            />
          </div>
          <br />
          <div className="modalInput">
            <span style={{ marginLeft: "20%" }}>Status: </span>
            <input
              type="text"
              style={{ marginRight: "20%", width: "40%" }}
              onChange={(e) => (obj.status = e.target.value)}
            />
          </div>
          <br />
          <br />
          <div>
            <button
              className="dropbtn"
              onClick={() => {
                if (
                  obj.name !== "" &&
                  obj.role !== "" &&
                  obj.email !== "" &&
                  obj.phone !== "" &&
                  obj.status !== ""
                ) {
                  const data1 = [...data, obj];
                  setData(data1);
                }
                // console.log(data1);
                // data.push(obj);
                setUser(false);
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewUser;

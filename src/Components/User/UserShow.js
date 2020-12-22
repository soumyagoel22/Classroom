import React from "react";

const UserShow = ({ data }) => {
  return (
    <div>
      {data &&
        data.length &&
        data.map((data) => (
          <div style={{ margin: "10px" }} key={data.id}>
            <td>
              <tr>
                <span style={{ marginLeft: "350px" }} className="topBar1">
                  {data.name}
                </span>
                <span className="topBar1">{data.role}</span>
                <span className="topBar1"> {data.email}</span>
                <span className="topBar1"> {data.phone}</span>
                <span
                  className={
                    data.status === "Active"
                      ? "topBar1 statusInactive"
                      : "topBar1 status"
                  }
                >
                  {data.status}
                </span>
              </tr>
            </td>
          </div>
        ))}
    </div>
  );
};

export default UserShow;

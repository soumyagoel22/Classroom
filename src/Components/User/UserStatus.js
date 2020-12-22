import React from "react";

const UserStatus = ({ data, searchType, searchText }) => {
  return (
    <div>
      {data
        .filter(
          (data) =>
            data.status === searchType ||
            data.name.toLowerCase() === searchText ||
            data.role.toLowerCase() === searchText ||
            data.phone === searchText ||
            data.email === searchText
        )
        .map((data) => (
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

export default UserStatus;

import "./UserManagement.scss";
import { userRows } from "../../../dummyData";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getAllUsers } from "../../../services/userServices";
import { useEffect } from "react";
import { blockUser, deleteUser } from "../../../services/userServices";
export default function UserList() {
  const [data, setData] = useState(userRows);
  const [users, setUsers] = useState([]);
  const handleDelete = async (id) => {
    const res = await deleteUser(id);
    if (res.EC === 200) {
      setUsers(users.filter((item) => item.id !== id));
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getAllUsers();
        if (res.EC === 200) {
          console.log(res?.DT);
          // delete first element
          res.DT.shift();
          setUsers(res?.DT);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  const handleBlock = async (id) => {
    const res = await blockUser(id);
    if (res.EC === 200) {
      setUsers(
        users.map((item) => {
          if (item.id === id) {
            return { ...item, status: item.status === 0 ? 1 : 0 };
          }
          return item;
        })
      );
    }
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.username}</div>;
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === 0 ? (
              <button
                className="userListEdit"
                onClick={() => handleBlock(params.row.id)}
              >
                Unblock
              </button>
            ) : (
              <button
                className="userListEdit"
                onClick={() => handleBlock(params.row.id)}
              >
                Block
              </button>
            )}

            <button
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}

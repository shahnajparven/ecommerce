import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "./Sidebar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { fetchUser } from "../../store/user/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.user);
  console.log(user, "jbhjbjhb");

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const columns = [
    {
      field: "no",
      headerName: "SL",
      width: 90,
      headerClassName: "columns-header",
      flex: 0.2,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "User Name",
      width: 150,
      editable: true,
      headerClassName: "columns-header",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 110,
      editable: true,
      headerClassName: "columns-header",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "role",
      headerName: "Role",
      width: 110,
      editable: true,
      headerClassName: "columns-header",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      editable: true,
      headerClassName: "columns-header",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      flex: 0.5,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      headerClassName: "columns-header",

      headerAlign: "center",
      align: "center",
      renderCell: (demo) => (
        <Box display="flex" gap={2}>
          <Link to={`view-invoice-details/${demo.id}`}></Link>
          <Box
            p={1}
            display="flex"
            justifyContent="center"
            items="center"
            bgcolor="CornflowerBlue"
          >
            <EditIcon fontSize="small" sx={{ color: "white" }} />
          </Box>
          <Box
            p={1}
            display="flex"
            justifyContent="center"
            items="center"
            bgcolor="red"
            
          >
            <DeleteForeverIcon fontSize="small" sx={{ color: "white" }} />
          </Box>
        </Box>
      ),
    },
  ];

  const rows = [];
  user?.map((item, index) =>
    rows.push({
      id: item._id,
      no: index + 1,
      name: item.name,
      email: item.email,
      role: item.role,
      date: item.createdAt?.slice(0, 10),
    })
  );
  return (
    <Box display={"flex"} justifyContent={"space-between"} gap={1}>
      <Box>
        <Sidebar />
      </Box>
      <Box
        width={"100%"}
        height={"auto"}
        py={5}
        px={2}
        ml={"20%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Box py={2} display={"flex"} justifyContent={"center"}>
          <Typography variant="h5">User List</Typography>
        </Box>
      
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <Box
            sx={{
              bgcolor: "white",
              textAlign: "center",
              "& .columns-header": {
                backgroundColor: "#F0F8FF",
              },
              height: 400,
              width: "100%",
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              // pageSize={perPage}
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UserList;

import { Box, Divider, ListItemButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box width={"20%"} height={"90vh"} position={"fixed"} py={4} boxShadow={5}>
      <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <Box display={"flex"} justifyContent={"center"}>
          Dashboard
        </Box>
      </Link>
      <Box py={2}>
        <Box>
          <Divider />
          <Link style={{ textDecoration: 'none' }} to="/dashboard/productList">
            <ListItemButton
              sx={{
                padding: 0,
              }}
            >
              <Box
                px={2}
                py={2}
                color="#57585F"
                fontWeight="medium"
                sx={{
                  cursor: "pointer",
                }}
              >
                <Box>
                  <Typography>Products List</Typography>
                </Box>
              </Box>
            </ListItemButton>
          </Link>
          <Divider />
        </Box>
        <Box>
        <Link style={{ textDecoration: 'none' }} to="/dashboard/newProduct">
          <ListItemButton
            sx={{
              padding: 0,
            }}
          >
            <Box
              px={2}
              py={2}
              color="#57585F"
              fontWeight="medium"
              sx={{
                cursor: "pointer",
              }}
            >
              <Box display="flex">
                <Typography>New Products</Typography>
              </Box>
            </Box>
          </ListItemButton>
          </Link>
          <Divider />
        </Box>
        <Box>
        <Link style={{ textDecoration: 'none' }} to="/dashboard/userList">
          <ListItemButton
            sx={{
              padding: 0,
            }}
          >
            <Box
              px={2}
              py={2}
              color="#57585F"
              fontWeight="medium"
              sx={{
                cursor: "pointer",
              }}
            >
              <Box display="flex">
                <Typography>User List</Typography>
              </Box>
            </Box>
          </ListItemButton>
          </Link>
          <Divider />
        </Box>
        <Box>
          <ListItemButton
            sx={{
              padding: 0,
            }}
          >
            <Box
              px={2}
              py={2}
              color="#57585F"
              fontWeight="medium"
              sx={{
                cursor: "pointer",
              }}
            >
              <Box display="flex">
                <Typography>Order List</Typography>
              </Box>
            </Box>
          </ListItemButton>
          <Divider />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

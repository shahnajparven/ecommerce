import { Box } from "@mui/material";

import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} gap={2}>
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
        justifyContent={"center"}
      >
        main
      </Box>
    </Box>
  );
};

export default Dashboard;

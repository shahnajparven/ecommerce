/* eslint-disable react/prop-types */
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logoutUser } from "../../store/userSlice";
import img from "../../assets/user.png";
import "../HeroPage.css";
import { useNavigate } from "react-router-dom";

const UserOption = ({ setLoggedinIcon, user }) => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [open, setOpen] = useState(false);
console.log(user,'useroptions')
  const options = [
    {
      icon: <PersonIcon />,
      name: "Profile",
      func: accoutFunction,
    },
    {
      icon: <LogoutIcon />,
      name: "Logout",
      func: logoutFunction,
    },
  ];

  // if (user.role === "admin") {
  //   options.unshift({
  //     icon: <DashboardIcon />,
  //     name: "Admin",
  //     func: dashboard,
  //   });
  // }

  // function dashboard() {
  //   console.log("first");
  // }
  function accoutFunction() {
    navigateTo("profile");
  }
  function logoutFunction() {
    dispatch(logoutUser());
    setLoggedinIcon(false);
  }

  return (
    <Box>
      <ToastContainer />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11", height: 10 }}
        open={open}
        direction="down"
        FabProps={{ size: "small", style: { backgroundColor: "#ff0000" } }}
        icon={<img className="speedDialIcon" src={img} alt="Profile" />}
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default UserOption;

/* eslint-disable react/jsx-key */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./HeroPage.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Login from "./user/login";
import { useDispatch, useSelector } from "react-redux";
import UserOption from "./user/UserOption";
const drawerWidth = 240;
const navItems = [
  <Box>
    <Link className="navItem" to="/">
      Home
    </Link>
  </Box>,
  <Box>
    <Link className="navItem" to="#">
      About
    </Link>
  </Box>,
  <Box>
    <Link className="navItem" to="#">
      Products
    </Link>
  </Box>,
  <Box>
    <Link className="navItem" to="contact">
      Contact
    </Link>
  </Box>,
];

function HeroPage(props) {
  

  const dispatch = useDispatch();
  const {isLoggedIn } = useSelector((state) => state.user);

  
  const [loggedinIcon, setLoggedinIcon] = React.useState(false);

  React.useEffect(() => {
    if (isLoggedIn) {
      setLoggedinIcon(true)
    }
  }, [dispatch,isLoggedIn]);

  ////modal
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  ///modal

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  ////////////////////////////////////////////// for Mobile start
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        beautyBASKET
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  ////////////////////////////////////////////// for Mobile end
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <Box sx={{ display: "flex" }} overflow="hidden">
        <CssBaseline />
      
        {/******************************************** nav start********************************************* */}
        <AppBar component="nav">
          <Toolbar className="tolbar">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              beautyBASKET
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
            {/* *************** **********************************************/}
          
            {/* *************** **********************************************/}
            <Box
              className="icons"
              sx={{
                display: { xs: "flex", sm: "flex" },
                justifyContent: { xs: "end", sm: "end" },
                width: { xs: "100%", lg: "15%", sm: "30%" },
                marginLeft: "8%",
              }}
            >
              <Box className="navIcon">
                <IconButton
                  size="small"
                  aria-label="show 17 cart item"
                  color="inherit"
                >
                  <Badge badgeContent={5} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                {/* <p>Cart</p> */}
              </Box>
              <Box className="navIcon">
                <IconButton
                  size="small"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                {/* <p>Notifications</p> */}
              </Box>
              {/*****************************strat login icon with modal************************ */}

              <Box className="navIcon">
              {loggedinIcon ? 
                  <Box>
                    <UserOption setLoggedinIcon={setLoggedinIcon}/>
                  </Box>
                
                  : <Box> 
                    {["right"].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <IconButton
                          onClick={toggleDrawer(anchor, true)}
                          size="small"
                          color="inherit"
                        >
                          <AccountCircle />
                        </IconButton>
                        {/* <p>account</p> */}
                        <Drawer
                          anchor={anchor}
                          open={state[anchor]}
                          onClose={toggleDrawer(anchor, false)}
                        >
                          <Box
                            width={{ lg: 500, md: 500, xs: 400 }}
                            py={2}
                            px={5}
                          >
                            <IconButton onClick={toggleDrawer(anchor, false)}>
                              <CloseIcon />
                            </IconButton>
                            <Box mt={1}>
                              <Divider />
                            </Box>

                            <Box>
                              <Login
                                props={toggleDrawer()}
                                anchor={anchor}
                                state={state}
                                setState={setState}
                              />
                            </Box>
                          </Box>
                        </Drawer>
                      </React.Fragment>
                    ))}
                  </Box>
                }
              </Box>
              
              {/*****************************end login icon with modal************************ */}
            </Box>
          </Toolbar>
        </AppBar>
        {/********************************* for Mobile start**************************** */}
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        {/********************************* for Mobile end**************************** */}
      </Box>
      {/******************************************** nav end********************************************* */}
      <Box component="main">
        <Toolbar />
        {/* this is where children pages will show */}
        <Outlet />
      </Box>
      <Box zIndex={5} bottom={0}>
        <Footer />
      </Box>
    </Box>
  );
}

export default HeroPage;

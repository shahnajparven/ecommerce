import { Box } from "@mui/material";
import img1 from "../assets/banner11.jpg";
import img2 from "../assets/banner22.jpg";
import img3 from "../assets/banner33.jpg";
import "./Nav.css";
import Carousel from "react-material-ui-carousel";

export const Banner = () => {
  return (
    <Carousel
      indicatorIconButtonProps={{
        style: {
          borderRadius: "none",
          color: "gray",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#583C99", // 2
        },
      }}
      indicatorContainerProps={{
        style: {
            position:'absolute',
            bottom:'15px',
        //   marginTop: 0, // 5
          textAlign: "center",
          zIndex:2,
        },
      }}
      fullHeightHover={false}
      navButtonsProps={{
        style: {
          backgroundColor: "#2F7B92",
          borderRadius: 0,
        },
      }}
      navButtonsWrapperProps={{
        style: {
          bottom: "100",
          top: "50px",
        },
      }}
      NextIcon={false}
      PrevIcon={false}
    >
      <Box className='banner' height="70vh" display="flex" justifyContent="center">
        <img src={img1} alt="" width="100%" height="100%" overflow="hidden" />
      </Box>
      <Box  className='banner' height="70vh" display="flex" justifyContent="center">
        <img src={img2} alt="" width="100%" height="100%" overflow="hidden" />
      </Box>
      <Box  className='banner' height="70vh" display="flex" justifyContent="center">
        <img width="100%" height="100%" src={img3} alt="" overflow="hidden" />
      </Box>
    </Carousel>
  );
};

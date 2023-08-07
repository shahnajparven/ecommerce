import { Box, Divider, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
const About = () => {
  return (
    <Box className="container" py={5}>
      <Typography
        py={2}
        variant="h4"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        borderBottom={2}
        borderColor={red[500]}
      >
        About
      </Typography>
      <Box py={3}>
        <Box py={2}>
          <Typography>
            The following properties are used in this documentation website for
            optimal usability of the component: iOS is hosted on high-end
            devices. The backdrop transition can be enabled without dropping
            frames. The performance will be good enough. iOS has a "swipe to go
            back" feature that interferes with the discovery feature, so
            discovery has to be disabled.
          </Typography>
        </Box>
        <Divider />
        <Typography py={2}>
          The following properties are used in this documentation website for
          optimal usability of the component: iOS is hosted on high-end devices.
          The backdrop transition can be enabled without dropping frames. The
          performance will be good enough. iOS has a "swipe to go back" feature
          that interferes with the discovery feature, so discovery has to be
          disabled.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;

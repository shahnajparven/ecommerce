import { Box, Divider, Typography } from "@mui/material";

const Card = () => {
  return (
    <Box className="container" py={5}>
      <Box py={2}>
        <Typography>
          The following properties are used in this documentation website for
          optimal usability of the component: iOS is hosted on high-end devices.
          The backdrop transition can be enabled without dropping frames. The
          performance will be good enough. iOS has a "swipe to go back" feature
          that interferes with the discovery feature, so discovery has to be
          disabled.
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
  );
};

export default Card;

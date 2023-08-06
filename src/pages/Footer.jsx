import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <Box width='100vw' backgroundColor='#2D2727' display='flex' flexDirection='row' justifyContent='center' p={2}> 
    <Typography variant="span" fontSize={12} color="white">
        ©{' '}
        <Link to="#1">
          Shshnaj {currentYear}
        </Link>
        . All Rights Reserved.
    </Typography>
</Box>
  )
}

export default Footer
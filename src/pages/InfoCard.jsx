import { Box } from "@mui/material"
import img from "../assets/info-card.jpg";
const InfoCard = () => {
  return (
    <Box className="container" > 
    <Box className='banner' py={3} pb={8} height='50vh'>
        <img src={img} height='100%' width="100%" overflow="hidden"/>
        </Box>
    </Box>
  )
}

export default InfoCard
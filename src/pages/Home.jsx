import { Box } from "@mui/material";
import { Banner } from "./Banner";
import ProductCards from "./ProductCards";
import About from "./About";
import InfoCard from "./InfoCard";
const Home = () => {
  return (
    <Box > 
    <Banner/>
    <ProductCards/>
    <About/>
    <InfoCard/>
    </Box>
  )
}

export default Home
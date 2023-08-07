import { Box } from "@mui/material";
import { Banner } from "./Banner";
import ProductCards from "./ProductCards";
import About from "./About";
const Home = () => {
  return (
    <Box > 
    <Banner/>
    <ProductCards/>
    <About/>
    </Box>
  )
}

export default Home
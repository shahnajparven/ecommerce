import { Box } from "@mui/material";
import { Banner } from "./Banner";
import ProductCards from "./ProductCards";
import About from "./About";
import InfoCard from "./InfoCard";
import Products from "./Products";
const Home = () => {
  return (
    <Box overflow='hidden'> 
    <Banner/>
    <ProductCards/>
    <About/>
    <InfoCard/>
    <Products/>
    </Box>
  )
}

export default Home
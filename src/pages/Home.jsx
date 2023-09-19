import { Box } from "@mui/material";
import { Banner } from "./Banner";
import ProductCards from "./ProductCards";
import About from "./About";
import InfoCard from "./InfoCard";
import Footer from "./Footer";
const Home = () => {
  return (
    <Box overflow='hidden'> 
    <Banner/>
    <ProductCards/>
    <About/>
    <InfoCard/>
    <Footer />
    </Box>
  )
}

export default Home
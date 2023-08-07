import { Box, Button, Divider, Typography } from "@mui/material";
import Cards from "./Cards";
import img1 from "../assets/banner11.jpg";
import img2 from "../assets/banner22.jpg";
import img3 from "../assets/banner33.jpg";
import { red } from "@mui/material/colors";

const products = [
  {
    img: img1,
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
    passage1:
      "This impressive paella is a perfect party dish and a fun meal to together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    passage2:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
  },
  {
    img: img2,
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
    passage1:
      "This impressive paella is a perfect party dish and a fun meal to together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    passage2:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
  },
  {
    img: img3,
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
    passage1:
      "This impressive paella is a perfect party dish and a fun meal to together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    passage2:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
  },
];
export default function ProductCards() {
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
        Products
      </Typography>

      <Box
        py={5}
        display="flex"
        flexDirection={{ lg: "row", sm: "column", xs: "column" }}
        justifyContent="center"
        gap={4}
      >
        {products.map((item, id) => (
          <Cards
            key={id}
            img={item.img}
            title={item.title}
            subheader={item.subheader}
            passage1={item.passage1}
            passage2={item.passage2}
          />
        ))}
      </Box>

      <Box
        display="flex"
        flexDirection={{ lg: "row", sm: "column", xs: "column" }}
        justifyContent="center"
      >
        <Button>See More</Button>
      </Box>
    </Box>
  );
}

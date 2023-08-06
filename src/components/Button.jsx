import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Button = () => {
    const BootstrapButton = styled(Button)({
        boxShadow: "none",
        textTransform: "none",
        fontSize: 16,
        padding: "6px 12px",
        border: "1px solid",
        lineHeight: 1.5,
        backgroundColor: "red",
        borderColor: "#0063cc",
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
        "&:hover": {
          backgroundColor: "yellow",
          borderColor: "#0062cc",
          boxShadow: "none",
        },
        "&:active": {
          boxShadow: "none",
          backgroundColor: "#0062cc",
          borderColor: "#005cbf",
        },
        "&:focus": {
          boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
        },
      });
    
  return (
    <Box my={2}>
    <BootstrapButton variant="contained" disableRipple>
      Bootstrap
    </BootstrapButton>
  </Box>
  )
}

export default Button
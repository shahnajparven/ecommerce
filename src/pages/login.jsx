import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const login = () => {
  const { control } = useForm();
  return (
    <Box
      //   height="60vh"
      py={2}
      px={1}
      display="flex"
      flexDirection="row"
      //   justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Typography py={4} fontSize={20} fontWeight={600}>
          Sign In Your Account
        </Typography>

        <Box py={1}>
          <Controller
            name="ticketNo"
            control={control}
            render={({ field }) => (
              <Box minWidth={150}>
                <TextField
                  error
                  id="standard-error-helper-text"
                  //   label="Error"
                  defaultValue="Email or username"
                  //   helperText="Incorrect entry."
                  variant="standard"
                  {...field}
                />
              </Box>
            )}
          />
        </Box>
        <Box py={2}>
          <Controller
            name="ticketNo"
            control={control}
            render={({ field }) => (
              <Box minWidth={150}>
                <TextField
                  error
                  id="standard-error-helper-text"
                  //   label="Error"
                  defaultValue="Password"
                  //   helperText="Incorrect entry."
                  variant="standard"
                  {...field}
                />
              </Box>
            )}
          />
        </Box>
        <Box my={2} display='flex' gap={1.5}>
          <Button
            variant="contained"
            sx={{
              color: "white",
              background: "#2D2727",
              "&:hover": {
                backgroundColor: "#0062cc",
                borderColor: "#0062cc",
                boxShadow: "none",
              },
              "&:focus": {
                boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
              },
            }}
          >
            Login
          </Button>
          
            <Button
              variant="outlined"
              sx={{
                color: "#2D2727",
                borderColor: "#2D2727",
                "&:hover": {
                    color:'white',
                  backgroundColor: "#0062cc",
                  borderColor: "#0062cc",
                  boxShadow: "none",
                },
                "&:focus": {
                  boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
                },
              }}
            >
              Create an Account
            </Button>
         
        </Box>
      </Box>
    </Box>
  );
};

export default login;

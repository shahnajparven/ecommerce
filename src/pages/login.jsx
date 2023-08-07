/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const login = ({anchor,setState}) => {
 
  const [loginPage, setLoginPage] = useState(true);
  const [regPage, setRegPage] = useState(false);
  const [email, setEmail] = useState("ritu@gmail.com");
  const [password, setPassword] = useState("ritu123");

  const signIn = () => {

    const emil = "ritu@gmail.com";
    const pass = "ritu123";
    if (email === emil && password === pass) {
      alert("Successfull");
      setState(anchor, false)
    } else {
      alert("Incorrect");
    }
  };

  const { control } = useForm();

  return (
    <Box
      py={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {/*****************************Login ************************ */}
      {loginPage ? (
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
                    type="email"
                    error
                    id="standard-error-helper-text"
                    //   label="Error"
                    placeholder="Email or username"
                    //   helperText="Incorrect entry."
                    variant="standard"
                    {...field}
                    value={email}
                    onChange={(e) => field.onChange(setEmail(e.target.value))}
                    // }
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
                    type="password"
                    error
                    id="standard-error-helper-text"
                    //   label="Error"
                    placeholder="Password"
                    //   helperText="Incorrect entry."
                    variant="standard"
                    {...field}
                    value={password}
                    onChange={(e) =>
                      field.onChange(setPassword(e.target.value))
                    }
                  />
                </Box>
              )}
            />
          </Box>
          <Box my={2} display="flex" gap={1.5}>
            <Button
              onClick={signIn}
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
              onClick={() => {
                setRegPage(true);
                setLoginPage(false);
              }}
              variant="outlined"
              sx={{
                color: "#2D2727",
                borderColor: "#2D2727",
                "&:hover": {
                  color: "white",
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
      ) : null}
      {/*****************************registration ************************ */}
      {regPage ? (
        <Box>
          <Typography py={4} fontSize={20} fontWeight={600}>
            Register Your Account
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
                    defaultValue="Enter Your Name"
                    //   helperText="Incorrect entry."
                    variant="standard"
                    {...field}
                  />
                </Box>
              )}
            />
          </Box>
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
                    defaultValue="Enter Your Email Account"
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
                    defaultValue="Confirm Password"
                    //   helperText="Incorrect entry."
                    variant="standard"
                    {...field}
                  />
                </Box>
              )}
            />
          </Box>
          <Box my={2} display="flex" gap={1.5}>
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
              Register
            </Button>

            <Button
              onClick={() => {
                setLoginPage(true);
                setRegPage(false);
              }}
              variant="outlined"
              sx={{
                color: "#2D2727",
                borderColor: "#2D2727",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#0062cc",
                  borderColor: "#0062cc",
                  boxShadow: "none",
                },
                "&:focus": {
                  boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
                },
              }}
            >
              Cancle
            </Button>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default login;

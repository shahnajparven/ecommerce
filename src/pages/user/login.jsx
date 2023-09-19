/* eslint-disable react-hooks/rules-of-hooks */
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {  loginUser, regUser } from "../../store/authSlice";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object({
  name: yup.string(),
  email: yup.string(),
  password: yup.string(),
  // passage2: yup.string(),
});

const login = ({ anchor, setState }) => {
  const [loginPage, setLoginPage] = useState(true);
  const [regPage, setRegPage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading,isLoggedIn } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isLoggedIn) {
      setState(anchor, false);
    }
  }, [
    dispatch,
    isLoggedIn,
    setState,
    anchor,
  ]);

  const signIn = () => {
    dispatch(loginUser({ email, password }));
  };

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data) => {
    dispatch(regUser(data));
    setLoginPage(true)
    setRegPage(false)
  };

  return (
    <Box>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <FormProvider {...form}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
                      name="email"
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
                            onChange={(e) =>
                              field.onChange(setEmail(e.target.value))
                            }
                          />
                        </Box>
                      )}
                    />
                  </Box>
                  <Box py={2}>
                    <Controller
                      name="password"
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
                      type="submit"
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
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <Box minWidth={150}>
                          <TextField
                            error
                            id="standard-error-helper-text"
                            //   label="Error"
                            placeholder="Enter Your Name"
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
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <Box minWidth={150}>
                          <TextField
                            error
                            id="standard-error-helper-text"
                            //   label="Error"
                            placeholder="Enter Your Email Account"
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
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <Box minWidth={150}>
                          <TextField
                            error
                            id="standard-error-helper-text"
                            //   label="Error"
                            placeholder="Password"
                            //   helperText="Incorrect entry."
                            variant="standard"
                            {...field}
                          />
                        </Box>
                      )}
                    />
                  </Box>
                  {/* <Box py={2}>
            <Controller
              name="profilePic"
              control={control}
              render={({ field }) => (
                <Box minWidth={150}>
                  <TextField
                    error
                    id="standard-error-helper-text"
                    //   label="Error"
                    placeholder="Confirm Password"
                    //   helperText="Incorrect entry."
                    variant="standard"
                    {...field}
                  />
                </Box>
              )}
            />
          </Box> */}
                  <Box my={2} display="flex" gap={1.5}>
                    <Button
                      type="submit"
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
          </Box>
        </FormProvider>
      )}
    </Box>
  );
};

export default login;

/* eslint-disable react/jsx-key */
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { creatDemo, fetchDemo } from "../store/demoCreate/demoSlice";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const schema = yup.object({
  productName: yup.string(),
  title: yup.string(),
  passage1: yup.string(),
  passage2: yup.string(),
});

const Products = () => {
  const dispatch = useDispatch();
  const { demo, isLoading } = useSelector((state) => state.demo);

  useEffect(() => {
    dispatch(fetchDemo());
  }, [dispatch]);

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data) => {
    dispatch(creatDemo(data));
  };

  return (
    <Box>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Box className="container">
          <FormProvider {...form}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Box height="auto" mt={3} borderRedious={2} boxShadow={3} p={4}>
                <Box
                  sx={{
                    bgcolor: "white",
                    textAlign: "center",
                    "& .columns-header": {
                      backgroundColor: "#F0F8FF",
                    },
                    height: 511,
                    width: "100%",
                  }}
                >
                  <Box display="flex" items="center" justifyContent="center">
                    <Box
                      sx={{
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "50ch",
                        },
                      }}
                      mt={2}
                    >
                      <Box>
                        <Typography id="modal-modal-description" ml={2}>
                          Product Name
                        </Typography>
                        <Box>
                          <Controller
                            name="productName"
                            control={control}
                            render={({ field }) => (
                              <Box minWidth={150}>
                                <TextField {...field} size="small" />
                              </Box>
                            )}
                          />
                        </Box>
                      </Box>
                      <Box>
                        <Typography id="modal-modal-description" ml={2}>
                          Title
                        </Typography>
                        <Box>
                          <Controller
                            name="title"
                            control={control}
                            render={({ field }) => (
                              <Box minWidth={150}>
                                <TextField {...field} size="small" />
                              </Box>
                            )}
                          />
                        </Box>
                      </Box>
                      <Box>
                        <Typography id="modal-modal-description" ml={2}>
                          Passage1
                        </Typography>
                        <Box>
                          <Controller
                            name="passage1"
                            control={control}
                            render={({ field }) => (
                              <Box minWidth={150}>
                                <TextField {...field} size="small" />
                              </Box>
                            )}
                          />
                        </Box>
                      </Box>
                      <Box>
                        <Typography id="modal-modal-description" ml={2}>
                          Passage2
                        </Typography>
                        <Box>
                          <Controller
                            name="passage2"
                            control={control}
                            render={({ field }) => (
                              <Box minWidth={150}>
                                <TextField {...field} size="small" />
                              </Box>
                            )}
                          />
                        </Box>
                      </Box>
                      <Button type="submit">Submit</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </FormProvider>

          <Box>
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
            <Box py={5}>
              {demo.map((item) => (
                <Box>
                  <Box>Product Name: {item.productName} </Box>
                  <Box>Subtitle: {item.date?.slice(0,10)} </Box>
                  <Box> Title: {item.title}</Box>
                  <Box> Passage1: {item.passage1}</Box>
                  <Box> Passage2: {item.passage2}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Products;

import React from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://rich-jade-puffer-gown.cyclic.app/user/login`, data)
      .then((res) => {
        toast({
          title: "Logged In Successfully!!",
    
          status: "success",
    
          isClosable: true,
          position: "top",
        })
        localStorage.setItem("token", res.data.token);
        navigate("/")
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      bg="gray.100"
    >
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
        bg="white"
      >
        <Box p={4}>
          <Heading>Sign in to your account</Heading>
        </Box>
        <Box p={4}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </FormControl>
            <Button
              colorScheme="teal"
              variant="solid"
              width="full"
              mt={4}
              type="submit"
              value={"login"}
            >
              Sign in
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;

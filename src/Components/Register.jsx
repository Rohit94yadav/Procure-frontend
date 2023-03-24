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
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://rich-jade-puffer-gown.cyclic.app/user/signup`, data)
      .then((res) => {
        alert(res.data.msg);
        localStorage.setItem("token", res.data.token);
       
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
          <Heading>Create an account</Heading>
        </Box>
        <Box p={4}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  name="password"
                  placeholder="Enter your password"
                />
                <InputRightElement>
                  <IconButton
                    icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    variant="ghost"
                    onClick={handleTogglePassword}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              colorScheme="teal"
              variant="solid"
              width="full"
              mt={4}
              type="submit"
              value={"Signup"}
            >
              Sign up
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Register;

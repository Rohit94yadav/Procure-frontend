// import React from 'react'
// import { Link } from 'react-router-dom'

// export const Navbar = () => {
//   return (
//     <div style={{display:'flex',justifyContent:"space-around",backgroundColor:"black",height:"50px",color:"white",alignItems:"center"}}>
//         <div><h1>Todos</h1></div>
//         <div style={{display:'flex',justifyContent:"space-around",gap:"50px",color:"white"}}>
//             <Link to={"/"}><div style={{color:"white"}}>Home</div></Link>
//             <Link to={"/signup"}><div style={{color:"white"}}>Signup</div></Link>
//             <Link to={"/login"}><div style={{color:"white"}}>Login</div></Link>
//         </div>
//     </div>
//   )
// }
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
 
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const toast = useToast();
  const token = localStorage.getItem("token")
const navigate = useNavigate();
const handleLogout = () => {
  setTimeout(() => {
    
    localStorage.removeItem("token");
      toast({
        title: "Logged Out Successfully!!",
  
        status: "success",
  
        isClosable: true,
        position: "top",
      })
     navigate("/login")
    }, 1500);
  }
  
  console.log(token)
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            <Flex justify="space-between" flex="1">
              <ButtonGroup variant="link" spacing="8">
                <Link to={"/"}>
                  <Button>Dashboard</Button>
                </Link>
                <Link to={"/addproducts"}>
                  <Button>Add Product</Button>
                </Link>
              </ButtonGroup>
              <HStack ml="30px" spacing="5">
              {!token?
                <Link to={"/login"}>
                  <Button colorScheme="teal">LOGIN</Button>
                </Link>
                : 
                
                  <Button onClick={handleLogout} colorScheme="teal">LOGOUT</Button>
               
              }
              
                <Link to={"/signup"}>
                  <Button colorScheme="blue">Sign up</Button>
                </Link>
              </HStack>
            </Flex>
            
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

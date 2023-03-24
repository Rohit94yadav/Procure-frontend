import React, { useEffect, useState } from "react";
import axios from "axios";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
  Spinner,
  Button,
  Stack,
  Badge,
  useColorModeValue,
  Avatar,
  Grid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const toast = useToast();

  const handleDelete = (itemId) => {
    if(token){
   
    axios
      .delete(`https://rich-jade-puffer-gown.cyclic.app/products/delete/${itemId}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        toast({
          title: "Item deleted successfully.",
          description: "Item deleted successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
       window.location.reload();
      })
      .catch((error) => {
        toast({
          title: "An error occurred.",
          description: "Could not delete. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log("Error deleting item:", error);
      });
  };
  }
  
  
  useEffect(() => {
    if(token){
   
    axios
      .get("https://rich-jade-puffer-gown.cyclic.app/products", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        toast({
          title: "An error occurred.",
          description: "Could not fetch products. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
    
    }
  }, [toast]);
if(token){


  return (
    
    <Flex
     p="20px"
      align="center"
      justifyContent="center"
      bg="gray.100"
    >
     {isLoading ? (
  <Spinner size="xl" />
) : (
  <Grid
    m="auto"
    gridTemplateColumns="repeat(3,1fr)"
    gap="30px"
  >
    {product.map((item) => (
      <Box
        key={item.id}
       
        
        bg='white'
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        mb={8}
      >
        <Image width="100%" h="200px" src={item.image} alt={item.title} />
        <Heading fontSize={'2xl'} fontFamily={'body'} mt={4}>
          {item.title}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          $ {item.price}
        </Text>
        <Button
        onClick={()=>{handleDelete(item._id)}}
          fontSize={'sm'}
          rounded={'full'}
          bg={'blue.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'blue.500',
          }}
          _focus={{
            bg: 'blue.500',
          }}
        >
          <DeleteIcon />
        </Button>
      </Box>
    ))}
  </Grid>
)}
    </Flex>
  );
        }else{
          return (
            <Box color="red">Please Login To See Products !</Box>
          )
        }
};

export default Home;


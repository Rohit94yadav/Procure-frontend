import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';

const AddProduct = () => {
  const token = localStorage.getItem('token');
  const [product, setProduct] = useState({
    title: '',
    image: '',
    description: '',
    price: '',
    category: '',
  });
  const toast = useToast();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post(
        'https://rich-jade-puffer-gown.cyclic.app/products/add',
        product,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      toast({
        title: 'Product added successfully!',
        status: 'success',
        isClosable: true,
        position: 'top',
      });
      setProduct({
        title: '',
        image: '',
        description: '',
        price: '',
        category: '',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'An error occurred while adding the product',
        status: 'error',
        isClosable: true,
        position: 'top',
      });
    }
  };
if(token){
  return (
    <Box as="section" py={{ base: '12', md: '24' }}>
      <Box maxW={{ base: '90%', md: '50%' }} mx="auto">
        <form onSubmit={handleSubmit}>
          <VStack spacing="4">
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="title"
                value={product.title}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input
                type="url"
                name="image"
                value={product.image}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select
                name="category"
                value={product.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="home">Home</option>
              </Select>
            </FormControl>
            <Button type="submit" colorScheme="green">
              Add Product
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
);
  }else{
    return(
      <Box color="red">Please Login First To Add Products !</Box>
    )
  }
};

export default AddProduct;    
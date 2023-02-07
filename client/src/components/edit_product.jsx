import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Image,
  List,
  ListItem,
  Button,
  Divider
} from "@chakra-ui/react";
import { axiosInstance } from "../config/config"
export default function EditProduct(props) {  
   
    const data = props.data;

  
    

  const [orderList, setOrderList] = useState([]);

  const handleAddToCart = (product) => {
    setOrderList([...orderList, product]);
  };

  const handleDeleteFromCart = (product) => {
    setOrderList(orderList.filter((p) => p.name !== product.name));
  };


    return(
        <>
        <Flex  p={5} h="100vh"  marginLeft="210px" overflow={"auto"} >
      <Flex w="100%"  overflow={"auto"}  bg="gray.200" flexDir={"column"} px={4} >
        <Flex fontWeight="bold" mb={5} fontSize={"24px"}>
          Products
        </Flex>
        <Stack spacing={5} >
          {data?.map((product) => (
            <Flex p={5} bg="white" shadow="md">
              <Image w= " 90px" h="90px" src={product?.imageURL} />
              <Box ml={5}>
                <Text fontWeight="bold">{product?.name}</Text>
                <Text fontSize="sm">Rp. {product?.price_promo.toLocaleString()}</Text>
                <Flex gap={3}>
                <Button mt={2} onClick={() => handleAddToCart(product)} colorScheme="green">
                  Edit
                </Button>
                <Button mt={2}  onClick={() => handleDeleteFromCart(product)} colorScheme="red">
                  Delete
                </Button>
                </Flex>
              </Box>
            </Flex> 
          ))}
        </Stack>
        </Flex>
        </Flex>
        </>
    )}




          
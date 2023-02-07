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

export default function Cashier(props) {
    const data = props.data;

  const [orderList, setOrderList] = useState([]);

  const handleAddToCart = (product) => {
    setOrderList([...orderList, product]);
  };

  const handleDeleteFromCart = (product) => {
    setOrderList(orderList.filter((p) => p.name !== product.name));
  };

//   const products = [
//     {
//       name: "Product 1",
//       price_promo: 10.0,
//       imageURL: "https://via.placeholder.com/100x100",
//     },
//     {
//       name: "Product 2",
//       price_promo: 20.0,
//       imageURL: "https://via.placeholder.com/100x100",
//     },
//     {
//       name: "Product 3",
//       price_promo: 30.0,
//       imageURL: "https://via.placeholder.com/100x100",
//     },
//   ];

  return (
    <>
    <Flex  p={5} h="100vh"  marginLeft="210px" overflow={"auto"} >
      <Flex w="100%"  overflowY={"scroll"} bg="gray.200" flexDir={"column"} px={4} >
        <Flex fontWeight="bold" mb={5} fontSize={"24px"}>
          Products
        </Flex>
        <Stack spacing={5}>
          {data?.map((product) => (
            <Flex p={5} bg="white" shadow="md">
              <Image w= " 90px" h="90px" src={product?.imageURL} />
              <Box ml={5}>
                <Text fontWeight="bold">{product?.name}</Text>
                <Text fontSize="sm">Rp. {product?.price_promo.toLocaleString()}</Text>
                <Flex gap={3}>
                <Button mt={2} onClick={() => handleAddToCart(product)} colorScheme="green">
                  Add to Cart
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

      <Flex w="800px"  px={5} bg="gray.200" flexDir={"column"}>
        <Text fontWeight="bold" fontSize={"24px"} mb={5}>
          Order List
        </Text>
        <Flex spacing={3} gap="2" flexDir="row"  overflowX="auto" wrap={"wrap"}>
          {orderList.map((product) => (
            <Flex p={5} bg="white" shadow="md">
            <Image w= " 50px" h="50px" src={product?.imageURL} />
            <Box ml={5}>
              <Text fontWeight="bold">{product?.name}</Text>
              <Text fontSize="sm">Rp. {product?.price_promo.toLocaleString()} x 1</Text>
              <Flex gap={3}>
            
              </Flex>
            </Box>
          </Flex> 
            
               
            
          ))}
          
        </Flex>
        <Box mt={5}>
          <Text fontWeight="bold">
            Total: Rp. 
            {orderList.reduce((total, product) => total + product.price_promo, 0).toLocaleString()}
          </Text>
        </Box>
        <Box mt={5}>
          <Button colorScheme={"cyan"}>Confirm</Button>
        </Box>
      </Flex>
    </Flex>
    </>
  );
};




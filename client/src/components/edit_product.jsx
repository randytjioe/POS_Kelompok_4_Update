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
  Divider,
} from "@chakra-ui/react";
import { axiosInstance } from "../config/config";
export default function EditProduct(props) {
  const data = props.data;

  const [orderList, setOrderList] = useState([]);

  const handleAddToCart = (product) => {
    setOrderList([...orderList, product]);
  };

  const handleDeleteFromCart = (product) => {
    setOrderList(orderList.filter((p) => p.name !== product.name));
  };

  return (
    <>
      <Flex p={5} h="100vh" marginLeft="410px" overflow={"auto"}>
        <Flex
          w="1650px"
          overflowY={"scroll"}
          flexDir={"column"}
          px={4}
          borderRight={"2px solid #E2E8F0"}
        >
          <Flex fontWeight="bold" mb={5} fontSize={"24px"}>
            Edit & Delete Products
          </Flex>
          <Flex spacing={5} flexWrap="wrap" gap={3}>
            {data?.map((product) => (
              <Product product={product} handleAddToCart={handleAddToCart} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

function Product(props) {
  const [qty, setQty] = useState(1);
  const data = props.data;
  return (
    <Flex
      p={2}
      gap={2}
      fontFamily={"Tw Cen MT"}
      w=" 350px"
      bgColor={"#181918"}
      borderRadius="5%"
    >
      <Flex justifyContent="center" color="white">
        <Image
          w="134px"
          h="153px"
          color={"white"}
          src={props.product?.image_url}
          roundedTop="lg"
        />
      </Flex>
      <Flex
        justifyContent="center"
        gap={2}
        alignContent="center"
        flexDir={"column"}
        w="190px"
        bgColor={"#181918"}
        fontSize="14px"
      >
        <Flex
          fontSize="14px"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          color={"white"}
          flexWrap="wrap"
        >
          {props.product?.name}
        </Flex>
        <Flex fontSize="14px" color="#F68522">
          Rp. {props.product?.harga.toLocaleString()}
        </Flex>
        <Flex fontSize="12px" color="white">
          Stock : {props.product?.stock}
        </Flex>

        <Flex gap={3}>
          <Button
            mt={2}
            // onClick={() => handleAddToCart(product)}
            colorScheme="green"
          >
            Edit
          </Button>
          <Button
            mt={2}
            // onClick={() => handleDeleteFromCart(product)}
            colorScheme="red"
          >
            Delete
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

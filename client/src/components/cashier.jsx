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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  CloseButton,
  Center,
} from "@chakra-ui/react";
import { useEffect } from "react";

export default function Cashier(props) {
  const data = props.data;

  const [orderList, setOrderList] = useState([]);

  const handleAddToCart = (product, qty) => {
    // const tempt = [...orderList, product];
    // console.log(tempt);

    const tempOrder = [...orderList];

    const orderItem = {
      qty,
      total_harga_transaction: qty * product.harga,
      price: product.harga,

      product,
    };

    const idx = orderList.findIndex((val) => {
      return val.product.name === product.name;
    });

    if (idx >= 0) {
      tempOrder[idx] = orderItem;
      return setOrderList([...tempOrder]);
    }

    setOrderList([...orderList, orderItem]);
  };

  useEffect(() => {
    // console.log(orderList);
  }, [orderList]);

  const handleDeleteFromCart = (product) => {
    const temp = [...orderList];

    const index = temp.findIndex((p) => p.name === product.name);
    temp.splice(index, 1);
    setOrderList(temp);
  };

  return (
    <>
      <Flex p={5} h="100vh" marginLeft="210px" overflow={"auto"}>
        <Flex
          w="1650px"
          overflowY={"scroll"}
          flexDir={"column"}
          px={4}
          borderRight={"2px solid #E2E8F0"}
        >
          <Flex fontWeight="bold" mb={5} fontSize={"24px"}>
            Products
          </Flex>
          <Flex spacing={5} flexWrap="wrap" gap={3}>
            {data?.map((product) => (
              <Product product={product} handleAddToCart={handleAddToCart} />
            ))}
          </Flex>
        </Flex>

        <Flex w="800px" px={5} flexDir={"column"}>
          <Text fontWeight="bold" fontSize={"24px"} mb={5}>
            Order List
          </Text>
          <Flex
            spacing={3}
            gap="2"
            flexDir="row"
            overflowX="auto"
            wrap={"wrap"}
          >
            {orderList.map((product) => (
              <OrderList
                data={product}
                handleDeleteFromCart={handleDeleteFromCart}
              />
            ))}
          </Flex>
          <Flex mt={5}>
            <Center fontWeight="bold" fontSize={"16px"}>
              Total: Rp.
              {orderList
                .reduce(
                  (total, data) => total + data.total_harga_transaction,
                  0
                )
                .toLocaleString()}
            </Center>
          </Flex>
          <Flex mt={5} justifyContent="left">
            <Flex
              px="25px"
              display="flex"
              justifyContent="space-around"
              gap={100}
            >
              <Button colorScheme={"cyan"}>Confirm</Button>
              <Button
                mt={"1px"}
                onClick={() => setOrderList([])}
                colorScheme="red"
              >
                Remove
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

function OrderList(props) {
  return (
    <>
      <Flex
        minW="166px"
        h="150px"
        bgColor={"#181918"}
        py={1}
        borderRadius="5%"
        flexDir={"row"}
        justifyContent="center"
      >
        <Flex my={3}>
          <Flex bgColor={"#181918"}>
            <Flex
              fontFamily={"Tw Cen MT"}
              color={"white"}
              justifyContent="center"
              bgColor={"#181918"}
            >
              <Flex bgColor={"#181918"}>
                <Image
                  w="104px"
                  h="123px"
                  color={"white"}
                  src={props.data.product?.image_url}
                  alt={`Picture of ${props.data.product?.name}`}
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
              >
                <Flex
                  fontSize="12px"
                  color={"white"}
                  as="h4"
                  lineHeight="tight"
                  flexWrap="wrap"
                  fontWeight="bold"
                >
                  {props.data.product?.name}
                </Flex>
                <Flex
                  fontSize="12px"
                  color={"#F68522"}
                  textAlign="center"
                  as="h4"
                  lineHeight="tight"
                >
                  Rp. {props.data.product?.harga.toLocaleString()} x{" "}
                  {props?.data.qty} = Rp.{" "}
                  {props.data.total_harga_transaction.toLocaleString()}
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDir={"row-reverse"}></Flex>
          </Flex>
        </Flex>
        <Flex>
          <CloseButton
            size="sm"
            color={"white"}
            onClick={() => props?.handleDeleteFromCart(props?.data.product)}
            borderRadius="100%"
            bgColor={"red"}
            position="fix"
            margin={"none"}
          />
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

        <Flex gap={2} flexDir="row" py={"10px"}>
          {/* <Accordion>
            <AccordionItem> */}

          {/* <Flex flexDir={"column"} > */}
          <NumberInput
            maxW={"100px"}
            onChange={(valueString) => {
              if (valueString > props.product?.stock) {
                // alert("melebihi stock");

                setQty(props.product?.stock);
              } else {
                setQty(valueString);
              }
            }}
            value={qty}
            min={1}
            max={props.product?.stock}
          >
            <NumberInputField color={"white"} />
            <NumberInputStepper color={"white"}>
              <NumberIncrementStepper color={"white"} />
              <NumberDecrementStepper color={"white"} />
            </NumberInputStepper>
          </NumberInput>

          <Button
            maxW={"100px"}
            onClick={() => props.handleAddToCart(props.product, qty)}
            colorScheme="green"
            w={"full"}
          >
            Add to Cart
          </Button>
          {/* </Flex> */}
          {/* </AccordionItem>
          </Accordion> */}
        </Flex>
      </Flex>
    </Flex>
  );
}

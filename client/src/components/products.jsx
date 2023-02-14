import { useEffect, useState } from "react";

import axios from "axios";
import {
  Flex,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  InputRightAddon,
  List,
  ListItem,
  Button,
  Grid,
  GridItem,
  Icon,
  Center,
  IconButton,
  Slide,
  Text,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import React from "react";

export default function ProductPage(props) {
  const data = props.data;

  return (
    <>
      <Flex
        zIndex={40}
        w="1200px"
        gap={2}
        paddingTop="20px"
        paddingBottom={"20px"}
        justifyContent="start"
        paddingX={"20px"}
        fontFamily={"Tw Cen MT"}
        flexDir={"column"}
        flexWrap="wrap"
        overflowX={"auto"}
        overflowY={"auto"}
        h="full"
      >
        <Flex paddingX={"20px"}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="#">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="#">
                Product
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Searchs</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        {/* <Flex > */}

        {/* <Center minW="60px" h={"366px"}>
          <IconButton
        aria-label="right-arrow"
        colorScheme="grey"
        borderRadius="full"
        borderStyle={"none"}
        variant='outline'
        zIndex={2}
        onClick={()=> Slide("left")}>
        <BiLeftArrowAlt />
      </IconButton>
          </Center> */}

        <Flex
          zIndex={40}
          w="1200px"
          gap={2}
          paddingTop="20px"
          paddingBottom={"20px"}
          justifyContent="start"
          paddingX={"20px"}
          fontFamily={"Tw Cen MT"}
          flexDir={"row"}
          flexWrap="wrap"
          overflowX={"auto"}
          overflowY={"auto"}
          h="full"
        >
          {data?.map((product, idx) => {
            return (
              <>
                <Flex
                  minW="166px"
                  h="170px"
                  bgColor={"#181918"}
                  py={2}
                  borderRadius="5%"
                  flexDir={"row"}
                  justifyContent="center"
                >
                  <Flex justifyContent="center" color="white">
                    <Link to={`/${product.link}`}>
                      <Image
                        w="134px"
                        h="153px"
                        color={"white"}
                        src={product?.image_url}
                        alt={`Picture of ${product?.name}`}
                        roundedTop="lg"
                      />
                    </Link>
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
                      fontSize="14px"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                      color={"white"}
                      textAlign="center"
                    >
                      {product?.category}
                    </Flex>
                    <Flex
                      fontSize="12px"
                      color={"white"}
                      // textAlign="center"
                      as="h4"
                      lineHeight="tight"
                      // isTruncated
                      // minH={"70px"}
                      // maxW="100px"

                      flexWrap="wrap"
                    >
                      {product?.name}
                    </Flex>
                    <Flex
                      fontSize="14px"
                      color={"#F68522"}
                      textAlign="center"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      Rp.{product?.harga.toLocaleString()}
                    </Flex>
                    {/* <Flex
                      fontSize="11px"
                      color={"white"}
                      textAlign="center"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      <Text as="s" display={!product?.price ? "none" : ""}>
                        Rp. {product?.price.toLocaleString()}
                      </Text>
                    </Flex> */}
                    <Flex
                      fontSize="12px"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                      color={"white"}
                      textAlign="center"
                    >
                      STOCK : {product?.stock}
                    </Flex>
                  </Flex>
                </Flex>
              </>
            );
          })}
        </Flex>
      </Flex>
      {/* <Center minW="60px" h={"366px"}>
    <IconButton
        aria-label="right-arrow"
        colorScheme='gray'
        borderRadius="full"
        borderStyle={"none"}
        variant='outline'
        zIndex={2}
        onClick={()=> Slide("right")}>
        <BiRightArrowAlt />
      </IconButton>
    </Center> */}

      {/* </Flex> */}
    </>
  );
}

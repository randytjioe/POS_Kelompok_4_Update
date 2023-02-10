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

  // const [products, setproducts] = useState([])

  // const [product,setproduct] = useState({
  // })

  // const [newData, setData] = useState(
  //     {
  //         id:0,
  //         name: "",
  //         brand_id : "",
  //         gender_id: "" ,
  //         stock : 5,
  //         harga : 10000,
  //         Image_url : "https://www.edigitalagency.com.au/wp-content/uploads/jamtangan-logo-red-black-png.png"
  //     })
  // function changeproduct(newproduct) {
  //     setproduct(newproduct)
  // }

  //  function showForm(edit) {

  //     if(edit) {
  //         setData({...product})
  //         document.getElementsByName("name")[0].value = product.name;
  //         document.getElementsByName("brand_id")[0].value = product.brand_id;
  //         document.getElementsByName("gender_id")[0].value = product.gender_id;
  //         document.getElementsByName("stock")[0].value = product.stock;
  //         document.getElementsByName("harga")[0].value = product.harga;
  //         document.getElementsByName("Image_url")[0].value = product.Image_url;

  //     }
  //     else {
  //         setData({
  //             id:0,
  //             name: "",
  //             brand_id : "",
  //             gender_id: "" ,
  //             stock : "",
  //             harga : "",
  //             Image_url : "https://www.edigitalagency.com.au/wp-content/uploads/jamtangan-logo-red-black-png.png"
  //         })

  //         document.getElementsByName("name")[0].value = "";
  //         document.getElementsByName("brand_id")[0].value = "";
  //         document.getElementsByName("gender_id")[0].value = "";
  //         document.getElementsByName("stock")[0].value = "";
  //         document.getElementsByName("harga")[0].value ="";
  //         document.getElementsByName("Image_url")[0].value = "";

  //     }
  //     var x =  document.getElementById("background-add");
  //     var y = document.getElementsByClassName("product-Slider")
  //     if (x.style.display === "none" || x.style.display === "") {
  //         setTimeout(()=> {
  //             x.style.display = "flex";
  //       x.style.flexDirection = "row"
  //         y[0].style.display = "none"
  //     },500)
  //     } else {
  //       x.style.display = "none";
  //       y[0].style.display = "grid"
  //     }

  //   }

  //   function addproductItem() {
  //     console.log(newData);
  //     if(products.find((val)=> val.id === newData.id)) {
  //         return axios.patch("http://localhost:2000/jamtangan/" + newData.id, newData).then(()=>{
  //             fetchproducts()
  //             alert("product has been product has been updated ")
  //            })
  //     }

  //    return axios.post("http://localhost:2000/jamtangan", newData).then(()=>{
  //     fetchproducts()
  //     alert("new product has been added ")
  //    })

  //   }

  //   function InputHandler(event) {
  //     const { value, name } = event.target;
  //     setData({
  //       ...newData,
  //       [name]: value,
  //     })
  //   }

  //   useEffect(() => {
  //     if(newData.Image_url === "")
  //     setData({
  //         ...newData,
  //         ["Image_url"]: "https://www.edigitalagency.com.au/wp-content/uploads/jamtangan-logo-red-black-png.png",
  //       })
  //   },[newData.Image_url])

  // const fetchproducts = async () => {
  //   await axios.get("http://localhost:2000/jamtangan").then((res)=>{
  //     setproducts([...res.data])
  //     setproduct({...res.data[0]})
  //   })
  // }

  // const deleteproduct = async () => {
  //     let answer =  window.confirm("are you sure you want to delete this product?")
  //    if(answer) {
  //     await axios.delete("http://localhost:2000/jamtangan/"+ product.id ).then(()=>{
  //         fetchproducts()
  //         alert("product has been deleted ")
  //     })

  //      }
  //    }

  // useEffect(  () => {
  //     fetchproducts();

  // },[])

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

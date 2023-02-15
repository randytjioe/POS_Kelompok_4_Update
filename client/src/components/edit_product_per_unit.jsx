import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../config/config";
import { useLocation } from "react-router-dom";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Link,
  Select,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Textarea,
  Image,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { Link as ReachLink } from "react-router-dom";
export default function EditProducts() {
  const [image, setImage] = useState("https://fakeimg.pl/300/");
  const [saveImage, setSaveImage] = useState(null);
  const [brand_id, setBrand_id] = useState(0);
  const [name, setName] = useState("");
  const [harga, setHarga] = useState();
  const [stock, setStock] = useState();
  const [gender, setGender] = useState("");
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const location = useLocation();
  const [product_id, setProduct_id] = useState(0);
  useEffect(() => {
    setProduct_id(location.pathname?.split("/")[2]);
    fetchproducts(location.pathname?.split("/")[2]);
  }, []);

  const fetchproducts = async (product_id) => {
    await axiosInstance
      .get("/products/" + product_id)
      .then((response) => {
        setProducts(response.data.result);
        console.log(response.data.result);
        setName(response.data.result.name);
        setHarga(response.data.result.harga);
        setStock(response.data.result.stock);
        setImage(response.data.result.image_url);
        setGender(response.data.result.gender);
        setBrand_id(response.data.result.brand_id);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    console.log(image);
  }, [image]);

  const fetchBrand = () => {
    axiosInstance
      .get("/brand/v1")
      .then((response) => {
        setBrands(response.data.result);
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  // const [image_url, setImage_url] = useState("");

  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    // alert("asd");

    // const formData = new FormData();

    // formData.append("name", name);
    // formData.append("stock", stock);
    // formData.append("harga", harga);
    // formData.append("brand_id", brand_id);
    // formData.append("gender", gender);
    const Data = {
      name,
      stock,
      harga,
      brand_id,
      gender,
    };

    try {
      // alert("asd");
      console.log(Data);
      await axiosInstance.patch("/edit-product?id=" + product_id, Data);
      navigate("/edit-product");
      console.log("product edited");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBrand();
  }, []);

  return (
    <Flex
      minH={"90vh"}
      align={"center"}
      justifyContent={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading
          align={"center"}
          lineHeight={1.1}
          fontSize={{ base: "2xl", sm: "3xl" }}
        >
          EDIT PRODUCT
        </Heading>
        <form>
          <FormControl id="productName">
            <FormLabel>Product Image</FormLabel>
            <Stack
              direction={["column", "row"]}
              spacing={6}
              justifyContent="center"
              alignItems="center"
            >
              {/* <Center> */}
              <Image borderRadius={"100%"} boxSize="200px" src={image}>
                {/* <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                /> */}
              </Image>
              {/* </Center> */}
              {/* <Center w="full"> */}
              {/* <Input
                  id=""
                  type="file"
                  accept="image/*"
                  onChange={handleFile}
                  w="full"
                  placeholder="Image URL"
                  name={image}
                  // onChange={(e) => setImage_url(e.target.value)}
                ></Input> */}
              {/* </Center> */}
            </Stack>
          </FormControl>
          <FormControl id="Brand">
            <FormLabel>Brand</FormLabel>
            <Select
              variant="outline"
              value={brand_id}
              onChange={(e) => {
                setBrand_id(e.target.value);
              }}
            >
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl id="productName">
            <FormLabel>Product Name</FormLabel>
            <Textarea
              placeholder="Product Name"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="promo price">
            <FormLabel>Original Price</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="Rp"
              />
              <Input
                placeholder="Enter amount"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="price">
            <FormLabel>Stock</FormLabel>
            <InputGroup>
              {/* <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="Rp"
            /> */}
              <Input
                placeholder="Enter amount"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="Gender">
            <FormLabel>Gender</FormLabel>
            <RadioGroup value={gender} onChange={setGender}>
              <Stack direction="row" spacing={10}>
                <Radio value="men">Men</Radio>
                <Radio value="women">Women</Radio>
                <Radio value="unisex">Unisex</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]} py={4}>
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
              type="reset"
              onClick={() => navigate("/edit-product")}
            >
              Cancel
            </Button>

            <Button
              bg={"blue.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
              }}
              type="submit"
              onClick={(e) => saveProduct(e)}
            >
              Save
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}

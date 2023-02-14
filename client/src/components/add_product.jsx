import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../config/config";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
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
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

export default function AddProduct() {
  const [image, setImage] = useState("https://fakeimg.pl/300/");
  const [saveImage, setSaveImage] = useState(null);
  const [brand_id, setBrand_id] = useState(0);
  const [name, setName] = useState("");
  const [harga, setHarga] = useState();
  const [stock, setStock] = useState();
  const [gender, setGender] = useState("");

  const [brands, setBrands] = useState([]);

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

  const handleFile = (event) => {
    const uploaded = event.target.files[0];
    console.log(uploaded);
    setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
  };

  // const [image_url, setImage_url] = useState("");

  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("stock", stock);
    formData.append("harga", harga);
    formData.append("image", saveImage);
    formData.append("brand_id", brand_id);
    formData.append("gender", gender);

    try {
      // alert("asd");
      await axiosInstance.post("/product/v2", formData);
      navigate("/products");
      console.log("product added");
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
          ADD PRODUCT
        </Heading>
        <form onSubmit={(e) => saveProduct(e)}>
          <FormControl id="productName">
            <FormLabel>Product Image</FormLabel>
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size="xl" src={image}>
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFile}
                  w="full"
                  placeholder="Image URL"
                  name={image}
                  // onChange={(e) => setImage_url(e.target.value)}
                ></Input>
              </Center>
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
            <Input
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
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
              type="reset"
              value="Reset"
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
            >
              Add
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}

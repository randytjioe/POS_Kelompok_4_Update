import React from "react";
import noImage from "../assets/no-image.png";
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
  HStack,
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

export default function UserProfileEdit() {
  const [value, setValue] = React.useState('1')
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
        <FormControl id="productName">
          <FormLabel>Product Image</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src={noImage}>
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
              <Input w="full" placeholder="Image URL"></Input>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="Brand">
          <FormLabel>Brand</FormLabel>
          <Select variant="outline">
            <option value="option1">GARMIN</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          {/* <Input
            placeholder="brand"
            _placeholder={{ color: "gray.500" }}
            type="text"
          /> */}
        </FormControl>
        <FormControl id="productName">
          <FormLabel>Product Name</FormLabel>
          <Input
            placeholder="Product Name"
            _placeholder={{ color: "gray.500" }}
            type="text"
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
            <Input placeholder="Enter amount" />
          </InputGroup>
          {/* <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          /> */}
        </FormControl>
        <FormControl id="price">
          <FormLabel>Promo Price</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="Rp"
            />
            <Input placeholder="Enter amount" />
          </InputGroup>
        </FormControl>
        <FormControl id="password">
          <FormLabel>Gender</FormLabel>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row" spacing={10}>
              <Radio value="1">Men</Radio>
              <Radio value="2">Women</Radio>
              <Radio value="3">Unisex</Radio>
            </Stack>
          </RadioGroup>
          {/* <Input
            placeholder="password"
            _placeholder={{ color: "gray.500" }}
            type="password"
          /> */}
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
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
          >
            Add
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
} 
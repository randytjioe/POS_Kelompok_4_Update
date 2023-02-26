import {
  Flex,
  Image,
  InputGroup,
  InputRightElement,
  Box,
  List,
  Input,
  Menu,
  Link,
  Button,
  Divider,
  Icon,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  ListItem,
  Avatar,
  Center,
} from "@chakra-ui/react";
import Register from "./register2";
import Avatar1 from "../assets/avatar.png";
import Logo from "../assets/logo.png";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link as ReachLink } from "react-router-dom";
import { useRef } from "react";
import { useSelector } from "react-redux";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiBox,
  FiWatch,
} from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Navbar(props) {
  const data = props.data;
  const userSelector = useSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  function inputHandler(event) {
    const { value, name } = event.target;

    name === "search"
      ? setSearch(value)
      : setProduct({
          ...product,
          [name]: value,
        });
  }

  // useEffect(
  //   ()=>{
  //     console.log(search)
  //   }, [search]
  // )

  return (
    <>
      <Flex
        zIndex={50}
        px={2}
        h={"70px"}
        fontFamily={"Tw Cen MT"}
        backgroundColor="white"
        justifyContent="center"
        alignItems={"center"}
        w="full"
        pos="sticky"
        top="0"
        padding="20px"
        display={"flex"}
        borderBottom={"2px solid #E2E8F0"}
      >
        <Flex px={3} gap={5}>
          {/* <Menu position="fixed" zIndex="3" isLazy> */}
          {/* <MenuButton> */}

          <Flex alignItems={"center"}>
            <Image
              fontSize={"26px"}
              color="#F68522"
              justifyContent="center"
              src={Logo}
            ></Image>
            <Flex px={9} alignItems="center">
              <InputGroup>
                <Input
                  onKeyDown={(e) =>
                    e.key === "Enter" ? props?.filter(e.target.value) : null
                  }
                  backgroundColor={"white"}
                  type="tel"
                  placeholder="Search"
                  w="470px"
                  h="35px"
                  borderRadius={"none"}
                  onChange={inputHandler}
                  name="search"
                ></Input>
                <Flex
                  justifyContent="center"
                  textAlign="center"
                  h="35px"
                  w="35px"
                  onClick={() => props?.filter(search)}
                  _hover={{
                    bg: "grey",
                    color: "black",
                    cursor: "pointer",
                  }}
                  borderRadius="100%"
                  bgColor={"#F68522"}
                >
                  {" "}
                  <Center>
                    <Icon as={AiOutlineSearch} justifyContent="center"></Icon>
                  </Center>{" "}
                </Flex>
              </InputGroup>
            </Flex>

            <Icon
              boxSize={"7"}
              as={FiBell}
              color="black"
              sx={{
                _hover: {
                  cursor: "pointer",
                },
              }}
            ></Icon>
          </Flex>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Flex
                flexDir={"rows"}
                px={2}
                w="320px"
                h="58px"
                justifyContent={"left"}
                alignContent={"center"}
              >
                <Center>
                  <Avatar
                    boxSize={"12"}
                    src={Avatar1}
                    sx={{
                      _hover: {
                        cursor: "pointer",
                      },
                    }}
                  />
                </Center>
                <Flex flexDir={"column"} px="10px" justifyContent={"center"}>
                  <Flex fontSize={"16px"} color="black">
                    {userSelector?.name}
                  </Flex>
                  <Flex fontSize={"12px"} color="#F68522" fontWeight={"bold"}>
                    {userSelector?.isadmin ? "ADMIN" : "CASHIER"}
                  </Flex>
                </Flex>
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow backgroundColor={"#F68522"} />
              {/* <PopoverCloseButton /> */}

              <PopoverHeader
                bgColor={"#F68522"}
                fontFamily="Bebas"
                color="white"
              >
                {" "}
                SELAMAT DATANG!
              </PopoverHeader>
              <PopoverBody>
                <List
                  fontSize={"14px"}
                  fontFamily="Bebas"
                  color="#7D7D7D"
                  gap={2}
                >
                  <ListItem>
                    <Link>
                      <Register />
                    </Link>{" "}
                  </ListItem>

                  <Divider orientation="horizontal" py={2} />
                  <ListItem>
                    <Link to="/login" as={ReachLink}>
                      Logout{" "}
                    </Link>{" "}
                  </ListItem>
                </List>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* </MenuButton> */}
          {/* <MenuList fontSize={"xs"}>
        <MenuItem  onClick={() => {
        
        }}><Link to='/register' mx={3} as={ReachLink} fontWeight="bold" fontSize={16} color="black" >Masuk</Link></MenuItem>
        <MenuItem>Buat Akun</MenuItem> */}

          {/* <Box onClick={onOpen}>
        <MenuItem >
        </MenuItem>
        </Box> */}
          {/* <Button onClick={onOpen}>test</Button> */}
          {/* <MenuItem>
        <Box onClick={onOpen}>
        Lihat Status Pesanan

        </Box>

        <StatusPesanan onOpen={onOpen} onClose={onClose} isOpen={isOpen} initialRef={initialRef} finalRef={finalRef} />
        </MenuItem>
        <MenuItem > Konfirmasi Transfer</MenuItem>
        <MenuItem > Bantuan</MenuItem>
        <Divider orientation="horizontal"/>
        <MenuItem >Community Influencer Program</MenuItem>
        </MenuList>
</Menu> */}
        </Flex>
      </Flex>
    </>
  );
}

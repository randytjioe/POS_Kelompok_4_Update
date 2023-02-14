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
  Tooltip,
  Center,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import Background from "../assets/bg.png";
import Logo from "../assets/logo.svg.png";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link as ReachLink } from "react-router-dom";
import { useRef } from "react";
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
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import Register from "./register_cashier";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      <Flex
        className="sidebar"
        zIndex={90}
        w={"209px"}
        fontFamily={"Tw Cen MT"}
        justifyContent="center"
        h={"100vh"}
        top={"70"}
        paddingY="20px"
        display={"flex"}
        borderRight={"2px solid #E2E8F0"}
      >
        <Flex gap={5} flexDir={"column"} w={"209px"}>
          <Flex justifyContent="center" alignItems={"center"}>
            <Center>
              <Image
                src={Logo}
                sx={{
                  _hover: {
                    cursor: "pointer",
                  },
                }}
                w={"149px"}
                h={"178px"}
                borderRadius="20%"
              ></Image>
            </Center>
          </Flex>
          <Flex flexDir={"column"} alignItems={"center"}>
            <Divider orientation="horizontal" py={2} />

            <Flex
              w="207px"
              h="56px"
              alignItems={"center"}
              _hover={{
                bg: "orange",
                color: "black",
              }}
              py={2}
            >
              <Icon as={FiHome} color="black" mx={2} />
              <Link
                to="/"
                mx={3}
                as={ReachLink}
                fontSize="20px"
                fontWeight="bold"
                color="black"
              >
                {" "}
                DASHBOARD
              </Link>
            </Flex>

            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" w="207px">
                      <Flex
                        w="207px"
                        h="56px"
                        alignItems={"center"}
                        _hover={{
                          bg: "orange",
                          color: "black",
                        }}
                        // py={2}
                      >
                        <Icon as={FiBox} color="black" mx={2} />
                        <Link
                          to="/products"
                          mx={3}
                          as={ReachLink}
                          fontWeight="bold"
                          fontSize="20px"
                          color="black"
                        >
                          {" "}
                          PRODUCTS
                        </Link>

                        <AccordionIcon color={"black"} />
                      </Flex>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <Divider orientation="horizontal" />
                  <Flex
                    w="207px"
                    h="56px"
                    alignItems={"center"}
                    _hover={{
                      bg: "orange",
                      color: "black",
                    }}
                    py={2}
                  >
                    <Icon
                      as={BsFillArrowRightCircleFill}
                      color="black"
                      mx={6}
                    />
                    <Link
                      to="/add-product"
                      mx={1}
                      as={ReachLink}
                      fontWeight="bold"
                      fontSize={16}
                      color="black"
                    >
                      {" "}
                      ADD
                    </Link>
                  </Flex>
                  <Divider orientation="horizontal" />
                  <Flex
                    w="207px"
                    h="56px"
                    alignItems={"center"}
                    _hover={{
                      bg: "orange",
                      color: "black",
                    }}
                    py={2}
                  >
                    <Icon
                      as={BsFillArrowRightCircleFill}
                      color="black"
                      mx={6}
                    />
                    <Link
                      to="/edit-product"
                      mx={1}
                      as={ReachLink}
                      fontWeight="bold"
                      fontSize={16}
                      color="black"
                    >
                      {" "}
                      EDIT & DELETE
                    </Link>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Flex
              w="207px"
              h="56px"
              alignItems={"center"}
              _hover={{
                bg: "orange",
                color: "black",
              }}
              py={2}
            >
              <Icon as={FiWatch} color="black" mx={2} />
              <Link
                to="/transaction"
                mx={3}
                as={ReachLink}
                fontWeight="bold"
                fontSize="20px"
                color="black"
              >
                {" "}
                TRANSACTION
              </Link>
            </Flex>
            <Divider orientation="horizontal" py={2} />
            {/* <Flex
              w="207px"
              h="56px"
              alignItems={"center"}
              _hover={{
                bg: "orange",
                color: "black",
              }}
              py={2}
            >
              <Icon as={FaPowerOff} color="black" mx={2} />
              <Link mx={3} fontWeight="bold" fontSize="20px" color="black">
                <Register />
              </Link>
            </Flex> */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

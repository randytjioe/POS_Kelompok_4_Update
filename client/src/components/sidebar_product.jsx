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
  Stack,
  Checkbox,
  Select,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

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
import { FaPowerOff } from "react-icons/fa";

export default function Sidebar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = props.data;
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const CheckCategories = (e, param) => {
    let newCat;
    if (e.target.checked) {
      props.setCat([...props.cat, param]);
    } else {
      newCat = props.cat.filter((val) => {
        return val !== param;
      });
      props.setCat([...newCat]);
    }
  };

  const CheckGender = (e, param) => {
    let newGen;
    if (e.target.checked) {
      props.setGen([...props.gen, param]);
    } else {
      newGen = props.gen.filter((val) => {
        return val !== param;
      });
      props.setGen([...newGen]);
    }
  };

  return (
    <>
      <Flex
        zIndex={90}
        px={2}
        w={"215px"}
        backgroundColor="white"
        justifyContent="center"
        fontFamily={"Tw Cen MT"}
        minH={"100vh"}
        left="209"
        padding="5px"
        display={"flex"}
        borderRight={"2px solid #E2E8F0"}
        overflow="hidden"
      >
        <Flex
          flexDir={"column"}
          paddingBottom={"5px"}
          maxH={"685px"}
          overflowY="auto"
          overflowX={"hidden"}
        >
          <Flex
            justifyContent="center"
            alignItems={"center"}
            fontSize="20px"
            fontWeight="bold"
          >
            DAFTAR KATEGORI
          </Flex>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Flex
                      px={2}
                      fontSize="18px"
                      color={"#F68522"}
                      fontWeight="bold"
                    >
                      GENDER
                    </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack px={5} spacing={2} direction="column" fontSize="12px">
                  <Checkbox
                    colorScheme="orange"
                    onChange={(e) => {
                      CheckGender(e, "men");
                    }}
                  >
                    PRIA
                  </Checkbox>
                  <Checkbox
                    colorScheme="orange"
                    onChange={(e) => {
                      CheckGender(e, "women");
                    }}
                  >
                    WANITA
                  </Checkbox>
                  <Checkbox
                    colorScheme="orange"
                    onChange={(e) => {
                      CheckGender(e, "unisex");
                    }}
                  >
                    UNISEX
                  </Checkbox>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Flex
                      px={2}
                      fontSize="18px"
                      color={"#F68522"}
                      fontWeight="bold"
                      maxH={"500px"}
                    >
                      BRAND
                    </Flex>
                  </Box>
                  {/* <InputGroup>
        <InputRightElement pointerEvents="none" children={<AiOutlineSearch />}     />
            <Input backgroundColor={'white'} type="tel" placeholder="Search" w="200px" h="35px"/>
            
          </InputGroup> */}
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex px={5} spacing={2} direction="column" fontSize="10px">
                  {data?.map((product) => {
                    return (
                      <>
                        <Checkbox
                          colorScheme="orange"
                          onChange={(e) => {
                            CheckCategories(e, `${product?.category}`);
                          }}
                        >
                          {product?.category}
                        </Checkbox>
                      </>
                    );
                  })}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion defaultIndex={[0]} allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Flex
                      px={2}
                      fontSize="18px"
                      color={"#F68522"}
                      fontWeight="bold"
                    >
                      SORT
                    </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex flexDir={"column"} alignItems={"center"} gap={2}>
                  <Select
                    variant="outline"
                    onChange={(e) => {
                      props.setSort(e.target.value);
                    }}
                  >
                    <option value="ASC" selected>
                      A - Z
                    </option>
                    <option value="DESC">Z - A</option>
                  </Select>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Flex
            w="200px"
            h="56px"
            alignItems={"center"}
            borderRadius={"2%"}
            onClick={props?.filter}
            _hover={{
              bg: "orange",
              color: "black",
              cursor: "pointer",
            }}
            py={2}
          >
            <Icon as={AiOutlineSearch} color="black" mx={2} />
            <Box as="b" mx={3} fontSize={18} color="black" textAlign={"center"}>
              {" "}
              FILTER
            </Box>
          </Flex>

          {/* <Flex w="200px" h="56px"  alignItems={'center'}  borderRadius={"2%"} py="5px"
          _hover={{
            bg: 'grey',
            color: 'black',
          }} >
            <Icon as={AiOutlineSearch} color="black" mx={2}/>
            <Link as="b" mx={3}  fontSize={18} color="white" > ADD PRODUCT</Link>
            </Flex>

            <Flex w="200px" h="56px"  alignItems={'center'}  borderRadius={"2%"} py="5px"
          _hover={{
            bg: 'grey',
            color: 'black',
          }} >
            <Icon as={AiOutlineSearch} color="black" mx={2}/>
            <Link as="b" mx={3}  fontSize={18} color="white" > EDIT PRODUCT</Link>
            </Flex>
         

          <Flex w="200px" h="56px"  alignItems={'center'}  borderRadius={"2%"} py="5px"
          _hover={{
            bg: 'grey',
            color: 'black',
          }} >
            <Icon as={AiOutlineSearch} color="black" mx={2}/>
            <Link as="b" mx={3}  fontSize={18} color="white" > DELETE PRODUCT</Link>
            </Flex> */}
        </Flex>
      </Flex>
    </>
  );
}

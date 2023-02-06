import { Flex, Image, InputGroup, InputRightElement,Box,List, Input, 
    Menu,Link, Button,Divider, Icon, MenuButton,MenuItem, MenuList,
     useDisclosure,Popover, PopoverTrigger, PopoverContent, PopoverArrow, 
     PopoverCloseButton, PopoverHeader, PopoverBody, ListItem, Tooltip ,Center, Stack, Checkbox} from '@chakra-ui/react';
  
     import Logo from '../assets/logo.svg.png'
  import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
  import { RiAccountCircleFill } from 'react-icons/ri';
  import { MdOutlineFavoriteBorder } from 'react-icons/md';
  import { HiOutlineShoppingBag } from 'react-icons/hi';
  import { Link as ReachLink } from "react-router-dom"
  import { useRef } from 'react';
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
  } from 'react-icons/fi';
  import {FaPowerOff} from 'react-icons/fa'
  
  
  export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const initialRef = useRef(null)
    const finalRef = useRef(null)
      return (
        <>
      <Flex zIndex={90} px={2} w={'215px'}
       backgroundColor="white" justifyContent="center" 
         h="full" pos="fixed"  top="70" padding="20px" display={"flex"}  borderRight={"2px solid #E2E8F0"}>
      <Flex  gap={3} flexDir={"column"}  >
      <Flex   justifyContent="center" alignItems={"center"} fontSize="24px">
        DAFTAR KATEGORI
          </Flex>
          <Flex px={2} fontSize="18px">
            GENDER
          </Flex>
          <Stack px={5} spacing={2} direction='column' fontSize="12px">
  <Checkbox colorScheme='cyan' defaultChecked>
    PRIA
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked>
    WANITA
  </Checkbox>
 
</Stack>

<Flex px={2} fontSize="18px">
            BRAND
          </Flex>

          <InputGroup>
        <InputRightElement pointerEvents="none" children={<AiOutlineSearch />}     />
            <Input backgroundColor={'white'} type="tel" placeholder="Search" w="200px" h="35px"/>
            
          </InputGroup>
          <Stack px={5} spacing={2} direction='column' fontSize="10px">
  <Checkbox colorScheme='cyan' defaultChecked >
    CASIO
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked>
    SEIKO
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked>
    TIMEX
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked>
    ALEXANDRE CHRISTIE
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked>
    FOSIL
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked>
    GARMIN
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked>
    ALBA
  </Checkbox>
 
</Stack>

          <Flex flexDir={"column"}  alignItems={'center'} gap={2}>     
          
           
          <Flex w="200px" h="56px"  alignItems={'center'} bgColor="#1E2C3C" borderRadius={"2%"}
          _hover={{
            bg: 'grey',
            color: 'black',
          }} py={2}>
            <Icon as={AiOutlineSearch} color="white" mx={2}/>
            <Link as="b" mx={3}  fontSize={18} color="white" > FILTER</Link>
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
          </Flex>
      </>
    );
  }
  